import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Search from "./components/Search";
import Map from "./components/Map";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";


function App() {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);
  



  function renderProfile(user) {
    return (
      <p key={user._id}>
        <h3>{user.Name} </h3>
        {user.pictures.map((picture) => (
          <img src={picture.url} />
        ))}

        <p> {user.Location}</p>
        <p>{user.Description}</p>
      </p>
    );
  }

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Search />
            <ul>
              {profiles && profiles.length > 0 ? (
                profiles.map((profile) => renderProfile(profile))
              ) : (
                <p>No profiles found</p>
              )}
            </ul>
          </div>
        )}
      />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/Map" render={() => <Map profiles={profiles} />} />
    
      {/* <BasketTotal /> */}
    </Router>
  );
}

export default App;
