const CACHE_NAME = "arcakids-v11";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=11",
  "./app.js?v=11",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  "./assets/arcakids-logo.svg",
  "./assets/ark-scene-wide.svg",
  "./assets/ark-hero.svg",
  "./assets/david.svg",
  "./assets/elephant.svg",
  "./assets/frog.svg",
  "./assets/lion.svg",
  "./assets/noah.svg",
  "./assets/rooster.svg",
  "./assets/sheep.svg",
  "./assets/sheep-animal.svg",
  "./assets/guide-sheep.svg",
  "./assets/star-badge.svg",
  "./assets/turtle.svg",
  "./assets/story-noah-build.svg",
  "./assets/story-family.svg",
  "./assets/story-animals-enter.svg",
  "./assets/story-rainbow.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const shouldRefresh =
    event.request.mode === "navigate" ||
    ["document", "script", "style"].includes(event.request.destination);
  if (shouldRefresh) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
