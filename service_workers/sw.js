var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'web_workers/doWork.js',
  'web_workers/doWork2.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});