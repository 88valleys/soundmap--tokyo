import React from 'react';
import "./Sidebar.css";
import logo from '../../assets/logo_w_context2.png';


function Sidebar({ setLivehouses }) {
  function addLivehouse(form) {
    const url = "https://fathomless-river-41474-f3672769a018.herokuapp.com/api/v1/livehouses";

    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Extract selected equipment values
    const selectedEquipments = formData.getAll("livehouse[equipments][]");
    console.log('Selected Equipments:', selectedEquipments);

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then((newLivehouse) => {
        console.log('Response:', newLivehouse); 
        setLivehouses((livehouseList) => [...livehouseList, newLivehouse]);
        form.reset();
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addLivehouse(event.currentTarget);
  }

  const genres = ["Rock", "Jazz", "Hip-Hop", "Electronic", "Indie", "Pop", "Metal", "Punk", "Classical", "Folk"]; 

  return (
    <div className="sidebar">
      <div>
        <h3>Share your livehouse</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="livehouse-title"><i className="fa-solid fa-guitar form-icons"></i></span>
            <input name="livehouse[title]" placeholder="Shibuya O-EAST" type="text" className="form-control" aria-describedby="livehouse-title" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="livehouse-address"><i className="fa-solid fa-location-dot form-icons"></i></span>
            <input name="livehouse[address]" placeholder="1-chome-11-1 Shibuya, Shibuya City, 150-0002, Tokyo" aria-describedby="livehouse-address" type="text" className="form-control" />
          </div>
          
          <div className="mb-3"> 
            { genres.map((genre) => {
              return ( 
                <React.Fragment key={genre}>
                  <input name="livehouse[genres][]" type="checkbox" className="btn-check" id={genre} autoComplete="off" value={genre}/>
                  <label className="btn btn-outline-secondary btn-sm mx-1 mb-1" htmlFor={genre}>{genre}</label>
                </React.Fragment>
              );
            }) }
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="livehouse-station"><i className="fa-solid fa-train form-icons"></i></span>
            <input name="livehouse[nearest_station]" placeholder="What's the closest station?" aria-describedby="livehouse-station" type="text" className="form-control" />
          </div>            
          
          <div className="input-group mb-3">
            <span className="input-group-text" id="livehouse-picture"><i className="fa-solid fa-camera-retro form-icons"></i></span>
            <input name="livehouse[picture]" type="text" className="form-control" aria-describedby="livehouse-picture" placeholder='http://example.com/image.jpg'/>
          </div>
          <div className="d-grid">
          <button type="submit" className="btn custom-btn-red">Let&apos;s jam!</button>
          </div>
        </form>
      </div>
      <img src={logo} alt="keyboard and matcha logo" className="logo-with-context" /> 
    </div>
  );
}

export default Sidebar;
