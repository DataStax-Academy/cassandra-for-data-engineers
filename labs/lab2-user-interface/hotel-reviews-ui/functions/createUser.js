const { getRestClient, requestWithRetry, wait } = require("./utils/astraRestClient");
const bcrypt = require('bcrypt')

/**
 * Function exposes as a GET / POST Http endpoint
 */
exports.handler = async (event, context) => {
  
  // Utility for wordcount
  if (!String.prototype.countWords) {
    String.prototype.countWords = function() {
      return this.length && this.split(/\s+\b/).length || 0;
    };
  }

  // Build Request
  const createUserPayload = JSON.parse(event.body);
  createUserPayload.password = await bcrypt.hash(createUserPayload.password, 10);

  //HashPassword with bcrypt

  const astraRestClient = await getClient();
  const res = await astraRestClient
    .post('/api/rest/v2/keyspaces/' + process.env.ASTRA_DB_KEYSPACE + '/users', createUserPayload);
  if (res.status == 201) {
    return {
        statusCode: res.status,
        body: JSON.stringify(res.data),
        headers: {
          'Content-Type': 'application/json'
        },
    }
  } else {
    return {
      statusCode: res.status,
      body: JSON.stringify(res.data)
    }
  }
};

async function getClient() {
    let client = await getRestClient();
    if (client === null) {
      wait(1000)
      return getClient()
    }
    return client
}