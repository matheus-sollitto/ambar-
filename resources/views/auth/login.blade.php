@extends('layouts.app')

@section('content')



                               
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" id="nav-login">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                       
                           

                        <div class="login-box">
  
 
    <div class="user-box">
      <input type="text" name="email" required="">
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" required="">
      <label>Senha</label>
    </div>

    @error('email')
    <script>
        
    </script>
    
                                    <span class="invalid-feedback" role="alert" style="display:block!important">
                                        <strong>Usuario não encontrado!</strong>
                                    </span>
                                @enderror

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Usuario não encontrado!</strong>
                                    </span>
                                @enderror
   
  
</div>
                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary" id="btn-login">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
