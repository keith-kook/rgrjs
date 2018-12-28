import express from 'express';
import {MongoClient} from 'mongodb';
let app = express();

app.use(express.static('public'));




// Connect using the MongoClient.connect static method
 const test = require('assert');
 // Connection url
 const url = process.env.MONGO_URL;
 // Database Name
 const dbName = 'rgrjs';
 // Connect using MongoClient
 MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;
    /* app.listen(3000, function () {
      console.log('Server ready listen on port 3000');
    }); */
    app.listen(3000, ()=> console.log('Server ready listen on port 3000'));
    const db = client.db(dbName);

    app.get("/data/links", (req, res) => {
      db.collection("links").find({}).toArray((err, links) => {
        if (err) throw err;

        res.json(links);
      });
    });

    //client.close();
 });

/*MongoClient.connect(process.env.MONGO_URL, (err, database, useNewUrlParser: true ) => {
  if (err) throw err;
  database.collection("links").find({}).toArray((err, links) => {
    if (err) throw err;

    console.log(links);
  });
});
*/
