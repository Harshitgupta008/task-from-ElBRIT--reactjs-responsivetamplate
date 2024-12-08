const NewsCard = ({ date1, date2, image1, height1, weight1, image2, height2, weight2 }) => {
    return <>
        <div className="h-fit w-fit flex flex-col gap-3">
            <div className={`relative ${height1} ${weight1}`}>
                {
                    !date1 ? "" :
                        <div className="absolute bg-blue-900 top-4 left-[-5px] flex justify-center items-center h-7 w-20 rounded-r-full"><h1 className="text-white font-normal text-sm">{date1}</h1></div>
                }
                <p className="absolute top-16 left-6 text-sm text-gray-200 font-semibold ">The Covid-19 Epidemic In 2022 <br /> Is Back</p>

                <img className="h-full w-full object-cover rounded-xl" src={image1} alt="" />
            </div>
            <div className={`relative ${height2} ${weight2}`}>
                {
                    !date2 ? "" :
                        <div className="absolute bg-blue-900 top-4 left-[-5px] flex justify-center items-center h-7 w-20 rounded-r-full"><h1 className="text-white font-normal text-sm">{date2}</h1></div>
                }
                <p className="absolute top-16 left-6 text-sm text-gray-200 font-semibold ">The Covid-19 Epidemic In 2022 <br /> Is Back</p>
                <img className="h-full w-full object-cover rounded-xl" src={image2} alt="" />
            </div>
        </div>

    </>
}
export default NewsCard;