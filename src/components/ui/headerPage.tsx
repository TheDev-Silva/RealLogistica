import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetTrigger } from "./sheet";
import {MenuIcon} from "lucide-react"

export default function HeaderPage() {
    return (
        <Card>
            <Sheet>
                <SheetTrigger>
                    <Button>
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>
            </Sheet>
        </Card>
    )
}