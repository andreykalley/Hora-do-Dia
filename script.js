var data = new Date()
var horas = data.getHours()

function carregar(){
    let msgHoras = document.getElementById('msg')
    msgHoras.innerHTML = `Agora são ${horas} horas`

    let img = document.getElementById('imgHorario')
    
    if(horas >= 0  && horas < 5){
        img.src = 'imgs/madrugada.jpg'
        document.body.style.background = '#511300'

    }else if(horas < 12){
        img.src = 'imgs/manha.jpg'
        document.body.style.background = '#B48E56'

    }else if(horas < 18){
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#5FBBEF'
        
    }else{
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#252525'
        
    }
}