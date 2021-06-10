const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.redisClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

function fib(index) {
    let num1 = 0, num2 = 1;
    for(let i = 2; i <= index; i++) {
        let cur = num1 + num2;
        num1 = num2;
        num2 = cur;
    }
    return num2;
}

sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');