import axios from 'axios'

const API = 'https://conduit.productionready.io/api'

export const articles = {
  all: axios.get(`${API}/articles?limit=10`).then(res => res.data)
}
