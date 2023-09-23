import axios from 'axios';

// User相關的 api
const userRequest = axios.create({
  baseURL: '/UserService/',
  headers: { 'Content-Type': 'application/json'},
});
// // 文章相關的 api
// const articleRequest = axios.create({
//   baseURL: 'https://api/article/'
// });
// // 搜尋相關的 api
// const searchRequest = axios.create({
//   baseURL: 'https://api/search/'
// });

// User 相關的 api
export const apiUserList = () => userRequest.get('getAllUsers');
// export const apiUserList = () => request.get('userController.php');
// export const apiUserLogin = data => request.post('/signIn', data);
// export const apiUserLogout = data => request.post('/signOut', data);
// export const apiUserSignUp = data => request.post('/signUp', data);

// 文章相關的 api
// export const apiArticleItem = () => articleRequest.get('/ArticleItem');
// export const apiArticleMsg = data => articleRequest.post('/ArticleMsg', data);
// export const apiArticleLink = data => articleRequest.post('/ArticleLink', data);
//
// // 搜尋相關的 api
// export const apiSearch = data => searchRequest.get(`/Search?searchdata=${data}`);
// export const apiSearchType = () => searchRequest.get(`/SearchType`);
