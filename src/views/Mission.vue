<template>
    <section id="mission-cover">
        
        <div class="container">
		<div class="row">
			<div class="col-lg-6">
	            <div class="justify-content-md-start">
	                <div class="">
	                    <h1 class="text-bright-blue">We're committed to the enduring mission of revolutionizing the IRS through digital evolution</h1>
	                    <p>While there are trailblazers within the government reshaping public service delivery, the transformative leap requires a synergy with the commercial tech sector. It's the agile and pioneering firms that are primed to sculpt a digital renaissance, setting the stage for an unparalleled era of service excellence within the IRS.</p>
	                    <p>In unity, we possess the momentum to propel the government's prowess in rolling out services centered on user friendliness, technological dependability, and universal accessibility. Simultaneously, this collaborative endeavor enriches both the individuals and enterprises within our collective.</p>
                   
	                </div>
	            </div>
			</div>
			<div class="col-lg-6 bg-video-sm justify-content-end">
	            <video autoplay loop muted playsinline src="@/assets/team-collaboration-compressed.mp4" />
	        </div>
			</div>
        </div>
		
		<div class="row align-items-end">
	
		</div>
        
        <div class="bg-light-sky-blue">
            <div class="container pb-5">
                <div class="row">
                    <div class="col-md-8">
                        <h3 class="text-black my-5">A shared vision of creating a seamless, efficient, and inclusive digital landscape</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <h6 class="mb-1">Community</h6>
                        <p>Harnessing our collective expertise, we aim to revolutionize the way the government interacts with its citizens, ensuring every touchpoint is intuitive, secure, and responsive. </p> 
                    </div>
                    <div class="col-md-4">
                        <h6 class="mb-1">Advocacy</h6>
                        <p>Promote policies that remove barriers to innovation in government while increasing adoption of best practices, methodologies, and processes, such as human-centered design and agile delivery</p>
                    </div>
                    <div class="col-md-4">
                        <h6 class="mb-1">Impact</h6>
                        <p>Make a meaningful difference in the daily lives of users through improved interactions with government, prioritizing equitable delivery to those who have traditionally been underserved</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <h6 class="mb-1">Education</h6>
                        <p>Our commitment goes beyond mere technology; it's about building trust, fostering innovation, and shaping a future where government services are a benchmark of excellence.</p>	
                    </div>
                    <div class="col-md-4">
                        <h6 class="mb-1">Partnership</h6>
                        <p>Cultivate enduring relationships within our community of vendors and government partners to maintain long-term success in digital service delivery</p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>



<script>
import Parallax from "vue-parallaxy";

export default {
  components: {
    Parallax,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style>
.date-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 60ch;
}

.date-link:hover .link {
  text-decoration: underline;
}

.date-box {
  text-align: center;
  word-break: break-word;
  line-height: 1.1em;
  background-color: #dedede;
}

.date-box-inner {
  width: 4ch;
  margin: 4px 8px;
}

.date {
  font-weight: 700;
  color: #444444;
}

.link-box {
  margin-left: 1rem;
}

.link {
  color: #444444;
}
</style>
