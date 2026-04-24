const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') });
const mongoose = require('mongoose');

async function checkIndexes() {
    await mongoose.connect(process.env.MONGO_URI);
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();

    for (const coll of collections) {
        if (coll.name === 'applications') {
            const indexes = await db.collection(coll.name).indexes();
            console.log(`\nIndexes for ${coll.name}:`);
            console.log(JSON.stringify(indexes, null, 2));
        }
    }
    await mongoose.connection.close();
}

checkIndexes();
