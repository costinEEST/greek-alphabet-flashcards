// Service Worker for Greek Alphabet Flashcards PWA

// Workbox will inject the precache manifest here during build
const manifest = self.__WB_MANIFEST || [];
const CACHE_NAME = "greek-alphabet-flashcards-v1";

// Development fallback URLs when manifest is empty
const fallbackUrls = [
  "/",
  "/index.html",
  "/script.js",
  "/styles.css",
  "/favicon.ico",
  "/favicon.svg",
  "/icon-192.png",
  "/icon-512.png",
];

// Use manifest URLs if available (production), otherwise use fallback URLs (development)
const urlsToCache =
  manifest.length > 0
    ? manifest.map((entry) => entry.url || entry)
    : fallbackUrls;

// Install event - cache all files from manifest
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: Caching files from manifest");
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Service Worker: Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request).then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
      .catch(() => {
        // Return cached index.html for navigation requests when offline
        if (event.request.destination === "document") {
          return caches.match("/");
        }
      })
  );
});

// Background sync for future enhancements
self.addEventListener("sync", (event) => {
  console.log("Service Worker: Background sync:", event.tag);
  // Future: Handle background sync for progress tracking
});

// Push notifications for future enhancements
self.addEventListener("push", (event) => {
  console.log("Service Worker: Push received");
  // Future: Handle push notifications for study reminders
});

// Message handling for communication with main thread
self.addEventListener("message", (event) => {
  console.log("Service Worker: Message received:", event.data);

  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data && event.data.type === "GET_VERSION") {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
