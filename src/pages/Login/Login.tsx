import {
    FormBuilder
} from '../../component/molecules/index';
import { useState } from 'react';
import { useForm, FieldValues } from "react-hook-form";
import { useHistory, Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { loginAndFetchUser } from '../../slices/loginSlice';

const Login = () => {
    interface Props {
        label:string,
        name:string,
        errorText?:string,
        pattern?:RegExp
    }
    const propsArray:Props[] = [
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


    const dispatch = useAppDispatch();
    const history = useHistory();
    const [errorState, setErrorState] = useState<string>('')

    const { formState:{errors} , control, getValues} = useForm<FieldValues>({
        mode:"all"
    })

    const handleFunc = () => {
        const { email, password} = getValues() 
        dispatch(loginAndFetchUser({email, password}))
        .then(() => {history.push('/')})
        .catch(() => setErrorState('ログインに失敗しました'))
    }


    return (
        <>
            <p>{errorState}</p>
            <FormBuilder propsArray={propsArray} 
                         control={control} 
                         errors={errors} 
                         handleFunc={handleFunc} 
                         textWillShow="ログイン"
            />
            <Link 
                to='/register' 
                style={{textDecoration: 'none'}}
            >
                新規登録はこちら
            </Link>
        </>
    );
};

export default Login;