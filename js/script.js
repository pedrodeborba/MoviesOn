let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value == ""){
        document.querySelector(".slider").style.display = "none";
        document.querySelector("#lista-filmes").innerHTML = "Nenhum resultado encontrado";
    }
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=e1184196&s="+inputBuscarFilme.value, {mode: "cors"})
        .then((response) => response.json())
        .then((response)=> {
            if (response.Response === "False") {
                document.querySelector("#lista-filmes").innerHTML = "Nenhum resultado encontrado";
            } else {
                response.Search.forEach((item)=>{ 
                    console.log(response)  
                    let filme = new Filme(
                        item.imdbID,
                        item.Title,
                        item.Year,
                        null,
                        null,
                        item.Poster,
                        null,
                        null,
                        null,
                        null,
                        null,
                    );
                    filmes.push(filme);

                });
                listarFilmes(filmes);
            }
        });
        document.querySelector(".slider").style.display = "none";
    }
    return false;
};




let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.getElementsByClassName.display = "flex"
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filme").innerHTML = "";
    document.querySelector("#mostrar-filme").getElementsByClassName.display = "none";
    if(filmes.length > 0){
        filmes.forEach(async(filme)=>{
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick=()=>{
                detalhesFilme(filme.id);
            }
        });
    }
}





let detalhesFilme = async (id) => {
    fetch("https://www.omdbapi.com/?apikey=e1184196&i=" + id)
    .then((response)=> response.json())
    .then((response)=>{
        //Instanciar objeto da classe Filme
        console.log(response);
        let filme = new Filme(
            response.imdbID,
            response.Title,
            response.Year,
            response.Genre.split(","),
            response.Runtime,
            response.Poster,
            response.plot,
            response.Director,
            response.Actors.split(","),
            response.Awards,
            response.imdbRating
        )
        console.log(filme);
        document.querySelector("#mostrar-filme").appendChild(filme.getDetalhesFilme());

        document.querySelector("#btnSalvar").onclick = () =>{
            const textNode = btnSalvar.firstChild;
            btnSalvar.removeChild(textNode);
            btnSalvar.appendChild(document.createTextNode('Salvo'));

            let mudarCor = document.querySelector("#btnSalvar");
            mudarCor.setAttribute('style','width: 100px; height: 30px; margin-right: 10px; margin-top: 20px; background-color: #fff;color:#000;border-radius: 5px;');
            
            salvarFilme();
        }

        document.querySelector("#btnFechar").onclick = ()=>{
            document.querySelector("#input-buscar-filme").value = "";
            document.querySelector("#lista-filmes").style.display = "flex";
            document.querySelector("#mostrar-filme").innerHTML = "";
            document.querySelector("#mostrar-filme").style.display = "flex";
            document.querySelector(".slider").style.display = "flex";
        }

        document.querySelector("#btnDesfavoritar").onclick = () => {
            let filmesFavoritos = JSON.parse(localStorage.getItem('filmesFavoritos'));
            filmesFavoritos = filmesFavoritos.filter(capturaId => capturaId.id !== filme.id);
            localStorage.setItem('filmesFavoritos',JSON.stringify(filmesFavoritos));
            listarFavoritos();
        }



        document.querySelector("#lista-filmes").getElementsByClassName.display = "none";
        document.querySelector("#mostrar-filme").getElementsByClassName.display = "flex";
        
        salvarFilme = () => {
            let filmes = new Array();
            let filmesString = localStorage.getItem('filmesFavoritos');
            if(filmesString){
                filmes = JSON.parse(filmesString);
            }
        
            if (filmes.some(filmeId => filmeId.id === filme.id)){
                return;
            }
        
            filmes.push(filme);
            filmes = JSON.stringify(filmes);
            localStorage.setItem('filmesFavoritos', filmes);
            
        }
    });
}




let navFavoritos = document.querySelector("#nav-favoritos");
navFavoritos.onclick = () => {
    document.querySelector(".slider").style.display = "none";
    listarFavoritos();
}

listarFavoritos = () => {
    let filmesFavoritos = localStorage.getItem('filmesFavoritos');
    
    filmesFavoritos = JSON.parse(filmesFavoritos);
    let filmes = new Array();
    filmesFavoritos.forEach((item)=>{
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            item.genero,
            item.duracao,
            item.cartaz,
            item.direcao,
            item.elenco,
            item.classificacao,
            item.avaliacao
        );
        filmes.push(filme);
    });
    listarFilmes(filmes);
}


// voltar ao inicio
document.querySelector(".nav-link").onclick =()=>{
    document.querySelector("#lista-filmes").innerHTML = "";
    document.querySelector("#mostrar-filme").innerHTML = "";
    document.querySelector(".slider").style.display = "flex";
}
document.querySelector(".navbar-brand").onclick =()=>{
    document.querySelector("#lista-filmes").innerHTML = "";
    document.querySelector("#mostrar-filme").innerHTML = "";
    document.querySelector(".slider").style.display = "flex";
}




