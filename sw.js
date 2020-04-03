/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2a079c4b28aa904d1964.js"
  },
  {
    "url": "styles.e691cdcde8291515db55.css"
  },
  {
    "url": "styles-36681512479a843831b0.js"
  },
  {
    "url": "app-8e67c3fab75696a168ff.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "042ab7bb691980147debac1eb9f53150"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6.woff2",
    "revision": "2ecb426f85ffc1c53b677556210e629f"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKreRhf6.woff2",
    "revision": "b39aa336eef260975654fde0959de6fe"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeRhf6.woff2",
    "revision": "5a2c789b59571ce97f51f9c75600f49b"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6.woff2",
    "revision": "d8bc03a60729f4b05b42e057e21eaed3"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9C4kDNxMZdWfMOD5Vn9LjJYTI.woff2",
    "revision": "d67acf5dba25b4f92e3eadad20032199"
  },
  {
    "url": "google-fonts/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jL.woff2",
    "revision": "78773521b0ffe376bc7edd8ec2a591fb"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
    "revision": "e535f7856b24153e0f3146e8f90a45c5"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    "revision": "e8794816c5eaeaa9dd20a6d77ea3b272"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
    "revision": "aa4405ed937295296cf8510f437628e0"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
    "revision": "61e2d96d01a7eba5ea3ec1bad7e736a8"
  },
  {
    "url": "google-fonts/s/poppins/v9/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "revision": "1a280523d375e9358d5229df34fc8e94"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e7f7fd9de4fb8e4fbe39.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ad320ba3a27607ccd625f9d33838bbf1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-8e67c3fab75696a168ff.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
