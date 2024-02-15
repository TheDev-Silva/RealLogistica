import Image from "next/image";

export default function PageTrufa() {
    return (
        <div className="p-2">
            <div className="md:w-[100%] md:py-4 py-10 md:flex md:justify-between items-center justify-center rounded-lg md:h-[160px] h-auto bg-gradient-to-tr from-[#ff6600] to-[#663300]">
                <div className="w-[100%] h-[100%] flex items-center justify-center text-center">
                    <h1 style={{ fontFamily: "Bebas Neue" }} className="md:text-[120px] text-[100px] absolute font-bold ">Trufas</h1>
                    <p style={{ fontFamily: "Arizona", letterSpacing: '2px', color: "white"}} className="md:text-[60px] text-[50px] relative md:bottom-[0px] bottom-[0px]drop-shadow-lg">recheados</p>
                </div>
                <div className="max-w-[100%] min-w-[50%] max-h-[100%] md:flex items-center justify-center hidden">
                    <Image src="/banner/banner-trufa-recheadas.png" alt="trufa" width={500} height={500} className="w-[150px]"/>
                </div>

            </div>
        </div>
    )
}