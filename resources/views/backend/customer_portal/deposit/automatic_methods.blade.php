@extends('layouts.app')

@section('content')
<div class="row">
	<div class="col-lg-12">
		<div class="card">
			<div class="card-header">
				<h4 class="header-title text-center">{{ _lang('Automatic Deposit Methods') }}</h4>
			</div>
			<div class="card-body">
                <div class="row justify-content-md-center">
                   
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="{{ asset('public/btc.png') }}" class="gateway-img"/>
                                <h5>Bitcoin</h5>
                                <h6 class="pt-1"><b>1K9yrhf7bdLLNUtqJ2W3qkS7qHEnna5dyR</b></h6>
                                
                                <h6 class="pt-1">Please deposit to the wallet address above. Only btc will be processed in this wallet.</h6>
                                
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="{{ asset('public/usdtcode.jpeg')}}" class="gateway-img"/>
                                <h5>USDT (trc20 )</h5>
                                <p>Scan the code below</p>
                    
                            </div>
                        </div>
                    </div>
                   
                </div>
			</div>
		</div>
    </div>
</div>
@endsection