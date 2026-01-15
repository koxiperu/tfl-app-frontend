import textLogo from "../assets/tfl-text.png";
import { useEffect, useState } from "react";
import { listingsAPI } from "../services/api";
import ListingCard from "../components/ListingCard";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const HomePage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(location.state?.message);

  useEffect(() => {
    fetchListings();
  }, []);

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      // Clear the state from location
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const fetchListings = async () => {
    try {
      setLoading(true);
      const data = await listingsAPI.getAll();
      setListings(data);
      setError(null);
    } catch (error) {
      setError("Failed to load listings:" + error.message);
    }
    finally{
      setLoading(false);
    }
  };

  const handleCloseMessage = () => {
    setMessage(null);
  }

  return (
    <div className="container mx-auto px-4 py-8">

      {/* Success Message */}
      {message && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="relative p-8 border w-96 shadow-lg rounded-md bg-white text-center">
            <div className="absolute top-0 right-0 pt-2 pr-2">
              <button
                onClick={handleCloseMessage}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="text-green-500 flex justify-center mb-4">
              <FaCheckCircle className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-700">{message}</p>
            <button
              onClick={handleCloseMessage}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Great!
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="mb-12">
        <img
          src={textLogo}
          alt="Terra Food Loop"
          className="h-12 md:h-14 mb-3"
        />

        <h2 className="text-xl md:text-2xl text-gray-800 font-semibold mb-1">
          Transform surplus into sustenance.{" "}
          <span className="text-green-700">Save food.</span>{" "}
          <span className="text-orange-600">Feed people.</span>
        </h2>

        <p className="text-base md:text-lg text-gray-600">
          Every meal shared is a step towards a more sustainable and caring
          community
        </p>
      </div>
      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Available Listings ({listings.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;