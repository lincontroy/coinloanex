@extends('layouts.app')

@section('content')
<div class="row">
	<div class="col-lg-12">
		<div class="card">
			<div class="card-header">
				<h4 class="header-title text-center">{{ _lang('Withdraw Methods') }}</h4>
			</div>
			<div class="card-body">
                <div class="row justify-content-md-center">
               
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="{{ asset('public/btclogo.png') }}" class="gateway-img"/>
                                <h5>Btc</h5>
                                <h6 class="pt-1"></h6>
                                <h6 class="pt-1"></h6>
                                <a href="{{ route('withdraw.manual_withdraw',1) }}" data-title="btc" class="btn btn-light mt-3 stretched-link">{{ _lang('Make Withdraw') }}</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="{{ asset('public/usdt.png') }}" class="gateway-img"/>
                                <h5>Usdt</h5>
                                <h6 class="pt-1"></h6>
                                <h6 class="pt-1"></h6>
                                <a href="{{ route('withdraw.manual_withdraw',1) }}" data-title="usdt" class="btn btn-light mt-3 stretched-link">{{ _lang('Make Withdraw') }}</a>
                            </div>
                        </div>
                    </div>
              
                </div>
			</div>
		</div>
    </div>
</div>
@endsection