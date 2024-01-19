const IS_URL = /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s!"#'()*+,:;<>@[\\\]`{|}~]*$/;
const SECRET_KEY = 'super-strong-secret';
const allowedCors = [
  'https://cerea62.nomoredomainsmonster.ru/sign-in',
  'http://cerea62.nomoredomainsmonster.ru/sign-in',
  'http://api.cerea62.nomoredomainsmonster.ru/sign-in',
  'https://api.cerea62.nomoredomainsmonster.ru/sign-in',
  'https://localhost:3000',
  'http://localhost:3000',
];
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = { IS_URL, SECRET_KEY, allowedCors, DEFAULT_ALLOWED_METHODS };