const loadPageHeader = () => { console.log('Show Page Header')};
const getWeatherAsync = (callback) => {
  console.log('Getting Weather...');
  setTimeout(callback, 3000);
};
const getNewsAsync = (callback) => {
  console.log('Getting News...');
  setTimeout(callback, 4000);
};
const loadPageFooter = () => { console.log('Show Page Footer') };
const showWeather = () => { console.log('Vancouver: Sunny 20C') };
const showNewsAsync = () => { console.log('These are news') }

loadPageHeader();
getWeatherAsync(showWeather);
getNewsAsync(showNewsAsync);
loadPageFooter();
