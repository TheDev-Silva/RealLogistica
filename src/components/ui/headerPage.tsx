"use client"
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { MenuIcon } from "lucide-react"
import Link from "next/link";


export default function HeaderPage() {
  return (

    <Card className="py-10 px-5 backdro-filter backdrop-blur-sm bg-opacity-10 bg-orange-400 bg-clip-padding">
      <Sheet>
        <SheetTrigger asChild className="">
          <Button>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} >
          <h1>Menu</h1>
          <div className="flex flex-col pt-14 gap-2">
            <SheetClose asChild>
              <Link href={`/bolos`}>
                <Button className="w-full uppercase h-[50px] flex justify-around items-center hover:bg-[#ff6600] hover:text-slate-950">
                  <p style={{ fontFamily: "Bebas Neue" }} className="absolute left-[120px] text-[26px]">Bolos</p>
                  <p style={{ fontFamily: "Arizona", letterSpacing: '2px' }} className="relative text-2xl left-[11%] -bottom-[10px] capitalize">confeitados</p>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={`/cupcake`} >
                <Button className="w-full uppercase h-[50px] flex justify-center items-center hover:bg-[#ff6600] hover:text-slate-950">
                  <p style={{ fontFamily: "Bebas Neue" }} className="absolute left-[120px] text-[26px]">cakes</p>
                  <p style={{ fontFamily: "Arizona", letterSpacing: '2px' }} className="relative text-2xl left-[11%] -bottom-[10px] capitalize">deliciosas</p>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={`/trufa`} >
                <Button className="w-full uppercase h-[50px] flex justify-center items-center hover:bg-[#ff6600] hover:text-slate-950">
                  <p style={{ fontFamily: "Bebas Neue" }} className="absolute left-[120px] text-[26px]">trufas</p>
                  <p style={{ fontFamily: "Arizona", letterSpacing: '2px' }} className="relative text-2xl left-[11%] -bottom-[10px] capitalize">recheadas</p>
                </Button>
              </Link>
            </SheetClose>

          </div>


        </SheetContent>
      </Sheet>
    </Card>

  )
}