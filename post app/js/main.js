
let form = document.getElementById("form");
let input = document.getElementById("input");
let mgs = document.getElementById("msg");
let posts = document.getElementById("posts");

//adiciona um ouvinte ao meu formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("botao clicado");
    formValidation();
});

//verificar se o input tem texto
let formValidation = () => {
    if(input.value === ""){
        console.log("Erro");
        msg.innerHTML = "Este canto não pode ficar vazio";
    }else{
        console.log("Sucesso");
        msg.innerHTML = "";
        acceptData ();
    }
};
//{}conjunto chave valor
let data = {};

let acceptData = ()=>{
    data["text"] = input.value;
    console.log(data);
};