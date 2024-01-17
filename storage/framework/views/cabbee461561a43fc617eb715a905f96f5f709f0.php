

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col-12">
		<div class="card">
			<div class="card-header">
                <h4 class="header-title"><?php echo e(_lang('User Documents')); ?></h4>
            </div>
			<div class="card-body">
				<table class="table table-bordered data-table">
					<thead>
						<tr>
							<th><?php echo e(_lang('Name')); ?></th>
							<th><?php echo e(_lang('Email')); ?></th>
							<th class="text-center"><?php echo e(_lang('Account Status')); ?></th>
							<th class="text-center"><?php echo e(_lang('Total Document')); ?></th>
							<th class="text-center"><?php echo e(_lang('View')); ?></th>
						</tr>
					</thead>
					<tbody>					
						<?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
						<tr id="row_<?php echo e($user->id); ?>">
							<td class='first_name'><?php echo e($user->name); ?></td>
							<td class='email'><?php echo e($user->email); ?></td>																	
							<td class='text-center'><?php echo $user->document_verified_at != null ? show_status(_lang('Verified'), 'success') : show_status(_lang('Unverified'), 'danger'); ?></td>					
							<td class='text-center'><?php echo e($user->documents->count()); ?></td>					
							<td class="text-center">
								<a href="<?php echo e(route('users.view_documents', $user->id)); ?>" class="btn btn-primary btn-sm"><?php echo e(_lang('View Documents')); ?></a>
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



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\cryptolending\resources\views/backend/user/documents.blade.php ENDPATH**/ ?>