import express from 'express';
import http from 'http';
import castles from './data/kastelen.json' with { type: 'json' };

const app = express();
const server = http.createServer(app);
const port = process.env.EXPRESS_PORT;

app.get('/', (req, res) => {
	res.json(castles);
});

server.listen(port, () => console.log(`Server listening on port ${port}`));