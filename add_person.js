
const set = require("./set");
const name = process.argv[2];
var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    user     : set.user,
    password : set.password,
    database : set.database,
    host     : set.hostname,
    port     : set.port,
    ssl      : set.ssl
  }
});

knex.insert({last_name: 'Perez', first_name: 'Manuel', birthdate: '01-01-2000'}).into('famous_people')

.asCallback ((err, result) => {
  console.log(err, result);
  knex.destroy();
});