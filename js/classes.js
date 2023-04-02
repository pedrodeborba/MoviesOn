// class Ator
// {
//     constructor(id, nome){
//         this.nome = nome;
//         this.id = id
//     }
// }

// class Diretor
// {
//     constructor(id, nome){
//         this.nome = nome;
//         this.id = id
//     }
// }

class Filme
{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao)
    {
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.cartaz = cartaz;
        this.sinopse = sinopse;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;
    }

    getCard = async () => {
        let card = document.createElement("div");
        card.setAttribute("class","card");
        card.setAttribute('style','height: 500px')
    
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class","card-img-top");
        imgCartaz.setAttribute("src", this.cartaz);
    
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
    
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class","hCardTitle");
    
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content space-around;");
    
        let divGenero = document.createElement("div");
        divGenero.setAttribute("style","flex-grow: 1;");
    
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow: 1;");
    
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow: 1;");
    
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));
        divDetalhes.appendChild(divAnoProducao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());
    
        return card;
    }

    setBtnDetalhes = () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes;
    }

    getDetalhesFilme = () =>{ 
        let divFilmes = document.querySelector("#lista-filmes");
        divFilmes.innerHTML = "";

        let card = document.createElement("div");
        card.setAttribute("class","card2");
        card.setAttribute("style","width: 100%; display:flex; align-items: center; justify-content: center; background-color: transparent; border:none");

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class","card-img-top");
        imgCartaz.setAttribute("src", this.cartaz);
        imgCartaz.setAttribute("style", "width: 100%; max-width: 300px; height: auto; border-radius: 10px");

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body2");
        cardBody.setAttribute("style", "width: 100%; text-align: center; margin-top: 20px");

        let divDetalhes = document.createElement("div");

        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class","hCardTitle");
        hCardTitle.setAttribute("style","color:#000; text-shadow: -1px -1px 0px #FFF,-1px 1px 0px #FFF,1px -1px 0px #FFF,1px 0px 0px #FFF; font-size: 1.2rem");

        let divGenero = document.createElement("div");
        divGenero.setAttribute("style","flex-grow: 1;");
        divGenero.setAttribute("style","margin-top: 10px; color: #000; font-size: 1rem");

        let divDuracao = document.createElement("div");
        divDuracao.setAttribute("style","flex-grow: 1;");
        divDuracao.setAttribute("style","margin-top: 10px; color: #000; font-size: 1rem");

        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style","flex-grow: 1;");
        divAnoProducao.setAttribute("style","margin-top: 10px; color: #000; font-size: 1rem");

        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style","flex-grow: 1;");
        divClassificacao.setAttribute("style","margin-top: 10px; color: #000; font-size: 1rem");

        let divDiretores = document.createElement("div");
        divDiretores.setAttribute("style","flex-grow: 1;");
        divDiretores.setAttribute("style","margin-top: 10px; color: #000; font-size: 1rem");

        let divAtores = document.createElement("div");
        divAtores.setAttribute("style","flex-grow: 1;");
        divAtores.setAttribute("style","margin-top: 10px; color: #000; font-size: 1rem");


        let mediaQuery = window.matchMedia('(max-width: 768px)');
        if (mediaQuery.matches) {
        card.setAttribute("style","width: 100%; display:flex; flex-direction: column; margin: 20px 0; align-items: center; justify-content: center; background-color: transparent; border:none");
        imgCartaz.setAttribute("style", "width: 100%; max-width: 300px; height: auto; border-radius: 10px; margin-bottom: 20px");
        hCardTitle.setAttribute("style","color:#000; text-shadow: -1px -1px 0px #FFF,-1px 1px 0px #FFF,1px -1px 0px #FFF;");
        }

        hCardTitle.appendChild(document.createTextNode(`"${this.titulo}"`));
        divGenero.appendChild(document.createTextNode(`Gênero: ${this.genero}`));
        divDuracao.appendChild(document.createTextNode(`Duração: ${this.duracao}`));
        divAnoProducao.appendChild(document.createTextNode(`Ano: ${this.ano}`));
        divDiretores.appendChild(document.createTextNode(`Direção: ${this.direcao}`));
        divAtores.appendChild(document.createTextNode(`Elenco: ${this.elenco}`));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));

        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divDiretores);
        divDetalhes.appendChild(divAtores);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        let btnSalvar = document.createElement('button');
        btnSalvar.appendChild(document.createTextNode('Favoritar'));
        btnSalvar.setAttribute('id','btnSalvar');
        btnSalvar.setAttribute('style','width: 100px; height: 30px; margin-right: 10px; margin-top: 20px; background-image: linear-gradient(to right bottom, #ff0000, #ff1334, #ff2c55, #ff4472, #ff598c);color:#fff;border-radius: 5px;');
        divDetalhes.appendChild(btnSalvar);

        let btnDesfavoritar = document.createElement('button');
        btnDesfavoritar.appendChild(document.createTextNode('Desfavoritar'));
        btnDesfavoritar.setAttribute('id','btnDesfavoritar');
        btnDesfavoritar.setAttribute('style','width: 100px; height: 30px; margin-top: 20px; margin-left: 10px; background-image: linear-gradient(to right bottom, #ff0000, #ff1334, #ff2c55, #ff4472, #ff598c);color:#fff;border-radius: 5px;');
        divDetalhes.appendChild(btnDesfavoritar);

        let btnFechar = document.createElement('button');
        btnFechar.appendChild(document.createTextNode('Fechar'));
        btnFechar.setAttribute('id','btnFechar');
        btnFechar.setAttribute('style','width: 70px; height: 30px; margin-top: 20px; margin-left: 20px; background-image: linear-gradient(to right bottom, #ff0000, #ff1334, #ff2c55, #ff4472, #ff598c);color:#fff;border-radius: 5px;');
        divDetalhes.appendChild(btnFechar);     


        let btnEditar = document.createElement('button');
        btnEditar.appendChild(document.createTextNode('Editar'));
        btnEditar.setAttribute('id','btnEditar');
        btnEditar.setAttribute('style','width: 70px; height: 30px; margin-left: 20px; margin-top: 20px; background-image: linear-gradient(to right bottom, #ff0000, #ff1334, #ff2c55, #ff4472, #ff598c);color:#fff;border-radius: 5px;');
        divDetalhes.appendChild(btnEditar);

        btnEditar.addEventListener('click', () => {
            btnFechar.remove();
            btnEditar.remove();
            btnDesfavoritar.remove();
            btnSalvar.remove();

            card.setAttribute("style","padding-top: 100px; width: 80%; display:flex; margin: 10px; align-items: center; justify-content: center; background-color: transparent; border:none");
            document.querySelector(".card-img-top").style.display="none";
            cardBody.style.display = "block";
            
            let div1 = document.createElement("div");
            div1.setAttribute('id','inforacoes');

            let inputTitulo = document.createElement('input');
            inputTitulo.setAttribute('type', 'text');
            inputTitulo.setAttribute('value', this.titulo);
            inputTitulo.setAttribute('style', 'width: 100%; height: 30px; border-radius: 10px; margin-bottom: 5px; display:block;');
            div1.appendChild(inputTitulo);

            let inputGenero = document.createElement('input');
            inputGenero.setAttribute('type', 'text');
            inputGenero.setAttribute('value', this.genero);
            inputGenero.setAttribute('style', 'width: 100%; height: 30px; border-radius: 10px; margin-bottom: 5px; display:block;');
            div1.appendChild(inputGenero);

            let inputDuracao = document.createElement('input');
            inputDuracao.setAttribute('type', 'text');
            inputDuracao.setAttribute('value', this.duracao);
            inputDuracao.setAttribute('style', 'width: 100%; height: 30px; border-radius: 10px; margin-bottom: 5px; display:block;');
            div1.appendChild(inputDuracao);

            let inputAnoProducao = document.createElement('input');
            inputAnoProducao.setAttribute('type', 'text');
            inputAnoProducao.setAttribute('value', this.ano);
            inputAnoProducao.setAttribute('style', 'width: 100%; height: 30px; border-radius: 10px; margin-bottom: 5px; display:block;');
            div1.appendChild(inputAnoProducao);

            let inputDirecao = document.createElement('input');
            inputDirecao.setAttribute('type', 'text');
            inputDirecao.setAttribute('value', this.direcao);
            inputDirecao.setAttribute('style', 'width: 100%; height: 30px; border-radius: 10px; margin-bottom: 5px; display:block;');
            div1.appendChild(inputDirecao);

            let inputElenco = document.createElement('input');
            inputElenco.setAttribute('type', 'text');
            inputElenco.setAttribute('value', this.elenco);
            inputElenco.setAttribute('style', 'width: 100%; height: 30px; border-radius: 10px; margin-bottom: 5px; display:block;');
            div1.appendChild(inputElenco);

            let inputClassificacao = document.createElement('input');
            inputClassificacao.setAttribute('type', 'text');
            inputClassificacao.setAttribute('value', this.classificacao);
            inputClassificacao.setAttribute('style', 'width: 100%; height: 30px; border-radius: 10px; margin-bottom: 5px; display:block;');
            div1.appendChild(inputClassificacao);

            let saveButton = document.createElement('button');
            saveButton.appendChild(document.createTextNode('Salvar'));
            saveButton.setAttribute('id','btnSave');
            saveButton.setAttribute('style','width: 100%; height: 30px; margin-top: 10px; background-image: linear-gradient(to right bottom, #ff0000, #ff1334, #ff2c55, #ff4472, #ff598c);color:#fff;border-radius: 5px;'); 

            saveButton.onclick = () => {
            hCardTitle.contentEditable = false;
            divGenero.contentEditable = false;
            divDuracao.contentEditable = false;
            divAnoProducao.contentEditable = false;
            divDiretores.contentEditable = false;
            divAtores.contentEditable = false;
            divClassificacao.contentEditable = false;
            saveMovie();
            }

            let saveMovie = () => {
                //titulo
                this.titulo = inputTitulo.value;
                hCardTitle.innerHTML = "";
                hCardTitle.innerHTML = this.titulo;
                //genero
                this.genero = inputGenero.value;
                divGenero.innerHTML = "";
                divGenero.innerHTML = this.genero;
                //duracao
                this.duracao = inputDuracao.value;
                divDuracao.innerHTML = "";
                divDuracao.innerHTML = this.duracao;
                //Ano
                this.ano = inputAnoProducao.value;
                divAnoProducao.innerHTML = "";
                divAnoProducao.innerHTML = this.ano;
                //direção
                this.direcao = inputDirecao.value;
                divDiretores.innerHTML = "";
                divDiretores.innerHTML = this.direcao;
                //Elenco
                this.elenco = inputElenco.value;
                divAtores.innerHTML = "";
                divAtores.innerHTML = this.elenco;
                //Classificacao
                this.classificacao = inputClassificacao.value;
                divClassificacao.innerHTML = ""
                divClassificacao.innerHTML = this.classificacao;

                localStorage.setItem('movie', JSON.stringify(Filme));
            }

            cardBody.appendChild(inputTitulo);
            cardBody.appendChild(inputGenero);
            cardBody.appendChild(inputDuracao);
            cardBody.appendChild(inputAnoProducao);
            cardBody.appendChild(inputDirecao);
            cardBody.appendChild(inputElenco);
            cardBody.appendChild(inputClassificacao);
            cardBody.appendChild(saveButton);

            
            

        });

        return card;

    }

}

