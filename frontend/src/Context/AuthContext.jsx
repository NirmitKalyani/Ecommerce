import { createContext, useContext, useState } from "react";

const AuthContext = createContext(undefined);

export function AuthProvider({children}){

    let[user, setUser] = useState(null);
    let[isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <AuthContext.Provider value={(user,setUser,isAuthenticated,setIsAuthenticated)}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error("Use auth must be used within an AuthProvider")
    }
    return context;
}
