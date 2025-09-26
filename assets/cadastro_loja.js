document.getElementById('formLoja').addEventListener('submit', function(e) {
  e.preventDefault();

  const lojinha = {
    nomeLoja: document.getElementById('nomeLoja').value,
    vendedor: document.getElementById('nomeVendedor').value,
    email: document.getElementById('emailContato').value,
    telefone: document.getElementById('telefone').value || "Não informado"
  };

  let lojas = JSON.parse(localStorage.getItem('lojas')) || [];

  lojs.push(loja);

  localStorage.setItem('lojas', JSON.stringify(lojas));

  alert("Loja cadastrada com sucesso!");
  this.reset();
});