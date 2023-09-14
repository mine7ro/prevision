

const key= "2dcc6f18580ff3c541f1030739da1018"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "tempo em "+ dados.name 
    document.querySelector(".climate").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-prevision").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = dados.main.humidity +"%"
    document.querySelector(".img-prevision").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){

const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
   
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}

