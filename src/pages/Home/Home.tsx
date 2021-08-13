import React from "react";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { 
    getOnMaking,
    getOnBeingSuggested,
    getLorBKeepLorB,
    SelectOnMaking,
    SelectonBeingSuggested,
    SelectAllLorB,
    SelectAllLorBIhave,
    SelectCompleted,
    SelectkeepLorB         
} from "../../slices/lorbSlice";
import { SelectUser } from "../../slices/loginSlice";
import { Typography } from "@material-ui/core";
import { fetchUser } from "../../slices/loginSlice";


export const Home = () => {

    const dispatch = useAppDispatch();
    const onMaking = useAppSelector(SelectOnMaking)
    const onBeingSuggested = useAppSelector(SelectonBeingSuggested)
    const keepLorB = useAppSelector(SelectkeepLorB)
    const user = useAppSelector(SelectUser)

    useEffect(() => {
        dispatch(fetchUser())
        dispatch(getOnMaking())
        dispatch(getOnBeingSuggested())
        dispatch(getLorBKeepLorB())
    },[])

    useEffect(() => {
        console.log(keepLorB,'Home')
    },[keepLorB])

    useEffect(() => {
        console.log(user,'Home')
    },[user])


    return (
        <div>
            <div>
                    <Typography variant="body1">
                        {onMaking?.count}件の貸し借り作成依頼があります
                    </Typography>

                    <Typography variant="body1">
                        {onBeingSuggested?.count}件の貸し借り解消依頼があります
                    </Typography>
            </div>

            <div>
                <div>
                    <Typography variant="body1">
                        {keepLorB?.LCount}件の貸しがあります
                    </Typography>
                </div>

                <div>
                    <Typography variant="body1">
                        {keepLorB?.BCount}件の借りがあります
                    </Typography>
                </div>
            </div>
        </div>
        
    );
};


export default Home;