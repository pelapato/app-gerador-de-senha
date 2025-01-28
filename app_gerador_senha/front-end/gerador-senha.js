const tokens_letras_mi = ["a",'b','c','d','e','d','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const tokens_numeros = [0,1,2,3,4,5,6,7,8,9]
const tokens_simbolos = [',','.','+','-','_','&','*','#','=','^','@',';','$','%','(',')']
const tokens_letras_ma= ["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const senha_texto = document.querySelector('#campo-1>strong')
const input_range=document.querySelector('input[type=range]')
const num_tam = document.querySelector('#s-1>article>i')
const checkboxs = [...document.querySelectorAll('input[type=checkbox]')]

//1-minuscula,2-maiuscula,3-simbolos,4-numeros
var opc_mi = false
var opc_ma = false
var opc_simb = false
var opc_num = false


const btn_gerar_senha = document.querySelector('#btn_gerar_senha').addEventListener('click',()=>{
    checkboxs.map((e)=>{
        if(e.checked){
            console.log('true: '+e.id)
            if(e.id=="letra-ma"){
                opc_ma=true
            }else if(e.id=="letra-mi"){
                opc_mi=true
            }else if(e.id=="simbolos"){
                opc_simb=true
            }else if(e.id=="numeros"){
                opc_num=true
            }else if(e.id != 'letras-ma'){
                opc_ma=false
            }else if(e.id != 'letras-mi'){
                opc_mi=false
            }else if(e.id != 'numeros'){
                opc_num=false
            }else if(e.id != 'simbolos'){
                opc_simb=false
            }
        }
        gerar_senha(input_range.value)
    })
})

function tam_senha(){
    num_tam.innerHTML=input_range.value
}

function gerar_senha(tamanho_caracteres){
    let senha = ""
    for(let x=0;x<=tamanho_caracteres;++x){
        const checked_verificacao = (opc_mi && opc_ma==false) ? sort = Math.floor(Math.random()*tokens_letras_mi.length) : sort = Math.floor(Math.random()*tokens_letras_ma.length) 
        const checked_verificacao_2 = (opc_mi && opc_ma) ? sort = Math.floor(Math.random()*[...tokens_letras_mi,...tokens_letras_ma].length) : null
        const checked_verificacao_3 = (opc_simb && opc_ma==false && opc_mi==false) ? sort = Math.floor(Math.random()*[...tokens_simbolos].length) : null
        const checked_verificacao_4 = (opc_simb && opc_ma) ? sort = Math.floor(Math.random()*[...tokens_letras_ma,...tokens_simbolos].length) : null
        const checked_verificacao_5 = (opc_simb && opc_mi) ? sort = Math.floor(Math.random()*[...tokens_letras_mi,...tokens_simbolos].length) : null
        const checked_verificacao_6 = (opc_simb && opc_mi && opc_ma==true && opc_num==false) ? sort = Math.floor(Math.random()*[...tokens_letras_mi,...tokens_simbolos,...tokens_letras_ma].length) : null
        const checked_verificacao_7 = (opc_simb==false && opc_mi==true && opc_ma==false && opc_num==true) ? sort = Math.floor(Math.random()*[...tokens_numeros,...tokens_letras_mi].length) : null
        const checked_verificacao_8 = (opc_simb==false && opc_mi==false && opc_ma==true && opc_num==true) ? sort = Math.floor(Math.random()*[...tokens_numeros,...tokens_letras_ma].length) : null
        const checked_verificacao_9 = (opc_simb==false && opc_mi==true && opc_ma==true && opc_num==true) ? sort = Math.floor(Math.random()*[...tokens_numeros,...tokens_letras_ma,...tokens_letras_mi].length) : null
        const checked_verificacao_10 = (opc_simb==true && opc_mi==false && opc_ma==false && opc_num==true) ? sort = Math.floor(Math.random()*[...tokens_numeros,...tokens_simbolos].length) : null
        const checked_verificacao_11 = (opc_simb==true && opc_mi==true && opc_ma==true && opc_num==true) ? sort = Math.floor(Math.random()*[...tokens_numeros,...tokens_letras_ma,...tokens_letras_mi,...tokens_simbolos].length) : null
        const checked_verificacao_12 = (opc_simb==true && opc_mi==true && opc_ma==false && opc_num==true) ? sort = Math.floor(Math.random()*[...tokens_numeros,...tokens_letras_mi,...tokens_simbolos].length) : null
        const checked_verificacao_13 = (opc_simb==true && opc_mi==false && opc_ma==true && opc_num==true) ? sort = Math.floor(Math.random()*[...tokens_numeros,...tokens_letras_ma,...tokens_simbolos].length) : null

        if(opc_mi && opc_ma==false && opc_simb==false && opc_num==false){
            senha += tokens_letras_mi[sort]
        }
        else if(opc_mi==false && opc_ma && opc_simb==false && opc_num==false){
            senha += tokens_letras_ma[sort]
        }
        else if(opc_mi && opc_ma && opc_simb==false && opc_num==false){
            senha += [...tokens_letras_mi,...tokens_letras_ma][sort]
        }
        else if(opc_ma==false && opc_simb && opc_mi==false && opc_num==false){
            senha += [...tokens_simbolos][sort]
        }
        else if(opc_ma && opc_simb && opc_mi==false && opc_num==false){
            senha += [...tokens_letras_ma,...tokens_simbolos][sort]
        }
        else if(opc_mi && opc_simb && opc_ma==false && opc_num==false){
            senha += [...tokens_letras_mi,...tokens_simbolos][sort]
        }
        else if(opc_mi && opc_simb && opc_ma && opc_num==false && opc_num==false){
            senha += [...tokens_letras_mi,...tokens_letras_ma,...tokens_simbolos][sort]
        }
        else if(opc_mi==false && opc_simb==false && opc_ma==false && opc_num==true){
            senha += [...tokens_numeros][sort]
        }
        //num
        else if(opc_mi==true && opc_simb==false && opc_ma==false && opc_num==true){
            senha += [...tokens_numeros,...tokens_letras_mi][sort]
        }
        else if(opc_mi==false && opc_simb==false && opc_ma==true && opc_num==true){
            senha += [...tokens_numeros,...tokens_letras_ma][sort]
        }
        else if(opc_mi==true && opc_simb==false && opc_ma==true && opc_num==true){
            senha += [...tokens_numeros,...tokens_letras_ma,...tokens_letras_mi][sort]
        }
        else if(opc_mi==false && opc_simb==true && opc_ma==false && opc_num==true){
            senha += [...tokens_numeros,...tokens_simbolos][sort]
        }
        else if(opc_mi==true && opc_simb==true && opc_ma==false && opc_num==true){
            senha += [...tokens_numeros,...tokens_simbolos,...tokens_letras_mi][sort]
        }
        else if(opc_mi==false && opc_simb==true && opc_ma==true && opc_num==true){
            senha += [...tokens_numeros,...tokens_simbolos,...tokens_letras_ma][sort]
        }
        else if(opc_mi && opc_simb && opc_ma && opc_num){
            senha += [...tokens_numeros,...tokens_letras_ma,...tokens_letras_mi,...tokens_simbolos][sort]
        }
    }
    senha_texto.innerHTML=senha
}
gerar_senha(input_range.value)