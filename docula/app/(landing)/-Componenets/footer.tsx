import Image from "next/image";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
const Footercompo = () => {
    return (
        <div className="flex items-center w-full p-6 z-50 dark:bg-[#1F1F1F]">
            <Logo/>
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant='ghost' size='sm'>Privacy Policy</Button>
                <Button variant='ghost' size='sm'>Terms and conditions</Button>
            </div>
        </div>
    )
}

export default Footercompo;