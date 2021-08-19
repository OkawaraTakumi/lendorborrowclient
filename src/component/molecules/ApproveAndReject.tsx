import { FC } from "react";
import { useEffect } from "react"; 
// import { approveCreateAction } from '../../slices/lorbSlice';
import { BottonAtom } from '../atoms'
import { resObj } from "../../slices/lorbSlice";
import { useAppDispatch } from "../../app/hooks";
import { approveCreateAction } from "../../slices/lorbSlice";
import { getOnMaking } from '../../slices/lorbSlice'

interface Props {
    color?: "inherit" | "primary" | "secondary" | "default" ,
    onClick?: (...optionalParams:any[]) => void,
    textWillShow:string,
    disabled?:boolean
    className?:string
    item:resObj
    willDispatch:any
    index:number
    reloadFunc:any
}

const ApproveAndReject: FC<Props> = ({
    color,
    textWillShow,
    disabled,
    className,
    item,
    willDispatch,
    index,
    reloadFunc
}) => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        console.log(item)
    }, [item])

    const handleApproveOrDelete = () => {
        if(item.userFrom !== undefined
            && item.userTo !== undefined
            && item.LorBBox._id !== undefined){
            const payload :approveCreateAction<string> = {
                userTo:item.userTo,
                userFrom:item.userFrom,
                id:item.LorBBox._id
            }
            console.log(willDispatch)
            console.log(payload)
            dispatch(willDispatch(payload)).then(() => {
                dispatch(reloadFunc())
            })
        }
    }

    return (
        <BottonAtom 
        textWillShow={textWillShow}
        className={className}
        onClick={() => handleApproveOrDelete()} 
        color={color} />
    );
};

export default  ApproveAndReject;