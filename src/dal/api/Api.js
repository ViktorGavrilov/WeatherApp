import axios from 'axios';
const API_KEY = '19ac47b88d8c24af1610953bdb28cf9b';
const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  withCredentials: true,
  // headers: {'API-KEY': '19ac47b88d8c24af1610953bdb28cf9b'},
});

export const weatherApi = {
  currentWeather(city) {
    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metric`);
  },
  weatherForecast(lat, lon, part) {
    console.log(lat, lon, part)
    return instance.get(
      `onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}&units=metric`,
    );
  },
  // getAllUsers(){
  //   return instance.get(`users`);
  // },
  // deleteUser(userId){
  //   return instance.delete(`follow/${userId}`);
  // },
  // postUser(userId){
  //   return instance.post(`follow/${userId}`);
  // }
};
