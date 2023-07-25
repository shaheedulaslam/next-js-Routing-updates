
import { createContext,useContext,Dispatch,SetStateAction,useState } from "react";

type DataTypes={
    firstName:String
}

interface ContextProps{
    userId:String,
    setUserId:Dispatch<SetStateAction<string>>
    data:DataTypes[],
    setData:Dispatch<SetStateAction<DataTypes[]>>
}
const GlobalContext = createContext<ContextProps>({
    userId:'',
    setUserId:():string =>'',
    data:[],
    setData:():DataTypes[]=> []
})

export const GlobalContextProvider = ({children}:any)=>{
    const [userId,setUserId] = useState('')
    const [data,setData] = useState<[] | DataTypes[]>([])

    return(
        <GlobalContext.Provider value={{userId , setUserId , data , setData}}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = ()=>useContext(GlobalContext)