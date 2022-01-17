window.onbeforeunload = function () {

};

$(document).ready(function ($) {

  $('#cpf').mask('000.000.000-00');
  $('#cpf_remetente').mask('000.000.000-00');
  $('#cnpj_remetente').mask('00.000.000/0000-00');
  $('#cnpj').mask('00.000.000/0000-00');
  $('#cep-coleta').mask('00000-000');
  $('#cep').mask('00000-000');
  $('#valornf').mask("#.##0,00", { reverse: true });
  $('#cp').mask("#0,0", { reverse: true });

});

var a = 0;
//-------------------------------------------------------------------------------------Adicionar na tabela as informaçoes----------------------------------------------------------------------------------------------------
function add() {

  if (a == 0) {
    a++;
  }
  else {
    a = document.getElementById("qtd_info").value;
    a++;
  }


  var destinatario = document.getElementById('destinatario').value;
  var cidade = document.getElementById('cidade-coleta').value;
  var volumes = document.getElementById('volumes').value;
  var peso = document.getElementById('peso').value;
  var valornf = document.getElementById('valornf').value;
  var categoria = document.querySelector('input[name=tipotrans]:checked').value;
  var frete = document.querySelector('input[name=tipofrete]:checked').value;
  var natureza = document.getElementById('natureza').value;
  var cp = document.getElementById('cp').value;
  var al = document.getElementById('al').value;
  var la = document.getElementById('la').value;
  var solicitante = document.getElementById('remetente').value;
  var cnpj = document.getElementById('cnpj').value;
  var email = document.getElementById('email-1').value;
  var departamento = document.getElementById('dp').value;
  var procurar = document.getElementById('procurar').value;
  var cpf = document.getElementById('cpf').value;
  var cnpj_remetente = document.getElementById('cnpj_remetente').value;
  var cpf_remetente = document.getElementById('cpf_remetente').value;
  var local_coleta = document.getElementById('local-coleta').value;
  var parte_nome = document.getElementById('parte-nome').value;
  var cpf_cnpj = document.getElementById('cnpj/cpf').value;
  var endereco_coleta = document.getElementById('endereco-coleta').value;
  var bairro_coleta = document.getElementById('bairro-coleta').value;
  var estado_coleta = document.getElementById('estado-coleta').value;
  var cidade_coleta = document.getElementById('cidade-coleta').value;
  var cep_coleta = document.getElementById('cep-coleta').value;
  var data = document.getElementById('data').value;
  var hora1 = document.getElementById('hora1').value;
  var hora2 = document.getElementById('hora2').value;
  var tipo_coleta = document.getElementById('tipo-coleta').value;
  var numero_pedido = document.getElementById('numero-pedido').value;
  var observacao_1 = document.getElementById('obs').value;
  var parte_nome2 = document.getElementById('parte-nome-2').value;
  var cpf_cnpj_2 = document.getElementById('cpf/cnpj-2').value;
  var endereco = document.getElementById('endereco').value;
  var bairro = document.getElementById('bairro').value;
  var estado = document.getElementById('estado').value;
  var cidade = document.getElementById('cidade').value;
  var cep = document.getElementById('cep').value;
  var observacao = document.getElementById('observacao').value;


  var cub_aereo = "0";

  var comentario = document.querySelector('input[name= tipoentrega]:checked').value;




  var calculo = cp.replace(",", "") * al * la * 300;
  var format = (calculo).toLocaleString('pt-BR');





  if (a == 1) {
    $("#tabela").append("<tr>"
      + "<th>  </th >"
      + "            <th >  </th>"
      + "          <th>Destinatário</th>"
      + "          <th>Cidade destino</th>"
      + "          <th>Volumes</th>"
      + "          <th>Peso</th>"
      + "          <th>Valor NF</th>"
      + "          <th>Categoria</th>"
      + "          <th>Frete</th>"
      + "          <th>Natureza</th>"
      + "          <th>C</th>"
      + "          <th>A</th>"
      + "          <th>L</th>"
      + "          <th>Cub.Aéreo</th>"
      + "          <th>Cub.Terrestre</th>"
      + "          <th>Comentario</th>"
      + "        </tr ><tr id='tabela" + a + "'>"
      + " <td>" + "<button class='btn-excluir' onClick='excluir(" + a + ")'>excluir</button></td>"
      + " <td>" + "<button class='btn-adiciona' onClick='mostra(" + a + ")'>editar</button></td>"
      + " <td id='dest'" + a + "' > " + destinatario + "</td > "
      + " <td id='cid" + a + "'>" + cidade + "</td>"
      + " <td id='vol" + a + "'>" + volumes + "</td> "
      + " <td id='pes" + a + "'>" + peso + "</td> "
      + " <td id='vlnf" + a + "'>" + valornf + "</td> "
      + " <td id='fret" + a + "'>" + frete + "</td> "
      + " <td id='cat" + a + "'>" + categoria + "</td> "
      + " <td id='nat" + a + "'>" + natureza + "</td> "
      + " <td id='com" + a + "'>" + cp + "</td> "
      + " <td id='altu" + a + "'>" + al + "</td> "
      + " <td id='lar" + a + "'>" + la + "</td> "
      + " <td id='cub" + a + "'>" + cub_aereo + "</td> "
      + " <td id='for" + a + "'>" + format + "</td> "
      + " <td id='comt" + a + "'>" + comentario + "</td> "

      + "</tr>  ");
  }
  else {
    $("#tabela").append("<tr id='tabela" + a + "'>"
      + " <td>" + "<button class='btn-excluir' onClick='excluir(" + a + ")'>excluir</button></td>"
      + " <td>" + "<button class='btn-adiciona' onClick='mostra(" + a + ")'>editar</button></td>"
      + " <td id='dest'" + a + "' > " + destinatario + "</td > "
      + " <td id='cid" + a + "'>" + cidade + "</td>"
      + " <td id='vol" + a + "'>" + volumes + "</td> "
      + " <td id='pes" + a + "'>" + peso + "</td> "
      + " <td id='vlnf" + a + "'>" + valornf + "</td> "
      + " <td id='fret" + a + "'>" + frete + "</td> "
      + " <td id='cat" + a + "'>" + categoria + "</td> "
      + " <td id='nat" + a + "'>" + natureza + "</td> "
      + " <td id='com" + a + "'>" + cp + "</td> "
      + " <td id='altu" + a + "'>" + al + "</td> "
      + " <td id='lar" + a + "'>" + la + "</td> "
      + " <td id='cub" + a + "'>" + cub_aereo + "</td> "
      + " <td id='for" + a + "'>" + format + "</td> "
      + " <td id='comt" + a + "'>" + comentario + "</td> "

      + "</tr>  ");
  }


  //----------------------------------------------------------------------CRIA AS INFORMAÇOES INVISIVEIS PARA ENVIAR DEPOIS--------------------------------------------------------------------------------------   

  $("#invisivel").append("<div id= 'invisible" + a + "'><input type='hidden' id='solicitante" + a + "' value = " + solicitante + " name = 'solicitante" + a + "'>" +
    "<input type='hidden' id='procurar" + a + "'value = " + procurar + " name = 'procurar" + a + "'>" +
    "<input type='hidden' id='email" + a + "'value = " + email + " name = 'email" + a + "'>" +
    "<input type='hidden' id='departamento" + a + "'value = " + departamento + " name = 'departamento" + a + "'>" +
    "<input type='hidden' id='cnpj" + a + "' value = " + cnpj_remetente + " name = 'cnpj" + a + "'>" +
    "<input type='hidden' id='cpf" + a + "' value = " + cpf_remetente + " name = 'cpf" + a + "'>" +
    "<input type='hidden' id='parte-nome-solicitante" + a + "' value = " + parte_nome + " name = 'parte-nome-solicitante" + a + "'>" +
    "<input type='hidden' id='local-coleta" + a + "' value = " + local_coleta + " name = 'local-coleta" + a + "'>" +
    "<input type='hidden' id='cpf/cnpj-solicitante" + a + "' value = " + cpf_cnpj + " name = 'cpf/cnpj-solicitante" + a + "'>" +
    "<input type='hidden' id='endereco-coleta" + a + "' value = " + endereco_coleta + " name = 'endereco-coleta" + a + "'>" +
    "<input type='hidden' id='bairro-coleta" + a + "' value = " + bairro_coleta + " name = 'bairro-coleta" + a + "'>" +
    "<input type='hidden' id='estado-coleta" + a + "' value = " + estado_coleta + " name = 'estado-coleta" + a + "'>" +
    "<input type='hidden' id='cidade-coleta" + a + "' value = " + cidade_coleta + " name = 'cidade-coleta" + a + "'>" +
    "<input type='hidden' id='cep-coleta" + a + "' value = " + cep_coleta + " name = 'cep-coleta" + a + "'>" +
    "<input type='hidden' id='data" + a + "' value = " + data + " name = 'data" + a + "'>" +
    "<input type='hidden'  id='hora-primeira" + a + "' value = " + hora1 + " name = 'hora-primeira" + a + "'>" +
    "<input type='hidden' id='hora-segunda" + a + "' value = " + hora2 + " name = 'hora-segunda" + a + "'>" +
    "<input type='hidden' id='tipo-coleta" + a + "' value = " + tipo_coleta + " name = 'tipo-coleta" + a + "'>" +
    "<input type='hidden' id='numero-pedido" + a + "' value = " + numero_pedido + " name = 'numero-pedido" + a + "'>" +
    "<input type='hidden' id='cnpj-destinatario" + a + "' value = " + cnpj + " name = 'cnpj-destinatario" + a + "'>" +
    "<input type='hidden' id='cpf-destinatario" + a + "' value = " + cpf + " name = 'cpf-destinatario" + a + "'>" +
    "<input type='hidden' id='parte-nome" + a + "' value = " + parte_nome2 + " name = parte-nome " + a + "'>" +
    "<input type='hidden' id='nome" + a + "' value = " + destinatario + " name = 'nome" + a + "'>" +
    "<input type='hidden' id='cpf/cnpj" + a + "' value = " + cpf_cnpj_2 + " name = 'cpf/cnpj" + a + "'>" +
    "<input type='hidden' id='endereco" + a + "' value = " + endereco + " name = 'endereco" + a + "'>" +
    "<input type='hidden' id='bairro" + a + "' value = " + bairro + " name = 'bairro" + a + "'>" +
    "<input type='hidden' id='estado" + a + "' value = " + estado + " name = 'estado" + a + "'>" +
    "<input type='hidden' id='cidade" + a + "' value = " + cidade + " name = 'cidade" + a + "'>" +
    "<input type='hidden' id='cep" + a + "' value = " + cep + " name = 'cep" + a + "'>" +
    "<input type='hidden' id='tipo-frete" + a + "' value = " + frete + " name = 'tipo-frete" + a + "'>" +
    "<input type='hidden' id='tipo-transporte" + a + "' value = " + categoria + " name = 'tipo-transporte" + a + "'>" +
    "<input type='hidden' id='tipo-entrega" + a + "' value = " + comentario + " name = 'tipo-entrega" + a + "'>" +
    "<input type='hidden' id='observacao" + a + "' value = " + observacao + " name = 'observacao" + a + "'>" +
    "<input type='hidden' id='observacao-destinatario" + a + "' value = " + observacao_1 + " name = 'observacao-destinatario" + a + "'>" +
    "<input type='hidden' id='natureza" + a + "' value = " + natureza + " name = 'natureza" + a + "'>" +
    "<input type='hidden' id='volumes" + a + "' value = " + volumes + " name = 'volumes" + a + "'>" +
    "<input type='hidden' id='peso-real" + a + "' value = " + peso + " name = 'peso-real" + a + "'>" +
    "<input type='hidden' id='valor" + a + "' value = " + valornf + " name = 'valor" + a + "'>" +
    "<input type='hidden' id='cp" + a + "' value = " + cp + " name = 'cp" + a + "'>" +
    "<input type='hidden' id='al" + a + "' value = " + al + " name = 'al" + a + "'>" +
    "<input type='hidden' id='la" + a + "' value = " + la + " name = 'la" + a + "'>" +
    "<input type='hidden' id='" + a + "' value = " + a + "> </div>"
  );

  document.getElementById("qtd_info").value = a;
}




