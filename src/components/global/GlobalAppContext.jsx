import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = ()=>useContext(GlobalContext)

function GlobalAppContext({children}) {

  const [user,setUser] = useState("")

  return (
    <GlobalContext.Provider value={{user}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalAppContext