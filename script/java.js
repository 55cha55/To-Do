const  lista = document.querySelector('ul')
const texto = document.querySelector('#boxtext')
const adicionar = document.querySelector('#button')
const lista1 = document.querySelector('#ToDo ul')
const lista2 = document.querySelector('#Doing ul')
const lista3 = document.querySelector('#Done ul')



adicionar.addEventListener('click',addTarefa)




function addTarefa (){ 
    if(texto.value){
        const valor = '<li>'+ '</u>' + texto.value + '<i class="fas fa-arrow-right"></i>'+ '</u>'+'</li>';
        lista.innerHTML += valor;
        texto.value= '';
        texto.focus();
    }
}




lista1.addEventListener('click',function(event){
    let vetor = document.querySelectorAll('li')

    vetor.forEach(vetor => {
        if(vetor == event.target){
                let apagar = event.target;
                event.target.remove();
                lista2.appendChild (apagar); 
        }
    });
})

lista2.addEventListener('click',function(event){
    let vetor = document.querySelectorAll('li')

    vetor.forEach(vetor => {
        if(vetor == event.target){
                let apagar = event.target;
                event.target.remove();
                lista3.appendChild (apagar); 
        }
    })
})

lista3.addEventListener('click',function(event){
    let vetor = document.querySelectorAll('li')

    vetor.forEach(vetor => {
        if(vetor == event.target){
                let apagar = event.target;
                event.target.remove(); 
        }
    })
})


texto.addEventListener('keyup', function(enter){
    if (enter.keyCode == 13) {
        addTarefa()
    }
})

