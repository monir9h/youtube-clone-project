const API_KEY = process.env.REACT_APP_API_KEY;

function FetchApi(searchKeyword) {
  return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchKeyword}&key=${API_KEY}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default FetchApi;