let relations = [
    {
        dst1: 'Zemlja',
        dst2: 'Mars',
        price: 1500
    },
    {
        dst1: 'Zemlja',
        dst2: 'Venera',
        price: 1233
    },
    {
        dst1: 'Zemlja',
        dst2: 'Jupiter',
        price: 2345
    }
    ,
    {
        dst1: 'Zemlja',
        dst2: 'Saturn',
        price: 5678
    }
    ,
    {
        dst1: 'Venera',
        dst2: 'Mars',
        price: 67856
    }
    ,
    {
        dst1: 'Venera',
        dst2: 'Jupiter',
        price: 354645
    }
    ,
    {
        dst1: 'Venera',
        dst2: 'Saturn',
        price: 34565
    },
    {
        dst1: 'Mars',
        dst2: 'Jupiter',
        price: 123455
    },
    {
        dst1: 'Mars',
        dst2: 'Saturn',
        price: 7867
    },
    {
        dst1: 'Jupiter',
        dst2: 'Saturn',
        price: 456756
    }]

//POVEZIVANJE SELECT POLJA
let source = document.querySelector('#select-source');
let destination = document.querySelector('#select-destination');

//POVEZIVANJE DUGMICA   
let btnReserve = document.querySelector('#btn-reserve');
let btnReset = document.querySelector('#btn-reset');

//POVEZIVANJE TEKSTA
let odakle = document.querySelector('.info-src');
let dokle = document.querySelector('.info-dst');
let cena = document.querySelector('.info-price');


//POVEZIVANJE KONTEJNERA SA SUMOM
let ukupnaCena = document.querySelector('#price');

btnReserve.addEventListener('click', narudzbina);

function narudzbina (){
    let nadjenacena;

    if (source.value == destination.value) {
        alert("You can't select same location for source and destination.");
        return
    };

    for (let i = 0; i < relations.length; i++) {
        if ((relations[i].dst1 === source.value && relations[i].dst2 === destination.value)
            ||
            (relations[i].dst1 === destination.value && relations[i].dst2 === source.value)
        ) {
            nadjenacena = relations[i].price
        }
    }


    let objekat = {
        from: source.value,
        to: destination.value,
        price: nadjenacena
    }

    console.log(objekat);
    ispisFunkcija(objekat);
    


};


let summm = 0;

function ispisFunkcija(e) {
    
    odakle.innerText = e.from;
    dokle.innerText = e.to;
    cena.innerText = e.price;
    summm += e.price;
    ukupnaCena.innerHTML = summm;

}


btnReset.addEventListener('click', e => {

    odakle.innerText = '/';
    dokle.innerText = '/';
    cena.innerText = '0';
    ukupnaCena.innerText = '0'

})

