<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="view/css/bootstrap.min.css">
    <link rel="stylesheet" href="view/css/materialize.min.css">
    <link rel="stylesheet" href="https://localhost/notfis-sacpro/view/css/styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  

    <title>Document</title> 
  <style>
#imagem{
  width:50px;
  height: 50px;
}
.txt{
  font-size: 15px;
}
@media print {
    .tabela-2 { page-break-after: always; } /* page-break-after works, as well */
}
.lacre{
  font-size: 23px;
  position: absolute;
  right:0;
}
  </style>
</head>\\\

<body id="body">

@foreach ($select as $selecione)
{{
    $dcl = $selecione->codigo;
    $remetente = $selecione->solicitante;
    $procurar_por = $selecione->procupar_por;
    $email = $selecione->email;
    $departamento = $selecione->departamento;
    $cnpj_remetente = $selecione->cnpj_remetente;
    $cpf_remetente = $selecione->cpf_remetente;
    $cpf_cnpj = $selecione->cpf_cnpj;
    $cpf_cnpj_2 = $selecione->cpf_cnpj_2;
    $parte_nome_remetente = $selecione->parte_nome_remetente;
    $local_coleta = $selecione->local_coleta;
    $endereco_coleta = $selecione->endereco_coleta;
    $bairro_coleta = $selecione->bairro_coleta;
    $estado_coleta = $selecione->estado_coleta;
    $cep_coleta = $selecione->cep_coleta;
    $data_coleta = $selecione->data_coleta;
    $horario_coleta = $selecione->horario_coleta;
    $horario_coleta2 = $selecione->horario_coleta2;
    $tipo_coleta = $selecione->tipo_coleta;
    $numero_compra = $selecione->numero_compra;
    $observacao_coleta = $selecione->observacao_coleta;
    $cnpj = $selecione->cnpj;
    $cpf = $selecione->cpf;
    $parte_nome_destinatario = $selecione->parte_nome_destinatario;
    $destinatario = $selecione->nome;
    $endereco = $selecione->endereco;
    $bairro = $selecione->bairro;
    $estado = $selecione->estado;
    $cidade = $selecione->cidade;
    $tipo_frete = $selecione->tipo_frete;
    $tipo_transporte = $selecione->tipo_transporte;
    $tipo_transporte = $selecione->tipo_transporte;
    $tipo_entrega = $selecione->tipo_entrega;
    $observacao = $selecione->observacao;
    $natureza = $selecione->natureza;
    $volumes = $selecione->volumes;
    $peso = $selecione->peso;
    $valor = $selecione->valor;
    $cp = $selecione->cp;
    $al = $selecione->al;
    $la = $selecione->la;
   
    






}}



<div class ="dcl">
            <img src="{{asset('css/logo (1).png')}}" id="imagem">
            
        </div>
        <div class = "lacre">
        <b><?php  echo $dcl ?></b>
</br>
        <b><?php  echo $lacre ?></b>
        </div>
        </br></br>
        
            <div class="declaracao">
              <b>DECLARAÇÃO PARA TRANSPORTE DE MERCADORIAS </b> 
            </div>

                <div class = "tabela">
                <table class="tabla table-bordered ">
 
  <tbody>
  
    <tr>
      <td><b>Remetente: <?php echo $remetente;?></b></td>
      <td><b>Destinatário: <?php echo $destinatario;?></b></td>
      
    </tr>
    <tr>
      <td></td>
      <td><b>Recebedor: <?php echo $recebedor;?></b></td>
      
    </tr>
    <tr>
      
      <td><b>CNPJ: <?php echo $cnpj_remetente;?></b></td>
      <td><b>CPF/CNPJ: <?php echo $cpf_cnpj; ?></b></td>
      
    
    </tr>
    <tr>
      <td></td>
      <td><b>Cidade: <?php echo $cidade;?></b>
      </br>
<b>uf: <?php echo $uf; ?></b></td>
      
    </tr>
    <tr>
      <td><b>IE: <?php echo $ie; ?></b></td>
      <td><b>Endereço: <?php echo $endereco; ?></b>
</br>
<b>Nº: <?php echo $numero; ?></b>
</td>
    </tr>
    <tr>
      <td><b></b></td>
      <td><b>Bairro: <?php echo $bairro; ?></b>
      </br>
<b>cep: <?php echo $cep; ?></b></td>
    </tr>
    <tr>
      
      <td><b>Cidade: <?php echo $cidade_remetente; ?></b>
</td>
      <td><b>Complemento: <?php echo $complemento; ?></b></td>
      
    
    </tr>
    <tr>
      
      <td></td>
      <td><b>TI: <?php echo $ti; ?></b></td>
      
    
    </tr>
    
    <tr>
     
      <td><b>Endereço: <?php  echo $endereco_remetente; ?></b></td>
      <td><b>RTMI: <?php echo $rtmi; ?></b></td>
      
    
    </tr>
    <tr>
    <td><b>Bairro: <?php echo $bairro_remetente; ?></b></td>
      <td><b>Telefone: <?php echo $telefone; ?></b></td>
    
      
    
    </tr>
   
    
  </tbody>
</table>

                </div>
                <div class="txt">
                *Informações acima obrigatórias, IE (Inscrição Estadual) apenas se tiver. Declaramos para os devidos fins, e sob as penas da lei, que nesta data estamos transportando pela <b>Via Expressa Logística e Armazenagem Ltda.</b> os bens para transporte aos destinatários acima qualificados, devidamente embalados e identificados.Tois bens não possuem serventia comercial e não requerem, portanto, emissão de Nota Fiscal dada sua natureza e minha condição de não contribuinte do remetente. Levamos ao conhecimento de V.Sas, que somos cumpridores de todas obrigações fiscais desta legislação Municipal e isenta de Inscrição Estadual, uma vez que suas atividades não se enquadram no ámbito de tributação do I.C.M.S (Decreto Lei no 33.118/91), ficando assim desobrigada de emissão de Nota Fiscal para circulação de mercadorias a titulo de simples remessa. Portanto, para atendimento de nossa matriz, e emitido Memorando de Remessa.
                </div>

                    <b> FRETE: </b>  (x) Origem - CIF  ( ) Destino-FOB
                <div class="tabela-2">
                <table class="table table-bordered ">
  <thead>
   
    <tr>
      <th scope="col">Quantidade</th>
      <th scope="col">Descrição</th>
      <th scope="col">Peso</th>
      <th scope="col">Valor total</th>
    </tr>
  </thead>
    <tr>
     
      <td><?php  echo $quantidade; ?></td>
      <td><?php echo $descricao; ?></td>
      <td><?php echo $peso; ?> KG</td>
      <td><?php echo $valor; ?></td>

    </tr>
   
  
  
</table>
                </div>
@endforeach
  
</body>

<script type="text/javascript">
  
var body = document.getElementById('body');

window.print();

setTimeout(() => {  var a = document.createElement('a');

a.setAttribute('href','index.php');

var evento = document.createEvent('MouseEvents');
evento.initEvent('click', true, true);
a.dispatchEvent(evento);}, 20000);

</script>

</html>