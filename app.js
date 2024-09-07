function pesquisarProjetos() {
    // Função responsável por pesquisar e exibir os projetos hídricos na seção de resultados.
  
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
  
    let campoPesquisa = document.getElementById("campoPesquisa").value;

    let resultados = "";
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.

    let titulo = "";

    let descricao = "";

    if(!campoPesquisa){
        section.innerHTML = "<p>Digite um argumento para pesquisa.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()  
    

    for (let projetosHidrico of projetosHidricos) {
        titulo = projetosHidrico.titulo.toLocaleLowerCase();
        descricao = projetosHidrico.descricao.toLocaleLowerCase();

      // Itera sobre cada projeto na lista de projetos hídricos.
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
                <div class="item-resultado">
                <h2>${projetosHidrico.titulo}</h2>
                <p class="descricao-meta">${projetosHidrico.descricao}</p>
                <a href=${projetosHidrico.link} target="_blank">Mais informações</a>
                </div>
            `;
            // Cria um novo elemento HTML <div> para cada projeto, 
            // adicionando o título, descrição e link do projeto.
            // Concatena o HTML gerado à string 'resultados'.
      }
    }

    if(!resultados) {
        section.innerHTML = "<p>Nenhum resultado correponde ao termo pesquisado.</p>"
        return
    }
  
    section.innerHTML = resultados;
    // Atribui o conteúdo HTML gerado à seção de resultados.
  }