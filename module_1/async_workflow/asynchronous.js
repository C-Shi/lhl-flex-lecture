const loadPageHeader = () => { console.log('Show Page Header')};
const getVancouverWeather = (callback) => {
  console.log('Getting Vancouver Weather...');
  setTimeout(callback, 3000);
};
const getTorontoWeather = (callback) => {
  console.log('Getting Toronto Weather...');
  setTimeout(callback, 4000);
};
const loadPageFooter = () => { console.log('Show Page Footer') };
const showVancouverWeather = () => { console.log('Vancouver: Sunny 20C') };
const showTorontoWeather = () => { console.log('Toronto: Cloudy 15C') }

loadPageHeader();
getVancouverWeather(showVancouverWeather);
getTorontoWeather(showTorontoWeather);
loadPageFooter();
