module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: event && event.queryStringParameters && event.queryStringParameters.url ? event.queryStringParameters.url : ''
  };
  callback(null, response);
}