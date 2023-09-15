import express from 'express';
import path from 'path';
import routes from './src/routes/routes';

const server = express();

server.use(express.static(path.join(__dirname, './public')));

server.use(express.urlencoded({extended: true}));

server.use(routes);

server.listen(3000);