

<?php $__env->startSection('content'); ?>

<div class="row">
	<div class="col-lg-12">
		<div class="card no-export">
		    <div class="card-header d-flex align-items-center">
				<span class="panel-title"><?php echo e($title); ?></span>
				<a class="btn btn-primary btn-sm ml-auto ajax-modal" data-title="<?php echo e(_lang('Create Gift Card')); ?>" href="<?php echo e(route('gift_cards.create')); ?>"><i class="icofont-plus-circle"></i> <?php echo e(_lang('Add New')); ?></a>
			</div>
			<div class="card-body">
				<table id="gift_cards_table" class="table table-bordered data-table">
					<thead>
					    <tr>
						    <th><?php echo e(_lang('Code')); ?></th>
							<th><?php echo e(_lang('Currency')); ?></th>
							<th><?php echo e(_lang('Amount')); ?></th>
							<th><?php echo e(_lang('Status')); ?></th>
							<th class="text-center"><?php echo e(_lang('Action')); ?></th>
					    </tr>
					</thead>
					<tbody>
					    <?php $__currentLoopData = $giftcards; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $giftcard): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					    <tr data-id="row_<?php echo e($giftcard->id); ?>">
							<td class='code'><?php echo e($giftcard->code); ?></td>
							<td class='currency_id'><?php echo e($giftcard->currency->name); ?></td>
							<td class='amount'><?php echo e(decimalPlace($giftcard->amount, currency($giftcard->currency->name))); ?></td>
							<td class='status'><?php echo $giftcard->status == 0 ? xss_clean(show_status(_lang('Unused'),'primary')) : xss_clean(show_status(_lang('Used'),'danger')); ?></td>

							<td class="text-center">
								<span class="dropdown">
								  <button class="btn btn-primary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								  <?php echo e(_lang('Action')); ?>

								  </button>
								  <form action="<?php echo e(action('GiftCardController@destroy', $giftcard['id'])); ?>" method="post">
									<?php echo e(csrf_field()); ?>

									<input name="_method" type="hidden" value="DELETE">

									<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a href="<?php echo e(action('GiftCardController@edit', $giftcard['id'])); ?>" data-title="<?php echo e(_lang('Update Gift Card')); ?>" class="dropdown-item dropdown-edit ajax-modal"><i class="icofont-ui-edit"></i> <?php echo e(_lang('Edit')); ?></a>
										<a href="<?php echo e(action('GiftCardController@show', $giftcard['id'])); ?>" data-title="<?php echo e(_lang('Gift Card Details')); ?>" class="dropdown-item dropdown-view ajax-modal"><i class="icofont-eye-alt"></i> <?php echo e(_lang('View')); ?></a>
										<button class="btn-remove dropdown-item" type="submit"><i class="icofont-trash"></i> <?php echo e(_lang('Delete')); ?></button>
									</div>
								  </form>
								</span>
							</td>
					    </tr>
					    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\cryptolending\resources\views/backend/gift_cards/list.blade.php ENDPATH**/ ?>