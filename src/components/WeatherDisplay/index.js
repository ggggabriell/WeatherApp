import React from 'react';
import {WDisplayContainer, WDisplayInfo, WDisplayWrap, WInfoDetails, WInfoIcon, WLocation, WMySocials, WTemp, WTime} from './WeatherDisplayElements'


const WeatherDisplay = ({city, weatherInfo, currentTime, currentData}) => {


  return(
    <WDisplayContainer>
       <WDisplayWrap>
           <WMySocials>blablabla</WMySocials>
           <WDisplayInfo>
               <WTemp>{weatherInfo? Math.trunc(weatherInfo.temp): ''}º</WTemp>
               <WInfoDetails>
                  <WLocation>{city? city: ''}</WLocation>
                  <WTime>{currentTime}{` - `}{currentData}</WTime>   
               </WInfoDetails>
               <WInfoIcon></WInfoIcon>
           </WDisplayInfo>
       </WDisplayWrap>
        
    </WDisplayContainer>


  );
   
};

export default WeatherDisplay;
