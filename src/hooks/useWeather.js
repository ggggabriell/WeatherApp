import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const WeatherContext = createContext([]);

export function WeatherProvider({children}){
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity]= useState('brasil'); 
 
        useEffect(()=>{
            api.get(`weather?q=${city}&units=metric&&lang=pt&appid=c4a85eaeeb1ed5c4a2fce407be7d15bc`)
                .then(response => setWeatherData(response.data))        
        },[city])

 
    //Set Current Time
    const [currentTime, setCurrentTime]= useState(0);
    const [currentData, setCurrentData]= useState(0);
   function getCurrentData(){
            setCurrentTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
            setTimeout(getCurrentData, 1000); 
            setCurrentData(new Date().toLocaleDateString());      
            return {currentTime, currentData}
        }   
    useEffect(()=>{
        window.onload=getCurrentData();
    },[])


    //Handle input 
     function handleInput(input){
        setCity(input)
    }

    return(
        <WeatherContext.Provider value={{weatherData, getCurrentData, handleInput}}>
            {children}
        </WeatherContext.Provider>
    )
}

