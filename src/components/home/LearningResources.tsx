import jquery from "@/assets/logos/jquery.png"
import wordpress from "@/assets/logos/wordpress.jpg"
import google from "@/assets/logos/google.png"
import youtube from "@/assets/logos/youtube.png"
import hubspot from "@/assets/logos/hubspot.png"
import bootstrap from "@/assets/logos/bootstrap.png"
import shopify from "@/assets/logos/shopify.png"
import teacherHero1 from "@/assets/teacher-hero1.png"


export default function LearningResources() {
  return (
    <div className="bg-sky-500 text-white p-10 rounded-2xl flex items-center gap-[32px] lg:h-[361px] mt-24">
        {/* Left Section - Logos and Text */}
        <div className="grid grid-cols-2 gap-4">
          <img src={jquery} alt="jQuery" className="bg-white p-2 w-[190px] h-[56px] object-cover px-[16px] py-2 rounded-lg" />
          <img src={wordpress} alt="WordPress" className="bg-white w-[190px] h-[56px] object-cover px-[16px] py-2 p-2 rounded-lg" />
          <img src={google} alt="Google" className="bg-white p-2 w-[190px] h-[56px] object-cover px-[16px] py-2 rounded-lg" />
          <img src={youtube} alt="YouTube" className="bg-white p-2 w-[190px] h-[56px] object-cover px-[16px] py-2 rounded-lg" />
          <img src={hubspot} alt="HubSpot" className="bg-white p-2 w-[190px] h-[56px] object-cover px-[16px] py-2 rounded-lg" />
          <img src={bootstrap} alt="Bootstrap" className="bg-white w-[190px] h-[56px] object-cover px-[16px] py-2 p-2 rounded-lg" />
          <img src={shopify} alt="Shopify" className="bg-white p-2 w-[190px] h-[56px] object-cover px-[16px] py-2 rounded-lg" />
          <button className="bg-sky-900 text-white p-3 rounded-lg">And Many More...</button>
        </div>

        {/* description  */}
        <div className="w-[564px] flex flex-col gap-3 md:gap-6 h-full justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">More than <span className="text-sky-950">200 Learning Resources</span> and Platform Connectivity</h2>
            <p className="text-gray-200">Nulla malesuada pellentesque elit eget gravida cum sociis. Mattis ullamcorper velit sed ullamcorper.</p>
            <button className="w-[171.54px] h-[35.2px] bg-sky-900 text-white rounded-full text-sm font-bold mb-[6px]">All integrations →</button>
        </div>
      
        {/* Right Section - Image */}
        <div className="md:w-[20%] flex justify-center mt-6 md:mt-0 ">
            <img src={teacherHero1} alt="Happy Woman with Laptop" className="w-80 h-[]" />
        </div>
    </div>
  )
}
