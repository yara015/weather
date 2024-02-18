const apikey="2d3f4aa5d9474b4ec470911e91502b25";
const searchbar=document.querySelector(".search input");
const  searchbtn=document.querySelector(".search button");
const img=document.querySelector(".weather-icon");
const bg=document.querySelector(".report");
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city){
    const response=await fetch(url+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML="Weather in "+data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    document.querySelector(".pressure").innerHTML=data.main.pressure+"hpa";
    // document.querySelector(".precipitation").innerHTML=data.precipitation;
    // document.querySelector(".dewpoint").innerHTML=data.main.humidity;
    // document.querySelector(".cloudcover").innerHTML=data.main.humidity;
    document.querySelector(".weather-icon").src="http://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
   const description=data.weather[0].description;
   document.querySelector(".type").innerHTML=description;
   const main=data.weather[0].main;
//    if(main=="Clouds"){
//     img.src="images/clouds.png";
//      bg.style.backgroundImage="url("+ "https://www.treehugger.com/thmb/z9XWueIDAUQI6QvXfCR6JyuFzl8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__08__CollectionOfCloudsAgainstABlueSky-8cae9f3109d14dcf98d9facc5775222f.jpg" +")";
//    }
//    else if(main=="Clear"){
//     img.src="images/clear.png";
//    }
//    else if(main=="Rain"){
//     img.src="images/rain.png";
//    }
//    else if(main=="Snow"){
//     img.src="images/snow.png";
//    }
//    else if(main=="Drizzle"){
//     img.src="images/drizzle.png";
//    }
//    else if(main=="Mist"){
//     img.src="images/mist.png";
//    }
  document.querySelector(".date").innerHTML=new Date();
    

}
searchbtn.addEventListener("click",function(){
    checkWeather(searchbar.value);
    document.querySelector(".details").style.display="block";
})
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        checkWeather(searchbar.value);
        document.querySelector(".details").style.display="block";
    }
  }