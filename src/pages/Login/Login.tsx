import {
    FormBuilder
} from '../../component/molecules/index'
import { Props as PropsArray } from '../../component/atoms/TextFieldAtom'

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


    return (
        <>
            <FormBuilder propsArray={propsArray} />
        </>
    );
};

export default Login;