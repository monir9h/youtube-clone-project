const API_KEY = process.env.REACT_APP_API_KEY;

function FetchApi() {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Process the fetched data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
}

export default FetchApi;
