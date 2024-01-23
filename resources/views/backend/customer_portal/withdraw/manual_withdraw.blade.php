@extends('layouts.app')

@section('content')
<div class="row">
	<div class="col-lg-8 offset-lg-2">
		<div class="card">
			<div class="card-header">
				<h4 class="header-title text-center">{{ _lang('Withdraw Money') }}</h4>
			</div>
			<div class="card-body">
				<form method="post" class="validate" autocomplete="off" action="{{ route('withdraw.manual_withdraw', 1) }}" enctype="multipart/form-data">
					{{ csrf_field() }}
					<div class="row p-2">
						<div class="col-md-12">
							<div class="form-group">
								<label class="control-label">{{ _lang('Amount') }}</label>
								<input type="text" class="form-control float-field" name="amount" value="{{ old('amount') }}" required>
							</div>
						</div>

						
						<div class="col-md-6">
							<div class="form-group">
								<label class="control-label"></label>
								<input type="text" class="form-control" name="" required>
							</div>
						</div>
						

						
						<div class="col-md-12">
							<div class="form-group">
								<label class="control-label">{{ _lang('Instructions') }}</label>
								<div class="border rounded"></div>
							</div>
						</div>
						

						<div class="col-md-12">
							<div class="form-group">
								<label class="control-label">{{ _lang('Description') }}</label>
								<textarea class="form-control" name="description">{{ old('description') }}</textarea>
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label class="control-label">{{ _lang('Attachment') }}</label>
								<input type="file" class="form-control dropify" name="attachment">
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<button type="submit" class="btn btn-primary btn-lg btn-block"><i class="icofont-check-circled"></i> {{ _lang('Submit') }}</button>
							</div>
						</div>
					</div>
				</form>

			</div>
		</div>
    </div>
</div>
@endsection


