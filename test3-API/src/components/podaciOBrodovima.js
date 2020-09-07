export const Ships = (ship) => {

    const shipContainer = document.createElement('div');
    shipContainer.className = 'launch';
    shipContainer.innerHTML = '';

    const div0 = document.createElement('div');
    div0.className = 'inner-div-0';
    const img = document.createElement('img');
    img.src = ship.image;
    const imageContainer = document.createElement('a');
    imageContainer.setAttribute('href', ship.url);
    imageContainer.setAttribute('target', '_blank');
    imageContainer.append(img);
    div0.append(imageContainer);

    const div1 = document.createElement('div');
    div1.className = 'inner-div-1';
    const span1 = document.createElement('span');
    span1.textContent = ship.ship_name;
    div1.appendChild(span1);

    const div2 = document.createElement('div');
    div2.className = 'inner-div-2';
    const span2 = document.createElement('span');
    span2.textContent = ship.ship_type;

    let status = document.createElement('div');
    status = ship.active ? "active": "not active";
    div2.append(span2, document.createElement('br'), status);

    shipContainer.append(div0, div1, div2);

    return shipContainer;

};


