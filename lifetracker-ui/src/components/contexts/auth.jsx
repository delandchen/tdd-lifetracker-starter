import { createContext, useState} from "react";

const AuthContext = createContext({});

export const AuthContextProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    return (
        <AuthContext.Provider value={ {loggedIn, setLoggedIn} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;