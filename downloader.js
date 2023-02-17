const fs = require('fs'),
http = require('http'),
https = require('https');
  
const Stream = require('stream').Transform;
  
module.exports.save = (fileurl, filename = '') => {
    var client = http;
    if (fileurl.indexOf("https") === 0){
      client = https;
    }
  
    client.request(fileurl, function(response) {                                        
      var data = new Stream();                                                    
  
      response.on('data', function(chunk) {                                       
         data.push(chunk);                                                         
      });                                                                         
  
      response.on('end', function() {      
         let fileName = fileurl.substring(fileurl.lastIndexOf("/") + 1);
         fileName = fileName.split('?')[0];
         fs.writeFileSync('downloads/' + fileName, data.read());    
         return fileurl;            
      });                                                                         
   }).end();
};