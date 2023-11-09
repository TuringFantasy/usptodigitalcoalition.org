<template>
    <section id="story">
        <div class="container">
            <div class="row pb-5 justify-content-md-end">
                <div class="col-md-6">
                    <h1 class="text-bright-blue">Uniting for a Digital Future</h1>
					<div class="justify-content-end mb-5">
						<img class="img-fluid img-trapezoid" src="@/assets/uniting.jpg" alt=""/>
			        </div>                 
                </div>
				<div class="col-md-6">
                    <p>The IRS is continuously evolving to meet the demands of the modern world. With initiatives like the Inflation Reduction Act Strategic Operating Plan, the IRS is committed to delivering transformational change, ensuring that taxpayers have a seamless and efficient experience.</p>
                    <p>Moreover, the IRS emphasizes the importance of being prepared for unforeseen circumstances, urging taxpayers to safeguard essential documents for emergencies. They also keep the public informed with special updates and news, ensuring transparency and trust.</p>
                    <p>In this context, the IRS Digital Coalition can play a pivotal role. By fostering a sense of community and collaboration, we can support and amplify these efforts. By pooling resources, sharing knowledge, and leveraging the expertise of tech firms, the coalition can drive the digital transformation the IRS envisions, ensuring that services are user-friendly, technologically advanced, and universally accessible.</p>
                    <p> Together, we can redefine the digital landscape of government services, making them more efficient, accessible, and user-centric.</p>
                </div>
            </div>
        </div>

		<div class="row bg-gray text-white" id="membership-benefits">
			<div class="section-header container my-5">
				<h2 class="text-center">Current Members</h2>   
				<p>Our dynamic network represents a diverse array of organizations and individuals committed to revolutionizing the digital landscape for the Internal Revenue Service.</p>
			</div>
		</div>

        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-3 d-flex align-items-stretch">
                    <MemberItem class="mt-5 m-3" link-url="https://strateratech.com" img="strateratech.png" img-alt="540">
                      Stratera is a woman-owned small business delivering efficient, dependable, and cost-effective solutions for over 20 years. Over the years, we have carefully developed our processes and streamlined methodologies to provide great products and services. We believe diverse teams build better products, so our teams are made up of multidisciplinary professionals that hail from different places and industries. Our tools and processes allow us to collaborate and produce great work whether we’re working in the same room or at a distance.<i>*</i>
                    </MemberItem>
                </div>

                <div class="col-lg-4 col-md-6 mb-3 d-flex align-items-stretch">
                    <MemberItem class="mt-5 m-3" link-url="https://yudrio.com/" img="yudrio.png" img-alt="Yudrio">
                        Yudrio, Inc. is a HUBZone certified boutique Information Technology (IT) solutions provider. We provide the depth of expertise and capabilities of a large company while maintaining the intimacy of a small business. Yudrio supports mission-critical applications by providing innovative, customized, end-to-end services that demonstrate measurable benefits.<i>*</i>
                    </MemberItem>
                </div>
				
            </div>
        </div>

      
    </section>
</template>



<script>
import Parallax from "vue-parallaxy";
import MemberItem from "@/components/MemberItem.vue";

export default {
  components: {
    Parallax,
    MemberItem,
  },
};
</script>
