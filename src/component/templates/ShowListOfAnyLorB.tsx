import { FC } from "react";
import { 
    Container,
    Box        
} from "@material-ui/core";
import { ApproveAndReject } from "../molecules";
import { OneDataDisplay } from '../molecules'
import { resObj } from "../../slices/lorbSlice";

export interface buttonArray {
    textWillShow:string
    color:"inherit" | "primary" | "secondary" | "default"
    willDispatch:any,
    id:number
}

interface Props {
    children:string,
    classes:any,
    items:resObj[],
    buttonArray:buttonArray[]
}

const ShowListOfAnyLorB : FC<Props>= ({
    children,
    classes,
    items,
    buttonArray
}) => {


    return (
        <>  
            { items ?   
                items?.map((item, index) => {
                    return (
                    <Container key={index} maxWidth='sm' >
                        <OneDataDisplay item={item} className={classes.approve}/>
                        <Box display="flex" justifyContent="flex-end" className={classes.box}>
                            {
                                buttonArray 
                                &&
                                buttonArray.map((property) => {
                                    return (
                                        <ApproveAndReject 
                                                textWillShow={property.textWillShow}
                                                className={classes.button}
                                                color={property.color}
                                                item={item}
                                                willDispatch={property.willDispatch}
                                                index={index}
                                                key={property.id}
                                        />
                                    )
                                })
                                
                            }
                            {/* <ApproveAndReject 
                                        textWillShow="拒否"
                                        className={classes.button}
                                        color={"primary"}
                                        item={item}
                                        willDispatch={rejectCreate}
                                        index={index}
                                        />            
                            <ApproveAndReject 
                                        textWillShow="承認"
                                        className={classes.button}
                                        color={"primary"}
                                        item={item}
                                        willDispatch={approveCreate}
                                        index={index}
                                        /> */}
                        </Box>
                    </Container>
                    )
                }):
                <Box>
                    {children}
                </Box>  
            }
        </>
    );
};

export default ShowListOfAnyLorB;