function NavigationBar() {
  return (
    <div className="flex justify-between items-center py-2.5 w-11/12 mx-auto bg-transparent absolute top-[130.5px] ml-[4.16665%]">
        <div><img className="w-20 h-20" src="/logo_white.png" alt="Logo" /></div>
        <div>
            <ul className="*:font-bold text-white flex justify-evenly gap-4">
                <li>BUILD A BOX</li>
                <li>PREMADE</li>
                <li>CORPORATE GIFTS</li>
                <li>BLOG</li>
                <li>ABOUT US</li>
            </ul>
        </div>
    </div>
  )
}

export default NavigationBar