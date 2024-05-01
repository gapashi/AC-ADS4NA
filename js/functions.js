/**********************************************************************************
 * AVALIAÇÃO CONTINUADA DAS DISCIPLINAS:
 * Design Web e Web Programming for Front-End
 * 
 * ENTREGA: 02/05/2024
 * 
 * ALUNAS: Ana Julia Santos Afonso; Gabriella Parente Shibata
 * 
 * VERSÃO: 1.5
 ************************************************************************************/

// FUNÇÃO PARA CHAMAR OS DADOS DA API E LINKAR COM OS CARDS EM IMAGENS
function getDataFromAPI() {
  fetch('https://valorant-api.com/v1/agents')
    .then(response => response.json())
    .then(data => {
      // Chama a função para ligar os dados da API às imagens dos cards
      updateCardsWithData(data);
    })
    .catch(error => {
      console.error('Erro ao obter os dados da API:', error);
    });
}

// Função para ligar os dados da API às imagens dos cards
function updateCardsWithData(data) {
  const cardImages = document.querySelectorAll(".card img");

  cardImages.forEach((img, index) => {
    img.src = data[index].image;
    img.alt = data[index].name;

    // Adiciona um evento de clique na imagem para exibir os detalhes
    img.addEventListener("click", () => showDetails(data[index]));
  });
}

// Função para exibir os detalhes do personagem
function showDetails(character) {
  // Cria um elemento para os detalhes do personagem
  const detailsElement = document.createElement("div");
  detailsElement.classList.add("character-details");

  // Preenche o elemento com os detalhes do personagem
  detailsElement.innerHTML = `
  <h2>${character.name}</h2>
  <img src="${character.image}" alt="${character.name}">
  <p>${character.details}</p>
`;

  // Adiciona os detalhes do personagem ao documento
  document.body.appendChild(detailsElement);

  alert(character.details);
}

// Chama a função para obter os dados da API quando a página carregar
window.onload = getDataFromAPI;


// FUNÇÃO PARA MOSTRAR E ESCONDER MENU TOGGLE QUANDO PASSA O MOUSE
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

menuToggle.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show'); // Alterna a classe 'show' para mostrar/esconder
});

