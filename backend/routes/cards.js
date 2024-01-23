const routerCard = require('express').Router();
const celebrates = require('../middlewares/celebrates');
const {
  createCard, getCards, delCardById, likeCard, dislikeCard,
} = require('../controllers/cards');

routerCard.post('/', celebrates.validateDataCard, createCard);
routerCard.get('/', getCards);
routerCard.delete('/:CardId', celebrates.validateCardId, delCardById);
routerCard.put('/:CardId/likes', celebrates.validateCardId, likeCard);
routerCard.delete('/:CardId/likes', celebrates.validateCardId, dislikeCard);

module.exports = routerCard;
