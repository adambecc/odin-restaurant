import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';
import './styles.css';


function initializeNavigation() {
    document.getElementById('home-btn').addEventListener('click', loadHomePage);
    document.getElementById('menu-btn').addEventListener('click', loadMenuPage);
    document.getElementById('contact-btn').addEventListener('click', loadContactPage);
}

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
    initializeNavigation();
});
