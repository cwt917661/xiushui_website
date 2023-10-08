import axios from 'axios';

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_REST_BASE_URL,
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
  console.log(error.response);
  
  return Promise.reject(error.response.data);
})

// Get service
export const apiGetDataService = (url) => httpRequest.get(url);

// Post service
export const apiPostDataService = (url, data) => httpRequest.post(url, data);
// export const apiQueryUserDonateData = (url) => httpRequest.get(url);

// export const apiUserDonateList = () => httpRequest.get('UserDonateService/GetAllInformation');
// export const apiUserDonateOverDraft = () => httpRequest.get('UserDonateService/GetOverDraft');