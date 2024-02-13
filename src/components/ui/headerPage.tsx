"use client"
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { MenuIcon } from "lucide-react"

export default function HeaderPage() {
  return (

    <Card className="py-10 px-5">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="">
          <h1>Menu</h1>

        </SheetContent>
      </Sheet>
    </Card>

  )
}