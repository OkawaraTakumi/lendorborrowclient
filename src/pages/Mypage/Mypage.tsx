import { buttonArray } from "../../component/templates/ShowListOfAnyLorB";
import { MyPageTemplate } from "../../component/templates";

const buttonProps :buttonArray[]=[ 
    {
        textWillShow:"フォロー",
        color:"primary",
        id:1,
        propsPath:'showfollow'
    },
    {
        textWillShow:"フォロワー",
        color:"primary",
        id:2,
        propsPath:'showfollower'
    }
]

export const Mypage = () => {
    

    return (
        <>
            <MyPageTemplate buttonArrays={buttonProps}/>
        </>
    );
};

export default Mypage;