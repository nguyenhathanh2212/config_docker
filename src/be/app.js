const express = require('express')
const { MongoClient } = require('mongodb');
const cors = require('cors')

const app = express()
app.use(cors());
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

async function connectMongo() {
    const mongoHost = process.env.MONGO_HOST || 'localhost';
    const uri = `mongodb://${mongoHost}:27017`;
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

connectMongo().catch(console.error);
