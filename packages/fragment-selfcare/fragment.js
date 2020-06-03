const http = require('http')
const url = require('url')
const fs = require('fs')

const HOST = process.env.HOST
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname
  const jsHeader = { 'Content-Type': 'application/javascript' }
  switch(pathname) {
    case '/public/bundle.js':
      res.writeHead(200, jsHeader)
      return fs.createReadStream('./public/bundle.js').pipe(res)
    default:
      res.writeHead(200, {
        'Content-Type': 'text/html',
        'Link': `<${HOST}/fragment-selfcare/public/bundle.js>; rel="fragment-script"`
      })
      return res.end('')
  }
})

server.listen(PORT, () => {
  console.log('SPA Fragment Server started at %s', PORT)
})
