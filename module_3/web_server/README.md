### Intro to Web Server
1. Web Server control how web users access hosted file
2. software that understands URL and HTTP
3. Act as a gateman between client and resources

  ![web server](./image/web_server.png)
4. Simple Node js HTTP server
  ```js
  const http = require('http');
  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  ```

### Express.js
1. A *lightweight*, node.js web framework
2. The main use of *Express* is to simplify the creation of route handlers
3. Easy configuration:
  1. Create an express instance
  2. define route and handler
  3. Listen to a port
  
  ```js
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
      res.send('Home page')
  });

  app.listen(3000, () => {
      console.log('Server start at port 3000')
  })
  ```

### Middleware
1. *Middleware* is an interceptor function that runs between request and response
2. middleware make express powerful
3. Global and route specific middleware are avaiable
4. middleware package and custom middleware

  ```js
  app.use(express.urlencoded({ extended: true }));
  ```

### Template Engine
1. A processor to combine view template and data model
2. Dynamically generate HTML
3. Allows partials for reusable HTML
4. EJS (Embedded JavaScript)
  ```html
    <!-- Include some file from ejs template file -->
    <%- include('partials/header') %>

    <!-- Logical JavaScript, no output -->
    <% if(a > b) { %>
      <div>a is greater than b</div>
    <% >} %>

    <!-- output the value of a variable/expression -->
    <div>My name is <%= name %></div>
  ```