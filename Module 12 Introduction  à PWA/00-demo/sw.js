const cacheName = "Demo-1";
//const cacheName = "Demo-2";

// définir les fichiers à mettre en cache
const assets =[
    "/",
    "manifest.json",
    "/js/app.js",
    "/index.html",
    //"css/style.css",
    "/images/concombre.jpg",
];

// pendant l instalation du service worker 
// declare notre cache

// function affiche async() {
//     console.log('hello');
// }
const affiche = async()=>{
    console.log('hello');
}

self.addEventListener('install', async(event) =>{
     const mettreEnCache = async()=>{
        // je viens cherche l objet cache
        //const cache = await caches.open('Demo-1');
        const cache = await caches.open(cacheName);

        // mettre en cache
        //cache.addAll(assets);
        for ( let a of assets){
            cache.add(a);
        }
    }
    event.waitUntil(mettreEnCache());
});
// -----------------------------------------------
// Activation Service worker
// -----------------------------------------------

self.addEventListener ('activate', async (event)=>{
    const effacerCache = async (nom)=>{
        await caches.delete(nom);
        console.log(nom)
    }
    const effacerTousLesCaches= async()=>{
        
        const liste = await caches.keys();
        const cachesToDelete = liste.filter( nom => nom !=cacheName);
        await Promise.all(cachesToDelete.map(effacerCache));
    }
    event.waitUntil(effacerTousLesCaches());
})
// -----------------------------------------------
// interception
// -----------------------------------------------
self.addEventListener ('fetch', async (event)=>{
    const interception = async ()=>{
        //est ce que c'est dans le cache  ?
        const cacheResponse = await caches.match(event.request);
        if (cacheResponse){
            console.log('ce fichier est ds le cache !',event.request);
            return cacheResponse;
        }else{
            try{
                return fetch(event.request);
            }catch{

            }
           
        }
    }
    event.respondWith(interception())
});