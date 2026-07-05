import "../styles/HotelCard.css";

function HotelCard({ hotel }) {
   console.log(hotel.thumbnail);
  return (
    <div className="hotel-card">
      <img
  src={hotel.thumbnail}
  alt={hotel.name}
/>

      <div className="hotel-content">
        <h2>{hotel.name}</h2>
        <p>📍 {hotel.location}</p>
        <p>⭐ {hotel.rating}</p>
        <p>💰 ₹{hotel.price}</p>
        <p className="description">{hotel.description}</p>
      </div>
    </div>
  );
}

export default HotelCard;