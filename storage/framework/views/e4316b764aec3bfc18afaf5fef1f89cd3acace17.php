

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col-lg-8 offset-lg-2">
		<div class="card">
			<div class="card-header">
				<h4 class="header-title text-center"><?php echo e(_lang('Apply Fixed Deposit')); ?></h4>
			</div>
			<div class="card-body">
			    <form method="post" class="validate" autocomplete="off" action="<?php echo e(route('fixed_deposits.apply')); ?>" enctype="multipart/form-data">
					<?php echo e(csrf_field()); ?>

					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label class="control-label"><?php echo e(_lang('Deposit Plan')); ?></label>
								<select class="form-control auto-select select2" data-selected="<?php echo e(old('fdr_plan_id')); ?>" name="fdr_plan_id" required>
									<option value=""><?php echo e(_lang('Select One')); ?></option>
									<?php echo e(create_option('fdr_plans','id','name', array('status=' => 1))); ?>

								</select>
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
								<label class="control-label"><?php echo e(_lang('Deposit Amount')); ?></label>
								<input type="text" class="form-control float-field" name="deposit_amount" value="<?php echo e(old('deposit_amount')); ?>" required>
							</div>
						</div>

						<div class="col-md-12">
							<div class="form-group">
								<label class="control-label"><?php echo e(_lang('Remarks')); ?></label>
								<textarea class="form-control" name="remarks"><?php echo e(old('remarks')); ?></textarea>
							</div>
						</div>


						<div class="col-md-12">
							<div class="form-group">
								<label class="control-label"><?php echo e(_lang('Attachment')); ?></label>
								<input type="file" class="form-control dropify" name="attachment" >
							</div>
						</div>


						<div class="col-md-12">
							<div class="form-group">
								<button type="submit" class="btn btn-primary btn-lg btn-block"><i class="icofont-check-circled"></i> <?php echo e(_lang('Submit Request')); ?></button>
							</div>
						</div>
					</div>
			    </form>
			</div>
		</div>
    </div>
</div>
<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\cryptolending\resources\views/backend/customer_portal/fixed_deposit/apply.blade.php ENDPATH**/ ?>