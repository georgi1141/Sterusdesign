import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = ()=>useContext(GlobalContext)

function GlobalAppContext({children}) {

  const [user,setUser] = useState(false)

  return (
    <GlobalContext.Provider value={{user,setUser}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalAppContext