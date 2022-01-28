

const basicFetch= async()=>{
    const req= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=São José dos Campos,br&appid=c4a85eaeeb1ed5c4a2fce407be7d15bc`);
    const json= await req.json();
    return json;
  };


export default {
    getWeather: async()=>{
        return[
            {
                alldata: await basicFetch(),
            },   
        ];
    }

};



 