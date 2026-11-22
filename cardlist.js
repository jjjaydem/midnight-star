"use strict";
const rarities = {
  C: { name: "Common", color: "#8dd7ff" },
  U: { name: "Uncommon", color: "#9de6c3" },
  R: { name: "Rare", color: "#95baff" },
  SR: { name: "Super Rare", color: "#cec0f8" },
  SEC: { name: "Secret Rare", color: "#e8c993" },
  G: { name: "Guest", color: "#f8adb8" }
};
const element = id => document.getElementById(id);
const search = element("card-search");
const filters = element("filters");
const results = element("results");
const catalogTitle = element("catalog-title");
const catalogHeader = catalogTitle.parentElement;
const galleryPager = element("gallery-pager");
const pageNumbers = element("gallery-page-numbers");
const previousPage = element("previous-page");
const nextPage = element("next-page");
const detail = element("card-detail");
const detailBody = detail.querySelector(".detail");
const cardImage = element("card-art");
const cardArt = cardImage.parentElement;
const navigationArrows = document.querySelectorAll("[data-card-step]");
const viewFullImage = element("view-full-image");
const imageDialog = element("full-image-dialog");
const fullCardImage = element("full-card-art");
const fullImageArt = fullCardImage.parentElement;
const empty = element("empty");
const imageFolder = "assets/cards/";
const mouseHover = matchMedia("(hover: hover) and (pointer: fine)");
const touchScreen = matchMedia("(pointer: coarse)");
const compactDetails = matchMedia(
  "(max-width: 680px), (max-width: 959px) and (max-height: 520px) and (orientation: landscape) and (pointer: coarse)"
);
const mobileSizingRegions = [
  [".detail-main", ".mobile-title-sizing"],
  [".detail-facts", ".mobile-facts-sizing"]
].map(selectors => selectors.map(selector => detailBody.querySelector(selector)));
let cardsPerPage = galleryPageSize();
let selectedTier = "";
let matchingCards = [];
let galleryPage = 0;
let activeCardIndex = -1;
let activeArtwork = null;
let openedFrom = null;
let lockedScrollY = null;

function normalize(value) {
  return value.normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}\p{M}]/gu, "");
}

function cardCode(query) {
  const match = /^(?:ow)?(sec|sr|c|u|r|g)([0-9]{1,2})$/.exec(query);
  return match ? match[1] + match[2].padStart(2, "0") : "";
}

for (const card of cards) {
  card.codeKey = normalize(card.id).slice(2);
  card.keys = [normalize(card.id), normalize(card.en), normalize(card.th)];
}

function node(tag, classes, copy) {
  const el = document.createElement(tag);
  if (classes) el.className = classes;
  if (copy !== undefined) el.textContent = copy;
  return el;
}

function addFilters() {
  for (const [code, info] of [["", { name: "All" }], ...Object.entries(rarities)]) {
    const button = node("button", "filter");
    button.type = "button";
    button.dataset.tier = code;
    if (code) {
      button.style.setProperty("--accent", info.color);
      const star = node("span", "star");
      star.setAttribute("aria-hidden", "true");
      button.append(star);
    }
    button.append(node("span", "long", code ? code + " · " + info.name : info.name));
    const short = node("span", "short", code || info.name);
    short.setAttribute("aria-hidden", "true");
    button.append(short);
    const count = code ? cards.filter(card => card.tier === code).length : cards.length;
    button.append(node("span", "count", String(count)));
    button.setAttribute("aria-label", info.name + ", " + count + " cards");
    filters.append(button);
  }
}

function thumbnailUrl(card) {
  return "assets/thumbnails/" + card.id + ".webp";
}

function resultTile(card) {
  const li = node("li");
  const button = node("button", "result");
  button.type = "button";
  button.dataset.id = card.id;
  button.dataset.tier = card.tier;
  button.setAttribute("aria-haspopup", "dialog");
  button.style.setProperty("--accent", rarities[card.tier].color);
  const picture = node("img");
  picture.alt = "";
  picture.loading = "lazy";
  picture.decoding = "async";
  picture.src = thumbnailUrl(card);
  picture.width = 791;
  picture.height = 1169;
  const artwork = node("span", "tile-art");
  artwork.append(picture);
  const meta = node("span", "result-code", card.id);
  const badge = node("span", "result-tier", card.tier);
  badge.setAttribute("aria-label", rarities[card.tier].name);
  meta.append(badge);
  button.append(artwork, meta, node("span", "result-name", card.en));
  li.append(button);
  return li;
}

