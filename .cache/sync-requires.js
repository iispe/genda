// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/user/Documents/Webdev/genda/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/user/Documents/Webdev/genda/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/user/Documents/Webdev/genda/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/user/Documents/Webdev/genda/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/user/Documents/Webdev/genda/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/user/Documents/Webdev/genda/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/user/Documents/Webdev/genda/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/user/Documents/Webdev/genda/.cache/json/404.json"),
  "index.json": require("/Users/user/Documents/Webdev/genda/.cache/json/index.json"),
  "page-2.json": require("/Users/user/Documents/Webdev/genda/.cache/json/page-2.json"),
  "404-html.json": require("/Users/user/Documents/Webdev/genda/.cache/json/404-html.json")
}