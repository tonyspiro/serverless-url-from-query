module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    },
    body: event && event.query && event.query.url ? event.query.url : ''
  };
  callback(null, response);
}