// Componentes compartidos

// Función para crear un elemento de producto
function createProductElement(name, price, description) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
        <h3>${name}</h3>
        <p>Precio: $${price}</p>
        <p>${description}</p>
    `;
    return productDiv;
}

// Función para mostrar una alerta
function showAlert(message) {
    alert(message);
}

// Función para cargar componentes HTML
async function loadComponent(url, container) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Cargar componentes en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('components/header.html', document.querySelector('header'));
    loadComponent('components/footer.html', document.querySelector('footer'));
});