import React from 'react';
import {WDisplayContainer, WDisplayInfo, WDisplayWrap, WInfoDetails, WInfoIcon, WLocation, WMySocials, WTemp, WTime} from './WeatherDisplayElements'


const WeatherDisplay = ({city, weatherInfo, currentTime, currentData}) => {

  let temp=Math.trunc(weatherInfo.temp - 273.15)

  return(
    <WDisplayContainer>
       <WDisplayWrap>
           <WMySocials>blablabla</WMySocials>
           <WDisplayInfo>
               <WTemp>{temp}º</WTemp>
               <WInfoDetails>
                  <WLocation>{city}</WLocation>
                  <WTime>{currentTime}{` - `}{currentData}</WTime>   
               </WInfoDetails>
               <WInfoIcon></WInfoIcon>
           </WDisplayInfo>
       </WDisplayWrap>
        
    </WDisplayContainer>


  );
   
};

export default WeatherDisplay;
