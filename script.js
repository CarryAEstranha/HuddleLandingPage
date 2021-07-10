// FUNÇÃO QUE ABRE AS REDES SOCIAIS
function openSite(props){
    // Verifica qual site
    if(props == "facebook"){ // Caso Facebook
        // Abre o Facebook
        window.open("https://www.facebook.com");
    }
    if(props == "twitter"){ // Caso Twitter
        // Abre o Twitter
        window.open("https://twitter.com");
    }
    if(props == "instagram"){ // Caso Instagram
        // Abre o Instagram
        window.open("https://www.instagram.com");
    }
}

// FUNÇÃO OPS
function ops(){
    // Alerta mensagem
    alert("Ops! Volte mais tarde");
}