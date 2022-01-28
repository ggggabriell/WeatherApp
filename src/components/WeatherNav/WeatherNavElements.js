import styled from "styled-components";


export const NavContainer = styled.div`
    height: 100vh;
    width: 30%;
    z-index: 3;
    backdrop-filter: blur(20px);  

    
    @media (max-width: 768px){
        display: none;
    }
    
`;
export const NavBlur= styled.div`

`;

export const NavWrap= styled.div`
    display: flex;
    flex-direction: column;
    z-index: 4;
    margin-left: 50px;
`;

export const NavLocation= styled.div`
    color: #ddd;
`;

export const NavLocationWrap= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const SearchInput= styled.input`
    background-color: transparent;   
    height: 40px;
    width: 50%;
    outline: none !important;
    border:none;
    outline-width: 0;
    color: #fff;
    
`;

export const SearchBtn= styled.button`
    background-color: #f86864;
    width: 80px;
    height: 80px;
    font-size: 30px;
    cursor: pointer;
`;

export const NavLocationPlaces= styled.div`
    font-size: 18px;
    margin-bottom: 50px;
    width: 70%;
`;

export const PlacesText= styled.p`
    padding: 10px;
`;

export const Hr= styled.hr`
    width: 100%;
    margin-bottom: 50px;
 
`

//WEATHER INFORMATIONS
//--------------------
export const NavWeatherDetails= styled.div`
    color: #ddd;
    width: 80%;
`;

export const NavWeatherTitle= styled.h1`
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
   
`;

export const DetailsSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
`;

export const DetailsText = styled.p`
   
`;

export const DetailsInfo= styled.p`

`;