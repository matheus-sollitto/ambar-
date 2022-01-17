<?php

namespace App\Presenters;

use App\Transformers\ImprimirTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class ImprimirPresenter.
 *
 * @package namespace App\Presenters;
 */
class ImprimirPresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new ImprimirTransformer();
    }
}
