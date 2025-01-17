const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    case '/images/assets/jlfongpic.jpg':
      sendFile( response, 'images/assets/jlfongpic.jpg' )
      break
    case '/images/assets/rhodeisland.jpg':
      sendFile( response, 'images/assets/rhodeisland.jpg' )
      break
    case '/images/assets/connecticut.jpg':
      sendFile( response, 'images/assets/connecticut.jpg' )
      break
    case '/images/assets/windsor.jpg':
      sendFile( response, 'images/assets/windsor.jpg' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}
