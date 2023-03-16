let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=e1184196&s="+inputBuscarFilme.value, {mode: "cors"})
        .then((response) => response.json())
        .then((response)=> {
            response.Search.forEach((item)=>{   
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
        });

    }
    return false;
};



let listarFilmes = async (filmes) => {
    let listaFilmes = await document.querySelector("#lista-filmes")
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if(filmes.length > 0){
        filmes.forEach(async(filme)=>{
            listaFilmes.appendChild(await filme.getCard());
        });
    }
}

