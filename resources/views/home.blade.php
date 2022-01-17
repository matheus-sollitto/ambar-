@extends('layouts.app')

@section('content')

<link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet" >
<link href="{{ asset('css/style.css') }}" rel="stylesheet" >
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
<meta name = "csrf-token" content = {{csrf_token()}}/>
<script src="{{asset('js/jquery-3.6.0.min.js')}}"></script>
<script src="{{asset('js/jquery.mask.js')}}"></script>
<script src="{{asset('js/script.js')}}"></script>

<div  class="container">
    <div   class="row justify-content-center">
        <div class="col-md-8">
            <div  class="card">
                <div class="card-header">DECLARAÇÃO PARA TRANSPORTE DE MERCADORIAS</div>
               

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                 
                 @csrf
                     <div class = "formulario-box" >
                         <div class="titulo">

                       </div>
                  
                      <!--COLUNA 1-->
                       <div class="coluna-1">
                       <div class ="input-coluna-1">
                                <input class = 'input-col1' name="solicitante" required id="remetente">
                                <label>Solicitante:</label>
                        </div>
                        <div class ="input-coluna-1">
                                <input class = 'input-col1' name="procurar" required id="procurar">
                                <label>Procurar por:</label>
                        </div>
                        <div class ="input-coluna-1" style="width:47%">
                                <input class = 'input-col1' name="email" required id= "email-1" type="email">
                                <label>Email:</label>
                        </div>
                        <div  class ="input-coluna-1">
                                <input class = 'input-col1' name="departamento" required id= "dp" >
                                <label>Departamento:</label>
                        </div>
                
                <br>
                <hr>
            </div> 

                <!--COLUNA 2-->
                       
                       
                     
                        <div class="coluna-2">        
                          <div class ="input-coluna-2">
                                <input class = 'input-col1' name="cpf" required id="cnpj_remetente" >
                                <label>CNPJ:</label>
                            </div>
                          <div class ="input-coluna-2">
                                <input class = 'input-col1' name="cpf_remetente" required id="cpf_remetente">
                                <label>CPF:</label>
                          </div>
                       <div class ="input-coluna-2">
                                <input class = 'input-col1' name="parte-nome" required id= "parte-nome" >
                                <label>Parte do nome:</label>
                       </div>
                       
                       <br>
                       <hr>
                        </div> 

                <!--COLUNA 3-->


                <div class="coluna-3">        
                    <div class ="input-coluna-3">
                          <input class = 'input-col1' name="loca lcoleta" required id="local-coleta" >
                          <label>Local de coleta:</label>
                      </div>
                    <div class ="input-coluna-3-cpf">
                          <input class = 'input-col-3-cpf/cnpj' name="cnpj/cpf" required id="cnpj/cpf" value="558-811-888.02">
                          <label>CPF/CNPJ:</label>
                    </div>
                 
                 
                  </div>      
                   <!--COLUNA 4-->


                <div class="coluna-4">        
                    <div class ="input-coluna-4">
                          <input class = 'input-col1' name="endere cocoleta" required id="endereco-coleta" >
                          <label>Endereço para coleta:</label>
                      </div>
                    <div class ="input-coluna-4-bairro">
                          <input class = 'input-col-3-cpf/cnpj' name="bairro" required id="bairro-coleta">
                          <label>Bairro:</label>
                    </div>
                 
                 <br>
                 <br>
                  </div>     
                  
                  <!--COLUNA 5-->
                       
                       
                     
                  <div class="coluna-5">        
                    <div class ="input-coluna-5">
                          <input class = 'input-col1' name="estado" required id="estado-coleta" >
                          <label>Estado:</label>
                      </div>
                    <div class ="input-coluna-5">
                          <input class = 'input-col1' name="cidade" required id="cidade-coleta">
                          <label>Cidade:</label>
                    </div>
                 <div class ="input-coluna-5">
                          <input class = 'input-col1' name="cep" required id= "cep-coleta" >
                          <label>CEP:</label>
                 </div>
                 
                 <br>
                 <hr>
                  </div> 

                  <!--COLUNA 6-->
                       
                       
                     
                  <div class="coluna-6">        
                    <div class ="input-coluna-6-data">
                          <input class = 'input-col1' name="data coleta" required id="data" type="date"  >
                          <label>Data da coleta </label>
                      </div>
                    <div class ="input-coluna-6-hora">
                          <input class = 'input-col1' name="hora 2" required id="hora1" type="time">
                          <label>Hórario coleta</label>
                    </div>
                    
                    <label style="margin:10px"> ás </label>
                    <div class ="input-coluna-6-hora">
                        <input class = 'input-col1' name="hora 1" required id="hora2" type="time">
                        <label>Hórario coleta</label>
                  </div>
                  <div class ="input-coluna-6">
                    <input class = 'input-col1' name="tipo coleta" required id= "tipo-coleta" list="coleta" >
                    <label>Tipo de coleta:</label>
                    <datalist id="coleta">
                      <option value="Normal" >
                        <option value="Expressa">
                        <option value="Ermegencial">
                        <option value="Automatica">
                    </datalist>
           </div>
                 
                 <br>
                 <hr>
                  </div>
                  
                  <!--COLUNA 7-->
                       
                       
                     
                  <div class="coluna-7">        
                    <div class ="input-coluna-7-numero">
                          <input class = 'input-col1' name="numero pedido" required id="numero-pedido" >
                          <label>Numero pedido de compra:</label>
                      </div>
                    
                    <div class ="input-coluna-7">
                        <input class = 'input-col1' name="observacao" required id="obs">
                        <label>Observação:</label>
                  </div>
                
                 
              
                  </div>


