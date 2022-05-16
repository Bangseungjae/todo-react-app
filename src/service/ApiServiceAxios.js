export function call(api, method, request) {
    let options = {
      headers: new Headers({
        'Accept':'application/json',
        "Content-Type": "application/json",
      }),
      url: API_BASE_URL + api,
      method: method,
    };
    if (request) {
      // GET method
      options.body = JSON.stringify(request);
    }
    console.log(options.url, options.method, options.body);
    return axios({
      header: options.headers,
      url: options.url,
      method: options.method,
      data: options.body
    }).then((response) => response.json().then((json) => {
      if(!response.ok) {
        return Promise.reject(json);
      }
      console.log(json);
      return json;
    }))
    .catch((error) => {
      console.log("error : " + error.code);
      if (error.code === "ERR_BAD_REQUEST") {
        // window.location.href = "/login"; // redirect
      }
      return Promise.reject(error);
    });
  }