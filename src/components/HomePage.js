import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page-bg">
      <h1>
        Welcome to{" "}
        <img
          alt="logo"
          src="https://www.goformeet.co/assets/images/goformeetNavLogo.svg"
          className="logo"
        />
      </h1>
      <div className="home-page">
        <Link to="/register" className="button-link">
          <button className="cta-button">Register</button>
        </Link>
        <Link to="/profile-wall" className="button-link">
          <button className="cta-button">View Profile Wall</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
