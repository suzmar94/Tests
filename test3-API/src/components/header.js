import { getCompanyInfo } from "../service";

export const Header = () =>{
    const headerCompanyNameDiv = document.createElement('div');
    const headerCompanyName = document.createElement('p');

    const vlasnik = document.createElement('p');
    const year = document.createElement('p');

    getCompanyInfo().then(res =>{
        headerCompanyName.textContent = `Ime kompanije je: ${res.data.name}`;
        vlasnik.textContent = `Vlasnik: ${res.data.founder}`;
        year.textContent = `Godina osnivanja: ${res.data.founded}`;

        headerCompanyNameDiv.append(headerCompanyName, vlasnik, year);
    })
    return headerCompanyNameDiv;
}
