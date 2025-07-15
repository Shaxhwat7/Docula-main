'use client'
import { Button } from "@/components/ui/button";
const Headingcompo = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">
                Blending your ideas, Documents & ideas.Welcome To <span className="underline">Docula</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Docula is the connected workspace where <br/>
                better, faster work happens.
            </h3>
            <Button>Get Started</Button>
        </div>
    )
}

export default Headingcompo;