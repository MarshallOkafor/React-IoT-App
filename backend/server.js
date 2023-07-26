// Import dependencies
const express = require('express');
const app = express();
const mqtt = require('mqtt');

// Define the data array
let weatherData = [];

app.use(express.json());

// Create a connection client and connect to the broker server
const client = mqtt.connect('mqtt://192.168.4.1:1883');
client.on('connect', () => {
    console.log("Connection established successfully!");
});

// Create our endpoint for weather data
// Import the weather data router
const getWeatherData = require('./weatherData')(weatherData, client);

// Use the router for request to /weatherData
app.use('/weatherData', getWeatherData);

// Create a port and start the express server
const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Server started on port ' + port);
})