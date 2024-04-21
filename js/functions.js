// fetch('https://valorant-api.com/v1/agents', {
//   method: 'GET',
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // Processe os dados da API aqui
//   })
//   .catch(error => console.error('Erro:', error));

const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

menuToggle.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show'); // Alterna a classe 'show' para mostrar/esconder
});