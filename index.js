import express from 'express';
import http from 'http';
import castles from './data/kastelen.json' with { type: 'json' };

const app = express();
const server = http.createServer(app);
const port = process.env.EXPRESS_PORT;

app.get('/', async (req, res) => {
	const { 'x-delay': delayRaw } = req.headers;
	const delay = Math.max(0, Math.min(parseInt(delayRaw) || 0, 5000));

	if (delay > 0) await new Promise((resolve) => setTimeout(resolve, delay));

	res.json(castles);
});

server.listen(port, () => console.log(`Server listening on port ${port}`));