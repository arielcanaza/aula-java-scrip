const input = document.getElementById("taskInput");  //Input

const ul = document.getElementById("tasKList"); //lista

function addTask() {// aqui criamos uma função para ser atribuida dentro do botão

    if (input.value !== "") {
        //aqui informamos que se (if) o input for diferente (!==) de vazio (""), ele irá criar um elemento (createElement) de "li". o texto que ela possui é igual o "input value", ou seja, o valor do input que será digitado 

        const li = document.createElement("li")
        li.textContent = input.value;
        //traduzindo esta linha, é que o texto de lista (li) que será criado, deverá ser igual o valor que será digitado dentro do campo "input".

        const removerBotao = document.createElement("button")
        //aqui estamos criando um botão (button) para remover esses itens de (li);

        removerBotao.textContent = "remover";
        //chamamos nossa variavel "removerbotão"e inserindo nele um texto chamado "remover".

        removerBotao.onclick = function () {
            //criamos uma finção. que ao clicar neste botão ele irá executar uma função.

            ul.removeChild(li); //A função é pegar o elemento filho (child) da UL, que no caso é a "li" e remove-la.
        };

        ul.appendChild(li) //Estamos adicionando um filho para nossa UL.
        li.appendChild(removerBotao); //Aqui chamamos nossa const "li e estamos adicionando a ela um filho" (appendchild)

        input.value = ""; //usado para limpar o campo input, depois de adicionado o item em questão.
    }
    
    else { //caso o campo input estiver vazio, ele ira aparecer esta mensagem.
        alert("por favor, insira uma tarefa");
    }

    }