<!---------------------------------------------------------------------------------BLOCO 2------------------------------------------------------------------------------------------------------>
                  
              
                    </div>
                    
                 
                </div>
            </div>
        </div>
    </div>

</div>

<br>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">DADOS DO DESTINO</div>
               

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                
                 @csrf
                     <div class = "formulario-box" >
                         <div class="titulo">

                       </div>
                  
                    

                <!--COLUNA 2-->
                       
                       
                     
                        <div class="coluna-2">        
                          <div class ="input-coluna-2">
                                <input class = 'input-col1' name="cpf destino" required id="cnpj" >
                                <label>CNPJ:</label>
                            </div>
                          <div class ="input-coluna-2">
                                <input class = 'input-col1' name="cnpj destino" required id="cpf">
                                <label>CPF:</label>
                          </div>
                       <div class ="input-coluna-2">
                                <input class = 'input-col1' name="parte nome destino" required id= "parte-nome-2" >
                                <label>Parte do nome:</label>
                       </div>
                       
                       <br>
                       <hr>
                        </div> 

                <!--COLUNA 3-->


                <div class="coluna-3">        
                    <div class ="input-coluna-3">
                          <input class = 'input-col1' name="nome" required id="destinatario" >
                          <label>Nome:</label>
                      </div>
                    <div class ="input-coluna-3-cpf">
                          <input class = 'input-col-3-cpf/cnpj' name="cnpj/cpf destino" required id="cpf/cnpj-2" value="558-811-888.02">
                          <label>CPF/CNPJ:</label>
                    </div>
                 
                 
                  </div>      
                   <!--COLUNA 4-->


                <div class="coluna-4">        
                    <div class ="input-coluna-4">
                          <input class = 'input-col1' name="endereco entrega" required id="endereco" >
                          <label>Endereço para entrega:</label>
                      </div>
                    <div class ="input-coluna-4-bairro">
                          <input class = 'input-col-3-cpf/cnpj' name="bairro entrega" required id="bairro">
                          <label>Bairro:</label>
                    </div>
                 
                 <br>
                 <br>
                  </div>     
                  
                  <!--COLUNA 5-->
                       
                       
                     
                  <div class="coluna-5">        
                    <div class ="input-coluna-5">
                          <input class = 'input-col1' name="estado" required id="estado" >
                          <label>Estado:</label>
                      </div>
                    <div class ="input-coluna-5">
                          <input class = 'input-col1' name="cidade" required id="cidade">
                          <label>Cidade:</label>
                    </div>
                 <div class ="input-coluna-5">
                          <input class = 'input-col1' name="cep" required id= "cep" >
                          <label>CEP:</label>
                 </div>
                 
                 <br>
                 <hr>
                  </div> 

                   <!--COLUNA 5-->
                       
                       
                     
                   <div class="coluna-6-2">        
                    <div class ="input-coluna-6-2">
                        <p>Tipo de frete:</p>
                          <input class = 'input-col1' name="tipotrans" required id="remetente" type="radio" value="Frete pago">
                          <label>Frete pago</label>
                          <input class = 'input-col1' name="tipotrans" required id="remetente" type="radio" value="Frete a pagar">
                          <label>Frete a pagar</label>
                      </div>

                      <div class ="input-coluna-6-2">
                        <p>Tipo de transporte:</p>
                          <input class = 'input-col1' name="tipofrete" required id="remetente" type="radio" value="Aéreo">
                          <label>Aéreo</label>
                          <input class = 'input-col1' name="tipofrete" required id="remetente" type="radio" value="Terrestre">
                          <label>Terrestre</label>
                      </div>
                      <div class ="input-coluna-6-2">
                        <p>Tipo de entrega:</p>
                          <input class = 'input-col1' name="tipoentrega" required id="remetente" type="radio" value="Domicílio">
                          <label>Domicílio</label>
                          <input class = 'input-col1' name="tipoentrega" required id="remetente" type="radio" value="Retira">
                          <label>Retira</label>
                      </div>
                    
                 
                 <br>
                 <hr>
                  </div> 

                  
                  <!--COLUNA 7-->
                       
                       
                     
                  <div class="coluna-7-2">        
                    <div class ="input-coluna-7-2">
                        <input class = 'input-col1' name="observacao" required id="observacao">
                        <label>Observação:</label>
                  </div>
                  </div>


                    </div>  
       
                </div>
            </div>
        </div>
    </div>

