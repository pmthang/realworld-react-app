const URL = 'https://conduit.productionready.io/api'
const headers = {
  'Content-type': 'application/json'
}

class Request {
  constructor (url = URL, headers = Headers) {
    this.url = url
    this.headers = headers
  }

  static async getAllArticles () {
    return await fetch(
      `${this.url}/articles?limit=10`,
      this.headers
    ).then(res => res.json())
  }
}

export default Request