function detailText(card) {
  return {
    "card-rarity": card.tier + " / " + rarities[card.tier].name,
    "card-code": card.id,
    "card-title": card.en,
    "card-title-th": card.th,
    story: card.story,
    "wish-th": card.wishTh
  };
}

function sizeMobileDetails() {
  const textVariants = compactDetails.matches ? matchingCards.map(detailText) : [];
  for (const [section, sizingRegion] of mobileSizingRegions) {
    const copies = textVariants.map(text => {
      const copy = section.cloneNode(true);
      for (const field of copy.querySelectorAll("[id]")) {
        if (field.id in text) field.textContent = text[field.id];
        field.removeAttribute("id");
      }
      return copy;
    });
    sizingRegion.replaceChildren(...copies);
  }
}

function showArtwork(image, artwork) {
  image.alt = artwork.alt;
  image.src = artwork.fullSrc || artwork.previewSrc;
}

async function loadArtwork(card) {
  const artwork = {
    alt: card.en + " (" + card.id + ")",
    previewSrc: thumbnailUrl(card),
    fullSrc: ""
  };
  activeArtwork = artwork;
  showArtwork(cardImage, artwork);
  if (imageDialog.open) updateFullImage();

  const full = new Image();
  full.src = imageFolder + encodeURIComponent(card.image);
  try {
    await full.decode();
  } catch {
    return; // Keep the preview available if the full image fails to load.
  }

  if (activeArtwork !== artwork) return;
  artwork.fullSrc = full.src;
  showArtwork(cardImage, artwork);
  if (imageDialog.open) showArtwork(fullCardImage, artwork);
}

function showDetails(index) {
  const card = matchingCards[index];
  activeCardIndex = index;
  const rarity = rarities[card.tier];
  detail.dataset.tier = card.tier;
  imageDialog.dataset.tier = card.tier;
  detail.style.setProperty("--accent", rarity.color);
  imageDialog.style.setProperty("--accent", rarity.color);
  for (const [id, text] of Object.entries(detailText(card))) element(id).textContent = text;
  loadArtwork(card);
  const position = index + 1;
  const counter = position + " / " + matchingCards.length;
  const announcement = "Card " + position + " of " + matchingCards.length + ": " + card.en;
  element("card-position").textContent = counter;
  element("full-image-position").textContent = counter;
  element("card-position-announcement").textContent = announcement;
  element("full-image-announcement").textContent = announcement;
  for (const button of navigationArrows) {
    const adjacentIndex = index + Number(button.dataset.cardStep);
    button.setAttribute("aria-disabled", String(adjacentIndex < 0 || adjacentIndex >= matchingCards.length));
  }
}

function canStepCard(offset) {
  const index = activeCardIndex + offset;
  return detail.open && index >= 0 && index < matchingCards.length;
}

const detailMotion = createSwipeMotion(cardImage, canStepCard, compactDetails);
const fullImageMotion = createSwipeMotion(fullCardImage, canStepCard);
const resetFullImageView = enableImageGestures(fullImageArt, fullCardImage, stepCard, fullImageMotion);
enableCardSwipes(detailBody, stepCard, detailMotion);
compactDetails.addEventListener("change", () => {
  if (!detail.open) return;
  detailMotion.reset();
  sizeMobileDetails();
});

function clearPopupFoil(artwork) {
  artwork.querySelector(".popup-foil")?.remove();
}

async function playPopupFoil(image, direction = 0) {
  const artwork = image.parentElement;
  clearPopupFoil(artwork);
  if (reducedMotion.matches) return;

  const foil = node("span", "popup-foil");
  foil.setAttribute("aria-hidden", "true");
  artwork.append(foil);
  const previewSource = image.src;
  try {
    await image.decode().catch(error => {
      if (!foil.isConnected || image.src === previewSource) throw error;
      return image.decode();
    });
  } catch {
    foil.remove();
    return;
  }
  if (!foil.isConnected || reducedMotion.matches) {
    foil.remove();
    return;
  }

  foil.style.left = image.offsetLeft + "px";
  foil.style.top = image.offsetTop + "px";
  foil.style.width = image.offsetWidth + "px";
  foil.style.height = image.offsetHeight + "px";
  if (direction) foil.style.setProperty("--popup-foil-delay", "65ms");
  if (direction > 0) foil.classList.add("sweep-right");
  foil.addEventListener("animationend", () => foil.remove(), { once: true });
  foil.addEventListener("animationcancel", () => foil.remove(), { once: true });
  foil.classList.add("is-sweeping");
}

