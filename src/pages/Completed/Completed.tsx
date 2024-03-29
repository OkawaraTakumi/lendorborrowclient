import React from "react";
import { useEffect, useState } from "react";
import { 
    makeStyles      
} from "@material-ui/core";
import { SelectCompleted , getLorBCompleted} from "../../slices/lorbSlice";
import { SelectUser } from "../../slices/loginSlice";
import { useAppSelector ,useAppDispatch} from "../../app/hooks";
import { resObj } from "../../slices/lorbSlice";
import { buttonArray } from "../../component/templates/ShowListOfAnyLorB";
import { ShowListOfAnyLorB } from "../../component/templates";
import { TypographyAtoms } from "../../component/atoms";


const useStyles = makeStyles({
    approve:{
        margin:'20px 0 0 0'
    },
    button:{
        margin:'0 0 0 10px'
    },
    box:{
        margin:'10px 0 0 0'
    },
    title:{
        margin:'20px 0 0 0',
        fontWeight:"bold"
    }
})
const buttonProps :buttonArray[]=[ 
    
]

const Completed = () => {
    const classes = useStyles();
    const user = useAppSelector(SelectUser);
    const dispatch = useAppDispatch();
    const [LItems, setLItems] = useState<Array<resObj>>() 
    const [BItems, setBItems] = useState<Array<resObj>>() 
    const completed = useAppSelector(SelectCompleted)
    
    useEffect(() => {
        dispatch(getLorBCompleted())
    },[dispatch,user])

    useEffect(() => {
        if(completed !== undefined) {
            setBItems(completed?.completed.BCompleted)
            setLItems(completed?.completed.LCompleted)
        }
    },[completed])

    return (
        <>  
            <TypographyAtoms 
                    variant={"body1"} 
                    align={"center"}
                    className={classes.title}>
                貸し履歴
            </TypographyAtoms>
            <ShowListOfAnyLorB 
                    buttonArray={buttonProps} 
                    classes={classes} 
                    items={LItems as resObj[]}
                    >
                貸し履歴はありません
            </ShowListOfAnyLorB>

            <TypographyAtoms 
                    variant={"body1"} 
                    align={"center"}
                    className={classes.title}>
                借り履歴
            </TypographyAtoms>
            <ShowListOfAnyLorB 
                    buttonArray={buttonProps} 
                    classes={classes} 
                    items={BItems as resObj[]}
                    >
                借り履歴はありません
            </ShowListOfAnyLorB>
        </>
    );
};

export default Completed;