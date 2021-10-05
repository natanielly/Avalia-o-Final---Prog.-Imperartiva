class curso{
    nomeCurso;
    notaAprovacao;
    faltaMaxima;
    estudantes = [aluno];
    addaluno(aluno){
        estudantes[estudantes.size()] = aluno;
    }
    varificaAprovado(aluno){
       if(aluno.calculaMedia(nota)>= notaAprovacao && faltaMaxima > aluno.quantidadeFaltas){
           return true;
       }else if(faltaMaxima == aluno.quantidadeFaltas && aluno.calculaMedia(nota) > (notaAprovacao+notaAprovacao*0.1)){
        return true;
       }else{
           return false;
       }
    }
}