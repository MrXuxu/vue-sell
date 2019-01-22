import axios from 'axios'

const urlMap = {
  development: '/api',
  production: ' https://www.easy-mock.com/mock/5c3f277f5b18bd3526d4b058/api'
}

axios.defaults.baseURL = urlMap[process.env.NODE_ENV];
// const ERR_OK = 0;

export const getSeller = function(callback) {
  axios.get('/seller').then(res => {
    callback(res);
  })
}

export const getGoods = function(callback) {
  axios.get('/goods').then(res => {
    callback(res);
  })
}

export const getRatings = function(callback) {
  axios.get('/ratings').then(res => {
    callback(res);
  })
}