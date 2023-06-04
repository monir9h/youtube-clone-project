import "./Search.css";
import FetchApi from "../../api/fetch";

function SearchBar({ setVideos, searchTerm, setSearchTerm }) {
  let handleSearch = () => {
    FetchApi(searchTerm)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="search-bar">
      <input
	  	className=".search-input"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
