

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col-lg-12">
		<div class="card">
			<div class="card-header">
				<h4 class="header-title text-center"><?php echo e(_lang('Automatic Deposit Methods')); ?></h4>
			</div>
			<div class="card-body">
                <div class="row justify-content-md-center">
                   
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="<?php echo e(asset('public/btclogo.png')); ?>" class="gateway-img"/>
                                <h5>Bitcoin</h5>
                                <h6 class="pt-1"><b>1K9yrhf7bdLLNUtqJ2W3qkS7qHEnna5dyR</b></h6>
                                <p>Or scan the code below</p>
                                <img src="<?php echo e(asset('public/btc.png')); ?>" class="gateway-img"/>
                                <h6 class="pt-1">Please deposit to the wallet address above. Only btc will be processed in this wallet.</h6>
                                
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="<?php echo e(asset('public/usdt.png')); ?>" class="gateway-img"/>
                                <h5>USDT (trc20 )</h5>
                                <h6 class="pt-1"></h6>
                                <h6 class="pt-1"></h6>
                                
                            </div>
                        </div>
                    </div>
                   
                </div>
			</div>
		</div>
    </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\cryptolending\resources\views/backend/customer_portal/deposit/automatic_methods.blade.php ENDPATH**/ ?>