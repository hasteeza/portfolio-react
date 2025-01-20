export function Qwerty (){
    return(
        <header className="bg-[rgb(30,30,30,0.1)] backdrop-blur-sm flex justify-evenly items-center p-3 h-24 fixed top-0 right-0 left-0 z-[100] lg:justify-between">
            <a href=""><img className="w-40 h-9" src="/natad.png" alt="" /></a>
            <nav className="responsive-navbar lg:hidden xl:flex">
                <a className="pl-1 pr-1 hover:text-amber-500 relative after:content-[''] after:absolute after:bg-amber-500 after:h-[3px] after:w-0 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full lg:hover:after:w-0" href="">Home</a>
                <a className="pl-1 pr-1 hover:text-[rgb(50,205,50)] relative after:content-[''] after:absolute after:bg-[rgb(50,205,50)] after:h-[3px] after:w-0 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full lg:hover:after:w-0" href="">About</a>
                <a className="pl-1 pr-1 hover:text-[rgb(160,160,255)] relative after:content-[''] after:absolute after:bg-[rgb(160,160,255)] after:h-[3px] after:w-0 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full lg:hover:after:w-0" href="">Services</a>
                <a className="pl-1 pr-1 hover:text-[rgb(0,173,181)] relative after:content-[''] after:absolute after:bg-[rgb(0,173,181)] after:h-[3px] after:w-0 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full lg:hover:after:w-0" href="">Portfolio</a>
                <a className="pl-1 pr-1 hover:text-[rgb(255,112,99)] relative after:content-[''] after:absolute after:bg-[rgb(255,112,99)] after:h-[3px] after:w-0 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full lg:hover:after:w-0" href="">Contacts</a>
            </nav>
            <button id="hamburger" className="border rounded-md p-3 hidden lg:flex xl:hidden">
          <svg width="30" height="20" viewBox="0 0 100 80" fill="white" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </button>
        <button id="ekis" className="border rounded-md p-3 hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <line x1="4" y1="4" x2="20" y2="20" stroke="white" stroke-width="2" stroke-linecap="round" />
                <line x1="4" y1="20" x2="20" y2="4" stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
          </button>
        </header>
    )
}

export default Qwerty;
