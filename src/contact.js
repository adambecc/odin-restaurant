export default function loadContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us!';
    headline.classList.add('contact-headline'); 
    content.appendChild(headline);

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Email: restaurant@odin.org | Phone: +370 (777) 666 999';
    contactInfo.classList.add('contact-info'); 
    content.appendChild(contactInfo);
}