detailBody.addEventListener("pointerdown", () => clearPopupFoil(cardArt));
fullImageArt.addEventListener("pointerdown", () => clearPopupFoil(fullImageArt));

function stepCard(offset, foilDirection = offset) {
  if (!canStepCard(offset)) return false;
  showDetails(activeCardIndex + offset);
  if (imageDialog.open) {
    fullImageMotion.enter(offset);
    playPopupFoil(fullCardImage, foilDirection);
  } else {
    detailMotion.enter(offset);
    playPopupFoil(cardImage, foilDirection);
    if (!reducedMotion.matches) {
      for (const section of detailBody.querySelectorAll(".detail-main, .detail-facts")) {
        section.getAnimations().forEach(animation => animation.cancel());
        section.animate([{ opacity: .6 }, { opacity: 1 }], { duration: 175, easing: "ease-out" });
      }
    }
  }
  return true;
}

function galleryPageSize() {
  const columns = Number(getComputedStyle(results).getPropertyValue("--gallery-columns"));
  return columns ? columns * 3 : 16;
}

function animateGalleryPage() {
  if (reducedMotion.matches) return;
  const columns = Number(getComputedStyle(results).getPropertyValue("--gallery-columns"));
  if (!columns || !mouseHover.matches) {
    results.animate([{ opacity: .58 }, { opacity: 1 }], { duration: 170, easing: "ease-out" });
    return;
  }
  [...results.children].forEach((card, index) => {
    card.animate(
      [{ opacity: .35, translate: "0 7px" }, { opacity: 1, translate: "0 0" }],
      { duration: 165, delay: Math.floor(index / columns) * 32, easing: "ease-out", fill: "backwards" }
    );
  });
}

function renderGalleryPage() {
  const pageCount = Math.ceil(matchingCards.length / cardsPerPage);
  const start = galleryPage * cardsPerPage;
  results.replaceChildren(...matchingCards.slice(start, start + cardsPerPage).map(resultTile));
  galleryPager.hidden = pageCount < 2;
  previousPage.setAttribute("aria-disabled", String(galleryPage === 0));
  nextPage.setAttribute("aria-disabled", String(galleryPage >= pageCount - 1));

  const numbers = document.createDocumentFragment();
  for (let page = 0; page < pageCount; page++) {
    const button = node("button", "dialog-button page-number", String(page + 1));
    button.type = "button";
    button.dataset.galleryPage = page;
    button.setAttribute("aria-label", "Page " + (page + 1) + " of " + pageCount);
    button.setAttribute("aria-controls", "results");
    if (page === galleryPage) button.setAttribute("aria-current", "page");
    numbers.append(button);
  }
  pageNumbers.replaceChildren(numbers);
}

function updateResults({ directCode = false } = {}) {
  const query = normalize(search.value);
  const key = cardCode(query);
  const direct = key ? cards.find(card => card.codeKey === key) : null;
  if (directCode && direct && selectedTier && direct.tier !== selectedTier) selectedTier = "";
  matchingCards = cards.filter(card =>
    (!selectedTier || selectedTier === card.tier) &&
    (key ? card.codeKey === key : !query || card.keys.some(value => value.includes(query)))
  );

  for (const button of filters.children) {
    button.setAttribute("aria-pressed", String(button.dataset.tier === selectedTier));
  }
  catalogTitle.textContent = selectedTier ? rarities[selectedTier].name : "All Cards";
  element("result-count").textContent = matchingCards.length + (matchingCards.length === 1 ? " card" : " cards");
  galleryPage = 0;
  renderGalleryPage();
  results.hidden = !matchingCards.length;
  empty.hidden = !!matchingCards.length;
}

galleryPager.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button || button.getAttribute("aria-disabled") === "true") return;
  const page = button.hasAttribute("data-page-step")
    ? galleryPage + Number(button.dataset.pageStep)
    : Number(button.dataset.galleryPage);
  if (page === galleryPage) return;
  galleryPage = page;
  renderGalleryPage();
  catalogTitle.focus({ preventScroll: true });
  catalogHeader.scrollIntoView({ block: "start" });
  animateGalleryPage();
});

window.addEventListener("resize", () => {
  clearPopupFoil(cardArt);
  clearPopupFoil(fullImageArt);
  const pageSize = galleryPageSize();
  if (pageSize === cardsPerPage) return;
  galleryPage = Math.floor(galleryPage * cardsPerPage / pageSize);
  cardsPerPage = pageSize;
  renderGalleryPage();
});

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-tier]");
  if (!button) return;
  selectedTier = button.dataset.tier;
  updateResults();
});

