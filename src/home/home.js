export const createHomePage = () => {
    const divContent = document.getElementById('content');

    divContent.innerHTML = "";

    const h1 = document.createElement('h1');
    h1.textContent = "This is the home page";
    const h2 = document.createElement('h2');
    h2.textContent = "This is a practice project for The Odin Project";
    const p = document.createElement('p');
    p.textContent = "The project is to learn about create projects with webpack and Vanilla JS.";
    const img = document.createElement('img');
    img.setAttribute('src', '../assets/restaurant-image.jpg');

    [h1, h2, p, img].forEach(domEl => divContent.appendChild(domEl));
} 