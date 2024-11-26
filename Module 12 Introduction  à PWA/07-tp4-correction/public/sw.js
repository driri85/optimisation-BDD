// importScripts("./js/umd.js");
// importScripts("./js/idb.js");

// SETUP CACHE //

const cacheName = "vip_cocktail-";
const cacheVersion = "2";
const assets = [
	"/",
	"manifest.json",
	"/index.html",
	"/js/app.js",
	"/js/umd.js",
	"/js/idb.js",
	"/js/db.js",
	"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
];

// INSTALL => CACHE ASSETS //

self.addEventListener("install", async (event) => {
	const caacheAssets = async () => {
		const cache = await caches.open(cacheName + cacheVersion);

		for (let asset of assets) {
			cache.add(asset);
		}
	};

	event.waitUntil(caacheAssets());
});

// ACTIVATE => DELETE OLD CACHE //

self.addEventListener("activate", (event) => {
	const deleteCache = async (key) => {
		await caches.delete(key);
	};

	const deleteOldCaches = async () => {
		const keyList = await caches.keys();
		const cachesToDelete = keyList.filter((key) => {
			if (
				key.includes(cacheName) &&
				key.replace(cacheName, "") !== cacheVersion
			)
				return key;
		});

		await Promise.all(cachesToDelete.map(deleteCache));
	};

	event.waitUntil(deleteOldCaches());
});

// CATCH FETCH - ASSETS //

self.addEventListener("fetch", async (event) => {
	const fetchInterception = async () => {
		const cachedResponse = await caches.match(event.request);

		if (cachedResponse) {
			console.log("Coming from cache : ", event.request.url);
			return cachedResponse;
		} else {
			return fetch(event.request);
		}
	};

	event.respondWith(fetchInterception());
});

// SYNC EVENT - SEND MESSAGE TO APP === RUN WAITING OPERATIONS //

self.addEventListener("sync", async (event) => {
	console.log("sync event : ", event);

	const clients = await self.clients.matchAll();
	clients.forEach((client) => {
		client.postMessage("onLine");
	});
});
