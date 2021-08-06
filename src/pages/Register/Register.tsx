import {
    FormBuilder
} from '../../component/molecules/index';

const Register = () => {

    interface Props {
        label:string,
        name:string,
        errorText?:string,
        pattern?:RegExp
    }

    const propsArray:Props[] = [
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


    

    // const handleFunc = () => {
    //     const {name,email,password} = getValues() 
    //     console.log(getValues())
    //     axios.post('http://localhost:5000/auth/register', {
    //         name,
    //         email,
    //         password
    //     })
    // }

    return (
        <>
            <FormBuilder propsArray={propsArray}  />
        </>
    );
};

export default Register;