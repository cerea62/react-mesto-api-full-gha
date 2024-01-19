const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
  headers: {
      authorization: '881e0966-bc42-4e12-bb34-8b207989d519',
      'Content-Type': 'application/json'
  }
}
class Api {
  #handleResponse = res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }
  editUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
      headers: this._headers
    })
      .then(this.#handleResponse)
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(this.#handleResponse)
  }

  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      body: JSON.stringify({
        avatar: data.avatar
      }),
      headers: this._headers
    })
      .then(this.#handleResponse)
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(this.#handleResponse);
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this.#handleResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this.#handleResponse);
  }
  
  changeLike(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._headers
    })
      .then(this.#handleResponse);
  }

}

const api = new Api(config);

export default api;
