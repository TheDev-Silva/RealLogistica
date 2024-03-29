import Image from "next/image";

export default function PageBolos() {
    return (
        <div className="p-2 pt-[160px]">
            <div className="md:w-[100%] md:py-4 py-10 md:flex md:justify-between items-center justify-center rounded-lg md:h-[160px] h-auto  bg-gradient-to-tr from-[#ff6600] to-[#663300]">
                <div className="w-full flex items-center justify-center">
                    <h1 style={{ fontFamily: "Bebas Neue" }} className="md:text-[120px] text-[100px] absolute font-bold">Bolos</h1>
                    <p style={{ fontFamily: "Arizona", letterSpacing: '2px', color: "white" }} className="md:text-[60px] text-[50px] relative md:bottom-[0px] bottom-[0px]drop-shadow-lg">confeitados</p>
                </div>
                <div className="max-w-[100%] min-w-[50%] max-h-[100%] md:flex items-center justify-center hidden">
                    <Image src="/banner/banner-bolo-confeitados.png" alt="bolo" width={500} height={500} className="w-[250px]"/>
                </div>

            </div>
        </div>
    )
}