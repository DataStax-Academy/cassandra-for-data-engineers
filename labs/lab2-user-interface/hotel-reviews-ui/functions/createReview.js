const { getRestClient, requestWithRetry, wait } = require("./utils/astraRestClient");
const TimeUuid = require('cassandra-driver').types.TimeUuid;

/**
 * Function exposes as a GET / POST Http endpoint
 */
exports.handler = async (event, context) => {
  
  // Working Object
  //const astraRestClient = await getClient();
  
  // Utility for wordcount
  if (!String.prototype.countWords) {
    String.prototype.countWords = function() {
      return this.length && this.split(/\s+\b/).length || 0;
    };
  }

  // Append body
  const createReviewPayload = JSON.parse(event.body);
  createReviewPayload.review_uid = TimeUuid.now().toString();
  createReviewPayload.negative_review_words = createReviewPayload.negative_review.countWords();
  createReviewPayload.positive_review_words = createReviewPayload.positive_review.countWords();
  createReviewPayload.flag_processed = false;
  createReviewPayload.flag_validated = false;
  const astraRestClient = await getClient();
  const res = await astraRestClient
    .post('/api/rest/v2/keyspaces/' + process.env.ASTRA_DB_KEYSPACE + '/reviews_by_hotel', createReviewPayload);
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