const CACHE_NAME = 'fl-expert-comptable-v1';

// Les ressources à mettre en cache pour le fonctionnement hors ligne
const urlsToCache = [
  '/',
  '/expertise-comptable',
  '/professions-liberales',
  '/gestion-de-patrimoine',
  '/solutions-sur-mesure',
  '/cabinet/presentation',
  '/rendez-vous',
  '/manifest.json',
  '/favicon/web-app-manifest-192x192.png',
  '/favicon/web-app-manifest-512x512.png',
  '/images/franck.webp',
  '/videos/248704680-4k-time-lapse-blooming-dahlia-_H264HD1080.mp4'
];

// Installation du service worker et mise en cache des ressources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation du service worker et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// Stratégie de cache : "Cache first, falling back to network"
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourne la ressource mise en cache si disponible
        if (response) {
          return response;
        }
        
        // Sinon, on fait la requête au réseau
        return fetch(event.request).then(
          (networkResponse) => {
            // Si la requête échoue ou n'est pas valide, on retourne simplement la réponse
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // On clone la réponse car elle ne peut être utilisée qu'une fois
            const responseToCache = networkResponse.clone();
            
            // On met en cache la nouvelle ressource
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
              
            return networkResponse;
          }
        );
      })
  );
});

// Gestion des mises à jour du service worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});