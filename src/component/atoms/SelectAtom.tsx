import { FC } from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import {Select, MenuItem} from '@material-ui/core';
import { User } from "../../slices/userSlice";

export interface Props {
    label:string,
    name:string,
    pattern?:RegExp,
    control:Control,
    errors:FieldErrors,
    fullwidth?:boolean
    className?:{
        [propsClass:string]:string
    }
    selectItems:User[]
}


const SelectAtom: FC<Props> = ({
    label,
    name,
    pattern,
    control,
    errors,
    fullwidth,
    className,
    selectItems
}) => {


    return (
        <div className={className?.TextFieldAtom}>
            <Controller
                control={control}
                name={name}
                defaultValue=''
                render={({ field }) => (
                    <Select
                            {...field}
                    >
                        {
                            selectItems.map((item) => {
                                return (
                                    <MenuItem  value={item._id} key={item._id}>{item.name}</MenuItem>
                                )
                            })
                        }
                    </Select>           
                  )}
                  />
        </div>
    );
};

export default  SelectAtom;