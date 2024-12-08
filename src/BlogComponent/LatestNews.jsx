import NewsCard from "./NewsCard";
import newsImage1 from "../image/newsImage1.jpg"
import newsImage2 from "../image/newsImage2.jpg"
const LatestNews = () => {
    return <>
        <div className="h-fit w-full mt-10  flex flex-col gap-5 justify-center items-center">
            <div className="flex flex-col h-fit w-fit">

                <div className="h-fit w-full flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-custom-text-color font-semibold">Our Blog</h1>
                    <h1 className="text-custom-text-color2 text-3xl font-semibold">Latest News</h1>
                </div>
                <div className="h-fit w-fit grid grid-cols-1 mt-10  sm:grid-cols-2   xl:grid-cols-4  gap-3 ">
                    <NewsCard date1={"20 Apr"} date2={"20 Apr"} image1={newsImage1} height1={"h-80"} weight1={"w-64"} image2={newsImage2} height2={"h-36"} weight2={"w-64"} />
                    <NewsCard date1={"20 Apr"} date2={""} image1={newsImage1} height1={"h-36"} weight1={"w-64"} image2={newsImage2} height2={"h-80"} weight2={"w-64"} />
                    <NewsCard date1={"20 Apr"} date2={"20 Apr"} image1={newsImage1} height1={"h-80"} weight1={"w-64"} image2={newsImage2} height2={"h-36"} weight2={"w-64"} />
                    <NewsCard date1={"20 Apr"} date2={"17 Mar"} image1={newsImage1} height1={"h-36"} weight1={"w-64"} image2={newsImage2} height2={"h-80"} weight2={"w-64"} />
                </div>
               
            </div>

        </div>
    </>
}
export default LatestNews;