//-------------------------------------------------------------------------------FUNÇÃO DE EXCLUIR O DADO------------------------------------------------------------------------------------------------------ 

function excluir(a) {
  let invisible = document.getElementById("invisible" + a);
  let table = document.getElementById("tabela" + a);
  let id = document.getElementById("qtd_info").value;

  //Vai subistituir os valores que forem maiores que o id que sera excluido

  while (a < id) {
    a++;
    //pegando as div onde contem as informaçoes para depois subistituir
    let information_invisible = document.getElementById("invisible" + a);
    let table_inofrmation = document.getElementById("tabela" + a);
    //----------------------------------------------------------------


    let destinatario = document.getElementById('nome' + a).value;
    let volumes = document.getElementById('volumes' + a).value;
    let peso = document.getElementById('peso-real' + a).value;
    let valornf = document.getElementById('valor' + a).value;
    let categoria = document.getElementById('tipo-transporte' + a).value;
    let frete = document.getElementById('tipo-frete' + a).value;
    let natureza = document.getElementById('natureza' + a).value;
    let cp = document.getElementById('cp' + a).value;
    let al = document.getElementById('al' + a).value;
    let la = document.getElementById('la' + a).value;
    let solicitante = document.getElementById('solicitante' + a).value;
    let cnpj = document.getElementById('cnpj' + a).value;
    let email = document.getElementById('email' + a).value;
    let departamento = document.getElementById('departamento' + a).value;
    let procurar = document.getElementById('procurar' + a).value;
    let cpf = document.getElementById('cpf' + a).value;
    let cnpj_remetente = document.getElementById('cnpj' + a).value;
    let cpf_remetente = document.getElementById('cpf' + a).value;
    let local_coleta = document.getElementById('local-coleta' + a).value;
    let parte_nome = document.getElementById('parte-nome-solicitante' + a).value;
    let cpf_cnpj = document.getElementById('cpf/cnpj-solicitante' + a).value;
    let endereco_coleta = document.getElementById('endereco-coleta' + a).value;
    let bairro_coleta = document.getElementById('bairro-coleta' + a).value;
    let estado_coleta = document.getElementById('estado-coleta' + a).value;
    let cidade_coleta = document.getElementById('cidade-coleta' + a).value;
    let cep_coleta = document.getElementById('cep-coleta' + a).value;
    let data = document.getElementById('data' + a).value;
    let hora1 = document.getElementById('hora-primeira' + a).value;
    let hora2 = document.getElementById('hora-segunda' + a).value;
    let tipo_coleta = document.getElementById('tipo-coleta' + a).value;
    let numero_pedido = document.getElementById('numero-pedido' + a).value;
    let observacao_1 = document.getElementById('observacao' + a).value;
    let parte_nome2 = document.getElementById('parte-nome' + a).value;
    let cpf_cnpj_2 = document.getElementById('cpf/cnpj' + a).value;
    let endereco = document.getElementById('endereco' + a).value;
    let bairro = document.getElementById('bairro' + a).value;
    let estado = document.getElementById('estado' + a).value;
    let cidade = document.getElementById('cidade' + a).value;
    let cep = document.getElementById('cep' + a).value;
    let observacao = document.getElementById('observacao-destinatario' + a).value;
    let comentario = document.getElementById('tipo-entrega' + a).value;
    var cub_aereo = "0";


    let calculo = cp.replace(",", "") * al * la * 300;
    let format = (calculo).toLocaleString('pt-BR');


    information_invisible.remove();

    a--;

    $("#invisivel").append("<div id= 'invisible" + a + "'><input type='hidden' id='solicitante" + a + "' value = " + solicitante + " name = 'solicitante" + a + "'>" +
      "<input type='hidden' id='procurar" + a + "'value = " + procurar + " name = 'procurar" + a + "'>" +
      "<input type='hidden' id='email" + a + "'value = " + email + " name = 'email" + a + "'>" +
      "<input type='hidden' id='departamento" + a + "'value = " + departamento + " name = 'departamento" + a + "'>" +
      "<input type='hidden' id='cnpj" + a + "' value = " + cnpj_remetente + " name = 'cnpj" + a + "'>" +
      "<input type='hidden' id='cpf" + a + "' value = " + cpf_remetente + " name = 'cpf" + a + "'>" +
      "<input type='hidden' id='parte-nome-solicitante" + a + "' value = " + parte_nome + " name = 'parte-nome-solicitante" + a + "'>" +
      "<input type='hidden' id='local-coleta" + a + "' value = " + local_coleta + " name = 'local-coleta" + a + "'>" +
      "<input type='hidden' id='cpf/cnpj-solicitante" + a + "' value = " + cpf_cnpj + " name = 'cpf/cnpj-solicitante" + a + "'>" +
      "<input type='hidden' id='endereco-coleta" + a + "' value = " + endereco_coleta + " name = 'endereco-coleta" + a + "'>" +
      "<input type='hidden' id='bairro-coleta" + a + "' value = " + bairro_coleta + " name = 'bairro-coleta" + a + "'>" +
      "<input type='hidden' id='estado-coleta" + a + "' value = " + estado_coleta + " name = 'estado-coleta" + a + "'>" +
      "<input type='hidden' id='cidade-coleta" + a + "' value = " + cidade_coleta + " name = 'cidade-coleta" + a + "'>" +
      "<input type='hidden' id='cep-coleta" + a + "' value = " + cep_coleta + " name = 'cep-coleta" + a + "'>" +
      "<input type='hidden' id='data" + a + "' value = " + data + " name = 'data" + a + "'>" +
      "<input type='hidden'  id='hora-primeira" + a + "' value = " + hora1 + " name = 'hora-primeira" + a + "'>" +
      "<input type='hidden' id='hora-segunda" + a + "' value = " + hora2 + " name = 'hora-segunda" + a + "'>" +
      "<input type='hidden' id='tipo-coleta" + a + "' value = " + tipo_coleta + " name = 'tipo-coleta" + a + "'>" +
      "<input type='hidden' id='numero-pedido" + a + "' value = " + numero_pedido + " name = 'numero-pedido" + a + "'>" +
      "<input type='hidden' id='cnpj-destinatario" + a + "' value = " + cnpj + " name = 'cnpj-destinatario" + a + "'>" +
      "<input type='hidden' id='cpf-destinatario" + a + "' value = " + cpf + " name = 'cpf-destinatario" + a + "'>" +
      "<input type='hidden' id='parte-nome" + a + "' value = " + parte_nome2 + " name = parte-nome " + a + "'>" +
      "<input type='hidden' id='nome" + a + "' value = " + destinatario + " name = 'nome" + a + "'>" +
      "<input type='hidden' id='cpf/cnpj" + a + "' value = " + cpf_cnpj_2 + " name = 'cpf/cnpj" + a + "'>" +
      "<input type='hidden' id='endereco" + a + "' value = " + endereco + " name = 'endereco" + a + "'>" +
      "<input type='hidden' id='bairro" + a + "' value = " + bairro + " name = 'bairro" + a + "'>" +
      "<input type='hidden' id='estado" + a + "' value = " + estado + " name = 'estado" + a + "'>" +
      "<input type='hidden' id='cidade" + a + "' value = " + cidade + " name = 'cidade" + a + "'>" +
      "<input type='hidden' id='cep" + a + "' value = " + cep + " name = 'cep" + a + "'>" +
      "<input type='hidden' id='tipo-frete" + a + "' value = " + frete + " name = 'tipo-frete" + a + "'>" +
      "<input type='hidden' id='tipo-transporte" + a + "' value = " + categoria + " name = 'tipo-transporte" + a + "'>" +
      "<input type='hidden' id='tipo-entrega" + a + "' value = " + comentario + " name = 'tipo-entrega" + a + "'>" +
      "<input type='hidden' id='observacao" + a + "' value = " + observacao + " name = 'observacao" + a + "'>" +
      "<input type='hidden' id='observacao-destinatario" + a + "' value = " + observacao_1 + " name = 'observacao-destinatario" + a + "'>" +
      "<input type='hidden' id='natureza" + a + "' value = " + natureza + " name = 'natureza" + a + "'>" +
      "<input type='hidden' id='volumes" + a + "' value = " + volumes + " name = 'volumes" + a + "'>" +
      "<input type='hidden' id='peso-real" + a + "' value = " + peso + " name = 'peso-real" + a + "'>" +
      "<input type='hidden' id='valor" + a + "' value = " + valornf + " name = 'valor" + a + "'>" +
      "<input type='hidden' id='cp" + a + "' value = " + cp + " name = 'cp" + a + "'>" +
      "<input type='hidden' id='al" + a + "' value = " + al + " name = 'al" + a + "'>" +
      "<input type='hidden' id='la" + a + "' value = " + la + " name = 'la" + a + "'>" +
      "<input type='hidden' id='" + a + "' value = " + a + "> </div>"
    );

    table_inofrmation.remove();

    $("#tabela").append("<tr id='tabela" + a + "'>"
      + " <td>" + "<button class='btn-excluir' onClick='excluir(" + a + ")'>excluir</button></td>"
      + " <td>" + "<button class='btn-adiciona' onClick='mostra(" + a + ")'>editar</button></td>"
      + " <td id='dest'" + a + "' > " + destinatario + "</td > "
      + " <td id='cid" + a + "'>" + cidade + "</td>"
      + " <td id='vol" + a + "'>" + volumes + "</td> "
      + " <td id='pes" + a + "'>" + peso + "</td> "
      + " <td id='vlnf" + a + "'>" + valornf + "</td> "
      + " <td id='fret" + a + "'>" + frete + "</td> "
      + " <td id='cat" + a + "'>" + categoria + "</td> "
      + " <td id='nat" + a + "'>" + natureza + "</td> "
      + " <td id='com" + a + "'>" + cp + "</td> "
      + " <td id='altu" + a + "'>" + al + "</td> "
      + " <td id='lar" + a + "'>" + la + "</td> "
      + " <td id='cub" + a + "'>" + cub_aereo + "</td> "
      + " <td id='for" + a + "'>" + format + "</td> "
      + " <td id='comt" + a + "'>" + comentario + "</td> "

      + "</tr>  ");

    a++;



  }

  //------------------------------------------------------------------------

  invisible.remove();
  table.remove();

  let novo_vl = document.getElementById("qtd_info").value;

  novo_vl--;

  document.getElementById("qtd_info").value = novo_vl;

}

