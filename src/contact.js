export default function loadContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    content.appendChild(headline);

    const contactInfo = document.createElement('p');
    contactInfo.textContent = 'Email: contact@restaurant.com | Phone: +123456789';
    content.appendChild(contactInfo);
}
