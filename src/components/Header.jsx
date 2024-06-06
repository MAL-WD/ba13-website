const Header = () => {
    return ( <>
    <div className="flex z-50  left-1/2 -translate-x-1/2 fixed min-h-20 bg-white rounded-full shadow mt-5 w-[80%] justify-between items-center container  py-2 px-4     bg-opacity-50 backdrop-blur-xl px-8 shadow-md ">
        <div className="forms">
            <button className="border border-blue-700 px-4 py-2 rounded-full text-xl font-medium">افتح حساب</button>
        </div>
        <nav>
            <ul className="flex gap-8 *:font-semibold text-lg">

                <li><a href="#Home">اتصل بنا</a></li>
                <li><a href="#About">اسعارنا</a></li>
                <li><a href="#Services">خدماتنا</a></li>
                <li><a href="#Pricing">من نحن</a></li>
                <li><a href="#Contact">الرئيسية</a></li>
            </ul>
        </nav>
        <div className="logo font-bold text-2xl">Logo</div>
    </div>
    </> );
}
 
export default Header;