export default function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    content.appendChild(headline);

    const menuItems = [
        { name: 'Pizza', price: '$10' },
        { name: 'Pasta', price: '$12' },
        { name: 'Salad', price: '$8' },
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('p');
        menuItem.textContent = `${item.name} - ${item.price}`;
        content.appendChild(menuItem);
    });
}
