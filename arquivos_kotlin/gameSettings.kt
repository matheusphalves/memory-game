import org.w3c.dom.HTMLCollection
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.get
import kotlin.browser.*


/************DADOS***********/
//id da carta e diretório da imagem
data class Card(val id:String, val link:String)

val cartasViradas:MutableList<HTMLDivElement> = mutableListOf()

/**********MÉTODOS RESPONSÁVEIS PELA CONSTRUÇÃO DO AMBIENTE DE JOGO**********/
//cria tabuleiro
fun montaTabuleiro(tipo:String, tema:Int){
        val bloco = document.getElementById("principal")
        if(bloco!=null){
            bloco.innerHTML = """
                        ${painel(tipo)}
                        <div class="tabela" id="tabela">
                            ${bloquinhos(2,5,0)}
                        </div>
                """.trimIndent()
            val cartinhas = List(18) { counter -> Card("${counter%9}", "img/tema$tema/${counter%9}.jpg")}
            val cartas = embaralhar(cartinhas as MutableList<Card>)
            val frente = document.getElementsByClassName("frente")
            teste(cartas,frente, 0)
            val retorno = window.setTimeout(abreFechaTudo(),3000)
            abreFechaTudo()
        }


    }

//barra superior do jogo
fun painel(tipo:String):String{
    if(tipo.toUpperCase().contains("CLÁSSICO")){
        return """<div class="painel" id="painel">
        <div id="home"><img src="img/ok.png" alt="Voltar ao inicio" width=45 height=45 onclick="Teste.montaMenu()"></div>
        <div class="tipo">${tipo.toUpperCase()}
        <div class="count"></div>
        </div>

        </div>
    """.trimMargin()
    }else{//modo com contador
        return """<div class="painel" id="painel">
        <div id="home"><img src="img/ok.png" alt="Voltar ao inicio" width=45 height=45 onclick="Teste.montaMenu()"></div>
        <div class="tipo">${tipo.toUpperCase()}
        <div class="count">Jogadas: 30</div></div>
        </div>
    """.trimMargin()
    }
}

//constrói cartas no tabuleiro
fun bloquinhos(linha: Int, coluna: Int, id:Int): String {
    return if (linha >= 0) {
        if (coluna >= 0) {
            """<div class="carta" id="carta$id">
                            <div class="faces verso" ></div>
                            <div class="faces frente"></div>
                </div>""".trimMargin() + bloquinhos(linha, coluna - 1, id +1)
        } else
            bloquinhos(linha - 1, 5, id)//colunas resetadas
    } else ""
}

fun embaralhar(lista:MutableList<Card>):List<Card>{
    lista.shuffle()//cartas são embaralhadas
    return lista
}

//método funcional
fun teste(cartas:List<Card>, frente:HTMLCollection, contador:Int){
    if(contador<18){
        val cartasFrente = document.getElementById("carta$contador") as HTMLDivElement
        cartasFrente.addEventListener("click",{viraCarta(cartasFrente)},false)
        frente[contador]!!.setAttribute("id", cartas[contador].id)
        frente[contador]!!.innerHTML= """<img class="card" src=${cartas[contador].link} width=180 height=200>""".trimIndent()
        teste(cartas, frente, contador+1)
    }
}

/*********MÉTODOS RESPONSÁVEIS PELA LÓGICA DO JOGO****************/

fun viraCarta(cartas:HTMLDivElement){
//efetua a comparação entre as cartas que foram viradas. Responsável por fechá-las, caso as cartas sejam diferentes
    val faces = cartas.getElementsByClassName("faces")
     if(cartasViradas.size<2){
        if(faces[0]!!.classList.length>2){ return }
        faces[0]!!.classList.toggle("aberta")
        faces[1]!!.classList.toggle("aberta")
        cartasViradas.add(cartas)

        if(cartasViradas.size==2){
            if((cartasViradas[0].childNodes[3] as HTMLDivElement).id==(cartasViradas[1].childNodes[3] as HTMLDivElement).id){
                cartasViradas.removeAt(1)
                cartasViradas.removeAt(0)

            }
            gameOver()//efetua verificações de quando terminar jogo
        }
    }else{
        val div1carta1 = cartasViradas[0].childNodes[1] as HTMLDivElement
        div1carta1.classList.toggle("aberta")
        val div2carta1 = cartasViradas[0].childNodes[3] as HTMLDivElement
        div2carta1.classList.toggle("aberta")
        val div1carta2 = cartasViradas[1].childNodes[1] as HTMLDivElement
        div1carta2.classList.toggle("aberta")
        val div2carta2 =cartasViradas[1].childNodes[3] as HTMLDivElement
        div2carta2.classList.toggle("aberta")
        cartasViradas.removeAt(1)
        cartasViradas.removeAt(0)
    }
}

fun gameOver(){
    val dados = document.getElementById("principal")?.getElementsByClassName("tipo")!![0]?.getElementsByClassName("count")
    val cartas = document.getElementsByClassName("faces frente aberta")


  if(cartas.length==18){
      window.alert("Jogo encerrado!")
      montaMenu()
  }

    if(dados!=null){
        val jogo = dados[0]?.innerHTML?.match("\\d+")
        if(jogo!=null){
            if(jogo[0].toInt()==0) {
                window.alert("O número de jogadas acabaram ):")
                montaMenu()
            }else
                dados[0]?.innerHTML="Jogadas: ${jogo[0].toInt()-1}"
        }
    }
}

fun abreFechaTudo(){
    val div = document.getElementsByClassName("faces")

    val lista = MutableList(36){
        cont -> div[cont]!!.classList.toggle("aberta")
    }

    lista.size
}