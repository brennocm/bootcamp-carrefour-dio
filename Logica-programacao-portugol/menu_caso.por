programa
{
	
	funcao inicio()
	{
		escreva(" Opções: \n Tecla 1 - Abrir netflix \n Tecla 2 - Abrir Amazon Prime \n Tecla 3 - Abrir HBO MAX \n Tecla 4 - Sair \n")
		inteiro menu = 0
		escreva("\n Escreva sua opção: ")
		leia(menu)
		escolha(menu){
			caso 1:
				escreva (" Netflix selecionado \n")
				pare
			caso 2:
				escreva (" Amazon Prime selecionado \n")
				pare
			caso 3:
				escreva (" HBO MAX selecionado \n")
				pare
			caso 4:
				escreva (" Sair selecionado \n")
				pare
			caso contrario:
				escreva (" Número incorreto. Você deve escolher as opções 1, 2, 3 ou 4 \n" )
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 263; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */