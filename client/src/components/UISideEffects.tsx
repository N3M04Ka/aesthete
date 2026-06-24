import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {type RootState} from '@/app/store';
import {setBurgerMenuIsShownUp} from '@/app/slices/uiSlice';

export function UISideEffects(){
    const dispatch=useDispatch();
    const searchPanelIsShown=useSelector((state:RootState)=>state.ui.searchPanelIsShown);
    const filterIsOpen=useSelector((state:RootState)=>state.ui.filterIsOpen);
    const burgerMenuIsShownUp=useSelector((state:RootState)=>state.ui.burgerMenuIsShownUp);

    useEffect(() => {
        if(searchPanelIsShown)
            document.body.classList.add('fixed');
        else
            document.body.classList.remove('fixed');
    }, [searchPanelIsShown]);

    useEffect(()=>{
        document.body.style.overflowY=(filterIsOpen?'hidden':'visible')
    },[filterIsOpen])
    useEffect(()=>{
        function handleResize(){
            if(burgerMenuIsShownUp&& window.innerWidth>650)
                dispatch(setBurgerMenuIsShownUp(false));
        }
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[])
    return null;
}
