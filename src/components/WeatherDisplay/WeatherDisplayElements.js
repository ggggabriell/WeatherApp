import styled from "styled-components"

export const WDisplayContainer=styled.div`
    height: 100vh;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    @media (max-width: 768px){
        width: 100%;
      
  
`;

export const WDisplayWrap = styled.div`
    height: 80%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;

    @media (max-width: 768px){
        width: 100%;
        height: 60%;
        align-items: center;      
`;

export const WMySocials = styled.div`
    font-size: 2rem;
    display: flex;
`;

export const WDisplayInfo= styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;  
        justify-content: center;
    }
  
`;

export const WTemp= styled.h1`
    font-size: 6rem;
    font-weight: bold;
    text-decoration: none;
    
    
    @media (max-width: 768px){
        font-size: 4rem;
    }
    
`;

export const WInfoDetails= styled.div`
    margin-left: 20px;

     @media (max-width: 768px){
        margin-left: 0;
        text-align: center;
     }
`;

export const WLocation= styled.h2`
    font-size: 2rem;
      
     @media (max-width: 768px){
         font-size: 1.5rem;
         margin: 10px 0;
     }
    
`;

export const WTime= styled.p`
    
`;

export const WInfoIcon= styled.div`
    font-size: 25px;
    padding-left: 20px;
`;

