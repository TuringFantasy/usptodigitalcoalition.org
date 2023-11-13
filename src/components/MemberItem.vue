<template>
  <div class="card h-100">
	  <div class="card-img-top">
 		 <a :href="linkUrl">
         	<img :src="require(`@/assets/${img}`)" :alt="imgAlt" />
      	 </a>
	  </div>
      <div class="card-body d-flex flex-column">
          <p class="card-text"><slot></slot></p> 
      </div>
  </div>
</template>

<script>
export default {
  name: "MemberItem",
  props: {
    linkUrl: String,
    img: String,
    imgAlt: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
