const request = require('request');
const fs = require('fs');

let url = process.argv[2]
let filepath = process.argv[3]
request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(filepath, body, (err) => {
    if (err) throw err;

    var stats = fs.statSync(filepath)
    var fileSize = stats["size"]
    console.log("Downloaded and saved " + fileSize + " bytes to " + filepath)

}); 
});
