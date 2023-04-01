const fs = require('fs');

const requestHandller = (req, res)=>{

    const url = req.url;
    const method = req.method;
if(url = '/message' && method == 'POST'){
    const body = [];
     req.on('data',(c)=>{
         body.push(c);
     });
     req.on('end',(c)=>{
       const parsBody = Buffer.concat(body).toString();
       const message = parsBody.split('=')[1];
       fs.writeFileSync('message.txt',message);
     })
     
     res.statusCode = 302;
     res.setHeader('Location','/');
     return res.end();
   }
   const data = fs.readFileSync('/message.txt', 'utf8');
 
   res.write("<html>");
   res.write('<head><title>Enter msg</title><head>');
   res.write(`<h1>${data}</h1>`);
   res.write('<body><form action="/action" method="POST"><input type="text" name="message"><body>');
   res.write('/html');
}

module.export = requestHandller
