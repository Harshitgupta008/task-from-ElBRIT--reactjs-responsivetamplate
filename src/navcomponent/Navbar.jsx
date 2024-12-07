import navimage from "../image/NavImage.png"
const Navbar = () => {
    return <>
        <div className="h-12 bg-white w-full relative">
            <img src={navimage} alt="ElBTIT" className="w-28 h-8 absolute top-2 left-16"/>
        </div>
    </>
}
export default Navbar;