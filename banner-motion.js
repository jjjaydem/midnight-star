"use strict";

(() => {
  const hero = document.querySelector(".hero");
  const art = hero.querySelector(".hero-art");
  const snow = art.querySelector(".banner-snow");
  const motion = matchMedia("(prefers-reduced-motion: no-preference)");

  function addSnow() {
    const flakes = document.createDocumentFragment();

    for (let index = 0; index < 64; index += 1) {
      const flake = document.createElement("span");
      const depth = Math.random();
      const duration = 16 - 8 * depth + 2 * Math.random();

      flake.className = "banner-flake";
      flake.style.left = `${Math.random() * 105}%`;
      flake.style.setProperty("--flake-size", `${1.2 + 3.2 * depth}px`);
      flake.style.setProperty("--flake-opacity", .30 + .60 * depth);
      flake.style.setProperty("--flake-blur", `${.1 + .55 * depth}px`);
      flake.style.setProperty("--flake-drift", `${-62 + Math.random() * 82}px`);
      flake.style.setProperty("--fall-duration", `${duration}s`);
      flake.style.setProperty("--fall-delay", `${-Math.random() * duration}s`);
      flakes.append(flake);
    }

    snow.append(flakes);
  }

  function syncMotion() {
    if (motion.matches && !snow.hasChildNodes()) addSnow();
    hero.toggleAttribute("data-banner-motion", motion.matches);
  }

  if ("IntersectionObserver" in window) {
    const visibility = new IntersectionObserver(([entry]) => {
      art.toggleAttribute("data-offscreen", !entry.isIntersecting);
    });
    visibility.observe(art);
  }

  motion.addEventListener("change", syncMotion);
  syncMotion();
})();
