function selecionarImgProduto1(imgMiniaturaEscolhida){
  document.getElementById("imgPrincipal").src = "img/produto1.png";
}

function selecionarImgProduto2(imgMiniaturaEscolhida){
  document.getElementById("imgPrincipal").src = "img/produto2.png";
}

function selecionarImgProduto3(imgMiniaturaEscolhida){
  document.getElementById("imgPrincipal").src = "img/produto3.png";
}

function selecionarImgProduto4(imgMiniaturaEscolhida){
  document.getElementById("imgPrincipal").src = "img/produto4.png";
}

function selecionarImgProduto5(imgMiniaturaEscolhida){
  document.getElementById("imgPrincipal").src = "img/produto5.png";
}

function mudarPreco(botaoEscolhido){
  if (botaoEscolhido.id == "btnModeloPreto"){
    document.getElementById('precoProduto').innerHTML ="R$36,90";
    document.getElementById('qtdDisponivel').innerHTML = "697 peças dísponíveis";
    selecionarImgProduto1()
  }

  else if(botaoEscolhido.id == "btnModeloAzul"){
    document.getElementById('precoProduto').innerHTML = "R$49,90";
    document.getElementById('qtdDisponivel').innerHTML = "213 peças disponíveis";
    selecionarImgProduto2()
  }

  else if(botaoEscolhido.id == "btnModeloVerde"){
    document.getElementById('precoProduto').innerHTML = "R$99,90";
    document.getElementById('qtdDisponivel').innerHTML = "84 peças disponíveis";
    selecionarImgProduto3()
  }

  else if(botaoEscolhido.id == "btnModeloCinza"){
    document.getElementById('precoProduto').innerHTML = "R$79,90";
    document.getElementById('qtdDisponivel').innerHTML = "145 peças disponíveis";
    selecionarImgProduto4()
  }

  else if(botaoEscolhido.id == "btnModeloRosa"){
    document.getElementById('precoProduto').innerHTML = "R$69,90";
    document.getElementById('qtdDisponivel').innerHTML = "119 peças disponíveis";
    selecionarImgProduto5()
  }
}

function mudarTamanho(botaoEscolhido){
  if(botaoEscolhido.id == "btnTamanhoP"){
    document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: P";
  }

  else if(botaoEscolhido.id == "btnTamanhoM"){
    document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: M";
  }

  else if(botaoEscolhido.id == "btnTamanhoG"){
    document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: G";
  }

  else if(botaoEscolhido.id == "btnTamanhoGG"){
    document.getElementById("tamanhoSelecionado").innerHTML = "Tamanho Selecionado: GG";
  }
}