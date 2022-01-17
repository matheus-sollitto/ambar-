<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\ImprimirCreateRequest;
use App\Http\Requests\ImprimirUpdateRequest;
use App\Repositories\ImprimirRepository;
use App\Validators\ImprimirValidator;
use carbon\carbon;

/**
 * Class ImprimirsController.
 *
 * @package namespace App\Http\Controllers;
 */
class ImprimirsController extends Controller
{

    public function imprimir(Request $request)
    {
        $request = $request->all();

        $dcl = $request['codigo'];

        $destinatario = $request['destinatario'];
        $cidade = $request['cidade'];
        $volumes = $request['volumes'];
        $peso = $request['peso'];
        $valornf = $request['valornf'];
        $categoria = $request['categoria']; //tipo_trasnporte
        $frete = $request['frete'];
        $natureza = $request['natureza'];
        $cp = $request['cp'];
        $al = $request['al'];
        $la = $request['la'];
        $solicitante = $request['solicitante'];
        $cnpj = $request['cnpj'];
        $email = $request['email'];
        $departamento = $request['departamento'];
        $procurar = $request['procurar'];
        $cpf = $request['cpf'];
        $cnpj_remetente = $request['cnpj_remetente'];
        $cpf_remetente = $request['cpf_remetente'];
        $local_coleta = $request['local_coleta'];
        $parte_nome = $request['parte_nome'];
        $cpf_cnpj = $request['cpf_cnpj'];
        $endereco_coleta = $request['endereco_coleta'];
        $bairro_coleta = $request['bairro_coleta'];
        $estado_coleta = $request['estado_coleta'];
        $cidade_coleta = $request['cidade_coleta'];
        $cep_coleta = $request['cep_coleta'];
        $data = $request['data'];
        $hora1 = $request['hora1'];
        $hora2 = $request['hora2'];
        $tipo_coleta = $request['tipo_coleta'];
        $numero_pedido = $request['numero_pedido'];
        $observacao_1 = $request['observacao_1'];
        $parte_nome2 = $request['parte_nome2'];
        $endereco = $request['endereco'];
        $bairro = $request['bairro'];
        $estado = $request['estado'];
        $cep = $request['cep'];
        $cpf_cnpj_2 = $request['cpf_cnpj_2'];
        $observacao = $request['observacao'];
        $comentario = $request['comentario']; //tipo_entrega



        \DB::table('declaracao_vendas')->insert([
            'solicitante' => $solicitante,
            'procurar_por' => $procurar,
            'email' => $email,
            'departamento' => $departamento,
            'cnpj_remetente' => $cnpj_remetente,
            'cpf_remetente' => $cpf_remetente,
            'cpf/cnpj' => $cpf_cnpj,
            'parte_nome_remetente' => $parte_nome,
            'local_coleta' => $local_coleta,
            'endereco_coleta' => $endereco_coleta,
            'bairro_coleta' => $bairro_coleta,
            'estado_coleta' => $estado_coleta,
            'cidade_coleta' => $cidade_coleta,
            'cep_coleta' => $cep_coleta,
            'data_coleta' => $data,
            'horario_coleta' => $hora1,
            'horario_coleta2' => $hora2,
            'tipo_coleta' => $tipo_coleta,
            'numero_compra' => $numero_pedido,
            'observacao_coleta' => $observacao,
            'cnpj' => $cnpj,
            'cpf' => $cpf,
            'cpf/cnpj_2' => $cpf_cnpj_2,
            'parte_nome_destinatario' => $parte_nome2,
            'nome' => $destinatario,
            'endereco' => $endereco,
            'bairro' => $bairro,
            'estado' => $estado,
            'cidade' => $cidade,
            'cep' => $cep,
            'tipo_frete' => $frete,
            'tipo_transporte' => $categoria,
            'tipo_entrega' => $comentario,
            'observacao' => $observacao_1,
            'natureza' => $natureza,
            'volumes' => $volumes,
            'peso' => $peso,
            'valor' => $valornf,
            'cp' => $cp,
            'al' => $al,
            'la' => $la,
            'codigo' => $dcl,
            'created_at' => now()
        ]);

        return $dcl;
    }

    public function codigo()
    {
        $codigo = \DB::table('codigo')->select('codigo_dcl')->get();

        $codigoup = $codigo++;



        return json_encode($codigo);
    }


