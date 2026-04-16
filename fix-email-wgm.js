const fs = require("fs");
let idx = fs.readFileSync("index.html","utf8");
idx = idx.replaceAll("support@cabreralabs.net", "ecpenalver@wgmsl.com");
let suc = fs.readFileSync("success.html","utf8");
suc = suc.replaceAll("support@cabreralabs.net", "ecpenalver@wgmsl.com");
fs.writeFileSync("index.html", idx);
fs.writeFileSync("success.html", suc);
console.log("Done");
