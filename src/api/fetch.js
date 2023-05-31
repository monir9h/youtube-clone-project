const API_KEY = process.env.REACT_APP_API_KEY;

async function FetchApi(searchKeyword) {
  try {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${searchKeyword}&key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}