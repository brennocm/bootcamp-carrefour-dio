programa
{
	funcao inicio()
	{
		cadeia aluno
		real nota1, nota2, nota3, nota4, media
		
		escreva("Digite o nome do aluno: ")
		leia(aluno)
		escreva("Digite a nota 1 de " + aluno + " :")
		leia(nota1)
		escreva("Digite a nota 2 de " + aluno + " :")
		leia(nota2)
		escreva("Digite a nota 3 de " + aluno + " :")
		leia(nota3)
		escreva("Digite a nota 4 de " + aluno + " :")
		leia(nota4)
		media = (nota1 + nota2 + nota3 + nota4)/4
		escreva("A média aritmética de " + aluno + " é: " + media)
		se(media >= 7){
			escreva(". Por conta disso, o aluno " + aluno + " foi aprovado")
		} senao{
			escreva(". Por conta disso, o aluno " + aluno + " foi reprovado")
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 67; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */