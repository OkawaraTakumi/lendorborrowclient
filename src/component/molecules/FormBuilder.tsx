import { FC } from "react";
import { useForm, FieldValues } from "react-hook-form";
import {
    BottonAtom,
    TextFieldAtom
} from '../../component/atoms/index'
import axios from 'axios';
// import { Props as propsArray } from '../../component/atoms/TextFieldAtom'

interface propsArray {
    label:string,
    name:string,
    errorText?:string,
    pattern?:RegExp
}

interface Props {
    propsArray:propsArray[],
    // handleFunc?:(...handleArgs:any[]) => void
}


const FormBuilder:FC<Props> = ({
    propsArray,
    // handleFunc
}) => {

    const { formState:{errors} , control, getValues} = useForm<FieldValues>({
        mode:"all"
    })

    const handleFunc = () => {
        const {name,email,password} = getValues() 
        console.log(getValues())
        axios.post('http://localhost:5000/auth/register', {
            name,
            email,
            password
        })
    }

    return (
        <>
            <form>
                {
                    propsArray.map((props, index) => (
                        <TextFieldAtom {...props} control={control} errors={errors} key={index}></TextFieldAtom>
                    ))
                }
                    <BottonAtom onClick={() => handleFunc()} color={"primary"} textWillShow={"登録"} />   
            </form>
        </>
    );
};

export default FormBuilder;