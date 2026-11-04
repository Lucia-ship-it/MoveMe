// MoveMe offline support.
// Always tries the internet first (so updates arrive right away),
// falls back to the saved copy when offline.
const CACHE = "moveme-v2";
const FILES = ["./", "./MoveMe.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
    self.skipWaiting();
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", e => {
    if(e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
    e.respondWith(
        fetch(e.request)
            .then(res => {
                const copy = res.clone();
                caches.open(CACHE).then(c => c.put(e.request, copy));
                return res;
            })
            .catch(() => caches.match(e.request, { ignoreSearch: true })
                .then(hit => hit || caches.match("./MoveMe.html")))
    );
});

// Clicking a notification (or its button) brings MoveMe to front
// and tells it what was clicked: "break", "snooze" or "" (the notification itself)
self.addEventListener("notificationclick", e => {
    e.notification.close();
    const action = e.action || (e.notification.tag === "break" ? "break" : "");
    e.waitUntil(
        self.clients.matchAll({ type: "window" }).then(list => {
            if(!list.length) return self.clients.openWindow("./MoveMe.html");
            list[0].postMessage({ type: "notification", action: action });
            // "+5 min" doesn't need to open the window
            if(action !== "snooze") return list[0].focus();
        })
    );
});
