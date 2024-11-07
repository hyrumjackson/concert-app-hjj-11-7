let express = require("express");
let app = new express();                                                                     

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.cta2e0ykiilq.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "donutdonut",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
 let html = "<body><ul>";
 for (let i=0;i<result.length;i++) {
  html += "<li>" + result[i].location + "</li>";
 }
  html += "</body>"
  res.send(html);
 });
});
app.listen(3000);
