import { createContext, useState } from 'react'

const GlobalState = createContext()

export default GlobalState;

export const AppProvider = ({ children }) => {

    const [name, setName] = useState("Laudier")

    return (
        <GlobalState.Provider value={{ name, setName }}>
            {children}
        </GlobalState.Provider>
    )
}

