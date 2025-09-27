document.getElementById('formLoja').addEventListener('submit', function(e) {
  e.preventDefault();

  const loja = {
    nomeLoja: document.getElementById('nomeLoja').value,
    vendedor: document.getElementById('nomeVendedor').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value || "Não informado"
  };

  let lojas = JSON.parse(localStorage.getItem('lojas')) || [];

  lojas.push(loja);

  localStorage.setItem('lojas', JSON.stringify(lojas));

  alert("Loja cadastrada com sucesso!");
  this.reset();
});