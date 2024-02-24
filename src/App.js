import React, { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import WavesIcon from "@mui/icons-material/Waves";
import AirIcon from "@mui/icons-material/Air";
import { Button } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DehazeIcon from "@mui/icons-material/Dehaze";

function App() {
    const [city, setCity] = useState("Ahmedabad");
    const [weather, setWeather] = useState({
        temperature: 7,
        humidity: 48,
        windSpeed: 10.29,
        des: "Clear",
    });

    const fetchWeather = async () => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5a77529fec5928a0953b6e870b592bc`
        );
        const data = await response.json();
        setWeather({
            temperature: (data.main.temp-273.15).toFixed(2),
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            //des: data.weather.main.description,

        });
    };
    
    console.log(weather);
    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    function icon({ weather: { des } }) {
        if (des === "Clear") {
            return (
                <WbSunnyIcon style={{ color: "orange", fontSize: "4rem" }} />
            );
        }
        if (des === "Clouds") {
            return <CloudIcon style={{ color: "white", fontSize: "4rem" }} />;
        }
        if (des === "Rain") {
            return (
                <WaterDropIcon style={{ color: "blue", fontSize: "4rem" }} />
            );
        }
        if (des === "haze") {
            return <DehazeIcon style={{ color: "white", fontSize: "4rem" }} />;
        }
    }

    return (
        <div className="relative bg-slate-900 min-h-screen flex justify-center items-center">
            <div className="mx-auto w-full md:w-1/2 lg:w-1/3 p-8 border-solid border-4 rounded-3xl bg-gradient-to-t from-blue-500 to-green-500">
                <div className="h-30 flex justify-center items-center">
                    <input
                        type="text"
                        placeholder="Enter city name"
                        className="w-2/3 mx-auto my-auto mr-2 text-center border-1 border-cyan-900 rounded-full text-sm md:text-2xl lg:text-3xl xl:text-4xl"
                        onChange={handleInputChange}
                        value={city}
                    />
                    <Button onClick={fetchWeather} className="ml-2">
                        <SearchIcon
                            style={{ color: "blue", fontSize: "2rem" }}
                        />
                    </Button>
                </div>

                <div className="h-24 md:h-40 flex justify-center items-center mt-7">
                    <div className="flex items-center">
                        <div> 
                            {/* {icon(weather?.des)} */}
                            <WbSunnyIcon style={{ color: "orange", fontSize: "4rem" }}/>                       </div>
                    </div>
                </div>

                <div className="font-sans text-5xl md:text-7xl text-white mt-10 text-center font-semibold">
                    {weather.temperature}°C
                    <div>
                        <span className="text-2xl md:text-4xl">{city}</span>
                    </div>
                </div>

                <div className="h-24 md:h-40 flex justify-center items-center text-white">
                    <div className="flex items-center">
                        <WavesIcon
                            style={{ color: "white", fontSize: "2.5rem" }}
                        />
                        <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl ml-3">
                            {weather?.humidity}%
                        </div>
                    </div>
                    <div className="flex items-center ml-6">
                        <AirIcon
                            style={{ color: "white", fontSize: "2.5rem" }}
                        />
                        <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl ml-3">
                            {weather?.windSpeed} km/h
                        </div>
                    </div>
                </div>
                {/* <div className="h-24 md:h-40 flex justify-center items-center text-white">
                    Currently the weather is {weather.des} in the {city} city.
                </div> */}
            </div>
        </div>
    );
}

export default App;
