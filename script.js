const projetos = [
    {
        titulo: "Sistema bancário em Java",
        descricao: "Um sistema simples com depósitos e saques.",
        link: "https://github.com/seuusuario/seuprojeto"
    },
    {
        titulo: "Quiz em JavaScript",
        descricao: "Quiz com barra de progresso e perguntas dinâmicas.",
        link: "#"
    }
];

function carregarProjetos() {
    const container = document.getElementById("lista-projetos");

    projetos.forEach(proj => {
        const card = document.createElement("div");
        card.classList.add("projeto-card", "hidden");

        card.innerHTML = `
            <h3>${proj.titulo}</h3>
            <p>${proj.descricao}</p>
            <a href="${proj.link}" target="_blank">Ver projeto</a>
        `;

        container.appendChild(card);
    });
}

carregarProjetos();

// Intersection Observer para animações de scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Opcional: remover a classe se quiser que a animação repita ao subir
            // entry.target.classList.remove('show');
        }
    });
});

// Seleciona todos os elementos com a classe .hidden
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
