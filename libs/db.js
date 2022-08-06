const Credstash = require('credstash');
const credstash = new Credstash();
const mongoose = require('mongoose');

let cachedDB = null;

async function connectToDatabase(options = {}) {
  if (!cachedDB) {
    credstash.get('skidb.mongodb.dev', async (e, secret) => {
      // console.log('getting secret ', secret);
      const uri = `mongodb+srv://ebenny:${secret}@decently-edgy-vibes.bikx1.mongodb.net/skiDB?retryWrites=true&w=majority`;
      // console.log('uri ', uri);
      cachedDB = await mongoose.connect(uri);
    });
  }
}
export { connectToDatabase };