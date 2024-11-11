import React from 'react';
import "./Livehouse.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Livehouse({ livehouse }) {
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${livehouse.title} ${livehouse.address}`;
  const websiteUrl = livehouse.website_url; 
  const contactEmail = livehouse.contact_email;   

  return (
    <div className="livehouse-card p-3">
      <img src={livehouse.picture} alt={livehouse.title} className="img-fluid mb-3" />
      <div className="content-container">
        <div className="livehouse-info">
          <h5>{livehouse.title}</h5>
          <p>
            {livehouse.genres.map(genre => (
              <span key={genre} className="badge bg-secondary me-1">{genre}</span>
            ))}
          </p>
          <p><i className="fa-solid fa-train-subway me-1"></i>{livehouse.nearest_station}</p>
        </div>
        <div className="action-buttons">
          <a target="_blank" rel="noopener noreferrer" href={gmapsUrl} className="btn btn-primary me-2">
            <i className="fa-solid fa-map-location-dot"></i> Map</a>
          {websiteUrl && websiteUrl.trim() !== "" && (
            <a target="_blank" rel="noopener noreferrer" href={websiteUrl} className="btn btn-secondary">
              <i className="fa-solid fa-globe"></i> Website</a>
          )}
          {contactEmail && contactEmail.trim() !== "" && (
            <a target="_blank" rel="noopener noreferrer" href={`mailto:${contactEmail}`} className="btn btn-info">
              <i className="fa-solid fa-envelope"></i> Contact</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Livehouse;