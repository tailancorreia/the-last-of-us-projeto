/*
OBJETIVO -  quando clicarmor no botão temos que mostrar a imagem correspondente

- passo 1 dar um jeito de pegar o elemento HTML dos botões

- passo 2 dar um jeito de identificar o clique do usuáriono botão

- passo 3 desmarcar o botão selecionado anterior

- passo 4 marcar o botão clicado como se estivesse selecionado

- passo 5 esconder a imagem ativa de fundo 

- passo 6 fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// -passo 1 dar um jeito de pegar o elemento HTML dos botões

const botoesCarrossel = document.querySelectorAll('.botao');
console.log(botoesCarrossel);
const imagens = document.querySelectorAll('.imagem');

//- passo 2 dar um jeito de identificar o clique do usuáriono botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // - passo 3 desmarcar o botão selecionado anterior
        const boataoSelecionado = document.querySelector('.selecionado');
        boataoSelecionado.classList.remove('selecionado');

        //- passo 4 marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // - passo 5 esconder a imagem ativa de fundo
        const imagemativa = document.querySelector('.ativa')
        imagemativa.classList.remove('ativa');

        //- passo 6 fazer aparecer a imagem de fundo correspondente ao botão clicado
        console.log(imagens);
        imagens[indice].classList.add('ativa');
        
    


    })
})