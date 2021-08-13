import { FC } from "react";
import { Control, FieldErrors } from "react-hook-form";
import {
    BottonAtom,
    TextFieldAtom
} from '../../component/atoms/index'

// import { Props as propsArray } from '../../component/atoms/TextFieldAtom'

interface propsArray {
    label:string,
    name:string,
    errorText?:string,
    pattern?:RegExp,
}


interface Props {
    propsArray:propsArray[],
    control:Control,
    errors:FieldErrors,
    handleFunc:(...handleArgs:any[]) => void,
    textWillShow:string
}


const FormBuilder:FC<Props> = ({
    propsArray,
    control,
    errors,
    handleFunc,
    textWillShow
}) => {

    

    return (
        <>
            <form>
                {
                    propsArray.map((props, index) => (
                        <TextFieldAtom {...props} control={control} errors={errors} key={index}></TextFieldAtom>
                    ))
                }
                        <BottonAtom onClick={() => handleFunc()} color={"primary"} textWillShow={textWillShow} />      
            </form>
        </>
    );
};

export default FormBuilder;