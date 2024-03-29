

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col-lg-8 offset-lg-2">
		<div class="card">
			<div class="card-header">
				<h4 class="header-title text-center"><?php echo e(_lang('Send Money')); ?></h4>
			</div>
			<div class="card-body">
			    <form method="post" class="validate" autocomplete="off" action="<?php echo e(route('transfer.send_money')); ?>" enctype="multipart/form-data">
					<?php echo e(csrf_field()); ?>

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label class="control-label"><?php echo e(_lang('Account Number / Email')); ?></label>
								<input type="text" class="form-control" name="user_account" value="<?php echo e(old('user_account')); ?>" required>
							</div>
						</div>

						<div class="col-md-6">
							<div class="form-group">
								<label class="control-label"><?php echo e(_lang('Currency')); ?></label>
								<select class="form-control auto-select select2" data-selected="<?php echo e(old('currency_id')); ?>" name="currency_id" required>
									<option value=""><?php echo e(_lang('Select One')); ?></option>
									<?php echo e(create_option('currency','id','name','',array('status=' => 1))); ?>

								</select>
							</div>
						</div>

						<div class="col-md-6">
							<div class="form-group">
								<label class="control-label"><?php echo e(_lang('Amount')); ?></label>
								<input type="text" class="form-control float-field" name="amount" value="<?php echo e(old('amount')); ?>" required>
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label class="control-label"><?php echo e(_lang('Note')); ?></label>
								<textarea class="form-control" name="note"><?php echo e(old('note')); ?></textarea>
							</div>
						</div>

						<div class="col-md-12">
							<h6 class="text-info text-center"><b><?php echo e(get_option('transfer_fee_type') == 'percentage' ? get_option('transfer_fee').'%' : currency().get_option('transfer_fee')); ?> <?php echo e(_lang('transaction charge will be applied')); ?></b></h6>
						</div>

						<div class="col-md-12 mt-4">
							<div class="form-group">
								<button type="submit" class="btn btn-primary btn-lg btn-block"><i class="icofont-check-circled"></i> <?php echo e(_lang('Send Money')); ?></button>
							</div>
						</div>
					</div>
			    </form>
			</div>
		</div>
    </div>
</div>
<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\cryptolending\resources\views/backend/customer_portal/send_money.blade.php ENDPATH**/ ?>