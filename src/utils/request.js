import qs from 'qs'

/*
* http请求封装
* */
export default class Request {
  constructor() {
  }

  // get
  apiGet(url='', params) {
    return new Promise((resolve, reject) => {
      const paramsArr = [];
      if (params) {
        Object.keys(params).map(key => paramsArr.push(`${key}=${params[key]}`))

        if (url.indexOf('?') !== -1)
          url += `&${paramsArr.join('&')}`;
        else
          url += `?${paramsArr.join('&')}`
      }

      fetch(url, {
        method: 'GET'
      }).then(response => response.json()).then((responseJSON) => {
        resolve(responseJSON)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  // post formData方式
  apiPost(url='', params={}) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: qs.stringify(params)
      }).then(response => response.json()).then((responseJSON) => {
        resolve(responseJSON)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  // post json方式
  apiJson(url='', params={}) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      }).then(response => response.json()).then((responseJSON) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}