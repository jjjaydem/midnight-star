"use strict";

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

function createSwipeMotion(image, canStep, stationary) {
  let displacement = 0;
  let animation;

  function reset() {
    animation?.cancel();
    displacement = 0;
    image.style.translate = "";
  }

  function settle(from, opacity, easing) {
    reset();
    if (reducedMotion.matches || stationary?.matches || !from) return;
    animation = image.animate(
      [{ translate: from + "px", opacity }, { translate: "0px", opacity: 1 }],
      { duration: 195, easing }
    );
  }

  return {
    reset,
    drag(start, event) {
      if (reducedMotion.matches || stationary?.matches) return;
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (Math.abs(dx) < 7 || Math.abs(dx) <= Math.abs(dy) * 1.35) {
        displacement = 0;
      } else {
        const limit = Math.min(image.clientWidth * .38, 105);
        const resistance = canStep(dx < 0 ? 1 : -1) ? 1 : .27;
        displacement = Math.max(-limit, Math.min(limit, dx * resistance));
      }
      image.style.translate = displacement + "px";
    },
    release() {
      settle(displacement, 1, "cubic-bezier(.25,.8,.35,1)");
    },
    enter(direction) {
      settle(direction * 34, .58, "cubic-bezier(.18,.78,.31,1)");
    }
  };
}

function swipeCardStep(start, end) {
  const dx = end.clientX - start.x;
  const dy = end.clientY - start.y;
  if (Math.abs(dx) < 45 || Math.abs(dx) <= Math.abs(dy) * 1.35) return 0;
  return dx < 0 ? 1 : -1;
}

function enableCardSwipes(surface, stepCard, motion) {
  const touches = new Set();
  let swipeStart = null;
  surface.addEventListener("pointerdown", event => {
    if (event.pointerType !== "touch") return;
    motion.reset();
    touches.add(event.pointerId);
    swipeStart = touches.size === 1 && !event.target.closest("button")
      ? { id: event.pointerId, x: event.clientX, y: event.clientY }
      : null;
  });
  surface.addEventListener("pointermove", event => {
    if (swipeStart?.id === event.pointerId) motion.drag(swipeStart, event);
  });
  function finishSwipe(event) {
    if (!touches.delete(event.pointerId) || swipeStart?.id !== event.pointerId) return;
    const step = event.type === "pointerup" ? swipeCardStep(swipeStart, event) : 0;
    swipeStart = null;
    if (!step || !stepCard(step, -step)) motion.release();
  }
  surface.addEventListener("pointerup", finishSwipe);
  surface.addEventListener("pointercancel", finishSwipe);
  surface.addEventListener("lostpointercapture", finishSwipe);
}

function enableImageGestures(viewport, image, stepCard, motion) {
  const pointers = new Map();
  const fit = { scale: 1, x: 0, y: 0 };
  let view = fit;
  let gesture = null;

  const point = event => ({ x: event.clientX, y: event.clientY });
  const midpoint = (first, second) => ({
    x: (first.x + second.x) / 2,
    y: (first.y + second.y) / 2
  });
  const distance = (first, second) => Math.hypot(second.x - first.x, second.y - first.y);
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function transformImage(scale, x, y) {
    const limitX = Math.max(0, (image.offsetWidth * scale - viewport.clientWidth) / 2);
    const limitY = Math.max(0, (image.offsetHeight * scale - viewport.clientHeight) / 2);
    view = { scale, x: clamp(x, -limitX, limitX), y: clamp(y, -limitY, limitY) };
    image.style.transform = scale === 1 ? "" : `translate(${view.x}px, ${view.y}px) scale(${scale})`;
  }

  function beginGesture(canSwipe = false) {
    const [first, second] = pointers.values();
    if (!first) {
      gesture = null;
      return;
    }
    if (!second) {
      const mode = view.scale > 1 ? "pan" : canSwipe ? "swipe" : "hold";
      gesture = { mode, start: first, view };
      return;
    }
    const bounds = image.getBoundingClientRect();
    gesture = {
      mode: "pinch",
      start: midpoint(first, second),
      distance: Math.max(1, distance(first, second)),
      origin: {
        x: bounds.left + bounds.width / 2 - view.x,
        y: bounds.top + bounds.height / 2 - view.y
      },
      view
    };
  }

  viewport.addEventListener("pointerdown", event => {
    if (event.pointerType !== "touch") return;
    motion.reset();
    pointers.set(event.pointerId, point(event));
    viewport.setPointerCapture(event.pointerId);
    beginGesture(pointers.size === 1);
  });

  viewport.addEventListener("pointermove", event => {
    if (!pointers.has(event.pointerId)) return;
    const current = point(event);
    pointers.set(event.pointerId, current);
    const { mode, start, view: initial } = gesture;
    if (mode === "swipe") motion.drag(start, event);
    if (mode === "pan") {
      transformImage(initial.scale, initial.x + current.x - start.x, initial.y + current.y - start.y);
    }
    if (mode === "pinch") {
      const [first, second] = pointers.values();
      const center = midpoint(first, second);
      const scale = clamp(initial.scale * distance(first, second) / gesture.distance, 1, 4);
      const ratio = scale / initial.scale;
      const { x, y } = gesture.origin;
      transformImage(scale,
        center.x - x - (start.x - x - initial.x) * ratio,
        center.y - y - (start.y - y - initial.y) * ratio);
    }
  });

  function finishGesture(event) {
    if (!pointers.delete(event.pointerId)) return;
    const finished = gesture;
    beginGesture();
    if (finished.mode !== "swipe") return;
    const step = event.type === "pointerup" ? swipeCardStep(finished.start, event) : 0;
    if (!step || !stepCard(step, -step)) motion.release();
  }

  viewport.addEventListener("pointerup", finishGesture);
  viewport.addEventListener("pointercancel", finishGesture);
  viewport.addEventListener("lostpointercapture", finishGesture);

  function reset() {
    motion.reset();
    pointers.clear();
    gesture = null;
    view = fit;
    image.style.transform = "";
  }

  window.addEventListener("resize", reset);
  return reset;
}
