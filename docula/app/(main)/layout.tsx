'use client'

import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import { Navigation } from "./-components/Navigation";

const MainLayout = ({
    children
}:{
    children:React.ReactNode;
}) => {

    {/*const {user,isAuthenticated,isloading} = useAuth();
    if(isloading){
        return (
            <div className="h-full flex items-center justify-center">
                <p>Loading</p>
            </div>
        )
    }

    if(!isAuthenticated){
        return redirect("/")
    }*/}
    return (
        <div className="h-full flex dark:bg-[#1F1F1F]">
            <Navigation/>
            <main className="flex-1 h-full overflow-y=auto">
                {children}
            </main>
            
        </div>
    )
}

export default MainLayout