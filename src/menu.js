export default function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu:';
    headline.classList.add('menu-headline'); 
    content.appendChild(headline);

    const categories = [
        {
            title: 'Entrees',
            items: [
                { name: 'Røkt Laks (Smoked Salmon)', price: '$8' },
                { name: 'Koldtbord (Norwegian Cold Cuts)', price: '$7' },
                { name: 'Koldtbord Med Eggerøre (Cold Cuts with Scrambled Eggs)', price: '$9' },
            ],
        },
        {
            title: 'Main Dish',
            items: [
                { name: 'Raspeballer (Potato Dumplings)', price: '$14' },
                { name: 'Kjøttkaker (Norwegian Meatballs)', price: '$15' },
                { name: 'Grillet Laks (Grilled Salmon)', price: '$18' },
            ],
        },
        {
            title: 'Desserts',
            items: [
                { name: 'Kvæfjordkake (Norwegian Almond Cake)', price: '$6' },
                { name: 'Riskrem (Rice Pudding)', price: '$5' },
                { name: 'Lefse (Norwegian Flatbread)', price: '$4' },
            ],
        },
        {
            title: 'Drinks',
            items: [
                { name: 'Kaffe (Norwegian Coffee)', price: '$3' },
                { name: 'Solo (Norwegian Soft Drink)', price: '$4' },
                { name: 'Aquavit', price: '$5' },
            ],
        },
    ];
    
    categories.forEach(category => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.title;
        categoryTitle.classList.add('menu-category'); 
        content.appendChild(categoryTitle);

        category.items.forEach(item => {
            const menuItem = document.createElement('p');
            menuItem.textContent = `${item.name} - ${item.price}`;
            menuItem.classList.add('menu-item'); 
            content.appendChild(menuItem);
        });
    });
}
