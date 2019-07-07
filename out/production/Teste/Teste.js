if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Teste'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Teste'.");
}
var Teste = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var throwCCE = Kotlin.throwCCE;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function Card(id, link) {
    this.id = id;
    this.link = link;
  }
  Card.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Card',
    interfaces: []
  };
  Card.prototype.component1 = function () {
    return this.id;
  };
  Card.prototype.component2 = function () {
    return this.link;
  };
  Card.prototype.copy_puj7f4$ = function (id, link) {
    return new Card(id === void 0 ? this.id : id, link === void 0 ? this.link : link);
  };
  Card.prototype.toString = function () {
    return 'Card(id=' + Kotlin.toString(this.id) + (', link=' + Kotlin.toString(this.link)) + ')';
  };
  Card.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.link) | 0;
    return result;
  };
  Card.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.link, other.link)))));
  };
  var cartasViradas;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function montaTabuleiro(tipo, tema) {
    var tmp$;
    var bloco = document.getElementById('principal');
    if (bloco != null) {
      bloco.innerHTML = trimIndent('\n' + '                        ' + painel(tipo) + '\n' + '                        <div class=' + '"' + 'tabela' + '"' + ' id=' + '"' + 'tabela' + '"' + '>' + '\n' + '                            ' + bloquinhos(2, 5, 0) + '\n' + '                        <\/div>' + '\n' + '                ');
      var list = ArrayList_init(18);
      for (var index = 0; index < 18; index++) {
        list.add_11rb$(new Card((index % 9).toString(), 'img/tema' + tema + '/' + index % 9 + '.jpg'));
      }
      var cartinhas = list;
      var cartas = embaralhar(Kotlin.isType(tmp$ = cartinhas, MutableList) ? tmp$ : throwCCE());
      var frente = document.getElementsByClassName('frente');
      adicionarImagemEvento(cartas, frente, 0);
      var retorno = window.setTimeout(abreFechaTudo(), 3000);
      abreFechaTudo();
    }
  }
  function painel(tipo) {
    if (contains(tipo.toUpperCase(), 'CL\xC1SSICO')) {
      return trimMargin('<div class=' + '"' + 'painel' + '"' + ' id=' + '"' + 'painel' + '"' + '>' + '\n' + '        <div id=' + '"' + 'home' + '"' + '><img src=' + '"' + 'img/ok.png' + '"' + ' alt=' + '"' + 'Voltar ao inicio' + '"' + ' width=45 height=45 onclick=' + '"' + 'Teste.montaMenu()' + '"' + '><\/div>' + '\n' + '        <div class=' + '"' + 'tipo' + '"' + '>' + tipo.toUpperCase() + '\n' + '        <div class=' + '"' + 'count' + '"' + '><\/div>' + '\n' + '        <\/div>' + '\n' + '\n' + '        <\/div>' + '\n' + '    ');
    }
     else {
      return trimMargin('<div class=' + '"' + 'painel' + '"' + ' id=' + '"' + 'painel' + '"' + '>' + '\n' + '        <div id=' + '"' + 'home' + '"' + '><img src=' + '"' + 'img/ok.png' + '"' + ' alt=' + '"' + 'Voltar ao inicio' + '"' + ' width=45 height=45 onclick=' + '"' + 'Teste.montaMenu()' + '"' + '><\/div>' + '\n' + '        <div class=' + '"' + 'tipo' + '"' + '>' + tipo.toUpperCase() + '\n' + '        <div class=' + '"' + 'count' + '"' + '>Jogadas: 30<\/div><\/div>' + '\n' + '        <\/div>' + '\n' + '    ');
    }
  }
  function bloquinhos(linha, coluna, id) {
    var tmp$;
    if (linha >= 0) {
      if (coluna >= 0) {
        tmp$ = trimMargin('<div class=' + '"' + 'carta' + '"' + ' id=' + '"' + 'carta' + id + '"' + '>' + '\n' + '                            <div class=' + '"' + 'faces verso' + '"' + ' ><\/div>' + '\n' + '                            <div class=' + '"' + 'faces frente' + '"' + '><\/div>' + '\n' + '                <\/div>') + bloquinhos(linha, coluna - 1 | 0, id + 1 | 0);
      }
       else
        tmp$ = bloquinhos(linha - 1 | 0, 5, id);
    }
     else
      tmp$ = '';
    return tmp$;
  }
  function embaralhar(lista) {
    shuffle(lista);
    return lista;
  }
  function adicionarImagemEvento$lambda(closure$cartasFrente) {
    return function (it) {
      viraCarta(closure$cartasFrente);
      return Unit;
    };
  }
  function adicionarImagemEvento(cartas, frente, contador) {
    var tmp$;
    if (contador < 18) {
      var cartasFrente = Kotlin.isType(tmp$ = document.getElementById('carta' + contador), HTMLDivElement) ? tmp$ : throwCCE();
      cartasFrente.addEventListener('click', adicionarImagemEvento$lambda(cartasFrente), false);
      ensureNotNull(frente[contador]).setAttribute('id', cartas.get_za3lpa$(contador).id);
      ensureNotNull(frente[contador]).innerHTML = trimIndent('<img class=' + '"' + 'card' + '"' + ' src=' + cartas.get_za3lpa$(contador).link + ' width=180 height=200>');
      adicionarImagemEvento(cartas, frente, contador + 1 | 0);
    }
  }
  function viraCarta(cartas) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var faces = cartas.getElementsByClassName('faces');
    if (cartasViradas.size < 2) {
      if (ensureNotNull(faces[0]).classList.length > 2) {
        return;
      }
      ensureNotNull(faces[0]).classList.toggle('aberta');
      ensureNotNull(faces[1]).classList.toggle('aberta');
      cartasViradas.add_11rb$(cartas);
      if (cartasViradas.size === 2) {
        if (equals((Kotlin.isType(tmp$ = cartasViradas.get_za3lpa$(0).childNodes[3], HTMLDivElement) ? tmp$ : throwCCE()).id, (Kotlin.isType(tmp$_0 = cartasViradas.get_za3lpa$(1).childNodes[3], HTMLDivElement) ? tmp$_0 : throwCCE()).id)) {
          cartasViradas.removeAt_za3lpa$(1);
          cartasViradas.removeAt_za3lpa$(0);
        }
        gameOver();
      }
    }
     else {
      var div1carta1 = Kotlin.isType(tmp$_1 = cartasViradas.get_za3lpa$(0).childNodes[1], HTMLDivElement) ? tmp$_1 : throwCCE();
      div1carta1.classList.toggle('aberta');
      var div2carta1 = Kotlin.isType(tmp$_2 = cartasViradas.get_za3lpa$(0).childNodes[3], HTMLDivElement) ? tmp$_2 : throwCCE();
      div2carta1.classList.toggle('aberta');
      var div1carta2 = Kotlin.isType(tmp$_3 = cartasViradas.get_za3lpa$(1).childNodes[1], HTMLDivElement) ? tmp$_3 : throwCCE();
      div1carta2.classList.toggle('aberta');
      var div2carta2 = Kotlin.isType(tmp$_4 = cartasViradas.get_za3lpa$(1).childNodes[3], HTMLDivElement) ? tmp$_4 : throwCCE();
      div2carta2.classList.toggle('aberta');
      cartasViradas.removeAt_za3lpa$(1);
      cartasViradas.removeAt_za3lpa$(0);
    }
  }
  function gameOver() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var dados = (tmp$_0 = ensureNotNull((tmp$ = document.getElementById('principal')) != null ? tmp$.getElementsByClassName('tipo') : null)[0]) != null ? tmp$_0.getElementsByClassName('count') : null;
    var cartas = document.getElementsByClassName('faces frente aberta');
    if (cartas.length === 18) {
      window.alert('Jogo encerrado!');
      montaMenu();
    }
    if (dados != null) {
      var jogo = (tmp$_2 = (tmp$_1 = dados[0]) != null ? tmp$_1.innerHTML : null) != null ? tmp$_2.match('\\d+') : null;
      if (jogo != null) {
        if (toInt(jogo[0]) === 0) {
          window.alert('O n\xFAmero de jogadas acabaram ):');
          montaMenu();
        }
         else {
          (tmp$_3 = dados[0]) != null ? (tmp$_3.innerHTML = 'Jogadas: ' + (toInt(jogo[0]) - 1 | 0)) : null;
        }
      }
    }
  }
  function abreFechaTudo() {
    var div = document.getElementsByClassName('faces');
    var list = ArrayList_init(36);
    for (var index = 0; index < 36; index++) {
      list.add_11rb$(ensureNotNull(div[index]).classList.toggle('aberta'));
    }
    var lista = list;
  }
  function main() {
    montaMenu();
  }
  function play() {
    tipoJogo();
  }
  function instrucoes() {
    var div = document.getElementById('meio');
    if (div != null) {
      println('sobre o projeto');
      div.innerHTML = trimMargin('\n            <div id="inicio">\n            <img class="btn" src="img/ok.png" width=40 height=40 onclick ="Teste.montaMenu()">\n            INSTRU\xC7\xD5ES<\/div>\n            <div id="inicio2">\n                        <br>\n            <p>Escolha entre um dos dois modos e divirta-se!<\/p>\n            <P>CL\xC1SSICO: Relembre as melhores lembran\xE7as!<\/P>\n            <P>MODERNO: Que tal um pouco de desafio?!<\/p>\n            <\/div>\n        ');
    }
  }
  function sobre() {
    var div = document.getElementById('meio');
    if (div != null) {
      div.innerHTML = trimMargin('\n            <div id="inicio">\n            <img class="btn" src="img/ok.png" width=40 height=40 onclick ="Teste.montaMenu()">\n            SOBRE O JOGO<\/div>\n            <div id="inicio2">\n            <p>JOGO DAS LEMBRAN\xC7AS, 2019<br>Jogo desenvolvido por<\/p>\n            <p>MATHEUS PHELIPE ALVES PINTO e NILTON VIEIRA DA SILVA<\/p>\n            <p>> Disciplina/Orientador: Linguagem de Programa\xE7\xE3o Funcional/Prof. Luis Carlos<\/p>\n            <p>>ESCOLA POLIT\xC9CNICA DE PERNAMBUCO - POLI - UPE<\/p>\n            <p>>GRADUA\xC7\xC3O EM ENGENHARIA DA COMPUTA\xC7\xC3O - ECOMP<\/p>\n            <\/div>\n        ');
    }
  }
  function montaMenu() {
    var div = document.getElementById('principal');
    if (div != null) {
      div.innerHTML = trimIndent('\n<img id ="logo" src="img/logo.png" alt="Inicia partida" width=540 height=300 onclick="Teste.montaMenu()">\n        <div class="centro" id="meio">\n            <div>\n                <img class="btn" src="img/play-button.png" alt="Inicia partida" width=80 height=80 onclick="Teste.play()">\n                <img class="btn" src="img/document.png" alt="Regras do jogo" width=80 height=80 onclick ="Teste.instrucoes()">\n                <img class="btn" src="img/warning.png" alt="Sobre a aplica\xE7\xE3o" width=80 height=80 onclick ="Teste.sobre()">\n            <\/div>\n        <\/div>\n        ');
    }
  }
  function tipoJogo() {
    var div = document.getElementById('meio');
    if (div != null) {
      div.innerHTML = trimIndent(' <div id="inicio">\n            <img class="btn" src="img/ok.png" width=30 height=30 onclick ="Teste.montaMenu()">\n            MODO DE JOGO<\/div>\n                <div id="1" class="label" onclick="Teste.inicia()"><br>CL\xC1SSICO<\/div>\n                <div id="2" class="label" onclick="Teste.inicia()"><br>MODERNO<\/div>\n            <\/div>\n        ');
    }
    inicia();
  }
  function tema(tipo) {
    var div = document.getElementById('meio');
    if (div != null) {
      div.innerHTML = trimIndent(' <div id=' + '"' + 'inicio' + '"' + '>' + '\n' + '            <img class=' + '"' + 'btn' + '"' + ' src=' + '"' + 'img/ok.png' + '"' + ' width=40 height=40 onclick =' + '"' + 'Teste.tipoJogo()' + '"' + '>' + '\n' + '            SELE\xC7\xC3O DE TEMA<\/div>' + '\n' + '                <div id=' + '"' + '1' + '"' + ' class=' + '"' + 'label' + '"' + ' onclick=' + '"' + 'Teste.inicia2()' + '"' + '>' + tipo + ' - Programa\xE7\xE3o<\/div>' + '\n' + '                <div id=' + '"' + '2' + '"' + ' class=' + '"' + 'label' + '"' + ' onclick=' + '"' + 'Teste.inicia2()' + '"' + '>' + tipo + ' - Frutinhas<\/div>' + '\n' + '                <div id=' + '"' + '3' + '"' + ' class=' + '"' + 'label' + '"' + ' onclick=' + '"' + 'Teste.inicia2()' + '"' + '>' + tipo + ' - Bichinhos<\/div>' + '\n' + '            <\/div>' + '\n' + '        ');
    }
    inicia2();
  }
  function inicia$lambda(closure$list) {
    return function (it) {
      tema(closure$list.get_za3lpa$(0).innerHTML);
      return Unit;
    };
  }
  function inicia$lambda_0(closure$list) {
    return function (it) {
      tema(closure$list.get_za3lpa$(1).innerHTML);
      return Unit;
    };
  }
  function inicia() {
    var div = document.getElementById('meio');
    var tipos = div != null ? div.getElementsByClassName('label') : null;
    if (tipos != null) {
      var list = ArrayList_init(2);
      for (var index = 0; index < 2; index++) {
        var tmp$;
        list.add_11rb$(Kotlin.isType(tmp$ = tipos[index], HTMLDivElement) ? tmp$ : throwCCE());
      }
      var list_0 = list;
      list_0.get_za3lpa$(0).onclick = inicia$lambda(list_0);
      list_0.get_za3lpa$(1).onclick = inicia$lambda_0(list_0);
    }
  }
  function inicia2$lambda(closure$list) {
    return function (it) {
      montaTabuleiro(trimIndent(closure$list.get_za3lpa$(0).innerHTML), 1);
      return Unit;
    };
  }
  function inicia2$lambda_0(closure$list) {
    return function (it) {
      montaTabuleiro(trimIndent(closure$list.get_za3lpa$(1).innerHTML), 2);
      return Unit;
    };
  }
  function inicia2$lambda_1(closure$list) {
    return function (it) {
      montaTabuleiro(trimIndent(closure$list.get_za3lpa$(2).innerHTML), 3);
      return Unit;
    };
  }
  function inicia2() {
    var div = document.getElementById('meio');
    var tipos = div != null ? div.getElementsByClassName('label') : null;
    if (tipos != null) {
      var list = ArrayList_init(3);
      for (var index = 0; index < 3; index++) {
        var tmp$;
        list.add_11rb$(Kotlin.isType(tmp$ = tipos[index], HTMLDivElement) ? tmp$ : throwCCE());
      }
      var list_0 = list;
      list_0.get_za3lpa$(0).onclick = inicia2$lambda(list_0);
      list_0.get_za3lpa$(1).onclick = inicia2$lambda_0(list_0);
      list_0.get_za3lpa$(2).onclick = inicia2$lambda_1(list_0);
    }
  }
  _.Card = Card;
  Object.defineProperty(_, 'cartasViradas', {
    get: function () {
      return cartasViradas;
    }
  });
  _.montaTabuleiro_bm4lxs$ = montaTabuleiro;
  _.painel_61zpoe$ = painel;
  _.bloquinhos_qt1dr2$ = bloquinhos;
  _.embaralhar_jr2yi8$ = embaralhar;
  _.adicionarImagemEvento_9qd3sn$ = adicionarImagemEvento;
  _.viraCarta_e0t6x9$ = viraCarta;
  _.gameOver = gameOver;
  _.abreFechaTudo = abreFechaTudo;
  _.main = main;
  _.play = play;
  _.instrucoes = instrucoes;
  _.sobre = sobre;
  _.montaMenu = montaMenu;
  _.tipoJogo = tipoJogo;
  _.tema_61zpoe$ = tema;
  _.inicia = inicia;
  _.inicia2 = inicia2;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  cartasViradas = ArrayList_init_0();
  main();
  Kotlin.defineModule('Teste', _);
  return _;
}(typeof Teste === 'undefined' ? {} : Teste, kotlin);