search.addEventListener("input", () => updateResults({ directCode: true }));
element("search-form").addEventListener("submit", event => {
  event.preventDefault();
  updateResults({ directCode: true });
});

function aimFoil(button, event) {
  const artwork = button.querySelector(".tile-art");
  const bounds = artwork.getBoundingClientRect();
  const position = (value, start, size) => Math.max(0, Math.min(100, (value - start) / Math.max(1, size) * 100)) + "%";
  artwork.style.setProperty("--foil-x", position(event.clientX, bounds.left, bounds.width));
  artwork.style.setProperty("--foil-y", position(event.clientY, bounds.top, bounds.height));
}

results.addEventListener("pointermove", event => {
  if (!mouseHover.matches || reducedMotion.matches || event.pointerType !== "mouse") return;
  const button = event.target.closest(".result");
  if (button) aimFoil(button, event);
});

function lockPageScroll() {
  if (!touchScreen.matches || lockedScrollY !== null) return;
  lockedScrollY = window.scrollY;
  document.body.style.setProperty("--card-scroll-top", -lockedScrollY + "px");
  document.documentElement.classList.add("card-scroll-locked");
}

function restorePageScroll() {
  if (lockedScrollY === null) return;
  document.documentElement.classList.remove("card-scroll-locked");
  document.body.style.removeProperty("--card-scroll-top");
  window.scrollTo(0, lockedScrollY);
  lockedScrollY = null;
}

function openCard(button) {
  if (!button.isConnected || detail.open) return;
  openedFrom = button;
  sizeMobileDetails();
  showDetails(matchingCards.findIndex(card => card.id === button.dataset.id));
  lockPageScroll();
  detail.showModal();
  detailBody.scrollTop = 0;
  playPopupFoil(cardImage);
}

results.addEventListener("pointerdown", event => {
  if (event.pointerType === "touch" && !reducedMotion.matches) {
    event.target.closest(".result")?.classList.add("is-pressed");
  }
});
for (const type of ["pointerup", "pointercancel"]) {
  results.addEventListener(type, event => event.target.closest(".result")?.classList.remove("is-pressed"));
}

results.addEventListener("click", event => {
  const button = event.target.closest("button[data-id]");
  if (button) openCard(button);
});

for (const button of navigationArrows) {
  button.addEventListener("click", () => stepCard(Number(button.dataset.cardStep)));
}

function updateFullImage() {
  resetFullImageView();
  showArtwork(fullCardImage, activeArtwork);
}

viewFullImage.addEventListener("click", () => {
  clearPopupFoil(cardArt);
  updateFullImage();
  imageDialog.showModal();
  playPopupFoil(fullCardImage);
});
imageDialog.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  event.preventDefault();
  imageDialog.close();
});
imageDialog.addEventListener("close", () => {
  if (imageDialog.open) return;
  clearPopupFoil(fullImageArt);
  resetFullImageView();
  fullCardImage.removeAttribute("src");
  if (detail.open) viewFullImage.focus({ preventScroll: true });
});

for (const dialog of [detail, imageDialog]) {
  dialog.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      stepCard(event.key === "ArrowLeft" ? -1 : 1);
    }
  });

  let pointerStartedOnBackdrop = false;
  dialog.addEventListener("pointerdown", event => {
    pointerStartedOnBackdrop = event.target === dialog;
  });
  dialog.addEventListener("click", event => {
    if (event.target === dialog && pointerStartedOnBackdrop) dialog.close();
    pointerStartedOnBackdrop = false;
  });
}
detail.addEventListener("close", () => {
  if (detail.open) return;
  if (imageDialog.open) imageDialog.close();
  clearPopupFoil(cardArt);
  detailMotion.reset();
  for (const [, sizingRegion] of mobileSizingRegions) sizingRegion.replaceChildren();
  cardImage.removeAttribute("src");
  activeArtwork = null;
  activeCardIndex = -1;
  restorePageScroll();
  if (openedFrom) {
    const returnTarget = openedFrom.isConnected ? openedFrom : catalogTitle;
    returnTarget.focus({ preventScroll: true });
  }
  openedFrom = null;
});

element("reset").addEventListener("click", () => {
  search.value = "";
  selectedTier = "";
  updateResults();
  search.focus();
});

addFilters();
updateResults();
