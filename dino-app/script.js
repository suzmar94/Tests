let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]
let invoices = [];
let invoiceIdGenerator = 0;

let selectDino = document.querySelector('.select-field')

dinos.forEach(element => {
    let option = document.createElement('option')
    option.value = element.id
    option.textContent = `${element.name}, ${element.cena} RSD`
    selectDino.appendChild(option)
})
let naruciDugme = document.querySelector('#naruci')

naruciDugme.addEventListener('click', e => {
    e.preventDefault();
    let kupac = document.querySelector('#kupac')
    let napomena = document.querySelector('.textarea-field')
    let meni = selectDino.value;
    

    let findDino = dinos.find((element) => {
        return element.id == meni;
    });
   
   if (
       kupac.value.trim() !== ''
    && kupac.value.trim().length > 4
    && selectDino.value.trim() !== '') {

        let invoiceInput = {
            id: invoiceIdGenerator++,
            kupac:kupac.value,
            izabraniDino: findDino.name,
            napomena: napomena.value == '' ? '/' : napomena.value,
            cena: findDino.cena
        }
        
    
        invoices.push(invoiceInput);
    
        console.log(invoiceInput);
        ispisPorudzbine(invoiceInput);

    }else{
        alert('Error, Kupac input must not be empty neither smaller then 4 chars!')
    }
});

function ispisPorudzbine(invoice){
    let div = document.querySelector('#item-container');
    let invoiceDiv = document.createElement('div');

    let name = document.createElement('p');
    name.innerHTML = invoice.kupac;
    let dinos = document.createElement('p');
    dinos.innerHTML = invoice.izabraniDino;
    let napo = document.createElement('p');
    napo.innerHTML = invoice.napomena;
    let price = document.createElement('p');
    price.innerHTML = invoice.cena;

    invoiceDiv.append(name, dinos, napo);
    div.appendChild(invoiceDiv);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "OBRISI";
    deleteButton.addEventListener('click', (e) => {
        e.target.parentElement.remove();
        invoices = invoices.filter(e => e.id != invoice.id);
        console.log(invoices);


})
    invoiceDiv.appendChild(deleteButton);
    document.querySelector('#btn-all').addEventListener("click", (e) => {
        console.log(invoices);
})
}