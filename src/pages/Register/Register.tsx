import { useState } from 'react';
import { useHistory } from 'react-router';
import {
    FormBuilder
} from '../../component/molecules/index';
import { useForm, FieldValues } from "react-hook-form";
import { POST_REGIST_URL } from '../../app/commonURL'; 
import axios from 'axios';

const Register = () => {

    interface PropsforChild {
        label:string,
        name:string,
        errorText?:string,
        pattern?:RegExp,
    }

    const propsArray:PropsforChild[] = [
        {
            label:'名前',
            name:'name',
            errorText:'名前の入力が不正です'
        },
        {
            label:'メールアドレス',
            name:'email',
            errorText:'メールアドレスの形式が不正です',
            pattern:/.+@.+/
        },
        {
            label:'パスワード',
            name:'password',
            errorText:'パスワードの形式が不正です',
            pattern:/^[a-zA-Z0-9!#$%&()*+,.:;=?@[\]^_{}-]+$/
        }
    ]

    const [errorState, setErrorState] = useState<string>('')
    const history = useHistory();
    

    const { formState:{errors} , control, getValues} = useForm<FieldValues>({
        mode:"all"
    })

    const handleFunc = () => {
        const {name, email, password} = getValues() 
        axios.defaults.withCredentials = true;
        axios.post(POST_REGIST_URL, {
            name,
            email,
            password
        }).then(() => history.push('/login'))
          .catch(() => setErrorState('登録に失敗しました'))
    }
    

    return (
        <>
            <p>{errorState}</p>
            <FormBuilder propsArray={propsArray} 
                         control={control} 
                         errors={errors} 
                         handleFunc={handleFunc}
                         textWillShow="登録"
            />
        </>
    );
};

export default Register;