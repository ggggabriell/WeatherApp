

const basicFetch= async(cidade)=>{
    const req= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&&lang=pt&appid=c4a85eaeeb1ed5c4a2fce407be7d15bc`);
    const json= await req.json();
    return json;
  };


export default {
    getWeather: async(cidade)=>{
        return[
            {
                alldata: await basicFetch(cidade),
            },   
        ];
    }

};



 