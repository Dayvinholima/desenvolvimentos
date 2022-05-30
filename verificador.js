function verificar(){

    var ano = document.getElementById("txtano")
    var campovazio = (ano.value == "")  
    var resposta = document.getElementById("resposta")
    var sex = document.getElementsByName("radsex")
    var genero = ''

    
    if(campovazio){
        resposta.innerHTML = `Favor preencher todos os campos` 
    }
    }
  
    
    if(sex[0].checked){
        genero = "Masculino"
    }
    else if(sex[1].checked){
        genero = "Feminino"
    

    
    resposta.innerHTML = `Seu gênero é ${genero} e Sua idade é ${2022 - ano.value} anos`
 var loginBranco = new bootstrap.Modal(document.getElementById("campoBranco"))
}