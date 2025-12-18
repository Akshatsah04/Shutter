function Navbar(){
    return(
        <>
        <div className="h-[14%] w-full flex  items-center justify-between absolute top-0 z-10">
            <div>
                shutter icon
            </div>
            <div  className="bg-[#492809] flex items-center h-[60px] w-[700px] rounded-[30px] justify-evenly">
                <div className="w-[80px] h-[35px] text-black text-base font-bold flex justify-center items-center bg-[#FFEBD5] rounded-[17.5px]">
                 Home
                </div>
                <div className="w-[80px] h-[35px] text-[#FFEBD5] text-base font-bold flex justify-center items-center ">
                 Event
                </div>
                <div className="w-[80px] h-[35px] text-[#FFEBD5] text-base font-bold flex justify-center items-center ">
                 Team
                </div>
                <div className="w-[80px] h-[35px] text-[#FFEBD5] text-base font-bold flex justify-center items-center ">
                 Gallery
                </div>
                <div className="w-[84px] h-[35px] text-[#FFEBD5] text-base font-bold flex justify-center items-center ">
                 Point Table
                </div>
                <div className="w-[80px] h-[35px] text-[#FFEBD5] text-base font-bold flex justify-center items-center ">
                 About
                </div>
            </div> 
            <div>
                profile
            </div>  
        </div>

        </>
    );
}

export default Navbar;