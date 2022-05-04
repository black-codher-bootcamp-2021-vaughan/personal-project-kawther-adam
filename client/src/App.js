import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Map from "./components/Map";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";
import { UserContact } from "./components/UserContact";
import NavBar from "./components/NavBar";
import Container from "@mui/material/Container";
import Card from "./components/Card";
import { Grid, Stack } from "@mui/material";

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

  // function renderProfile(user) {
  //   return (

  //     <p key={user._id}>
  //       <h3>{user.Name} </h3>
  //       {user.pictures.map((picture) => (
  //         <img src={picture.url} width="200px" />
  //       ))}

  //       <p> {user.Location}</p>
  //       <p>{user.Description}</p>
  //     </p>
  //   );
  // }

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => (
          <div>
       
            <NavBar />
            
            <Container sx={{ width: "200%", paddingTop: "50px"}}>
              <Grid container spacing={2}>
              
                <Grid item xs={6}>
                  <Stack spacing={2}>
                    {profiles && profiles.length > 0 ? (
                      profiles.map((profile) => <Card profile={profile}></Card>)
                    ) : (
                      <p>No profiles found</p>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Map profiles={profiles} />
                </Grid>
              </Grid>
            </Container>
          </div>
        )}
      />

      <Route exact path="/about" render={() => <About />} />

      <Route exact path="/contact" render={() => <UserContact />} />
    </Router>
  );
}

export default App;