    public function temporary(request $select)
    {
        $select = $select->all();
        $dcl = md5(uniqid(mt_rand(), true));

        $codigo = $select['codigo'];
        $destinatario = $select['destinatario'];
        $cidade = $select['cidade'];
        $volumes = $select['volumes'];
        $peso = $select['peso'];
        $valornf = $select['valornf'];
        $categoria = $select['categoria']; //tipo_trasnporte
        $frete = $select['frete'];
        $natureza = $select['natureza'];
        $cp = $select['cp'];
        $al = $select['al'];
        $la = $select['la'];
        $solicitante = $select['solicitante'];
        $cnpj = $select['cnpj'];
        $email = $select['email'];
        $departamento = $select['departamento'];
        $procurar = $select['procurar'];
        $cpf = $select['cpf'];
        $cnpj_remetente = $select['cnpj_remetente'];
        $cpf_remetente = $select['cpf_remetente'];
        $local_coleta = $select['local_coleta'];
        $parte_nome = $select['parte_nome'];
        $cpf_cnpj = $select['cpf_cnpj'];
        $endereco_coleta = $select['endereco_coleta'];
        $bairro_coleta = $select['bairro_coleta'];
        $estado_coleta = $select['estado_coleta'];
        $cidade_coleta = $select['cidade_coleta'];
        $cep_coleta = $select['cep_coleta'];
        $data = $select['data'];
        $hora1 = $select['hora1'];
        $hora2 = $select['hora2'];
        $tipo_coleta = $select['tipo_coleta'];
        $numero_pedido = $select['numero_pedido'];
        $observacao_1 = $select['observacao_1'];
        $parte_nome2 = $select['parte_nome2'];
        $endereco = $select['endereco'];
        $bairro = $select['bairro'];
        $estado = $select['estado'];
        $cep = $select['cep'];
        $cpf_cnpj_2 = $select['cpf_cnpj_2'];
        $observacao = $select['observacao'];
        $comentario = $select['comentario']; //tipo_entrega



        \DB::table('table_temporary')->insert([
            'solicitante' => $solicitante,
            'procurar_por' => $procurar,
            'email' => $email,
            'departamento' => $departamento,
            'cnpj_remetente' => $cnpj_remetente,
            'cpf_remetente' => $cpf_remetente,
            'cpf_cnpj' => $cpf_cnpj,
            'parte_nome_remetente' => $parte_nome,
            'local_coleta' => $local_coleta,
            'endereco_coleta' => $endereco_coleta,
            'bairro_coleta' => $bairro_coleta,
            'estado_coleta' => $estado_coleta,
            'cidade_coleta' => $cidade_coleta,
            'cep_coleta' => $cep_coleta,
            'data_coleta' => $data,
            'horario_coleta' => $hora1,
            'horario_coleta2' => $hora2,
            'tipo_coleta' => $tipo_coleta,
            'numero_compra' => $numero_pedido,
            'observacao_coleta' => $observacao,
            'cnpj' => $cnpj,
            'cpf' => $cpf,
            'cpf_cnpj_2' => $cpf_cnpj_2,
            'parte_nome_destinatario' => $parte_nome2,
            'nome' => $destinatario,
            'endereco' => $endereco,
            'bairro' => $bairro,
            'estado' => $estado,
            'cidade' => $cidade,
            'cep' => $cep,
            'tipo_frete' => $frete,
            'tipo_transporte' => $categoria,
            'tipo_entrega' => $comentario,
            'observacao' => $observacao_1,
            'natureza' => $natureza,
            'volumes' => $volumes,
            'peso' => $peso,
            'valor' => $valornf,
            'cp' => $cp,
            'al' => $al,
            'la' => $la,
            'codigo' => $dcl,
            'created_at' => now()
        ]);
        return "foi";
    }

    public function excluir()
    {
        \DB::delete('delete from');
    }
    public function retorna()
    {
        $retorno =  \DB::table('table_temporary')->select('*')->get();

        return view('pdf', ['select' => $retorno]);
    }

    /**
     * @var ImprimirRepository
     */
    protected $repository;

    /**
     * @var ImprimirValidator
     */
    protected $validator;

    /**
     * ImprimirsController constructor.
     *
     * @param ImprimirRepository $repository
     * @param ImprimirValidator $validator
     */
    public function __construct(ImprimirRepository $repository, ImprimirValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $imprimirs = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $imprimirs,
            ]);
        }

        return view('imprimirs.index', compact('imprimirs'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ImprimirCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(ImprimirCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $imprimir = $this->repository->create($request->all());

            $response = [
                'message' => 'Imprimir created.',
                'data'    => $imprimir->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {
            if ($request->wantsJson()) {
                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $imprimir = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $imprimir,
            ]);
        }

        return view('imprimirs.show', compact('imprimir'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $imprimir = $this->repository->find($id);

        return view('imprimirs.edit', compact('imprimir'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ImprimirUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(ImprimirUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $imprimir = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Imprimir updated.',
                'data'    => $imprimir->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'Imprimir deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Imprimir deleted.');
    }
}
