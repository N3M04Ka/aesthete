import {useContext} from 'react';
import {type GlobalContextI,GlobalContext} from './globalC'
export function useGC():GlobalContextI{
    const context=useContext(GlobalContext);
    if(context==undefined)
        throw new Error("useSPC must be used withing SPContextProvider");
    return context;
}
