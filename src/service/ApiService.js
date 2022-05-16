import { API_BASE_URL } from "../app-config";
import axios from 'axios';
const ACCESS_TOKEN = "ACCESS_TOKEN";

export function call(api, method, request) {

let headers = {
  "Content-Type": "application/json",
};

  let options = {
    url: API_BASE_URL + api,
    method: method,
  };
  //로컬 스토리지에서 ACCESS_TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if(accessToken && accessToken !== null){
    headers['Authorization'] = "Bearer " + accessToken;
  }
  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }
  console.log(options.url, options.method, options.body, headers);
  return axios({
    headers: headers,
    url: options.url,
    method: options.method,
    data: options.body
  }).then((response) => {
    if(!(response.status >= 200 && response.status < 300)) {
      console.log("not ok");
      return response;
    }
    console.log("response.data: ", response.data);
    return response.data;
  })
  .catch((error) => {
    console.log("error : " + error.response.status);
    if (error.response.status === 403) {
      window.location.href = "/login"; // redirect
    }
    return Promise.reject(error);
  });
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO)
  .then((response) => {    
    if(response.data.token){
      console.log("token: ",response.data.token);
      // 로컬 스토리지에 토큰 저장
      localStorage.setItem(ACCESS_TOKEN, response.data.token);
      window.location.href="/";
      // alert("로그인 토큰: " + response.token);
    }
  });
}

  export function signout(){
    localStorage.setItem(ACCESS_TOKEN, null);
    window.location.href = "/login";
  }

  export function signup(userDTO){
    return call("/auth/signup","POST", userDTO);
  }