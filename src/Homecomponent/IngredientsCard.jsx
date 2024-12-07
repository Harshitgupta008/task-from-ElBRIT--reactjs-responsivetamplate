
const IngredientsCard = ({image,title, discreption, seelink}) => {
    return <>
        <div className="relative h-52 w-80">
            <img className="h-full w-full rounded-xl" src={image} alt="" />
            <div className="absolute top-6 left-5 bottom-3 right-0 flex flex-col justify-between  ">
                <div className="flex flex-col gap-2">
                    <h1 className="text-custom-text-color2 font-semibold text-xl">{title}</h1>
                    <p className="text-gray-400">{discreption}</p>
                </div>
                <a href={seelink} className="text-custom-text-color font-medium border-b-2 border-custom-text-color h-fit w-fit">SEE MORE</a>
            </div>
        </div>

    </>
}
export default IngredientsCard;