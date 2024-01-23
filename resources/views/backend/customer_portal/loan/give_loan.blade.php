@extends('layouts.app')

@section('content')
<div class="row">
	<div class="col-lg-12">
		<div class="card">
			<div class="card-header">
				<span class="panel-title">{{ _lang('Give New Loan and earn 16% profit') }}</span>
			</div>
			<div class="card-body">
				<form method="post" class="validate" autocomplete="off" action="{{ route('loans.give_loan') }}" enctype="multipart/form-data">
					{{ csrf_field() }}
					<div class="row">

						
						<div class="col-md-4">
							<div class="form-group">
								<label class="control-label">{{ _lang('Average Loan Amount in usdt') }}</label>
								<input type="number" min="200" max="1000000" class="form-control" id="loanamt" name="loanamt" value="{{ old('first_payment_date') }}" oninput="updateLoanAmount()" required>
                                <b>from usdt 200 - usdt 1000000</b>
                            </div>
						</div>

                        <div class="col-md-4">
							<div class="form-group">
								<label class="control-label">{{ _lang('Number of clients') }}</label>
								<input type="number" min="10" max="100000" class="form-control" id="clients" name="clients" value="{{ old('first_payment_date') }}" required>
                                <b>from 10 clients - 1000 clients</b>
                            </div>
						</div>
                        <div class="col-md-4">
							<div class="form-group">
								<label class="control-label">{{ _lang('Duration in days') }}</label>
								<input type="number" min="1" max="30" class="form-control" id="duration" name="duration" value="{{ old('first_payment_date') }}" required>
                                <b>from 1 day - 30 days</b>
                            </div>
						</div>

                        <br>
                        <p><i class="icofont-check-circled"></i> Guaranteed profits from day 1.</p><br>
						<p><i class="icofont-check-circled"></i> Guaranteed safety of your funds.</p><br>
                        <div class="col-md-12">
							<div class="form-group">
								<button type="submit" id="btn" class="btn btn-primary"><i class="icofont-check-circled"></i> {{ _lang('Submit Application') }}</button>
							</div>
						</div>


					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<script>
    function updateLoanAmount() {
      // Get the loan amount input element
      var loanAmountInput = document.getElementById("loanamt");
      var butn = document.getElementById("btn");

      // Get the current loan amount value
      var currentLoanAmount = parseFloat(loanAmountInput.value);

      // Check if the input is a valid number
      if (isNaN(currentLoanAmount)) {
        alert("Please enter a valid number for the loan amount");
        loanAmountInput.value = "";
        return;
      }

      // Calculate 16% of the loan amount
      var interestAmount = 0.16 * currentLoanAmount;

      // Update the loan amount with the new value
      var newLoanAmount = currentLoanAmount + interestAmount;
      newLoanAmount.toFixed(2); // Round to 2 decimal places

      butn.textContent = "Submit application to earn " + newLoanAmount + " USDT";
    //   console.log(newLoanAmount);
    }
  
</script>
@endsection
