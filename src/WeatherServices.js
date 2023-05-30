const KEY = 'cd5167bcf599ba1630ca653e1fac022f';
const myIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`


const weatherData = async (city, units = 'metric') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=${units}`;

    const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data)
    console.log(data);
    const { weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        sys: { country },
        name,
    } = data;

    const { description, icon } = weather[0]
    return {
        description,
        iconURL: myIconUrl(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
    }
}
export { weatherData }