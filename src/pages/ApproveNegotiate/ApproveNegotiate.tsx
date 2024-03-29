import React from "react";
import { useEffect, useState } from "react";
import { 
    makeStyles      
} from "@material-ui/core";
import {  } from "../../slices/lorbSlice";
import { useAppSelector } from "../../app/hooks";
import { 
    rejectNegotiate, 
    deleteLorBtable ,
    SelectonBeingSuggested,
    getOnBeingSuggested
} from "../../slices/lorbSlice";
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
        willDispatch:rejectNegotiate,
        id:1
    },
    {
        textWillShow:"承認",
        color:"primary",
        willDispatch:deleteLorBtable,
        id:2
    },
]

const ApproveNegotiate = () => {
    const classes = useStyles();
    const [items, setItems] = useState<Array<resObj>>() 
    const onBeingSuggested = useAppSelector(SelectonBeingSuggested)
    

    useEffect(() => {
        if(onBeingSuggested !== undefined) {
            setItems(onBeingSuggested.onBeingSuggested)
        }
    },[onBeingSuggested])

    return (
        <>  
            <ShowListOfAnyLorB 
                    buttonArray={buttonProps} 
                    classes={classes} 
                    items={items as resObj[]}
                    reloadFunc={getOnBeingSuggested}
                    >
                解消依頼のものはありません
            </ShowListOfAnyLorB>
        </>
    );
};

export default ApproveNegotiate;