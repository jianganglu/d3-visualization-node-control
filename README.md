##安装Node.js
  根据自己的操作系统，去[Node.js](https://nodejs.org/download/)官网下载安装即可。如果成功安装。在命令行输入node -v和npm -v应该能看到相应的版本号。
  
  node -v  
  v0.10.26  
  npm -v  
  1.4.6
  
  接下来使用npm命令安装express和socket.io
  
  npm install --save express
  npm install --save socket.io
  
  命令行运行node index.js，如果一切顺利，你应该会看到返回的listening on *:3000字样，这说明服务已经成功搭建了。此时浏览器中打开http://localhost:3000应该可以看到正常的欢迎页面。
  
  如果你想要让服务运行在线上服务器，并且可以通过域名访问的话，可以使用Nginx做代理，在nginx.conf中添加如下配置，然后将域名（比如：realtime.plhwin.com）解析到服务器IP即可。
  
  server
  {
    listen       80;
    server_name  realtime.plhwin.com;
    location / {
      proxy_pass http://127.0.0.1:3000;
    }
  } 
  
  下载本地后有两个文件夹 client 和 server，client文件夹是客户端源码，可以放在Nginx/Apache的WebServer中，也可以放在Node.js的WebServer中。后面的server文件夹里的代码是websocket服务端代码，放在Node.js环境中，使用npm安装完 express 和 socket.io 后，node index.js 启动后端服务就可以了。
