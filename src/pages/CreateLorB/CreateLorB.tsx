import { 
    Container,
    Box,
    makeStyles 
} from "@material-ui/core";
import { 
        BottonAtom,
        TextFieldAtom
         } from "../../component/atoms";
import { useForm, FieldValues } from "react-hook-form"; 
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { SelectUser } from "../../slices/loginSlice";
import { createLorB, SelectError, setError } from "../../slices/lorbSlice";


const useStyles = makeStyles({
    title:{
        margin:'20px 0 0 0'
    }
})



const CreateLorB = () => {
    const user = useAppSelector(SelectUser);
    const error = useAppSelector(SelectError)
    const dispatch = useAppDispatch();
    const classes = useStyles();

    const { formState:{errors} , control, getValues, handleSubmit} = useForm<FieldValues>({
        mode:"all"
    })
    const onSubmit = (data:any, e:any) => {
        const { title, select, about, userFrom, userTo } = getValues() 
        let userForApprove :string= '';
        if(userFrom === userTo){
            dispatch(setError({success:'貸し人と借り人は一致することはありません'}))
            console.log(5)
        }else {

            if(userFrom === user._id) {
                userForApprove = userFrom
            } else if (userTo === userForApprove) {
                userForApprove = userTo
            }
            dispatch(createLorB({
                title,
                detailClass:select,
                aboutDetail:about,
                userTo,
                userFrom,
                userForApprove
            }))
        }
    }
    const onError = (errors:any,e:any) => {
        console.log(errors)
        console.log(e)
        dispatch(setError({success:'不正な入力が存在します'}))
    } 



    return (
        <>
            <Container maxWidth="sm">
                    <form onSubmit={handleSubmit(onSubmit, onError)}>

                    <Box textAlign="center">
                        <div className={classes.title}>
                                {error?.success}
                                <TextFieldAtom 
                                        control={control} 
                                        errors={errors} 
                                        name='title'　
                                        label='タイトル'
                                        fullwidth={true}/>
                                
                        </div>

                        <div>   
                                <TextFieldAtom 
                                        control={control} 
                                        errors={errors} 
                                        name='select'
                                        label='種類'
                                        fullwidth={true}/>
                                <TextFieldAtom 
                                        control={control} 
                                        errors={errors} 
                                        name='about'
                                        label='内容'
                                        fullwidth={true}/>
                        </div>


                        <div>
                            
                                <TextFieldAtom 
                                        control={control} 
                                        errors={errors} 
                                        name='userFrom'
                                        label='貸し人'
                                        fullwidth={true}/>
                                
                        </div>

                        <div>
                                
                                <TextFieldAtom 
                                        control={control} 
                                        errors={errors} 
                                        name='userTo'
                                        label='借り人'
                                        fullwidth={true}/>
                                
                        </div>

                        <Box display="flex" justifyContent="flex-end">
                            <BottonAtom 
                                    textWillShow='作成' 
                                    color={"primary"} 
                                    type="submit"/>
                        </Box>
                    </Box>
                    </form>
                    

            </Container>
        </>
    );
};

export default CreateLorB;