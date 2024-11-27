document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Alterna visibilidade do menu em dispositivos móveis
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Scroll suave para seções ao clicar nos links do menu
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Ação para botão "Saiba Mais" no herói
    document.querySelector('.scroll-down').addEventListener('click', () => {
        document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
    });

    // Ação para botões de detalhes dos projetos (exemplo de alerta)
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Mais detalhes em breve!');
        });
    });

    // Exibição das imagens em tela cheia
    const projectImages = document.querySelectorAll('.project-card img');
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="" alt="Imagem do projeto">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const closeModal = modal.querySelector('.close');

    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

