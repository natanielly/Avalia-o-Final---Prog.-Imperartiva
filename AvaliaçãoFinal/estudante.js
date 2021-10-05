class aluno{
    nome;
    quantidadeFaltas;
    nota = [];
    constructor(nome, quantidadeFaltas, nota){
        this.nome = nome;
        this.quantidadeFaltas = quantidadeFaltas;
        this.nota = nota;

    }

    calculaMedia(nota) {
        var soma;
        for(i=0;i < nota.size(); i++){
          soma = nota[i]+soma;  
        }
        return soma/nota.size();
    }

    faltas(quantidadeFaltas){
        this.quantidadeFaltas = this.quantidadeFaltas + quantidadeFaltas;
    }
}
