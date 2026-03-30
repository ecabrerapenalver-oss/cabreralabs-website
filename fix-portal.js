const fs = require("fs");

// Success page - añadir link al portal
let success = fs.readFileSync("success.html","utf8");
success = success.replace(
  '<p class="support">Need help? <a href="mailto:support@cabreralabs.net">support@cabreralabs.net</a></p>',
  '<p class="support"><a href="https://billing.stripe.com/p/login/eVq14neBS7CGel6chn9IQ00" target="_blank">View invoices & manage billing</a></p>\n  <p class="support">Need help? <a href="mailto:support@cabreralabs.net">support@cabreralabs.net</a></p>'
);
fs.writeFileSync("success.html", success);

// Index page - añadir link al portal en el footer
let index = fs.readFileSync("index.html","utf8");
index = index.replace(
  '<a href="/cookies.html" style="color:var(--text-dim);font-size:0.8rem;">Cookies</a>',
  '<a href="/cookies.html" style="color:var(--text-dim);font-size:0.8rem;">Cookies</a>\n    <a href="https://billing.stripe.com/p/login/eVq14neBS7CGel6chn9IQ00" target="_blank" style="color:var(--text-dim);font-size:0.8rem;">My invoices</a>'
);
fs.writeFileSync("index.html", index);

console.log("Done");
