import PhotoCard from "./PhotoCard";
import Spinner from "./Spinner";

export default function Gallery({
  photos,
  loading,
  error,
  favourites,
  toggleFavourite,
}) {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10 font-medium">
        {error}
      </p>
    );
  }

  if (photos.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No photos found.
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {photos.map((photo) => {
          const isFav = favourites.some((f) => f.id === photo.id);

          return (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFav={isFav}
              toggleFavourite={toggleFavourite}
            />
          );
        })}
      </div>
    </div>
  );
}