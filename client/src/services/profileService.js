// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllProfiles = async () => {
  const response = await axios.get(`/api/kawther`);

  return response.data ||  [];
};

const postLocation = async (userDetails)=> {
const postcodeResponse = await axios.get(`https://api.postcodes.io/postcodes/${userDetails.Postcode}`) 

console.log({userDetails, postcodeResponse})
  const locations ={
    Name: userDetails.Name,
    Lastname: userDetails.Name,
    Email: userDetails.Email,
    postcode: userDetails.Postcode,

    Geometry: { 
      Latitude: postcodeResponse.data.result.latitude,
      Longitude: postcodeResponse.data.result.longitude,

    }
  }
  const response = await axios.post(`/api/kawther`, locations);

  return response.data ||  [];
}
// All of the endpoints in this file can be exported below
export { getAllProfiles, postLocation };