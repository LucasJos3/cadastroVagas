const orderList = document.getElementById("user-list");
const fakeDados = [
  {
    nomeProprietario: "Lucas",
    blocoApartamento: "A",
    numeroVaga: 4,
  },
  {
    nomeProprietario: "Joao",
    blocoApartamento: "B",
    numeroVaga: 6,
  },
  {
    nomeProprietario: "Isabella",
    blocoApartamento: "C",
    numeroVaga: 1,
  },
];

mostrarDados();
function mostrarDados() {
  setTimeout(() => {
    addDadosToScreen(fakeDados);
  });
}
function addDadosToScreen(dados) {
  dados.forEach((dados) => {
    const li = document.createElement("li");
    li.textContent = fakeDados[0];
    orderList.appendChild(li);
  });
}

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const json = {};

  for (const [key, value] of formData.entries()) {
    json[key] = value;
  }

  console.log(json);

  form.reset();
  alert("Cadastro Realizado com sucesso");
});
