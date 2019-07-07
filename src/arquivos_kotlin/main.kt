import org.w3c.dom.HTMLDivElement
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.browser.window

//chamada inicial da aplicação
fun main(){
    montaMenu()
}

//aqui haverá a chamada para iniciar o jogo
fun play(){
    tipoJogo()
}
/******MÉTODOS DO MENU PRINCIPAL***************/

//informações sobre os modos de jogo
fun instrucoes(){
    val div = document.getElementById("meio")
    if(div!=null){
        println("sobre o projeto")
        div.innerHTML = """
            <div id="inicio">
            <img class="btn" src="img/ok.png" width=40 height=40 onclick ="Teste.montaMenu()">
            INSTRUÇÕES</div>
            <div id="inicio2">
                        <br>
            <p>Escolha entre um dos dois modos e divirta-se!</p>
            <P>CLÁSSICO: Relembre as melhores lembranças!</P>
            <P>MODERNO: Que tal um pouco de desafio?!</p>
            </div>
        """.trimMargin()
    }
}

//considerações sobre a aplicação
fun sobre(){
    val div = document.getElementById("meio")
    if(div!=null){
        div.innerHTML = """
            <div id="inicio">
            <img class="btn" src="img/ok.png" width=40 height=40 onclick ="Teste.montaMenu()">
            SOBRE O JOGO</div>
            <div id="inicio2">
            <p>JOGO DAS LEMBRANÇAS, 2019<br>Jogo desenvolvido por</p>
            <p>MATHEUS PHELIPE ALVES PINTO e NILTON VIEIRA DA SILVA</p>
            <p>> Disciplina/Orientador: Linguagem de Programação Funcional/Prof. Luis Carlos</p>
            <p>>ESCOLA POLITÉCNICA DE PERNAMBUCO - POLI - UPE</p>
            <p>>GRADUAÇÃO EM ENGENHARIA DA COMPUTAÇÃO - ECOMP</p>
            </div>
        """.trimMargin()
    }
}

//exibe tela inicial
fun montaMenu(){

    val div = document.getElementById("principal") //exemplo
    if(div!=null){
        div.innerHTML = """
<img id ="logo" src="img/logo.png" alt="Inicia partida" width=540 height=300 onclick="Teste.montaMenu()">
        <div class="centro" id="meio">
            <div>
                <img class="btn" src="img/play-button.png" alt="Inicia partida" width=80 height=80 onclick="Teste.play()">
                <img class="btn" src="img/document.png" alt="Regras do jogo" width=80 height=80 onclick ="Teste.instrucoes()">
                <img class="btn" src="img/warning.png" alt="Sobre a aplicação" width=80 height=80 onclick ="Teste.sobre()">
            </div>
        </div>
        """.trimIndent()
    }
}

/************MÉTODOS DO MENU DE SELEÇÕES DE JOGO*************/
//seleção do modo de jogo
fun tipoJogo():Unit{
    val div = document.getElementById("meio")

    if(div!=null){
        div.innerHTML = """ <div id="inicio">
            <img class="btn" src="img/ok.png" width=30 height=30 onclick ="Teste.montaMenu()">
            MODO DE JOGO</div>
                <div id="1" class="label" onclick="Teste.inicia()"><br>CLÁSSICO</div>
                <div id="2" class="label" onclick="Teste.inicia()"><br>MODERNO</div>
            </div>
        """.trimIndent()
    }
    inicia()
}

//seleção do tema do jogo
fun tema(tipo:String){
    val div = document.getElementById("meio")
    if(div!=null){
        div.innerHTML = """ <div id="inicio">
            <img class="btn" src="img/ok.png" width=40 height=40 onclick ="Teste.tipoJogo()">
            SELEÇÃO DE TEMA</div>
                <div id="1" class="label" onclick="Teste.inicia2()">$tipo - Programação</div>
                <div id="2" class="label" onclick="Teste.inicia2()">$tipo - Frutinhas</div>
                <div id="3" class="label" onclick="Teste.inicia2()">$tipo - Bichinhos</div>
            </div>
        """.trimIndent()
    }
    inicia2()
}

//método construirá menu de tema com base na escolha de jogo
fun inicia(){
    val div = document.getElementById("meio")
    val tipos = div?.getElementsByClassName("label")
    if(tipos!=null){
        //verifica por qual dos botões o evento foi disparado
        val list = List(2){counter -> tipos[counter] as HTMLDivElement}
        list[0].onclick ={ tema(list[0].innerHTML)}
        list[1].onclick ={ tema(list[1].innerHTML)}
    }
}

//método inicia a partida com modo de jogo e tema
fun inicia2(){
    val div = document.getElementById("meio")
    val tipos = div?.getElementsByClassName("label")
    if(tipos!=null){
        //verifica por qual dos botões o evento foi disparado
        val list = List(3){counter -> tipos[counter] as HTMLDivElement}
        list[0].onclick ={montaTabuleiro(list[0].innerHTML.trimIndent(), 1)}
        list[1].onclick ={montaTabuleiro(list[1].innerHTML.trimIndent(), 2)}
        list[2].onclick ={montaTabuleiro(list[2].innerHTML.trimIndent(), 3)}
    }
}

