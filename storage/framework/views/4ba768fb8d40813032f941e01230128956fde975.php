<form method="post" class="ajax-screen-submit" autocomplete="off" action="<?php echo e(route('gift_cards.store')); ?>" enctype="multipart/form-data">
	<?php echo e(csrf_field()); ?>

	<div class="row px-2">
	    <div class="col-md-12">
			<div class="form-group">
				<label class="control-label"><?php echo e(_lang('Code')); ?></label>
				<input type="text" class="form-control" name="code" value="<?php echo e(generate_gift_card()); ?>" readonly>
			</div>
		</div>

		<div class="col-md-12">
			<div class="form-group">
				<label class="control-label"><?php echo e(_lang('Currency')); ?></label>
				<select class="form-control auto-select select2" data-selected="<?php echo e(old('currency_id')); ?>" name="currency_id"  required>
					<option value=""><?php echo e(_lang('Select One')); ?></option>
					<?php echo e(create_option('currency','id','name','',array('status=' => 1))); ?>

				</select>
			</div>
		</div>

		<div class="col-md-12">
			<div class="form-group">
				<label class="control-label"><?php echo e(_lang('Amount')); ?></label>
				<input type="text" class="form-control float-field" name="amount" value="<?php echo e(old('amount')); ?>" required>
			</div>
		</div>


		<div class="col-md-12">
		    <div class="form-group">
			    <button type="submit" class="btn btn-primary btn-lg"><i class="icofont-check-circled"></i> <?php echo e(_lang('Save')); ?></button>
		    </div>
		</div>
	</div>
</form>
<?php /**PATH C:\xampp\htdocs\cryptolending\resources\views/backend/gift_cards/modal/create.blade.php ENDPATH**/ ?>