<!-----------------------------------------------------------------------------------BLOCO 3----------------------------------------------------------------------------------------------------->


</div>
<br>
<div  class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
              
               

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                 
                 @csrf
                     <div class = "formulario-box" >
                         <div class="titulo">

                       </div>
                  
                    

                <!--COLUNA 2-->
                       
                       
                     
                        <div class="bloco-3">        
                          <div class ="input-bloco-3">
                                <input class = 'input-col1' name="cpf destino" required id="natureza" >
                                <label>Natureza:</label>
                            </div>
                          <div class ="input-bloco-3">
                                <input class = 'input-col1' name="cnpj destino" required id="volumes">
                                <label>Volumes:</label>
                          </div>
                       <div class ="input-bloco-3">
                                <input class = 'input-col1' name="parte nome destino" required id= "peso" >
                                <label>Peso real:</label>
                       </div>
                       <div class ="input-bloco-3">
                        <input class = 'input-col1' name="parte nome destino" required id= "valornf"  >
                        <label>Valor NF:</label>
               </div>
               <div class ="input-bloco-3">
                <input class = 'input-col1' name="cp" required id= "cp" >
                <label>Comp: (m)</label>
       </div>
       <div class ="input-bloco-3">
        <input class = 'input-col1' name="al" required id= "al"  >
        <label>Alt: (m)</label>
</div>
<div class ="input-bloco-3">
    <input class = 'input-col1' name="la" required id= "la"  >
    <label>Larg: (m)</label>
</div>                   
                       <br>
                       <hr>
                        </div> 
                        <button class="btn-adiciona" id="btn-nao" onClick="add()">Adicionar   <i class="fas fa-arrow-down"></i></button>

                <!--COLUNA 3-->

                 
                </div>
            </div>
        </div>

        <table class="table-responsive" id="tabela">
           
          
           
           
           
          </table>
          
    </div>

</div>
</div>
    <div id="modal" class="modal" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
      
      </div>
      <div id= "modalb" class="modal-body">
  
      </div>
      <div class="modal-footer">
        <button type="button" onClick = "remove()"class="btn btn-secondary" data-bs-dismiss="modal">cancelar</button>
        <button type="button" id="btnModal" onClick= "adiciona()" class="btn btn-primary">Salvar alteraçoes</button>
        <input type ="hidden" id="valor_id">
        <input type="hidden" id="codigo_id">
      </div>
    </div>
  </div>
</div>
<form class = "form-home" id="invisivel" method="post" action="{{route('imprimir')}}">
  <div id="pai" style="display: flex; flex-direction:row; justify-content:center;">
<input type="hidden" id="qtd_info" value="0">
  <br>
  <br>
  

<button class="btn-adiciona" type="button"  id="submit" onClick="enviar()">Salvar</button>
<button class="btn-imprimir" type="button"  onClick="imprimir()"> Imprimir </button>
  </div>
</form>





    


    

@endsection