//------------------------------------------------------------------------------FUNÇÃO ABRE O EDITAR AO CLICKAR----------------------------------------------------------------------------------------------------------


function mostra(a) {
  var iae = document.getElementById(a).value

  console.log(iae);



  document.getElementById('valor_id').value = a;

  let teste = document.getElementById('valor_id');

  console.log(teste);




  var destinatario = document.getElementById('nome' + a).value;
  var cidade = document.getElementById('cidade-coleta' + a).value;
  var volumes = document.getElementById('volumes' + a).value;
  var peso = document.getElementById('peso-real' + a).value;
  var valornf = document.getElementById('valor' + a).value;
  var categoria = document.getElementById('tipo-transporte' + a).value;
  var frete = document.getElementById('tipo-frete' + a).value;
  var natureza = document.getElementById('natureza' + a).value;
  var cp = document.getElementById('cp' + a).value;
  var al = document.getElementById('al' + a).value;
  var la = document.getElementById('la' + a).value;
  var solicitante = document.getElementById('solicitante' + a).value;
  var cnpj = document.getElementById('cnpj' + a).value;
  var email = document.getElementById('email' + a).value;
  var departamento = document.getElementById('departamento' + a).value;
  var procurar = document.getElementById('procurar' + a).value;
  var cpf = document.getElementById('cpf' + a).value;
  var cnpj_remetente = document.getElementById('cnpj' + a).value;
  var cpf_remetente = document.getElementById('cpf' + a).value;
  var local_coleta = document.getElementById('local-coleta' + a).value;
  var parte_nome = document.getElementById('parte-nome-solicitante' + a).value;
  var cpf_cnpj = document.getElementById('cpf/cnpj-solicitante' + a).value;
  var endereco_coleta = document.getElementById('endereco-coleta' + a).value;
  var bairro_coleta = document.getElementById('bairro-coleta' + a).value;
  var estado_coleta = document.getElementById('estado-coleta' + a).value;
  var cidade_coleta = document.getElementById('cidade-coleta' + a).value;
  var cep_coleta = document.getElementById('cep-coleta' + a).value;
  var data = document.getElementById('data' + a).value;
  var hora1 = document.getElementById('hora-primeira' + a).value;
  var hora2 = document.getElementById('hora-segunda' + a).value;
  var tipo_coleta = document.getElementById('tipo-coleta' + a).value;
  var numero_pedido = document.getElementById('numero-pedido' + a).value;
  var observacao_1 = document.getElementById('observacao' + a).value;
  var parte_nome2 = document.getElementById('parte-nome' + a).value;
  var cpf_cnpj_2 = document.getElementById('cpf/cnpj' + a).value;
  var endereco = document.getElementById('endereco' + a).value;
  var bairro = document.getElementById('bairro' + a).value;
  var estado = document.getElementById('estado' + a).value;
  var cidade = document.getElementById('cidade' + a).value;
  var cep = document.getElementById('cep' + a).value;
  var observacao = document.getElementById('observacao-destinatario' + a).value;
  var comentario = document.getElementById('tipo-entrega' + a).value;




  $('#modal').modal('show');

  $("#modalb").append(" <div id='modal-limpa" + a + "' class='coluna1'> <label> Solicitante: </label><input type='hiden' id='solicitante" + a + "' value = " + solicitante + ">" +
    "<labe> Procurar por: </label> <input type='hiden' id='procurar" + a + "'value = " + procurar + ">" +
    " <labe> Email(remetente): </label><input type='hiden' id='email" + a + "'value = " + email + ">" +
    "<labe> Departamento: </label> <input type='hiden' id='departamento" + a + "'value = " + departamento + ">" +
    "<labe> Cnpj(remetente): </label> <input type='hiden' id='cnpj" + a + "' value = " + cnpj_remetente + ">" +
    "<labe> Cpf(remetente): </label> <input type='hiden' id='cpf" + a + "' value = " + cpf_remetente + ">" +
    "<labe> Parte do nome(remetente): </label> <input type='hiden' id='parte-nome-solicitante" + a + "' value = " + parte_nome + ">" +
    "<labe> Local de coleta: </label> <input type='hiden' id='local-coleta" + a + "' value = " + local_coleta + ">" +
    "<labe> CPF/CNPJ: </label> <input type='hiden' id='cpf/cnpj-solicitante" + a + "' value = " + cpf_cnpj + ">" +
    "<labe> Endereco(remetente): </label> <input type='hiden' id='endereco-coleta" + a + "' value = " + endereco_coleta + ">" +
    "<labe> Bairro(remetente):  </label> <input type='hiden' id='bairro-coleta" + a + "' value = " + bairro_coleta + ">" +
    "<labe> Estado(remetente): </label> <input type='hiden' id='estado-coleta" + a + "' value = " + estado_coleta + ">" +
    "<labe> Cidade(remetente): </label> <input type='hiden' class='input-coluna-2' id='cidade-coleta" + a + "' value = " + cidade_coleta + ">" +
    "<labe> Cep(remetente): </label> <input type='hiden' id='cep-coleta" + a + "' value = " + cep_coleta + ">" +
    "<labe> Data: </label> <input type='hiden' id='data" + a + "' value = " + data + ">" +
    "<labe> Horario: </label> <input type='hiden' id='hora-primeira" + a + "' value = " + hora1 + "><label> as </label>" +
    "<labe> Horario: </label> <input type='hiden' id='hora-segunda" + a + "' value = " + hora2 + ">" +
    "<labe> Tipo de coleta: </label> <input type='hiden' id='tipo-coleta" + a + "' value = " + tipo_coleta + ">" +
    "<labe> Numero pedido de compra: </label> <input type='hiden' id='numero-compra" + a + "' value = " + numero_pedido + ">" +
    "<labe> Cnpj(destinatario): </label> <input type='hiden' id='cnpj-destinatario" + a + "' value = " + cnpj + ">" +
    "<labe> Cpf(destinatario): </label> <input type='hiden' id='cpf-destinatario" + a + "' value = " + cpf + ">" +
    "<labe> Parte do nome(destinatario): </label> <input type='hiden' id='parte-nome" + a + "' value = " + parte_nome2 + ">" +
    "<labe> Destinatario: </label> <input type='hiden' id='nome" + a + "' value = " + destinatario + ">" +
    "<labe> CPF/CNPJ(destinatario): </label> <input type='hiden' id='cpf/cnpj" + a + "' value = " + cpf_cnpj_2 + ">" +
    "<labe> Endereco(destinatario): </label> <input type='hiden' id='endereco" + a + "' value = " + endereco + ">" +
    "<labe> Bairro(destinatario): </label> <input type='hiden' id='bairro" + a + "' value = " + bairro + ">" +
    "<labe> Estado(destinatario): </label> <input type='hiden' id='estado" + a + "' value = " + estado + ">" +
    "<labe> Cidade(destinatario): </label> <input type='hiden' id='cidade" + a + "' value = " + cidade + ">" +
    "<labe> CEP(destinatario): </label> <input type='hiden' id='cep" + a + "' value = " + cep + ">" +
    "<labe> Tipo de frete: </label> <input type='hiden' id='tipo-frete" + a + "' value = " + frete + ">" +
    "<labe> Tipo de transporte: </label> <input type='hiden' id='tipo-transporte" + a + "' value = " + categoria + ">" +
    "<labe> Tipo de entrega: </label> <input type='hiden' id='tipo-entrega" + a + "' value = " + comentario + ">" +
    "<labe> Observacao(remetente): </label> <input type='hiden' id='observacao" + a + "' value = " + observacao + ">" +
    "<labe> Observacao(destinatario): </label> <input type='hiden' id='observacao-destinatario" + a + "' value = " + observacao_1 + ">" +
    "<labe> Natureza: </label> <input type='hiden' id='natureza" + a + "' value = " + natureza + ">" +
    "<labe> Volumes: </label> <input type='hiden' id='volumes" + a + "' value = " + volumes + ">" +
    "<labe> Peso real: </label> <input type='hiden' id='peso-real" + a + "' value = " + peso + ">" +
    "<labe> Valor NF: </label> <input type='hiden' id='valor" + a + "' value = " + valornf + ">" +
    "<labe> Comp(m): </label> <input type='hiden' id='cp" + a + "' value = " + cp + ">" +
    "<labe> Alt(m): </label> <input type='hiden' id='al" + a + "' value = " + al + ">" +
    "<labe> Larg(m): </label> <input type='hiden' id='la" + a + "' value = " + la + ">" +
    "<labe> Parte do nome(destinatario): </label> <input type='hiden' id='" + a + "' value = " + a + ">" +
    "</div>"
  );


}



