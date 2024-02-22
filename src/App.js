import React, { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import WavesIcon from "@mui/icons-material/Waves";
import AirIcon from "@mui/icons-material/Air";
import { Button } from "@mui/material";

function App() {
    const [city, setCity] = useState("Ahmedabad");
    const [weather, setWeather] = useState({
        temperature: 7,
        humidity: 48,
        windSpeed: 10.29,
    });

    const fetchWeather = async () => {
        // setCity(city);
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5a77529fec5928a0953b6e870b592bc`
        );
        const data = await response.json();
        setWeather({
            temperature: ((data.main.temp - 32) * 0.56).toFixed(2) ,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        });
    };

    React.useEffect(() => {
        // fetchWeather();
    });

    
    const handleInputChange = (event) => {
        setCity(event.target.value);
        
    }

    return (
        <div className="relative">
            <div className="margin-center2 border-solid border-4 rounded-3xl bg-gradient-to-t from-blue-500 to-green-500" spellCheck="false">
                <div className="h-32 flex justify-center items-center">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        className="mx-10 my-auto mr-2 w-80 text-center border-2 rounded-full font-sans"
                        style={{ fontSize: "1.75em" }}
                        onChange={handleInputChange}
                        value={city}
                        // onChange={handleInputChange}
                    />
                    <Button className="ml-2 margin-center3"><SearchIcon
                        
                        onClick={fetchWeather}
                        style={{ color: "blue", fontSize: "3em" }}
                    /></Button>
                </div>

                <div className="h-40 flex justify-center items-center">
                    <WbSunnyIcon
                        className="mx-auto my-auto"
                        style={{ color: "orange", fontSize: "5em" }}
                    />
                </div>

                <div className="font-sans text-7xl text-white mt-10 text-center font-semibold">
                    {weather.temperature}°C
                    <div>
                        <span className="text-4xl">{city}</span>
                    </div>
                </div>

                <div className="h-40 flex justify-center items-center text-white">
                    <div className="mx-auto flex items-center">
                        <WavesIcon
                            className="mx-auto my-auto"
                            style={{ color: "white", fontSize: "3.5em" }}
                        />
                        <div className="text-3xl ml-3">{weather.humidity}%</div>
                        {/* <p>Humidity</p> */}
                    </div>
                    <div className="mx-auto flex items-center">
                        <AirIcon
                            className="mx-auto my-auto"
                            style={{ color: "white", fontSize: "3.5em" }}
                        />
                        <div className="text-3xl ml-3">{weather.windSpeed} km/h</div>
                        {/* <p>Wind Speed</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

// import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';

// function App() {
//   var [city, setCity] = React.useState('Ahmedabad');
//   const [weather, setWeather] = React.useState({
//     temperature: 7,
//     humidity: 48,
//     windSpeed: 10.29,
//   });

//   // Fetch weather data from an API (replace with your own API call)
//   const fetchWeather = async () => {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5a77529fec5928a0953b6e870b592bc`);
//     const data = await response.json();
//     setWeather({
//       temperature: data.main.temp,
//       humidity: data.main.humidity,
//       windSpeed: data.wind.speed,
//     });
//   };

//   React.useEffect(() => {
//     fetchWeather();
//   }, [city]);

//   const submitHandler = (event) => {
//     event.preventDefault();
//     fetchWeather();
//     setCity(event.target.value);
//   }

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   return (
//     <div className="border-solid border-2 h-64 absolute margin-center">
//       <header className="flex items-center justify-between mb-4 text-center mr-8 ml-8 mt-7">

//         <input
//           type="text"
//           value={city}
//           onChange={handleCityChange}
//           className="border px-3 py-2 rounded-full"
//           placeholder="Enter city name"
//         />
//         <SearchIcon className='ml-2 mr-auto' onSubmit={submitHandler={fetchWeather}} style={{ color: 'blue', fontSize: '2em' }} />
//       </header>
//       <main className="flex flex-col items-center">
//         <h2 className="text-xl font-medium mb-2">{city}</h2>
//         <div className="flex items-center justify-center text-4xl font-bold">
//           {weather.temperature}°C
//         </div>
//         <ul className="list-disc mt-4">
//           <li>Humidity: {weather.humidity}%</li>
//           <li>Wind Speed: {weather.windSpeed} km/h</li>
//         </ul>
//       </main>
//     </div>
//   );
// }

// export default App;
