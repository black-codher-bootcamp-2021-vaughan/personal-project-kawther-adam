import * as React from "react";
import Map, { Popup, Marker } from "react-map-gl";

function ProfileMarker(props) {
  const { latitude, longitude, color, user } = props;
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <>

      <Marker longitude={longitude} latitude={latitude} color={color}>
        <img
          src="/images/prayer-icon.png"
          width="50px"
          alt="Prayer Icon"  
          onClick={(e) => {
            e.preventDefault();
            setShowPopup(!showPopup);
          }}
        />
      </Marker>
     
      {showPopup && (
        <Popup
          longitude={longitude}
          latitude={latitude}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          <p key={user._id}>
            <h3>{user.Name} </h3>
            {user.pictures.map((picture) => (
              <img src={picture.url} width="100px" />
            ))}

            <p> {user.Location}</p>
            <p>{user.Description}</p>
          </p>
        </Popup>
      )}
    
    </>
  );
}
export default ProfileMarker;
