function minhaFuncao(valor){
    let escolha = document.getElementById('opçoes')

    if(escolha.value == 'Terror'){
        window.location.href = 'terror.html'
    }else if (escolha.value == 'Comédia'){
        window.location.href = 'comedia.html'
    }else if (escolha.value == 'Ação'){
        window.location.href = 'acao.html'
    }else if (escolha.value == 'Romance'){
        window.location.href = 'romance.html'
    }else if (escolha.value == 'Aventura'){
        window.location.href = 'aventura.html'
    }else if (escolha.value == 'Infantil'){
        window.location.href = 'infantil.html'
    }else if (escolha.value == 'Drama'){
        window.location.href = 'drama.html'
    }
    
}