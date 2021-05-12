import React, { createContext, useState, useEffect } from 'react'

let filterState = {}

export const Context = createContext()

export const GlobalContext = ({ children }) => {
   const [sepia, setSepia] = useState({})
   const [vintage, setVintage] = useState({})
   const [blur, setBlur] = useState({})


  useEffect(() => {
    filterState['sepia'] = sepia
    filterState['vintage'] = vintage
    filterState['blur'] = blur
  }, [sepia, vintage, blur])

   return (
     <Context.Provider value={ {filterState, setSepia, setVintage, setBlur }}>
       { children }
     </Context.Provider>
   )
 } 