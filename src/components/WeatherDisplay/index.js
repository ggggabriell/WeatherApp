import React from 'react';
import {Mobileicon, MySocialsLink, WDisplayContainer, WDisplayInfo, WDisplayWrap, WInfoDetails, WInfoIcon, WLocation, WMySocials, WTemp, WTime} from './WeatherDisplayElements'
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa'

const WeatherDisplay = ({toggle, city, weatherInfo, currentTime, currentData}) => {


  return(
    <WDisplayContainer>
       <WDisplayWrap>
           <WMySocials> 
           <MySocialsLink href="//www.linkedin.com/in/gabriel-santos-farias/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin />
                        </MySocialsLink>
                        <MySocialsLink href="//github.com/ggggabriell" target="_blank" aria-label="Linkedin">
                            <FaGithub />
                        </MySocialsLink>   
           </WMySocials>
           <Mobileicon
            onClick={toggle}
           >
             
              <FaBars />
           </Mobileicon>
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
