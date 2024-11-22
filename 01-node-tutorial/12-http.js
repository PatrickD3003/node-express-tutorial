// this module allows us to set up the web server
 
const http = require('http')


const server = http.createServer((req, res) => {
    // req represent the incoming request from client
    // res represent the response we're sending back to the server
//     if (req.url === '/') {
//       res.end('Welcome to our home page')
//     }
//     if (req.url === '/about') {
//       res.end('Here is our short history')
//     }
//     res.end(`
//     <h1>Oops!</h1>
//   <p>We can't seem to find the page you are looking for</p>
//   <a href="/">back home</a>
//     `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL

  // we use req.url to know which endpoint the client is requesting
  if (req.url === '/') {  
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  // the default response, incase theres no page 
  } else {  
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(8000)
