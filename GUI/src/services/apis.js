import axios from 'axios';

const baseURL = '';
const httpRequest = axios.create({
  baseURL: baseURL,
  headers: { 'Content-Type': 'application/json',
             'Accept' : 'application/json'
            }
});

// 攔截 API response 的回傳
httpRequest.interceptors.response.use(response  => {
  // 這邊可以對回來的資料先進行驗證處理，再來決定要不要把資料給吐出去
  return Promise.resolve(response);
}, error => {
  // 這邊當API發生錯誤的時候就可以處理 Error handling
  return Promise.reject(error.response.data);
})

// User 相關的 api
export const apiUserList = () => httpRequest.get('UserService/GetAllUsers');


export const apiUserDonateList = () => httpRequest.get('UserDonateService/GetAllInformation');