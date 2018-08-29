const { getClient } = require('axios-client');

const client = getClient();

async function fetch(url, params = null) {
  return new Promise((resolve, reject) => {
    client.get(url, {
      params: params
    }).then((res) => {
      if (res.status === 200) {
        resolve(res.data);
      } else {
        reject('Api returned non 200: ' + res);
      }
    }).catch((err) => {
      reject('API error: ' + err)
    })
  });
}

export async function fetchMessage() {
  return fetch('/api/message');
}