//----------------------------------------------------------------------------------REOMVE AO CLICKAR EM CANCELAR NO MODAL-------------------------------------------------------------------------------------------


function remove() {
  let id = document.getElementById("valor_id").value;
  let node = document.getElementById("modal-limpa" + id);
  console.log(id);

  node.remove();

  $('#modal').modal('hide');

}



//--------------------------------------------------------------------------------------ADICIONA OS NOVOS CAMPOS EDITADOS----------------------------------------------------------------------------------------------------------

function adiciona() {

  let id = document.getElementById('valor_id').value;

  let tabela = document.getElementById("tabela" + id);

  let invisivel = document.getElementById("invisible" + id);






  var destinatario = document.getElementById('nome' + id).value;
  var cidade = document.getElementById('cidade-coleta' + id).value;
  var volumes = document.getElementById('volumes' + id).value;
  var peso = document.getElementById('peso-real' + id).value;
  var valornf = document.getElementById('valor' + id).value;
  var categoria = document.getElementById('tipo-transporte' + id).value;
  var frete = document.getElementById('tipo-frete' + id).value;
  var natureza = document.getElementById('natureza' + id).value;
  var cp = document.getElementById('cp' + id).value;
  var al = document.getElementById('al' + id).value;
  var la = document.getElementById('la' + id).value;
  var solicitante = document.getElementById('solicitante' + id).value;
  var cnpj = document.getElementById('cnpj' + id).value;
  var email = document.getElementById('email' + id).value;
  var departamento = document.getElementById('departamento' + id).value;
  var procurar = document.getElementById('procurar' + id).value;
  var cpf = document.getElementById('cpf' + id).value;
  var cnpj_remetente = document.getElementById('cnpj' + id).value;
  var cpf_remetente = document.getElementById('cpf' + id).value;
  var local_coleta = document.getElementById('local-coleta' + id).value;
  var parte_nome = document.getElementById('parte-nome-solicitante' + id).value;
  var cpf_cnpj = document.getElementById('cpf/cnpj-solicitante' + id).value;
  var endereco_coleta = document.getElementById('endereco-coleta' + id).value;
  var bairro_coleta = document.getElementById('bairro-coleta' + id).value;
  var estado_coleta = document.getElementById('estado-coleta' + id).value;
  var cidade_coleta = document.getElementById('cidade-coleta' + id).value;
  var cep_coleta = document.getElementById('cep-coleta' + id).value;
  var data = document.getElementById('data' + id).value;
  var hora1 = document.getElementById('hora-primeira' + id).value;
  var hora2 = document.getElementById('hora-segunda' + id).value;
  var tipo_coleta = document.getElementById('tipo-coleta' + id).value;
  var numero_pedido = document.getElementById('numero-pedido' + id).value;
  var observacao_1 = document.getElementById('observacao' + id).value;
  var parte_nome2 = document.getElementById('parte-nome' + id).value;
  var cpf_cnpj_2 = document.getElementById('cpf/cnpj' + id).value;
  var endereco = document.getElementById('endereco' + id).value;
  var bairro = document.getElementById('bairro' + id).value;
  var estado = document.getElementById('estado' + id).value;
  var cidade = document.getElementById('cidade' + id).value;
  var cep = document.getElementById('cep' + id).value;
  var observacao = document.getElementById('observacao-destinatario' + id).value;
  var comentario = document.getElementById('tipo-entrega' + id).value;


  var cub_aereo = "0";

  var calculo = cp.replace(",", "") * al * la * 300;
  var format = (calculo).toLocaleString('pt-BR');


  $("#invisivel").append("<div id= 'invisible" + id + "'><input type='hidden' id='solicitante" + id + "' value = " + solicitante + " name = 'solicitante" + id + "'>" +
    "<input type='hidden' id='procurar" + id + "'value = " + procurar + " name = 'procurar" + id + "'>" +
    "<input type='hidden' id='email" + id + "'value = " + email + " name = 'email" + id + "'>" +
    "<input type='hidden' id='departamento" + id + "'value = " + departamento + " name = 'departamento" + id + "'>" +
    "<input type='hidden' id='cnpj" + id + "' value = " + cnpj_remetente + " name = 'cnpj" + id + "'>" +
    "<input type='hidden' id='cpf" + id + "' value = " + cpf_remetente + " name = 'cpf" + id + "'>" +
    "<input type='hidden' id='parte-nome-solicitante" + id + "' value = " + parte_nome + " name = 'parte-nome-solicitante" + id + "'>" +
    "<input type='hidden' id='local-coleta" + id + "' value = " + local_coleta + " name = 'local-coleta" + id + "'>" +
    "<input type='hidden' id='cpf/cnpj-solicitante" + id + "' value = " + cpf_cnpj + " name = 'cpf/cnpj-solicitante" + id + "'>" +
    "<input type='hidden' id='endereco-coleta" + id + "' value = " + endereco_coleta + " name = 'endereco-coleta" + id + "'>" +
    "<input type='hidden' id='bairro-coleta" + id + "' value = " + bairro_coleta + " name = 'bairro-coleta" + id + "'>" +
    "<input type='hidden' id='estado-coleta" + id + "' value = " + estado_coleta + " name = 'estado-coleta" + id + "'>" +
    "<input type='hidden' id='cidade-coleta" + id + "' value = " + cidade_coleta + " name = 'cidade-coleta" + id + "'>" +
    "<input type='hidden' id='cep-coleta" + id + "' value = " + cep_coleta + " name = 'cep-coleta" + id + "'>" +
    "<input type='hidden' id='data" + id + "' value = " + data + " name = 'data" + id + "'>" +
    "<input type='hidden'  id='hora-primeira" + id + "' value = " + hora1 + " name = 'hora-primeira" + id + "'>" +
    "<input type='hidden' id='hora-segunda" + id + "' value = " + hora2 + " name = 'hora-segunda" + id + "'>" +
    "<input type='hidden' id='tipo-coleta" + id + "' value = " + tipo_coleta + " name = 'tipo-coleta" + id + "'>" +
    "<input type='hidden' id='numero-pedido" + id + "' value = " + numero_pedido + " name = 'numero-pedido" + id + "'>" +
    "<input type='hidden' id='cnpj-destinatario" + id + "' value = " + cnpj + " name = 'cnpj-destinatario" + id + "'>" +
    "<input type='hidden' id='cpf-destinatario" + id + "' value = " + cpf + " name = 'cpf-destinatario" + id + "'>" +
    "<input type='hidden' id='parte-nome" + id + "' value = " + parte_nome2 + " name = parte-nome " + id + "'>" +
    "<input type='hidden' id='nome" + id + "' value = " + destinatario + " name = 'nome" + id + "'>" +
    "<input type='hidden' id='cpf/cnpj" + id + "' value = " + cpf_cnpj_2 + " name = 'cpf/cnpj" + id + "'>" +
    "<input type='hidden' id='endereco" + id + "' value = " + endereco + " name = 'endereco" + id + "'>" +
    "<input type='hidden' id='bairro" + id + "' value = " + bairro + " name = 'bairro" + id + "'>" +
    "<input type='hidden' id='estado" + id + "' value = " + estado + " name = 'estado" + id + "'>" +
    "<input type='hidden' id='cidade" + id + "' value = " + cidade + " name = 'cidade" + id + "'>" +
    "<input type='hidden' id='cep" + id + "' value = " + cep + " name = 'cep" + id + "'>" +
    "<input type='hidden' id='tipo-frete" + id + "' value = " + frete + " name = 'tipo-frete" + id + "'>" +
    "<input type='hidden' id='tipo-transporte" + id + "' value = " + categoria + " name = 'tipo-transporte" + id + "'>" +
    "<input type='hidden' id='tipo-entrega" + id + "' value = " + comentario + " name = 'tipo-entrega" + id + "'>" +
    "<input type='hidden' id='observacao" + id + "' value = " + observacao + " name = 'observacao" + id + "'>" +
    "<input type='hidden' id='observacao-destinatario" + id + "' value = " + observacao_1 + " name = 'observacao-destinatario" + id + "'>" +
    "<input type='hidden' id='natureza" + id + "' value = " + natureza + " name = 'natureza" + id + "'>" +
    "<input type='hidden' id='volumes" + id + "' value = " + volumes + " name = 'volumes" + id + "'>" +
    "<input type='hidden' id='peso-real" + id + "' value = " + peso + " name = 'peso-real" + id + "'>" +
    "<input type='hidden' id='valor" + id + "' value = " + valornf + " name = 'valor" + id + "'>" +
    "<input type='hidden' id='cp" + id + "' value = " + cp + " name = 'cp" + id + "'>" +
    "<input type='hidden' id='al" + id + "' value = " + al + " name = 'al" + id + "'>" +
    "<input type='hidden' id='la" + id + "' value = " + la + " name = 'la" + id + "'>" +
    "<input type='hidden' id='" + id + "' value = " + id + "> </div>"
  );


  $("#tabela").append(
    "<tr id='tabela" + id + "'>"
    + " <td>" + "<button class='btn-excluir' onClick='excluir(" + id + ")'>excluir</button></td>"
    + " <td>" + "<button class='btn-adiciona' onClick='mostra(" + id + ")'>editar</button></td>"
    + " <td id='dest'" + id + "' > " + destinatario + "</td > "
    + " <td id='cid" + id + "'>" + cidade + "</td>"
    + " <td id='vol" + id + "'>" + volumes + "</td> "
    + " <td id='pes" + id + "'>" + peso + "</td> "
    + " <td id='vlnf" + id + "'>" + valornf + "</td> "
    + " <td id='cat" + id + "'>" + categoria + "</td> "
    + " <td id='fret" + id + "'>" + frete + "</td> "
    + " <td id='nat" + id + "'>" + natureza + "</td> "
    + " <td id='com" + id + "'>" + cp + "</td> "
    + " <td id='altu" + id + "'>" + al + "</td> "
    + " <td id='lar" + id + "'>" + la + "</td> "
    + " <td id='cub" + id + "'>" + cub_aereo + "</td> "
    + " <td id='for" + id + "'>" + format + "</td> "
    + " <td id='comt" + id + "'>" + comentario + "</td> "
    + "</tr>  ");

  var remove = document.getElementById("modal-limpa" + id);

  invisivel.remove();

  console.log(tabela);

  tabela.remove();

  console.log(id);

  remove.remove();
  $('#modal').modal('hide');
}

