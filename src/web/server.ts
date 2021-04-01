import express from 'express';
import rootRoutes from './routes/root-routes';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/assets'));
app.use('/', rootRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App running on port ${port}'));