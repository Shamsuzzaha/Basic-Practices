import {createContext} from "react";

export const userContext = createContext()
// it provides 1. provider and 2. consumer

// step 1: create context
// step 2: wrap child with context provider
//step 3: fetch data by useContext