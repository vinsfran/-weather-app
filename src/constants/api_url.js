const location = "Asuncion,py";
const api_key = "0672522ac5d6c7698f20100fa6fe2d92";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
