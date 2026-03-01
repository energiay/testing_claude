import React, {createContext, useContext} from 'react'

const BodyRefContext = createContext(null)


export function BodyRefProvider({ children, bodyRef }) {
    return (
        <BodyRefContext.Provider value={bodyRef}>
            {children}
        </BodyRefContext.Provider>
    )
}

export function useBodyRef() {
    const context = useContext(BodyRefContext)
    if (!context) {
        throw new Error('useBodyRef must be used within BodyRefProvider')
    }

    return context
}
