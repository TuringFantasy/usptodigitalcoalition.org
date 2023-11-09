<template>
    <div class="bg-bright-blue footer pt-sm-5 pt-3 pb-3">
        <div class="row my-auto">
			<div class="col-sm-6 col-12">
				<img alt="IRS Digital Services Coalition logo" src="@/assets/uspto-dc-logo-white.png" class="logo">
			</div>
			<div class="col-sm-6 col-12">
				<div class="footer-contact-info">
					<span><a href="mailto:info@irsdigitalcoalition.com">info@irsdigitalcoalition.com</a></span>
					<span><a href="tel:7035198045">(703)519-8045</a></span>
					<span>2210 Eisenhower Avenue, Ste. 406</span>
					<span>Alexandria, VA, 22314</span>
				</div>
			</div>
			<div class="col-12 text-center copyright">
				<p class="text-sm">&copy; 2023 IRS Digital Coalition, LLC. All Rights Reserved.</p>
			</div>
		</div>	
	</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    
</style>
