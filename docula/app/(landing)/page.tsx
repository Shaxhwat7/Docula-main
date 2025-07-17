import Footercompo from "./-Componenets/footer"
import Headingcompo from "./-Componenets/heading"
import Heros from "./-Componenets/heros"

const LandingPage = () => {
    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center text-center gap-y-8 px-6 py-10">
                <Headingcompo/>
                <Heros/>
            </div>
            <Footercompo/>
        </div>  
    )
}   

export default LandingPage