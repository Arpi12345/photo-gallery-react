export default function SearchBar({ onSearch }) {

  return (
    <div className="flex justify-center mb-6">

    <input
  type="text"
  placeholder="Search by author..."
  className="border border-gray-300 rounded-lg px-4 py-2 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  onChange={(e) => onSearch(e.target.value)}
/>

    </div>
  );
}