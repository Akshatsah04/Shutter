import Bggrid from "../component/bggrid";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


function Home(){
    
    // const Camera = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".camscrollani",
            start: "top 18%",
            scrub: 1,
            // markers: true,
          },
        });
        tl.to(".camscrollani", {
          x: "13vw",
          y: "95vh",
          scale: 1.3,
          rotate: -25,
        });
      });


    return(
        <>
        {/* -------------------page 1------------------------- */}
        <div>
            <Bggrid color="black"/>
            <div className="w-screen h-screen bg-[#FFEBD5] -z-10"></div>
            <div className="w-[61%] h-[30%] absolute top-[19%] left-[13%] md:top-[25%] md:left-[13%] lg:top-[25%] lg:left-[13%] xl:top-[20%] xl:left-[13%] 2xl:top-[19%] 2xl:left-[13%]">
                <p style={{ fontFamily: 'ifcwildrodeo' }} className="h-[100%] w-[100%] text-[15vw] 2xl:text-[15vw] tracking-[2rem] flex justify-items-start items-center">SHUTTER</p>
            </div>
            <div className="w-[61%] h-[30%] absolute top-[43%] right-[10%] md:top-[34%] md:right-[10%] lg:top-[34%] lg:right-[10%] xl:top-[41%] xl:right-[10%] 2xl:top-[43%] 2xl:right-[11%]">
                <p style={{ fontFamily: 'ifcwildrodeo' }} className="h-[100%] w-[100%] text-[15vw] 2xl:text-[15vw] tracking-[2rem] flex justify-end items-center">SOCIETY</p>
            </div>
            <div className="h-[100px] w-[411px] absolute bottom-[10%] left-[9%]">
            <p className="text-[20px]"><span className="font-bold">Shutter Society</span> unites photographers to capture stories, spark creativity and inspire unforgettable visual journeys.</p> 
            </div>
            <div className="h-[53px] w-[257px] absolute bottom-[19%] right-[11%] text-center">
            <p className="text-[20px]">More Than <span className="font-bold">Just a Camera it’s Your</span> Creative Partner</p> 
            </div>
            <div className="w-[206px] h-[92px] absolute bottom-[26%] left-[14%] rounded-[50%] bg-black -rotate-z-10 flex justify-center items-center">
                <p className="text-white text-[20px] w-[116px] text-center">EXPLORE MORE</p>
            </div>
            <div className="camscrollani h-[618px] w-[825px] absolute top-[26%] left-[27%] rotate-z-11 p-18 drop-shadow-[50px_50px_25px_rgba(0,0,0,0.5)] z-20">
                <img src="/SScamerac.png" />
            </div>
        </div>


        
        {/* -------------------page 2------------------------- */}
        <div className="h-screen w-screen bg-[#FFEBD5]">
            <div className="h-[50%] w-screen bg-[#492809] absolute top-[110%] skew-y-5"></div>
            <div className="h-[50%] w-screen bg-[#492809] absolute top-[150%]"></div>
            <div className="w-[98%] h-[448px] absolute top-[96%]">
                <p style={{ fontFamily: 'ifcwildrodeo' }} className="text-[#8B503A] flex justify-center items-center text-[20vw] tracking-[3rem] rotate-5">ULTRA HD</p>
            </div>
            <Bggrid color="white"/>
            <div className="w-[206px] h-[92px] relative top-[80%] left-[10%] rounded-[50%] bg-[#FFEBD5] -rotate-z-10 flex justify-center items-center">
                <p className="text-black text-[20px] w-[116px] text-center">FOLLOW US</p>
            </div>
            <div className="h-[30%] w-[25%] relative top-[40%] left-[10%] text-[#FFEBD5]">
                <div>
                    <p style={{ fontFamily: 'ifcwildrodeo' }} className="text-[2.5rem] tracking-wide leading-11">Capture Life's Best Moments with Clarity</p>
                </div>
                <div>
                    <p className="mt-3">Whether you’re a professional photographer or a passionate creator, Shutter Society is a community to showcase your work, connect with fellow photographers, and take part in exciting photography competitions and events.</p>
                </div>
            </div>
            <div className="h-[13%] w-[13%] relative top-[38%] left-[79%] text-[#FFEBD5]">
                <div>
                    <p className="text-[2.5rem] tracking-wide leading-11 font-bold font-serif">300+</p>
                </div>
                <div>
                    <p className="mt-3">photographers growing together in the Shutter Society community</p>
                </div>
            </div>
            
        </div>



        {/* -------------------page 2------------------------- */}
        <div className="h-screen w-screen bg-[#FFEBD5]">
            <Bggrid color="black"/>
            <div>
                <div>

                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;