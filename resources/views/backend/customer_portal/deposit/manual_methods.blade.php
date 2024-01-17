@extends('layouts.app')

@section('content')
<div class="row">
	<div class="col-lg-12">
		<div class="card">
			<div class="card-header">
				<h4 class="header-title text-center">Deposit {{ request()->colamt }}{{request()->colcur}} to get a Loan of {{ request()->lnamt }}{{request()->lncur}}</h4>
			</div>
			<div class="card-body">
                

                
                <div class="row">

                <div class="col-md-4">
                    <b>No Extra Fees with Coinloanx wallet</b>
                    <p>Don't pay service fee when you receive funds on your CoinLoanEx wallet</p>
                </div>
                <div class="col-md-4">
                    <b>Faster Transactions</b>
                    <p>Average loan receiving time — 10 minutes</p>
                </div>
                <div class="col-md-4">
                    <b>50,000+ Pairs</b>
                    <p>Swap crypto right from your account with the best rates on the market</p>

                </div>
                </div>

               
                <p>Borrow against crypto for an unlimited term with no need to sell your crypto.</p>


                <br>

                
                   <b>Get your loan</b><br>
                   <br> <p>Please use your wallet to send us deposit for your loan.
                        Make sure you are on | https://coinloanex.com</p>
                <br>

                <div id="countdown"></div>
              
                <p>Please scan the code to deposit {{ request()->colamt }}{{request()->colcur}}</p>
                <img src="{{url('btc.png')}}">
			</div>
		</div>
    </div>
</div>

<script>
  // Function to start the countdown
  function startCountdown(hours) {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + hours);

    const intervalId = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const now = new Date();
      const timeDifference = endTime - now;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        document.getElementById('countdown').innerHTML = "Countdown expired!";
      } else {
        const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `Awaiting: ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;
      }
    }
  }

  // Set the dynamic hours here
  const dynamicHours = 24;

  // Start the countdown with dynamic hours
  startCountdown(dynamicHours);
</script>
@endsection