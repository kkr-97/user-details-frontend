import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    location: "",
    profession: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/add-profile/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Profile Added");
        window.location.reload();
      } else {
        alert("Error while adding profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="register-page" onSubmit={handleSubmit}>
      <h2>Register Now</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter your location"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="profession">Profession:</label>
        <input
          type="text"
          id="profession"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          placeholder="Enter your profession"
          required
        />
      </div>
      <Link to="/">
        <button className="blk-button" type="button">
          Back to Home
        </button>
      </Link>
      <button className="blk-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
