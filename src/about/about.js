export const createAboutPage = () => {
    const divContent = document.getElementById('content');

    divContent.innerHTML = "";

    const h1 = document.createElement('h1');
    h1.textContent = "This is the about page";

    divContent.appendChild(h1);
} 