import vitaminimage from "../image/vitamin.png"
import weightimage from "../image/weight.png"
import foodimage from "../image/food.png"
import tabletboximage from "../image/tabletbox.png"
import HeroSectionCard from "./HeroSectionCard"
import image1 from "../image/image1.png"
import image2 from "../image/image2.png"
import image3 from "../image/image3.png"
import image4 from "../image/image4.png"
import image5 from "../image/image5.png"
import image6 from "../image/image6.png"
const HeroSection = () => {
    return <>
        <div className="h-fit w-full px-2">
            <div className="h-2 w-full bg-red-400">
                <div className="pb-36 bg-custom-blue">
                    <div className="h-fit w-full bg-custom-blue flex flex-col  justify-center items-center pt-9 pb-28">
                        <h1 className="text-custom-text-color font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">Essential Vitamins</h1>

                        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-20 md:gap-10  mt-3">
                            <div className="flex flex-col gap-2 items-center justify-center">
                                <h1 className="text-gray-500 mt-1">Online Medical Suppiles</h1>
                                <h1 className="text-custom-text-color2 text-lg font-medium mt-1">Get Your Vitamins <br /> & Minerals</h1>
                                <button className="bg-custom-text-color2 text-white px-6 py-1 rounded-full mt-1">EXPLORE</button>
                            </div>
                            <div className="relative h-72 w-72 flex items-center justify-center">
                                <div className="h-64 w-64  bg-medition-backcolor rounded-tl-[74px] rounded-br-[74px] relative z-10"></div>
                                <img className="h-72 w-64  absolute top-[-55px] left-[-6px] object-cover z-20" src={tabletboximage} alt="Tablet Box" />
                            </div>

                            <div className="flex flex-col justify-start items-centr gap-3 h-fit w-fit">
                                <div className="flex flex-col sm:flex-row md:flex-wrap gap-3 items-center justify-center text-center sm:text-left sm:justify-start h-fit w-full">
                                    <div className="h-fit w-fit p-2 ">
                                        <img className="h-16 w-16" src={vitaminimage} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="text-custom-text-color2 text-lg font-medium">Vitamins</h1>
                                        <p className="text-gray-500">Increased Vitamins and <br /> Minerals in your diet</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row md:flex-wrap gap-3 items-center justify-center text-center sm:text-left sm:justify-start h-fit w-full">
                                    <div className="h-fit w-fit p-2 ">
                                        <img className="h-16 w-16" src={weightimage} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="text-custom-text-color2 text-lg font-medium">Weight Loss</h1>
                                        <p className="text-gray-500">Weight Loss <br /> Find scientifically proven solutions</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row md:flex-wrap gap-3 items-center justify-center text-center sm:text-left sm:justify-start h-fit w-full">
                                    <div className="h-fit w-fit p-2 ">
                                        <img className="h-16 w-16" src={foodimage} alt="" />
                                    </div>
                                    <div>
                                        <h1 className="text-custom-text-color2 text-lg font-medium">Functional Foods</h1>
                                        <p className="text-gray-500">Functional Foods <br />
                                            From protein powers to baby formula</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1 justify-start h-fit w-full pl-20 md:pl-32 lg:pl-64">
                            <div className="h-5 w-5 bg-slate-300 rounded-full"></div>
                            <div className="h-5 w-5 bg-slate-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className="w-full relative top-[-180px] flex justify-center  items-center  ">
                    <div className="bg-custom-text-color2 py-4 px-24  rounded-[60px] h-fit w-fit">
                        <div className="w-fit h-fit relative top-[-70px] text-white grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3  ">
                            <HeroSectionCard image={image1} title={"Clinically Studied"} discreption={`All products that we offer have \ undergone lab and safety tests`} />
                            <HeroSectionCard image={image2}  title={"Vegetarian Friendly"} discreption={`We have a wide selection of vegetarian \ products to meet your needs`} />
                            <HeroSectionCard image={image3}  title={"Made in India"} discreption={`Shop local and explore health products \ made right here in India`} />
                            <HeroSectionCard image={image4} title={"Free shipping"} discreption={`We deliver to your door with no \  shipping costs on your orders`} />
                            <HeroSectionCard image={image5} title={"No Risk"} discreption={`We ensure that all products are safe \  and within their use-by date`} />
                            <HeroSectionCard image={image6} title={"GMO Free"} discreption={`Natural, no modified products and \  derivatives for those who need it`} />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>
}
export default HeroSection;