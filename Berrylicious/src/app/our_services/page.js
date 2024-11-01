import Image from "next/image";
export default function Services() {
	return (

		<div>


       <h1 className = "service_h1">Berrylicious <b className = "service_bold">Offerings</b></h1>    
         <div className ="our_services">

         <div className="service_box">
         <Image 
         src = {require("/img/service_01.png")}
         alt = "fruit_image"
         className = "orange_img"
         />

         <h2 className = "service_h2">Orange <b className = "service_bold">Bliss</b></h2>
         <p>At Berrylicious, we are dedicated to providing the juiciest and highest-quality oranges, harvested fresh from top-notch orchards. Our oranges are loaded with Vitamin C and full of natural taste, ideal for a revitalizing snack or juicing.</p>
         </div>





         <div className="service_box">
         <Image 
         src = {require("/img/service_02.png")}
         alt = "fruit_image"
         className = "grapes_img"
         />

        <h2 className = "service_h2">Grape <b className = "service_bold">Glow</b></h2>
         <p>At Berrylicious, our GrapeGlow offers an exquisite treat, providing the ideal blend of sweetness and juiciness with every mouthful. These top-quality grapes are meticulously chosen from the finest vineyards, guaranteeing bright colors, rich tastes, and a refreshing experience.</p>
        </div>





        <div className="service_box">
        <Image 
        src = {require("/img/service_03.png")}
        alt = "fruit_image"
        className = "guava_img"
        />

        <h2 className = "service_h2">Guava Bliss</h2>
         <p>At Berrylicious, our GuavaBliss delivers a burst of tropical flavor in every bite. These guavas, selected at their peak ripeness, are full of sweet, tangy delight and a pleasant fragrance. Loaded with Vitamin C, fiber, and antioxidants, GuavaBliss not only pleases your palate but also contributes to your wellness.</p>
         </div>



         </div>

         <div className = "service-btn">
         <a href = "/services"><b>ReadMore</b></a>
         </div>
		</div>
	);
}