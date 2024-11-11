import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import LivehouseList from './components/LivehouseList/LivehouseList';


function App() {
  const [livehouses, setLivehouses] = React.useState([]);

  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    const url = "https://fathomless-river-41474-f3672769a018.herokuapp.com/api/v1/livehouses";
    const params = keyword ? `?title=${keyword}` : "";
    fetch(url + params)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLivehouses(Array.isArray(data) ? data : []); // Ensure data is an array
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setLivehouses([]); // Set livehouses to an empty array on error
      });
  }, [keyword]);


  return (
    <div className="app-frame">
      <Navbar setKeyword={setKeyword} setLivehouses={setLivehouses} />
      <div className="app-body">
        <Sidebar setLivehouses={setLivehouses} />
        <LivehouseList livehouses={livehouses} />
      </div>
    </div>
  );
}

export default App;
