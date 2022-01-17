<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TabelTemporary extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('table_temporary', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('solicitante');
            $table->string('procurar_por');
            $table->string('email');
            $table->string('departamento');
            $table->string('cnpj_remetente');
            $table->string('cpf_remetente');
            $table->string('cpf/cnpj');
            $table->string('cpf/cnpj_2');
            $table->string('parte_nome_remetente');
            $table->string('local_coleta');
            $table->string('endereco_coleta');
            $table->string('bairro_coleta');
            $table->string('estado_coleta');
            $table->string('cidade_coleta');
            $table->string('cep_coleta');
            $table->string('data_coleta');
            $table->string('horario_coleta');
            $table->string('horario_coleta2');
            $table->string('tipo_coleta');
            $table->string('numero_compra');
            $table->string('observacao_coleta');
            $table->string('cnpj');
            $table->string('cpf');
            $table->string('parte_nome_destinatario');
            $table->string('nome');
            $table->string('endereco');
            $table->string('bairro');
            $table->string('estado');
            $table->string('cidade');
            $table->string('cep');
            $table->string('tipo_frete');
            $table->string('tipo_transporte');
            $table->string('tipo_entrega');
            $table->string('observacao');
            $table->string('natureza');
            $table->string('volumes');
            $table->string('peso');
            $table->string('valor');
            $table->string('cp');
            $table->string('al');
            $table->string('la');
            $table->string('codigo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
