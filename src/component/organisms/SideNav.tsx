import { 
         IconButton,
         Drawer,
         useTheme,
         Divider
         } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons"; 
import { useAppSelector } from '../../app/hooks';
import { SelectUser } from '../../slices/loginSlice';
import { FC } from "react";
import { ListAtom } from '../atoms';
         
interface Props {
    handleFrag:() => void,
    open:boolean
}

const SideNav :FC<Props>= ({
    handleFrag,
    open
}) => {
    const theme = useTheme();
    const user = useAppSelector(SelectUser);
    
    return (
        <>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div>
                    <IconButton onClick={handleFrag}>
                        {theme.direction === 'ltr' ? <ChevronLeft/>:<ChevronRight/>}
                    </IconButton>
                </div>
                <Divider/>

                <ListAtom ListChild={[user.name]}/>

            </Drawer>


        </>
    )
}

export default SideNav;