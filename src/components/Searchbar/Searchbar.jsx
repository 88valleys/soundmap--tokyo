import React from 'react';
import './Searchbar.css';

function Searchbar({setLivehouses}) {

  function handleChange(event) {

  
    const url = `https://fathomless-river-41474-f3672769a018.herokuapp.com/api/v1/livehouses?title=${event.currentTarget.value}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setLivehouses(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input placeholder="Search for livehouses..." type="text" className="form-control" onChange={handleChange} />
    </div>
  );
}

export default Searchbar;
