const um = document.getElementById('u')
const dois = document.getElementById('d')
const tres = document.getElementById('t')
const quatro = document.getElementById('q')
const cinco = document.getElementById('c')
const seis = document.getElementById('s')
const sete= document.getElementById('se')
const oito = document.getElementById('o')
const nove = document.getElementById('n')
const zero = document.getElementById('z')
const ponto = document.getElementById('ponto')
const zerar = document.getElementById('C')
const dividir = document.getElementById('dividir')
const vezes = document.getElementById('vezes')
const mais = document.getElementById('mais')
const menos = document.getElementById('menos')
const igual = document.getElementById('igual')






let tela = document.getElementById("tela")

let valores = ("")


um.addEventListener('click', function(){
     valores = (valores + "1")
     tela.innerText = valores
})
   
dois.addEventListener('click', function(){
     valores = (valores + "2")
     tela.innerText = valores
})
   
tres.addEventListener('click', function(){
     valores = (valores + "3")
     tela.innerText = valores
})
   
quatro.addEventListener('click', function(){
     valores = (valores + "4")
     tela.innerText = valores
})
   
cinco.addEventListener('click', function(){
     valores = (valores + "5")
     tela.innerText = valores
})
   
seis.addEventListener('click', function(){
     valores = (valores + "6")
     tela.innerText = valores
})
   
sete.addEventListener('click', function(){
     valores = (valores + "7")
     tela.innerText = valores
})
   
oito.addEventListener('click', function(){
     valores = (valores + "8")
     tela.innerText = valores
})
   
nove.addEventListener('click', function(){
     valores = (valores + "9")
     tela.innerText = valores
})
   
zero.addEventListener('click', function(){
     valores = (valores + "0")
     tela.innerText = valores
})

ponto.addEventListener('click', function(){
    valores = (valores + ".")
    tela.innerText = valores
})

mais.addEventListener('click', function(){
    valores = (valores + " + ")
    tela.innerText = valores
})

menos.addEventListener('click', function(){
    valores = (valores + " - ")
    tela.innerText = valores
})

dividir.addEventListener('click', function(){
    valores = (valores + " / ")
    tela.innerText = valores
})

vezes.addEventListener('click', function(){
    valores = (valores + " * ")
    tela.innerText = valores
})

zerar.addEventListener('click', function(){
    valores = ""
    tela.innerText = valores
})

igual.addEventListener('click', function(){
    valores = eval(valores);
    tela.innerText = valores
})