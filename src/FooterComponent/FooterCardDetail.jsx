const FooterCardDetail = ({image, title, titlename}) => {
    return <>
        <div className="bg-custom-text-color3 h-20 w-80  rounded-xl  text-white flex flex-wrap px-7 justify-start items-center  gap-8">
            <img className="h-10 w-10" src={image} alt="" />
            <div className="flex flex-col justify-center  ">
                <h1 className="text-sm text-gray-200">{title}</h1>
                <h1 className="font-medium text-sm">{titlename}</h1>
            </div>
        </div>
    </>
}
export default FooterCardDetail;