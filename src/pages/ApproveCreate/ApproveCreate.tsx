import React from "react";
import { useEffect, useState } from "react";
import { 
    makeStyles      
} from "@material-ui/core";
import { SelectOnMaking } from "../../slices/lorbSlice";
import { useAppSelector } from "../../app/hooks";
import { rejectCreate, approveCreate } from "../../slices/lorbSlice";
import { resObj } from "../../slices/lorbSlice";
import { buttonArray } from "../../component/templates/ShowListOfAnyLorB";
import { ShowListOfAnyLorB } from "../../component/templates";


const useStyles = makeStyles({
    approve:{
        margin:'20px 0 0 0'
    },
    button:{
        margin:'0 0 0 10px'
    },
    box:{
        margin:'10px 0 0 0'
    }
})
const buttonProps :buttonArray[]=[ 
    {
        textWillShow:"拒否",
        color:"primary",
        willDispatch:rejectCreate,
        id:1
    },
    {
        textWillShow:"承認",
        color:"primary",
        willDispatch:approveCreate,
        id:2
    }
]

const ApproveCreate = () => {
    const classes = useStyles();
    const [items, setItems] = useState<Array<resObj>>() 
    const onMaking = useAppSelector(SelectOnMaking)
    

    useEffect(() => {
        if(onMaking !== undefined) {
            setItems(onMaking.onMaking)
        }
    },[onMaking])

    return (
        <>  
            <ShowListOfAnyLorB 
                    buttonArray={buttonProps} 
                    classes={classes} 
                    items={items as resObj[]}
                    >
                作成依頼のものはありません
            </ShowListOfAnyLorB>
        </>
    );
};

export default ApproveCreate;