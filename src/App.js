// import React, { useState } from "react";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import SearchIcon from "@mui/icons-material/Search";
// import WavesIcon from "@mui/icons-material/Waves";
// import AirIcon from "@mui/icons-material/Air";
// import { Button } from "@mui/material";

// function App() {
//     const [city, setCity] = useState("Ahmedabad");
//     const [weather, setWeather] = useState({
//         temperature: 7,
//         humidity: 48,
//         windSpeed: 10.29,
//     });

//     const fetchWeather = async () => {
//         // setCity(city);
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5a77529fec5928a0953b6e870b592bc`
//         );
//         const data = await response.json();
//         setWeather({
//             temperature: ((data.main.temp - 32) * 0.56).toFixed(2) ,
//             humidity: data.main.humidity,
//             windSpeed: data.wind.speed,
//         });
//     };

//     React.useEffect(() => {
//         // fetchWeather();
//     });

    
//     const handleInputChange = (event) => {
//         setCity(event.target.value);
        
//     }

//     return (
//         <div className="relative">
//             <div className="margin-center2 border-solid border-4 rounded-3xl bg-gradient-to-t from-blue-500 to-green-500" spellCheck="false">
//                 <div className="h-32 flex justify-center items-center">
//                     <input
//                         type="text"
//                         placeholder="Enter city name"
//                         className="mx-10 my-auto mr-2 w-80 text-center border-2 rounded-full font-sans"
//                         style={{ fontSize: "1.75em" }}
//                         onChange={handleInputChange}
//                         value={city}
//                         // onChange={handleInputChange}
//                     />
//                     <Button className="ml-2 margin-center3"><SearchIcon
                        
//                         onClick={fetchWeather}
//                         style={{ color: "blue", fontSize: "3em" }}
//                     /></Button>
//                 </div>

//                 <div className="h-40 flex justify-center items-center">
//                     <WbSunnyIcon
//                         className="mx-auto my-auto"
//                         style={{ color: "orange", fontSize: "5em" }}
//                     />
//                 </div>

//                 <div className="font-sans text-7xl text-white mt-10 text-center font-semibold">
//                     {weather.temperature}°C
//                     <div>
//                         <span className="text-4xl">{city}</span>
//                     </div>
//                 </div>

//                 <div className="h-40 flex justify-center items-center text-white">
//                     <div className="mx-auto flex items-center">
//                         <WavesIcon
//                             className="mx-auto my-auto"
//                             style={{ color: "white", fontSize: "3.5em" }}
//                         />
//                         <div className="text-3xl ml-3">{weather.humidity}%</div>
//                         {/* <p>Humidity</p> */}
//                     </div>
//                     <div className="mx-auto flex items-center">
//                         <AirIcon
//                             className="mx-auto my-auto"
//                             style={{ color: "white", fontSize: "3.5em" }}
//                         />
//                         <div className="text-3xl ml-3">{weather.windSpeed} km/h</div>
//                         {/* <p>Wind Speed</p> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App;

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

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="relative bg-slate-900 min-h-screen flex justify-center items-center">
            <div className="mx-auto w-full md:w-1/2 lg:w-1/3 p-8 border-solid border-4 rounded-3xl bg-gradient-to-t from-blue-500 to-green-500">
                <div className="h-30 flex justify-center items-center">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        className="w-2/3 mx-auto my-auto mr-2 text-center border-2 rounded-full text-sm md:text-2xl lg:text-3xl xl:text-4xl"
                        onChange={handleInputChange}
                        value={city}
                    />
                    <Button onClick={fetchWeather} className="ml-2">
                        <SearchIcon style={{ color: "blue", fontSize: "2rem" }} />
                    </Button>
                </div>

                <div className="h-24 md:h-40 flex justify-center items-center">
                    <WbSunnyIcon style={{ color: "orange", fontSize: "5rem" }} />
                </div>

                <div className="font-sans text-5xl md:text-7xl text-white mt-10 text-center font-semibold">
                    {weather.temperature}°C
                    <div>
                        <span className="text-2xl md:text-4xl">{city}</span>
                    </div>
                </div>

                <div className="h-24 md:h-40 flex justify-center items-center text-white">
                    <div className="flex items-center">
                        <WavesIcon style={{ color: "white", fontSize: "2.5rem" }} />
                        <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl ml-3">{weather.humidity}%</div>
                    </div>
                    <div className="flex items-center ml-6">
                        <AirIcon style={{ color: "white", fontSize: "2.5rem" }} />
                        <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl ml-3">{weather.windSpeed} km/h</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
