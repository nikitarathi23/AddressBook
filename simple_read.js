var fs = require("fs")

fs.readFile("data.json", "utf-8", function(err, data){
console.log(data)
})
