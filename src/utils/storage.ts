export const getLastWeather = () => localStorage.getItem('last_weather');
export const setLastWeather = (weather: string) => localStorage.setItem('last_weather', weather);
export const clearLastWeather = () => localStorage.removeItem('last_weather');
