//AccuWeather API Key
const key = 'nyA4qxkXnDRXaP78z2YblALpBdBupSTt';

//get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;

//after defining the link and the city, we ask a response using them that 'll be stored in the const data, each one using promises

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};  




