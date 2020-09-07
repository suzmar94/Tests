document.querySelector('#btn-add').addEventListener('click', e=>{

    let companyNameLabel = document.querySelector('#txt-company-name');
    let companyPibLabel = document.querySelector('#txt-company-pib');
    let timeLabel = document.querySelector('#txt-time');
    let valueLabel = document.querySelector('#txt-value');

    let invoiceInput = {
        company: companyNameLabel.value,
        pib: companyPibLabel.value,
        date: timeLabel.value,
        value: valueLabel.value
    }
    console.log(invoiceInput);

    //////pravimo da se resetuje
    companyNameLabel.value = '';
    companyPibLabel.value = '';
    timeLabel.value = '';
    valueLabel.value = '';

    createInvoiceDiv(invoiceInput); ///pravimo u producetku ovu funkciju, tj div ....u okviru nje gde ce da se pojavi uneti invoice input
});


/////pravim funkciju createInvoiceDiv gde cu napraviti divove itd. takodje dugme gde treba jos jedan event za brisanje

function createInvoiceDiv (invoice){

    let itemContainer = document.createElement('div');
    itemContainer.className = "item-container";
    let itemInfo = document.createElement('div');
    itemInfo.className = "item-info";
    let invoiceDetails = document.createElement('div');

    ////labels

    let name = document.createElement('label');
    name.className = 'company-name';
    name.innerHTML = invoice.company;
    let pib = document.createElement('label');
    pib.className = 'company-pib';
    pib.innerHTML = invoice.pib;
    let time = document.createElement('label');
    time.className = 'time-created';
    time.innerHTML = invoice.date;
    let price = document.createElement('label');
    price.className = 'price-value';
    price.innerHTML = invoice.value;

    invoiceDetails.append(name, pib, time, price);

    let divDate = document.createElement('div');
    divDate.innerHTML= new Date();
    
    itemInfo.append(invoiceDetails, divDate);

    ///////delete button and his add event listener
    let deleteButton = document.createElement('button');
    deleteButton.className = 'item-trashCan';
    deleteButton.textContent = 'DELETE';

    deleteButton.addEventListener('click', e=>{
        e.target.parentElement.remove();
    });

    itemContainer.append(itemInfo, deleteButton);
    document.querySelector('#item-list').append(itemContainer);

};
