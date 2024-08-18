import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProfileWall() {
  const [profiles, setProfiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const profilesPerPage = 6;

  useEffect(() => {
    const fetchProfiles = async (page = 1) => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3001/api/profiles?page=${page}&limit=${profilesPerPage}`
        );
        const data = await response.json();
        setTotalPages(data.totalPages);
        setProfiles(data.profiles);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="profile-wall">
      <Link to="/" className="back-link">
        <button className="blk-button">Back to Home</button>
      </Link>
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="profile-list">
            {profiles.map((profile) => (
              <div key={profile._id} className="profile-card">
                <h2 className="profile-name">{profile.name}</h2>
                <p className="profile-detail">Age: {profile.age}</p>
                <p className="profile-detail">Location: {profile.location}</p>
                <p className="profile-detail">
                  Profession: {profile.profession}
                </p>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button
              className="blk-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="blk-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileWall;
