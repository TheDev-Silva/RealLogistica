"use client"
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { MenuIcon } from "lucide-react"
import Link from "next/link";
import Image from "next/image";

export default function HeaderPage() {
  return (

    <Card className="py-10 px-5">
      <Sheet>
        <SheetTrigger asChild className="">
          <Button>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} >
          <h1>Menu</h1>
          <div className="flex flex-col pt-14 gap-5">
            <Link href={`/bolo`}>
              <Button className="w-full uppercase h-[50px] flex justify-center items-center">
                <p style={{ fontFamily: "Bebas Neue" }} className="absolute left-[120px] text-[26px]">Bolos</p>
                <p style={{ fontFamily: "Blooming Elegant Monoline", color: "orange" }} className="relative text-4xl left-[10%] bottom-[5px] capitalize">confeitados</p>
              </Button>
            </Link>
            <Link href={`/cupcake`} >
            <Button className="w-full uppercase h-[50px] flex justify-center items-center">
                <p style={{ fontFamily: "Bebas Neue" }} className="absolute left-[120px] text-[26px]">cupcakes</p>
                <p style={{ fontFamily: "Blooming Elegant Monoline", color: "orange" }} className="relative text-4xl left-[10%] bottom-[5px] capitalize">deliciosas</p>
              </Button>
            </Link>
            <Link href={`/trufa`} >
            <Button className="w-full uppercase h-[50px] flex justify-center items-center">
                <p style={{ fontFamily: "Bebas Neue" }} className="absolute left-[120px] text-[26px]">trufas</p>
                <p style={{ fontFamily: "Blooming Elegant Monoline", color: "orange" }} className="relative text-4xl left-[10%] bottom-[5px] capitalize">confeitados</p>
              </Button>
            </Link>
          </div>


        </SheetContent>
      </Sheet>
    </Card>

  )
}