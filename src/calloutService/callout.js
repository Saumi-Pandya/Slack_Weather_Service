"use strict";

const axios = require('axios');
require('dotenv').config();

const getWeatherUpdates = async (location, days) => {       
    console.log('inside getWeatherUpdates', location, days);
    const params = {
        method: `GET`,
        url: `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=${days}`
    };
    //console.log('url : ', params.url);
    try {
        const response = await axios.request(params);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Status Code:', error.response.status);
            console.error('Error Data:', error.response.data);
            return error.response.data;

          } else if (error.request) {
            console.error('No response received from the server');
            
          } else {
            console.error('Error:', error.message);
          }
    }
};

module.exports = getWeatherUpdates;