//-----------------------------------------------------------------------------------------------ENVIAR DADOS-------------------------------------------------------------------------------------

function enviar() {

  console.log('enviar');


  $.ajax({
    type: "POST",
    url: "/codigo",
    dataType: "json",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    beforeSend: function () {

    },
    success: function (content) {
      const codigo = content[0].codigo_dcl;
      document.getElementById("codigo_id").value = codigo;
    },
    error: function (a, b, c) {

    }


  });

  var qtd = document.getElementById("qtd_info").value;


  var codigo = document.getElementById("codigo_id").value;

  var codigo_cortado = codigo.slice(2);



  if (qtd == 0) {

    var destinatario = document.getElementById('destinatario').value;
    var cidade = document.getElementById('cidade-coleta').value;
    var volumes = document.getElementById('volumes').value;
    var peso = document.getElementById('peso').value;
    var valornf = document.getElementById('valornf').value;
    var categoria = document.querySelector('input[name=tipotrans]:checked').value;
    var frete = document.querySelector('input[name=tipofrete]:checked').value;
    var natureza = document.getElementById('natureza').value;
    var cp = document.getElementById('cp').value;
    var al = document.getElementById('al').value;
    var la = document.getElementById('la').value;
    var solicitante = document.getElementById('remetente').value;
    var cnpj = document.getElementById('cnpj').value;
    var email = document.getElementById('email-1').value;
    var departamento = document.getElementById('dp').value;
    var procurar = document.getElementById('procurar').value;
    var cpf = document.getElementById('cpf').value;
    var cnpj_remetente = document.getElementById('cnpj_remetente').value;
    var cpf_remetente = document.getElementById('cpf_remetente').value;
    var local_coleta = document.getElementById('local-coleta').value;
    var parte_nome = document.getElementById('parte-nome').value;
    var cpf_cnpj = document.getElementById('cnpj/cpf').value;
    var endereco_coleta = document.getElementById('endereco-coleta').value;
    var bairro_coleta = document.getElementById('bairro-coleta').value;
    var estado_coleta = document.getElementById('estado-coleta').value;
    var cidade_coleta = document.getElementById('cidade-coleta').value;
    var cep_coleta = document.getElementById('cep-coleta').value;
    var data = document.getElementById('data').value;
    var hora1 = document.getElementById('hora1').value;
    var hora2 = document.getElementById('hora2').value;
    var tipo_coleta = document.getElementById('tipo-coleta').value;
    var numero_pedido = document.getElementById('numero-pedido').value;
    var observacao_1 = document.getElementById('obs').value;
    var parte_nome2 = document.getElementById('parte-nome-2').value;
    var cpf_cnpj_2 = document.getElementById('cpf/cnpj-2').value;
    var endereco = document.getElementById('endereco').value;
    var bairro = document.getElementById('bairro').value;
    var estado = document.getElementById('estado').value;
    var cidade = document.getElementById('cidade').value;
    var cep = document.getElementById('cep').value;
    var observacao = document.getElementById('observacao').value;


    var cub_aereo = "0";

    var comentario = document.querySelector('input[name= tipoentrega]:checked').value;




    var calculo = cp.replace(",", "") * al * la * 300;
    var format = (calculo).toLocaleString('pt-BR');



    $.ajax({
      type: "POST",
      url: "/imprimir",
      dataType: "text",
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      data: {
        destinatario,
        cidade,
        volumes,
        peso,
        valornf,
        categoria,
        frete,
        natureza,
        cp,
        al,
        la,
        solicitante,
        cnpj,
        email,
        departamento,
        procurar,
        cpf,
        cnpj_remetente,
        cpf_remetente,
        local_coleta,
        parte_nome,
        cpf_cnpj,
        endereco_coleta,
        bairro_coleta,
        estado_coleta,
        cidade_coleta,
        cep_coleta,
        data,
        hora1,
        hora2,
        tipo_coleta,
        numero_pedido,
        observacao_1,
        parte_nome2,
        endereco,
        bairro,
        estado,
        cep,
        codigo,
        cpf_cnpj_2,
        observacao,
        comentario
      },
      beforeSend: function () {

      },
      success: function (content) {
        console.log(content);
      },
      error: function (a, b, c) {

      }


    });
  }
  else {
    for (let id = 1; id <= qtd; id++) {
      let destinatario = document.getElementById('nome' + id).value;
      let cidade = document.getElementById('cidade' + id).value;
      let volumes = document.getElementById('volumes' + id).value;
      let peso = document.getElementById('peso-real' + id).value;
      let valornf = document.getElementById('valor' + id).value;
      let categoria = document.getElementById('tipo-transporte' + id).value;
      let frete = document.getElementById('tipo-frete' + id).value;
      let natureza = document.getElementById('natureza' + id).value;
      let cp = document.getElementById('cp' + id).value;
      let al = document.getElementById('al' + id).value;
      let la = document.getElementById('la' + id).value;
      let solicitante = document.getElementById('solicitante' + id).value;
      let cnpj = document.getElementById('cnpj' + id).value;
      let email = document.getElementById('email' + id).value;
      let departamento = document.getElementById('departamento' + id).value;
      let procurar = document.getElementById('procurar' + id).value;
      let cpf = document.getElementById('cpf' + id).value;
      let cnpj_remetente = document.getElementById('cnpj' + id).value;
      let cpf_remetente = document.getElementById('cpf' + id).value;
      let local_coleta = document.getElementById('local-coleta' + id).value;
      let parte_nome = document.getElementById('parte-nome-solicitante' + id).value;
      let cpf_cnpj = document.getElementById('cpf/cnpj-solicitante' + id).value;
      let endereco_coleta = document.getElementById('endereco-coleta' + id).value;
      let bairro_coleta = document.getElementById('bairro-coleta' + id).value;
      let estado_coleta = document.getElementById('estado-coleta' + id).value;
      let cidade_coleta = document.getElementById('cidade-coleta' + id).value;
      let cep_coleta = document.getElementById('cep-coleta' + id).value;
      let data = document.getElementById('data' + id).value;
      let hora1 = document.getElementById('hora-primeira' + id).value;
      let hora2 = document.getElementById('hora-segunda' + id).value;
      let tipo_coleta = document.getElementById('tipo-coleta' + id).value;
      let numero_pedido = document.getElementById('numero-pedido' + id).value;
      let observacao_1 = document.getElementById('observacao' + id).value;
      let parte_nome2 = document.getElementById('parte-nome' + id).value;
      let cpf_cnpj_2 = document.getElementById('cpf/cnpj' + id).value;
      let endereco = document.getElementById('endereco' + id).value;
      let bairro = document.getElementById('bairro' + id).value;
      let estado = document.getElementById('estado' + id).value;
      let cep = document.getElementById('cep' + id).value;
      let observacao = document.getElementById('observacao-destinatario' + id).value;
      let comentario = document.getElementById('tipo-entrega' + id).value;

      console.log('variaveis');

      $.ajax({
        type: "POST",
        url: "/imprimir",
        dataType: "text",
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
          destinatario,
          cidade,
          volumes,
          peso,
          valornf,
          categoria,
          frete,
          natureza,
          cp,
          al,
          la,
          solicitante,
          cnpj,
          email,
          departamento,
          procurar,
          cpf,
          cnpj_remetente,
          cpf_remetente,
          local_coleta,
          parte_nome,
          cpf_cnpj,
          endereco_coleta,
          bairro_coleta,
          estado_coleta,
          cidade_coleta,
          cep_coleta,
          data,
          hora1,
          hora2,
          tipo_coleta,
          numero_pedido,
          observacao_1,
          parte_nome2,
          endereco,
          bairro,
          estado,
          cep,
          codigo,
          cpf_cnpj_2,
          observacao,
          comentario
        },
        beforeSend: function () {

        },
        success: function (content) {
          console.log(content);
        },
        error: function (a, b, c) {

        }


      });
    }
  }
  $.ajax({
    type: "POST",
    url: "/uparcodigo",
    dataType: "json",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    beforeSend: function () {

    },
    success: function (content) {
      const codigo = content[0].codigo_dcl;
      document.getElementById("codigo_id").value = codigo;
    },
    error: function (a, b, c) {

    }


  });
}

