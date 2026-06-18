import React, {createContext,useState,useEffect} from 'react';

export interface GlobalContextI{
    smallScreen:boolean,
    setSmallScreen:React.Dispatch<React.SetStateAction<boolean>>,
    filterIsOpen:boolean,
    setFilterIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
    searchPanelIsShown:boolean,
    setSearchPanelIsShown:React.Dispatch<React.SetStateAction<boolean>>,
    burgerMenuIsShownUp:boolean,
    setBurgerMenuIsShownUp:React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext=createContext<GlobalContextI|undefined>(undefined);

interface GlobalCProviderProps{
    children:React.ReactNode;
}

export function GCProvider({children}:GlobalCProviderProps){
    const [smallScreen, setSmallScreen] = useState<boolean>(
        window.innerWidth <= 985,
    );
    const [filterIsOpen,setFilterIsOpen]=useState<boolean>(false);
    const [searchPanelIsShown, setSearchPanelIsShown] =
        useState<boolean>(false);

    useEffect(() => {
        document.body.classList.toggle("fixed");
    }, [searchPanelIsShown]);

    useEffect(()=>{
        document.body.style.overflowY=(filterIsOpen?'hidden':'visible')
    },[filterIsOpen])
    const [burgerMenuIsShownUp,setBurgerMenuIsShownUp]=useState<boolean>(false);
    useEffect(()=>{
        function handleResize(){
            setBurgerMenuIsShownUp(p=>{
                return p?(window.innerWidth>650?false:p):p;
            });
        }
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[])
    return (
        <GlobalContext.Provider value={{smallScreen,setSmallScreen,filterIsOpen,setFilterIsOpen,searchPanelIsShown,setSearchPanelIsShown,burgerMenuIsShownUp,setBurgerMenuIsShownUp}}>
            {children}
        </GlobalContext.Provider>
    )
}
