var inputvalue = document.querySelector('#cityinput')
 var btn = document.querySelector('#add');
var city= document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind= document.querySelector('#wind')
apik="32a24ea1d75e40ee435f1575ef098c2e"

function convertion (val)


{

 return (val -273).toFixed(3)

}

btn.addEventListener('click', function()

{

fetch('fetch https://api.openweathermap.org/data/2.5/weather?q=' +inputvalue.value+'appid='+apik)
.then(res => res.json())
.then(data =>
{

    var nameval = data['name']
    var descrip =['weather']['0']['description']
    var temerature =data['main']['temp']
    var windspeed = data['wind'][speed]


     city.innerHTML='weather of <span>${nameval}<span>'
     temp.innerHTML='temperature :<span>${conversion(temperaature)} c</span>'
     description.innerHTML='sky condition: <span>${descrip}<span>'

})


.catch(err => alert(' you entered wrong city name'))

})
