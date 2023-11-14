<template>
    <nav class="navbar navbar-dark navbar-expand-lg">
        <div class="navbar-brand">
            <img alt="USPTO Digital Services Coalition" src="@/assets/uspto-dc-logo-white.png" class="logo">
            {{ msg }}
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation" ref="navbar">
            <span class="navbar-toggler-icon">              
            </span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-links">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link to="/" data-toggle="collapse" data-target=".nav-collapse" class="nav-link">Home
                    <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/mission" class="nav-link">Mission</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/membership" class="nav-link">Membership</router-link>
                </li>               
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link">Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
	watch: {
	$route() {
	this.$refs.navbar.click(); //click on route change
	},
	},
  name: 'Nav',
  props: {
    msg: String
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    
</style>
