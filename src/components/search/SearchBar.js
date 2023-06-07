import "./SearchBar.css";
import FetchApi from "../../api/fetch";

function SearchBar({searchTerm, setSearchTerm, setVideos}) {

  // call fetch function when search button is clicked
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
	  	className="search-input"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
