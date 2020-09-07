let cars = [
  {
    id: '19UUA8F50DA160249',
    car_make: 'Scion',
    car_model: 'tC',
    price: 18185
  },
  {
    id: '1GYS3AEF7DR496039',
    car_make: 'Cadillac',
    car_model: 'CTS',
    price: 9552
  },
  {
    id: '2FMDK4KC0AB695258',
    car_make: 'BMW',
    car_model: '525',
    price: 7216
  },
  {
    id: '2FMDK4KC1AB495258',
    car_make: 'BMW',
    car_model: 'X5',
    price: 24373
  },
  {
    id: 'WAUAGAFDXEN710904',
    car_make: 'Volkswagen',
    car_model: 'Passat',
    price: 14950
  },
  {
    id: 'WAUDF68E55A006958',
    car_make: 'BMW',
    car_model: 'M3',
    price: 20307
  },
  {
    id: 'WAUDGAFL7CA205458',
    car_make: 'Chevrolet',
    car_model: 'Suburban 1500',
    price: 15344
  },
  {
    id: 'WAUUL58E95A401485',
    car_make: 'Chevrolet',
    car_model: 'Astro',
    price: 6157
  },
  {
    id: 'WAUVKAFR5AA133227',
    car_make: 'Volkswagen',
    car_model: 'GTI',
    price: 15589
  },
  {
    id: 'WBA3T3C5XF5402761',
    car_make: 'Nissan',
    car_model: 'NV2500',
    price: 12837
  }
];

let imeIprezime = document.querySelector('#unos');
let select = document.getElementById("auto-marka")

cars.forEach(e => {
  let marka = document.createElement('optgroup');
  marka.label = e.car_make;
  let model = document.createElement('option');
  model.textContent = e.car_model
  model.value = e.id;
  marka.appendChild(model);
  select.append(marka);
})

let btnKupi = document.querySelector('#btn-kupi')

let arr = [];

btnKupi.addEventListener('click', e => {
  e.preventDefault();
  let selektovano = select.value;
  let nadji = cars.find(e => {
    return e.id == selektovano
  })
  let objekat = {
    kupac: imeIprezime.value,
    marka: nadji.car_make,
    model: nadji.car_model,
    cena: nadji.price

  }
  console.log(objekat);
  arr.push(objekat);
  console.log(arr);
  ispis(objekat);

})

function ispis (invoice){
  let lista = document.querySelector('#item-list');
  let divInput = document.createElement('div')
  let kupacK = document.createElement('p')
  kupacK.innerHTML = invoice.kupac;
  let markaK = document.createElement('p')
  markaK.innerHTML = invoice.marka;
  let modelK = document.createElement('p')
  modelK.innerHTML = invoice.model;
  let cenaK = document.createElement('p')
  cenaK.innerHTML = invoice.cena;
  let btnDelete = document.createElement('button');
  btnDelete.textContent = 'OBRISI MEEEEE'
  btnDelete.addEventListener('click', e=>{
    e.target.parentElement.remove();
  })
  divInput.append(kupacK, markaK, modelK, cenaK, btnDelete);
  lista.appendChild(divInput)
  
}