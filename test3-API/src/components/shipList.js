import { Ships } from "./podaciOBrodovima";

export const ShipList = (arr) => {

    const shipList = document.createElement('div');
    shipList.className = 'launch-list';

    arr.forEach(el => {
        shipList.appendChild(Ships(el));
    });

    return shipList;
}
