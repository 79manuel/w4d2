const pg = require("pg");
const set = require("./set");
const name = process.argv[2];
const client = new pg.Client({
  user     : set.user,
  password : set.password,
  database : set.database,
  host     : set.hostname,
  port     : set.port,
  ssl      : set.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query("SELECT * FROM famous_people WHERE last_name = $1", [name], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    // console.log(result);
    finalresult(result,name);
    client.end();
  });
});

const finalresult = function(result, name){
  console.log("Found " + result.rowCount+ " person(s) by the name : " + name);
  result.rows.forEach((user,i) => {

   })
}