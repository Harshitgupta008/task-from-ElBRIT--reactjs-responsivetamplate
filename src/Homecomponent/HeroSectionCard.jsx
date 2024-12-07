const HeroSectionCard = ({ title, discreption, image }) => {
    return <>
        <div className="flex flex-col justify-center items-center gap-2  h-44 w-64">
            <img className="bg-white h-24 w-24  rounded-full" src={image} alt="" />
            <h1 className="font-medium text-lg">{title}</h1>
            <p className="text-center text-sm text-gray-300">{discreption}</p>
        </div>
    </>
}
export default HeroSectionCard;