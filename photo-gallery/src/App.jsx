import { useReducer, useEffect, useState, useCallback, useMemo } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { favouritesReducer } from "./reducers/favouritesReducer";
import useFetchPhotos from "./hooks/useFetchPhotos";

function App() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => {
      const saved = localStorage.getItem("favourites");
      return saved ? JSON.parse(saved) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  const toggleFavourite = (photo) => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">
        Photo Gallery
      </h1>

      <SearchBar onSearch={handleSearch} />

      <Gallery
        photos={filteredPhotos}
        loading={loading}
        error={error}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}

export default App;