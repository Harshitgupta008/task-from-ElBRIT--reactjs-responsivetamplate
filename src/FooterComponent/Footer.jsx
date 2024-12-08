import FooterCardDetail from "./FooterCardDetail";
import taliphone from "../image/taliphone.png"
import email from "../image/email.png"
import mapicon from "../image/map.png"
import NavImage from "../image/NavImage.png"
import location from "../image/location.png"
const Footer = () => {
    return <>
        <div className="h-fit w-full bg-custom-text-color2 py-9  mt-10 flex justify-center items-center flex-col gap-5">
            <div className="h-fit w-fit flex flex-col gap-10 items-center md:items-start">

                <div className="bg-custom-text-color2 w-fit h-fit   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center  gap-8">
                    <FooterCardDetail image={taliphone} title={"Phone Number"} titlename={"+974 3118 1843"} />
                    <FooterCardDetail image={email} title={"Email Address"} titlename={"Elbrithcqhr@gmail.com"} />
                    <FooterCardDetail image={mapicon} title={"Office Location"} titlename={" Ambassador Street, Zone 61,"} />
                    <div className="h-fit w-fit px-4 py-2 bg-white">
                        <img className="h-16 w-60" src={NavImage} alt="" />
                    </div>
                    <div className="h-fit w-80">
                        <p className="text-sm text-white">Your health, physical and emotional well-being is important to us. We are always by your
                            side and have made it even easier for you t
                            o find the necessary vitamins.</p>
                    </div>
                </div>
                <div className="flex  gap-2 items-center">
                    <img src={location} className="h-4 w-4" alt="" />
                    <p className="text-sm text-gray-300">Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
                </div>
            </div>

        </div>
    </>
}
export default Footer;