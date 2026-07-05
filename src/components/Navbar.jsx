import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🏨 𝑳𝒐𝒐𝒎𝒊
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">Hotels</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;