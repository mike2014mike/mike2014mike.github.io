---
layout:     post
title:      Progressive Web App (PWA)
date:       2018-07-25 10:37:19
author:     Mike Chen
summary:    
categories: Work
thumbnail:  code
tags:
 - JavaScript
 - PWA
---


## Progressive Web App (PWA)

> Progressive Web Apps 是結合了 web 和 原生應用中最好功能的一種體驗。可以像原生應用那樣添加至主屏，能夠有全屏瀏覽的體驗。

## PWA參考
* [你的首個 Progressive Web App](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/)
* [PWA 替身術](https://jonny-huang.github.io/angular/training/20_pwa2/)
* [Jekyll on github pages and service workers](https://hackernoon.com/jekyll-on-github-pages-and-service-workers-progressive-web-apps-and-offline-mode-for-your-blog-b1cf9e87a6d1)

> 下面是本站PWA的作法

## index.html加入

```javascript
// 註冊 service worker
    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('service-worker.js')
		console.log('註冊 service worker');
    }
```


## service-worker.js

```javascript
importScripts('./cache-polyfill.js');

var cacheName = 'mikeBlog-v1';

//要cache的清單
var files = [
    './',
    './index.html?utm=homescreen',
    './js/jekyll-search.js',
    './js/jquery.mmenu.min.all.js',
    './css/style.css',
    './css/highlightjs.piperita.css',
    './css/jquery.mmenu.all.css',
    './images/wechat-sql-n.png',
    './favicon/android-chrome-192x192.png',
    './manifest.json',
    './search.json',
    './404.html',
    './experience.html',
    './posts.html',
    './post-by-categories.html',
    './search.html',
];

//install
self.addEventListener('install', (event) => {
    console.info('Event: Install');

    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll(files)
                    .then(() => {
                        console.info('All files are cached');
                        return self.skipWaiting();
                    })
                    .catch((error) => {
                        console.error('Failed to cache', error);
                    })
            })
    );
});


//fetch
self.addEventListener('fetch', (event) => {
    console.info('Event: Fetch');

    var request = event.request;
    
    event.respondWith(
        caches.match(request).then((response) => {
            if (response) {
                return response;
            }
            
            return fetch(request).then((response) => {
                var responseToCache = response.clone();
                caches.open(cacheName).then((cache) => {
                    cache.put(request, responseToCache).catch((err) => {
                        console.warn(request.url + ': ' + err.message);
                    });
                });

                return response;
            });
        })
    );
});


//activate
self.addEventListener('activate', (event) => {
    console.info('Event: Activate');
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        })
            .then(function () {
                console.info("Old caches are cleared!");                
                return self.clients.claim();
            })
    );
});


//push
self.addEventListener('push', (event) => {
    console.info('Event: Push');

    var title = 'Push notification demo';
    var body = {
        'body': 'click to return to application',
        'tag': 'demo',
        'icon': './favicons/apple-touch-icon.png',
        'badge': './favicons/apple-touch-icon.png',
        //Custom actions buttons
        'actions': [
            { 'action': 'yes', 'title': 'I ♥ this app!' },
            { 'action': 'no', 'title': 'I don\'t like this app' }
        ]
    };

    event.waitUntil(self.registration.showNotification(title, body));
});

//sync
self.addEventListener('sync', (event) => {
    console.info('Event: Sync');

    if (event.tag === 'github' || event.tag === 'test-tag-from-devtools') {
        event.waitUntil(
            self.clients.matchAll().then((all) => {
                return all.map((client) => {
                    return client.postMessage('online'); 
                })
            })
                .catch((error) => {
                    console.error(error);
                })
        );
    }
});


//notification
self.addEventListener('notificationclick', (event) => {
    var url = 'https://demopwa.in/';

    if (event.action === 'yes') {
        console.log('I ♥ this app!');
    }
    else if (event.action === 'no') {
        console.warn('I don\'t like this app');
    }

    event.notification.close(); 

    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
            .then((clients) => {
                for (var i = 0; i < clients.length; i++) {
                    var client = clients[i];
                    if (client.url === url && 'focus' in client) {
                        return client.focus();
                    }
                }

                if (clients.openWindow) {
                    return clients.openWindow('/');
                }
            })
            .catch((error) => {
                console.error(error);
            })
    );
});

```


## cache-polyfill.js

```javascript
/*
  Source: https://github.com/coonsta/cache-polyfill
  Author: https://github.com/coonsta
*/

if (!Cache.prototype.add) {
  Cache.prototype.add = function add(request) {
    return this.addAll([request]);
  };
}

if (!Cache.prototype.addAll) {
  Cache.prototype.addAll = function addAll(requests) {
    var cache = this;

    // Since DOMExceptions are not constructable:
    function NetworkError(message) {
      this.name = 'NetworkError';
      this.code = 19;
      this.message = message;
    }
    NetworkError.prototype = Object.create(Error.prototype);

    return Promise.resolve().then(function() {
      if (arguments.length < 1) throw new TypeError();

      // Simulate sequence<(Request or USVString)> binding:
      var sequence = [];

      requests = requests.map(function(request) {
        if (request instanceof Request) {
          return request;
        }
        else {
          return String(request); // may throw TypeError
        }
      });

      return Promise.all(
        requests.map(function(request) {
          if (typeof request === 'string') {
            request = new Request(request);
          }

          var scheme = new URL(request.url).protocol;

          if (scheme !== 'http:' && scheme !== 'https:') {
            throw new NetworkError("Invalid scheme");
          }

          return fetch(request.clone());
        })
      );
    }).then(function(responses) {
      // TODO: check that requests don't overwrite one another
      // (don't think this is possible to polyfill due to opaque responses)
      return Promise.all(
        responses.map(function(response, i) {
          return cache.put(requests[i], response);
        })
      );
    }).then(function() {
      return undefined;
    });
  };
}

if (!CacheStorage.prototype.match) {
  // This is probably vulnerable to race conditions (removing caches etc)
  CacheStorage.prototype.match = function match(request, opts) {
    var caches = this;

    return this.keys().then(function(cacheNames) {
      var match;

      return cacheNames.reduce(function(chain, cacheName) {
        return chain.then(function() {
          return match || caches.open(cacheName).then(function(cache) {
            return cache.match(request, opts);
          }).then(function(response) {
            match = response;
            return match;
          });
        });
      }, Promise.resolve());
    });
  };
}


```

## manifest.json

```json
{
  "name": "麥克的筆記本",
  "short_name": "麥克的筆記本",
  "icons": [
    {
      "src": "favicons/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "start_url": "./index.html?utm_source=homescreen",
  "background_color": "#000",
  "theme_color": "#536878",
  "display": "standalone",
  "orientation": "portrait",
  "author": {
    "name": "Mike Chen",
    "website": "https://mike2014mike.github.io",
    "github": "https://github.com/mike2014mike",
    "source-repo": ""
  }
}
```

> 注意：如有更新文章， service-worker.js 中的 cacheName 也要變更，不然使用者都只會看到舊文章。