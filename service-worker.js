const arraylist = ['/']

self.addEventListener('install', (event)=> {
  console.log('install');
  event.waitUntil(
    caches.open('cache-1').
    then((cache) => {
      cache.addAll[arraylist].then().self.skippWaiting()
    })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil{
    caches.keys().then((cachenames) => {
      return Promise.all(
        cachenames.map((cachename) => {
          if (cachename != 'cache-1') {
            return caches.delete(cachename)
          }
        })
      )
    })
  }
})