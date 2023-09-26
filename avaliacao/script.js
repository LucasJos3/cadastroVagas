const orderList = document.getElementById("user_list");
const fakeDados = [
  {
    nomeProprietario: "Lucas",
    blocoApartamento: "A",
    numeroVaga: 4,
    ModeloDoCarro: "Corsa",
  },
  {
    nomeProprietario: "Joao",
    blocoApartamento: "B",
    numeroVaga: 6,
    ModeloDoCarro: "Palio",
  },
  {
    nomeProprietario: "Isabella",
    blocoApartamento: "C",
    numeroVaga: 1,
    ModeloDoCarro: "Vectra",
  },
];

fakeDados.forEach((nomeProprietario) => {
  console.log("Proprietario", fakeDados.nomeProprietario);
});

mostrarDados();
function mostrarDados() {
  setTimeout(() => {
    addDadosToScreen(fakeDados);
  });
}

function addDadosToScreen(dados) {
  for (let i = 0; i < dados.length; i++) {
    const li = document.createElement("li");
    li.textContent =
      "Nome: " +
      fakeDados[i].nomeProprietario +
      ", Bloco: " +
      fakeDados[i].blocoApartamento +
      ", Vaga: " +
      fakeDados[i].numeroVaga +
      ", Modelo do carro :" +
      fakeDados[i].ModeloDoCarro;
    orderList.appendChild(li);
  }
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
