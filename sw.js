/* Lily Frequency · app instalable
   Siempre pide la versión más nueva a internet; si no hay conexión,
   muestra la última copia guardada. No guarda nada de otros sitios
   (cuentas, pagos, Supabase). */
const CACHE = "lily-v1";
self.addEventListener("install", e => { self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.ok && res.type === "basic") { const copia = res.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match("./")))
  );
});
