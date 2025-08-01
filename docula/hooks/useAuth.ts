import { useSession } from "next-auth/react";

export const useAuth = () => {
    const {data:session,status} = useSession();

    const isAuthenticated = status === 'authenticated'

    const isloading = status === 'loading';


    return {
        user:session?.user,
        isAuthenticated,
        isloading,
    }
}