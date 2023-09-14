const axios = require('axios');
const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
  // return {
  //   lat: 40.7484474,
  //   lng: -73.9871516
  // }
  const response = await axios.get(`https://geocode.maps.co/search?q=${encodeURIComponent(address)}`);

  const data = response.data;

  if (!data) {
    const error = new HttpError('error location', 422);
    throw error;
  }
  
  const coordinates = data[0];

  return coordinates;
}

module.exports = getCoordsForAddress;