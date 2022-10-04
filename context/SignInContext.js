import { createContext, useState } from 'react'

export const SignInContext = createContext(null)

export const SignInContextProvider = ({ children }) => {
    const [ signedIn, setSignedIn ] = useState(false)

    const value = {
        signedIn,
        setSignedIn
    }

    return (
        <SignInContext.Provider value={value}>
            {children}
        </SignInContext.Provider>
    )
}

// export default {SignInContext}