const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://192.168.4.1:1883');

client.on('connect', () => {
    console.log("Connection established successfully!");
});

const topic = 'test-topic';
const message = 'test message';

client.on('connect', () => {
    console.log(`Is client conneced: ${client.connected}`);
    if (client.connected === true) {
        console.log(`message: ${message}, topic: ${topic}`);
        client.publish(topic, message);
    }
});

client.on('connect', () => {
    client.subscribe(topic);
});

client.on('message', (topic, message) => {
    console.log(`message: ${message}, topic: ${topic}`);
});
