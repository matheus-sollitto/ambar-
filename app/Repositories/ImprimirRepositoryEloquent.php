<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\ImprimirRepository;
use App\Entities\Imprimir;
use App\Validators\ImprimirValidator;

/**
 * Class ImprimirRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class ImprimirRepositoryEloquent extends BaseRepository implements ImprimirRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Imprimir::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return ImprimirValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
