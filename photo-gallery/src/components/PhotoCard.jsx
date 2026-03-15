export default function PhotoCard({ photo, isFav, toggleFavourite }) {
  return (
   <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <div className="w-full h-48 overflow-hidden">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between items-center p-3">

        <p className="text-sm font-semibold text-gray-700">
          {photo.author}
        </p>

       <button
  onClick={() => toggleFavourite(photo)}
  className="text-xl transition transform hover:scale-110"
>
  {isFav ? "❤️" : "🤍"}
</button>

      </div>

    </div>
  );
}