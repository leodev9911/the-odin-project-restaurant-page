export const createMenuPage = () => {
    const divContent = document.getElementById('content');

    divContent.innerHTML = "";

    const h1 = document.createElement('h1');
    h1.textContent = "This is the menu page";

    divContent.appendChild(h1);
} 