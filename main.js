// https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=ec262dfdea2cbc0f7acbf8f27a2e3f94&units=metric
const form =document.querySelector(".form")
const input =document.querySelector(".input")
const msg =document.querySelector("top-banner .msg")
const list =document.querySelector(".cities");
 
const apiKey="ec262dfdea2cbc0f7acbf8f27a2e3f94";

form.addEventListener("submit",e => {
  e.preventDefault();
  let inputVal =input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response=>response.json())
     .then(data=>{
                 // console.log(data);
                 const {main,name,sys,weather}=data;
                 const icon =`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
                 console.log(icon)
                 const li =document.createElement("li");
                 li.classList.add("city")
                 const markup = `
                 <h2 class='city-name' data-name=${name},${sys.country}>
                     <span>${name}</span>
                     <span>${sys.country}</span>
                 </h2>
                 <div class='city-temp'>${main.temp}</div>
                 <figure>
                     <img class='city-icon' src='${icon}' alt ='city' >
                     <figurecaption>${weather[0]["description"]}</figurecaption>
                 </figure>
                 `;
                 li.innerHTML = markup;
                 list.appendChild(li);

     })
})

