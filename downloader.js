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
         fs.writeFileSync('download/' + fileurl.substring(fileurl.lastIndexOf("/") + 1), data.read());    
         return fileurl;            
      });                                                                         
   }).end();
};