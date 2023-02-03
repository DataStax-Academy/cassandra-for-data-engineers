const { getRestClient, requestWithRetry, wait } = require("./utils/astraRestClient");
const qs = require("qs");

exports.handler = async (event, context) => {

  // Parsing parameters
  var queryParameters = {};
  qs.stringify(event.queryStringParameters).split("&").forEach(function(part) {
    var item = part.split("=");
    queryParameters[item[0]] = decodeURIComponent(item[1]);
  });

  const client = await getClient();
  let res;
  try {
    res = await client.get('/api/rest/v2/keyspaces/' 
        + process.env.ASTRA_DB_KEYSPACE 
        + '/users?where='
        + '\{"email":\{"$eq":"' + queryParameters.email + '"\}\}')
    const user = Object.keys(res.data).map((item) => res.data[item]);
    if (user.length === 0) {
        return {
            headers: '{Content-Type: application/json}',
            statusCode: 404,
            body: JSON.stringify("This user does not exists"),
            headers: {
              'Content-Type': 'application/json'
            },
          };
    }
    return {
      headers: '{Content-Type: application/json}',
      statusCode: 200,
      body: JSON.stringify(user[0]),
      headers: {
        'Content-Type': 'application/json'
      },
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
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
