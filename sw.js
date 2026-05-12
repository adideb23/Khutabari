self.addEventListener('fetch', (event) => {
  // Network se fresh data load karne ke liye
  event.respondWith(fetch(event.request));
});
