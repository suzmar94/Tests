let posts = [
    {
        text: 'neki text 1',
        postImg: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        likes: 3,
        comments: ['com1', 'com2']
    },
    {
        text: 'neki text 2',
        postImg: 'https://purepng.com/public/uploads/large/purepng.com-mariomariofictional-charactervideo-gamefranchisenintendodesigner-1701528634653vywuz.png',
        likes: 0,
        comments: []
    },
    {
        text: 'neki text 3',
        postImg: 'https://i.stack.imgur.com/ILTQq.png',
        likes: 10,
        comments: []
    }
]

//////povezivanje

const divGlavni = document.querySelector('#posts');
const search = document.querySelector('#search');

search.addEventListener(('input'), (e) => {
    repaint(posts.filter(el => el.text.includes(search.value)));
})//

//////kreiranje postova
function repaint(postovi) {
    divGlavni.innerHTML = '';//prazan string, da se obrise sve 
    postovi.sort((a, b) => b.likes - a.likes);//da se sortiraju po onom koji ima najvise lajkova
    
    postovi.forEach(el => {
        let div = document.createElement('div');

        let tekst = document.createElement('p'); //za svaki objekad kreira se jedan p
        tekst.textContent = el.text;

        let slika = document.createElement('img');
        slika.src = el.postImg;
        slika.style.width = '100px'
        slika.style.height = '100px'

        let lajks = document.createElement('p');
        lajks.textContent = el.likes;

        let koments = document.createElement('p');
        koments.innerHTML = el.comments;

        let komentInput = document.createElement('input');
        komentInput.type = 'text'
        komentInput.placeholder = "Unesite neki komentar..."

        komentInput.addEventListener('keypress', (e) => {
            if (e.key == 'Enter') {
                let noviKomentar = komentInput.value;
                el.comments.push(noviKomentar);
                koments.innerHTML = el.comments; 
            }
        });

        let button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Like'
        button.addEventListener('click', () => {
            lajks.textContent = el.likes++
            repaint(postovi);//ceo niz joj se prosledjuje, ponovo sve iscrtava
        });

        div.addEventListener(('mouseenter'), (e)=> {
            div.classList.add('zoomin');
        });

        div.addEventListener(('mouseleave'), (e)=> {
            div.classList.remove('zoomin');
        });

        div.className = 'post';
        div.appendChild(tekst);
        div.appendChild(slika);
        div.appendChild(lajks);
        div.appendChild(koments);
        div.appendChild(komentInput);
        div.appendChild(button);

        divGlavni.appendChild(div);

    });
};

repaint(posts);