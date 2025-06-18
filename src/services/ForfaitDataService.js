import http from '../http-common'

class ForfaitDataService {
  getAll () {
    return http.get('/forfait')
  }

  create (data) {
    return http.post('/forfait', data)
  }

  get (id) {
    return http.get(`/forfait/${id}`)
  }

  update (id, data) {
    return http.put(`/forfait/${id}`, data)
  }

  delete (id) {
    return http.delete(`/forfait/${id}`)
  }
}
export default new ForfaitDataService()
