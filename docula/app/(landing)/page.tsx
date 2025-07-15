import Footercompo from "./-Componenets/footer"
import Headingcompo from "./-Componenets/heading"
import Heros from "./-Componenets/heros"

const LandingPage = () => {
    return (
        <div className="min-h-full flex flex-col">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 py-10">
                <Headingcompo/>
                <Heros/>
            </div>
            <Footercompo/>
        </div>  
    )
}   

export default LandingPage