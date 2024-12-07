import IngredientsCard from "./IngredientsCard";
import imagecard1 from "../image/imagecard1.jpg"
import imagecard2 from "../image/imagecard2.jpg"
import imagecard3 from "../image/imagecard3.jpg"
import imagecard4 from "../image/imagecard4.jpg"
import imagecard5 from "../image/imagecard5.jpg"
const Ingredients = () => {
    return <>
        <div className=" h-fit w-full flex-col gap-3  flex justify-center items-center">
            <div className="flex justify-center  items-center  flex-wrap gap-5">
                <div className="w-80 sm:w-96 md:w-[420px] justify-center items-center sm:items-start   flex flex-col gap-4">
                    <h1 className="text-custom-text-color font-semibold">INGREDIENTS</h1>
                    <h1 className="text-custom-text-color2 font-semibold text-4xl">Better Ingredients</h1>
                    <p className="text-gray-500">Only the best when you choose products offered on our platform - high-quality
                        ingredients for high quality products! </p>
                </div>
                <div className="flex justify-center items-center  flex-wrap gap-5">
                    <IngredientsCard image={imagecard1} title={"Vitamin C"} discreption={"Vitamin C as ascorbic   acid"} seelink={"#"} />
                    <IngredientsCard image={imagecard2} title={"Vitamin B3"} discreption={"Niacin for healthy gut  and skin"} seelink={"#"} />
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5">
                <div className="flex justify-center items-center  flex-wrap gap-5">

                    <IngredientsCard image={imagecard3} title={"Magnesium"} discreption={`Boost energy and \ support muscle function`} seelink={"#"} />
                    <IngredientsCard image={imagecard4} title={"Hyaluronic Acid"} discreption={`For smooth,  \ supple and soft skin!`} seelink={"#"} />
                    <div className="flex justify-center items-center  flex-wrap gap-5">
                        <IngredientsCard image={imagecard5} title={"Lactobacillus"} discreption={`Invigorate your gut \ microbiome`} seelink={"#"} />
                        <div className="hidden  h-auto w-auto lg:flex flex-col gap-4">
                            <div className="h-24 w-24  rounded-br-full bg-blue-300"></div>
                            <div className="h-20 w-20 bg-yellow-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}

export default Ingredients;