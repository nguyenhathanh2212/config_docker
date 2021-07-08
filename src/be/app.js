const express = require('express')
const { MongoClient } = require('mongodb');
const cors = require('cors')

const app = express()
app.use(cors());
const port = process.env.PORT || 8080;
const stat = process.env.EXPRESS_STATIC;


if (stat) {
    console.log('stat', stat)
    app.use(express.static(stat));
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/test', () => {
    connectMongo().catch(console.error);
})

async function connectMongo() {
    const uri = "mongodb://mongo:27017";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

