import {
    FormBuilder
} from '../../component/molecules/index'
import { Props as PropsArray } from '../../component/atoms/TextFieldAtom'

const Login = () => {

    const propsArray:PropsArray[] = [
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

    const handleFunc = () => {
        console.log(3)
    }

    return (
        <>
            <FormBuilder propsArray={propsArray} handleFunc={handleFunc}/>
        </>
    );
};

export default Login;