//------------------------------------------------------FUNÇÃO IMPRIMIR--------------------------------------------------------

function imprimir() {

  var qtd = document.getElementById("qtd_info").value;

  $.ajax({
    type: "POST",
    url: "/codigo",
    dataType: "json",
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    beforeSend: function () {

    },
    success: function (content) {
      var codigo = content[0].codigo_dcl;


      document.getElementById("codigo_id").value = codigo;



      console.log(codigo);

      if (qtd == 0) {

        //VERIFICA O CODIGO DA DECLARAÇÃO



        //-------------------------------------------------------------------------
        var destinatario = document.getElementById('destinatario').value;
        var cidade = document.getElementById('cidade-coleta').value;
        var volumes = document.getElementById('volumes').value;
        var peso = document.getElementById('peso').value;
        var valornf = document.getElementById('valornf').value;
        var categoria = document.querySelector('input[name=tipotrans]:checked').value;
        var frete = document.querySelector('input[name=tipofrete]:checked').value;
        var natureza = document.getElementById('natureza').value;
        var cp = document.getElementById('cp').value;
        var al = document.getElementById('al').value;
        var la = document.getElementById('la').value;
        var solicitante = document.getElementById('remetente').value;
        var cnpj = document.getElementById('cnpj').value;
        var email = document.getElementById('email-1').value;
        var departamento = document.getElementById('dp').value;
        var procurar = document.getElementById('procurar').value;
        var cpf = document.getElementById('cpf').value;
        var cnpj_remetente = document.getElementById('cnpj_remetente').value;
        var cpf_remetente = document.getElementById('cpf_remetente').value;
        var local_coleta = document.getElementById('local-coleta').value;
        var parte_nome = document.getElementById('parte-nome').value;
        var cpf_cnpj = document.getElementById('cnpj/cpf').value;
        var endereco_coleta = document.getElementById('endereco-coleta').value;
        var bairro_coleta = document.getElementById('bairro-coleta').value;
        var estado_coleta = document.getElementById('estado-coleta').value;
        var cidade_coleta = document.getElementById('cidade-coleta').value;
        var cep_coleta = document.getElementById('cep-coleta').value;
        var data = document.getElementById('data').value;
        var hora1 = document.getElementById('hora1').value;
        var hora2 = document.getElementById('hora2').value;
        var tipo_coleta = document.getElementById('tipo-coleta').value;
        var numero_pedido = document.getElementById('numero-pedido').value;
        var observacao_1 = document.getElementById('obs').value;
        var parte_nome2 = document.getElementById('parte-nome-2').value;
        var cpf_cnpj_2 = document.getElementById('cpf/cnpj-2').value;
        var endereco = document.getElementById('endereco').value;
        var bairro = document.getElementById('bairro').value;
        var estado = document.getElementById('estado').value;
        var cidade = document.getElementById('cidade').value;
        var cep = document.getElementById('cep').value;
        var observacao = document.getElementById('observacao').value;



        var cub_aereo = "0";

        var comentario = document.querySelector('input[name= tipoentrega]:checked').value;




        var calculo = cp.replace(",", "") * al * la * 300;
        var format = (calculo).toLocaleString('pt-BR');


        $.ajax({
          type: "POST",
          url: "/temporary",
          dataType: "text",
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          data: {
            destinatario,
            cidade,
            volumes,
            peso,
            valornf,
            categoria,
            frete,
            natureza,
            cp,
            al,
            la,
            solicitante,
            cnpj,
            email,
            departamento,
            procurar,
            cpf,
            cnpj_remetente,
            cpf_remetente,
            local_coleta,
            parte_nome,
            cpf_cnpj,
            endereco_coleta,
            bairro_coleta,
            estado_coleta,
            cidade_coleta,
            cep_coleta,
            data,
            hora1,
            hora2,
            tipo_coleta,
            numero_pedido,
            observacao_1,
            parte_nome2,
            endereco,
            bairro,
            estado,
            cep,
            cpf_cnpj_2,
            codigo,
            observacao,
            comentario
          },
          beforeSend: function () {

          },
          success: function (content) {
            console.log(content);
          },
          error: function (a, b, c) {

          }


        });

      }
      else {
        for (let id = 1; id <= qtd; id++) {
          let destinatario = document.getElementById('nome' + id).value;
          let cidade = document.getElementById('cidade' + id).value;
          let volumes = document.getElementById('volumes' + id).value;
          let peso = document.getElementById('peso-real' + id).value;
          let valornf = document.getElementById('valor' + id).value;
          let categoria = document.getElementById('tipo-transporte' + id).value;
          let frete = document.getElementById('tipo-frete' + id).value;
          let natureza = document.getElementById('natureza' + id).value;
          let cp = document.getElementById('cp' + id).value;
          let al = document.getElementById('al' + id).value;
          let la = document.getElementById('la' + id).value;
          let solicitante = document.getElementById('solicitante' + id).value;
          let cnpj = document.getElementById('cnpj' + id).value;
          let email = document.getElementById('email' + id).value;
          let departamento = document.getElementById('departamento' + id).value;
          let procurar = document.getElementById('procurar' + id).value;
          let cpf = document.getElementById('cpf' + id).value;
          let cnpj_remetente = document.getElementById('cnpj' + id).value;
          let cpf_remetente = document.getElementById('cpf' + id).value;
          let local_coleta = document.getElementById('local-coleta' + id).value;
          let parte_nome = document.getElementById('parte-nome-solicitante' + id).value;
          let cpf_cnpj = document.getElementById('cpf/cnpj-solicitante' + id).value;
          let endereco_coleta = document.getElementById('endereco-coleta' + id).value;
          let bairro_coleta = document.getElementById('bairro-coleta' + id).value;
          let estado_coleta = document.getElementById('estado-coleta' + id).value;
          let cidade_coleta = document.getElementById('cidade-coleta' + id).value;
          let cep_coleta = document.getElementById('cep-coleta' + id).value;
          let data = document.getElementById('data' + id).value;
          let hora1 = document.getElementById('hora-primeira' + id).value;
          let hora2 = document.getElementById('hora-segunda' + id).value;
          let tipo_coleta = document.getElementById('tipo-coleta' + id).value;
          let numero_pedido = document.getElementById('numero-pedido' + id).value;
          let observacao_1 = document.getElementById('observacao' + id).value;
          let parte_nome2 = document.getElementById('parte-nome' + id).value;
          let cpf_cnpj_2 = document.getElementById('cpf/cnpj' + id).value;
          let endereco = document.getElementById('endereco' + id).value;
          let bairro = document.getElementById('bairro' + id).value;
          let estado = document.getElementById('estado' + id).value;
          let cep = document.getElementById('cep' + id).value;
          let observacao = document.getElementById('observacao-destinatario' + id).value;
          let comentario = document.getElementById('tipo-entrega' + id).value;



          $.ajax({
            type: "POST",
            url: "/temporary",
            dataType: "text",
            headers: {
              'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
              destinatario,
              cidade,
              volumes,
              peso,
              valornf,
              categoria,
              frete,
              natureza,
              cp,
              al,
              la,
              solicitante,
              cnpj,
              email,
              departamento,
              procurar,
              cpf,
              cnpj_remetente,
              cpf_remetente,
              local_coleta,
              parte_nome,
              cpf_cnpj,
              endereco_coleta,
              bairro_coleta,
              estado_coleta,
              cidade_coleta,
              cep_coleta,
              data,
              hora1,
              hora2,
              tipo_coleta,
              numero_pedido,
              observacao_1,
              parte_nome2,
              endereco,
              bairro,
              estado,
              cep,
              cpf_cnpj_2,
              codigo,
              observacao,
              comentario
            },
            beforeSend: function () {

            },
            success: function (content) {
              console.log(content);
            },
            error: function (a, b, c) {

            }


          });
        }
      }
    },
    error: function (a, b, c) {

    }


  });


  var a = document.createElement('a');

  a.setAttribute('href', '/pdf');

  var evento = document.createEvent('MouseEvents');
  evento.initEvent('click', true, true);
  a.dispatchEvent(evento);


}

function teste() {
  var a = document.createElement('a');

  a.setAttribute('href', '/pdf');

  var evento = document.createEvent('MouseEvents');
  evento.initvent('click', true, true);
  a.dispatchEvent(evento);



}