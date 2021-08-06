import { FC } from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import {TextField} from '@material-ui/core';

export interface Props {
    label:string,
    name:string,
    errorText?:string,
    pattern?:RegExp,
    control:Control,
    errors:FieldErrors
}


const TextFieldAtom: FC<Props> = ({
    label,
    errorText,
    name,
    pattern,
    control,
    errors
}) => {

    // const { formState:{errors} , control, getValues} = useForm<FieldValues>({
    //     mode:"all"
    // })


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