require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connect = require('./configs/db');


// Other Route files
const { userRoute, conversationRoute, gigRoute, messageRoute, orderRoute, reviewRoute, authRoute } = require('./routes');

// App
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(cors({
    origin: 'https://www.fiverrindia.tech',
    credentials: true
}));

// Other Routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/orders', orderRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);

// Routes
app.get('/', (request, response) => {
    response.send('Hello, Topper!');
});

app.get('/ip', (request, response) => {
    const list = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    const ips = list.split(',');

    return response.send({ ip: ips[0] });
})

app.listen(8080, async () => {
    try {
        await connect();
        console.log(`Listening at http://localhost:8080`);
    }
    catch ({ message }) {
        console.log(message);
    }
})
