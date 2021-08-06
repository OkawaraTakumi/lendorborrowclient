import { FC } from "react";
import { useForm, FieldValues } from "react-hook-form";
import {
    BottonAtom,
    TextFieldAtom
} from '../../component/atoms/index'
import { Props as propsArray } from '../../component/atoms/TextFieldAtom'

interface Props {
    propsArray:propsArray[],
    handleFunc?:(...handleArgs:any[]) => void
}


const FormBuilder:FC<Props> = ({
    propsArray,
    handleFunc
}) => {

    const { handleSubmit } = useForm<FieldValues>({
        mode:"all"
    })


    return (
        <>
            <form onSubmit={handleSubmit(handleFunc!)}>
                {
                    propsArray.map((props, index) => (
                        <TextFieldAtom {...props} key={index}></TextFieldAtom>
                    ))
                }
                    <BottonAtom onClick={handleFunc} color={"primary"} textWillShow={"登録"} />   
            </form>
        </>
    );
};

export default FormBuilder;