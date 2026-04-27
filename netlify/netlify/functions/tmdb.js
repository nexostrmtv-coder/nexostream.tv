exports.handler = async (event) => {
  const params = new URLSearchParams(event.queryStringParameters);
  const path = params.get('path') || '';
  params.delete('path');

  const url = `https://api.themoviedb.org/3${path}?api_key=${process.env.TMDB_API_KEY}&${params.toString()}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data),
  };
};