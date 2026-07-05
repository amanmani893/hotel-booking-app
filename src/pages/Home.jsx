import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HotelCard from "../components/HotelCard";
import { getHotels } from "../services/api";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    async function fetchHotels() {
      try {
        const data = await getHotels();

        console.log(data);

        setHotels(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHotels();
  }, []);
  const filteredHotels = hotels.filter((hotel) => {

  const matchesSearch =
    hotel.name.toLowerCase().includes(search.toLowerCase());

  const matchesLocation =
    location === "" || hotel.location === location;

  const price = parseFloat(hotel.price);

  let matchesPrice = true;

  if (priceRange === "3000")
    matchesPrice = price < 3000;

  if (priceRange === "6000")
    matchesPrice = price >= 3000 && price <= 6000;

  if (priceRange === "9000")
    matchesPrice = price > 6000 && price <= 9000;

  if (priceRange === "10000")
    matchesPrice = price > 9000;

  return matchesSearch && matchesLocation && matchesPrice;
});

  return (
    <>
      <Navbar />

<div className="hero">
  <h1>Find Your Perfect Stay</h1>
  <p>Explore thousands of hotels across India at the best prices.</p>
</div>

<div className="filters">

  <input
    type="text"
    placeholder="Search hotels..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  >
    <option value="">All Locations</option>
    <option value="Delhi">Delhi</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Noida">Noida</option>
    <option value="Ahmedabad">Ahmedabad</option>
    <option value="Gurgaon">Gurgaon</option>
    <option value="Kolkata">Kolkata</option>
  </select>

  <select
    value={priceRange}
    onChange={(e) => setPriceRange(e.target.value)}
  >
    <option value="">All Prices</option>
    <option value="3000">Below ₹3000</option>
    <option value="6000">₹3000 - ₹6000</option>
    <option value="9000">₹6000 - ₹9000</option>
    <option value="10000">Above ₹9000</option>
  </select>

  <button
    onClick={() => {
      setSearch("");
      setLocation("");
      setPriceRange("");
    }}
  >
    Reset
  </button>

</div>

<div className="hotel-grid">
  {loading ? (
    <h2>Loading Hotels...</h2>
  ) : (
    filteredHotels.map((hotel) => (
      <HotelCard
        key={hotel.id}
        hotel={hotel}
      />
    ))
  )}
</div>
    </>
  );
}

export default Home;