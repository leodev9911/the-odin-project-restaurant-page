import { createHomePage } from "./home/home";
import { createMenuPage } from "./menu/menu";
import { createAboutPage } from "./about/about";

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

createHomePage();
homeButton.addEventListener('click', createHomePage);
menuButton.addEventListener('click', createMenuPage);
aboutButton.addEventListener('click', createAboutPage);