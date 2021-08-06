import { FC } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import {TextField} from '@material-ui/core';

export interface Props {
    label:string,
    name:string,
    errorText?:string,
    pattern?:RegExp
}


const TextFieldAtom: FC<Props> = ({
    label,
    errorText,
    name,
    pattern
}) => {

    const { formState:{errors} , control} = useForm<FieldValues>({
        mode:"all"
    })


    return (
        <div>
            <Controller
                control={control}
                defaultValue=''
                name={name}
                rules={{
                    required:true,
                    pattern:pattern
                }}
                render={({ field }) => (
                    <TextField
                            {...field}
                            label={label}
                            error={Boolean(errors[name])}
                            helperText={(errors[name] !== undefined) && 
                                                        (
                                                            (errors[name].type === "required" ? '入力して下さい':'')||
                                                            (errors[name].type === "pattern" ? `${errorText}`:'')
                                                        )}
                  />            
                )}
                />
        </div>
        
    );
};

export default  TextFieldAtom;