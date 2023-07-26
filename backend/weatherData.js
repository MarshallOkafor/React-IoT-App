const express = require('express');
const router = express.Router();

module.exports = (weatherData, client) => {
    const topic = 'test-topic';

    client.on('connect', () => {
        client.subscribe(topic);
    });

    client.on('message', (topic, message) => {
        console.log(`Received message: ${message}, topic: ${topic}`);
        const data = JSON.parse(message.toString());
        // Store the data
        weatherData.push(data);
    });
    
    // Get endpoint to retrieve the weather data
    router.get('/', (req, res) => {
        res.send(weatherData);
    });

    return router;
}

