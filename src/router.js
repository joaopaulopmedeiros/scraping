const { Router } = require('express');
const routes = Router();

const ScrappingController = require('./controllers/ScrappingController');

routes.get('/', ScrappingController.index);
routes.post('/search', ScrappingController.search);

module.exports = routes;