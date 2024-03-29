import React from "react";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { 
    getOnMaking,
    getOnBeingSuggested,
    getLorBKeepLorB,
    SelectOnMaking,
    SelectonBeingSuggested,
    SelectkeepLorB         
} from "../../slices/lorbSlice";
import { SelectUser } from "../../slices/loginSlice";
import { fetchUser } from "../../slices/loginSlice";
import TypographyAtoms from "../../component/atoms/TypographyAtoms";
import { 
    Container, 
    makeStyles,
    Theme,
    Paper,
    createStyles
 } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ListMolecule } from "../../component/molecules";


const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        list:{
            padding:'10px 0 0 0'
        },
        box:{
            textAlign:"center",
            padding:"0",
            justifyContent:"center",
            fontWeight:"bold",
            fontSize:"18px"
        },
        paper:{
            color: theme.palette.text.secondary,
            padding: theme.spacing(2),
            margin: "10px 0 0 0"
        },
        title:{
            fontWeight:"bold",
            fontSize:"18px"
        }
    }))


export const Home = () => {
    const classes = useStyles();
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
    },[dispatch])

    useEffect(() => {
        console.log(onMaking 
            && (Array.isArray(onMaking) 
            && onMaking.count ),'作成中のやつ')
        console.log(Boolean(onMaking))
        console.log(Array.isArray(onMaking?.onMaking))
    },[onMaking])

    useEffect(() => {
        console.log(user,'Home')
    },[user])


    return (
        <div>
            {
                user._id &&
                <Container maxWidth="sm">
                        <div>     
                            <div className={classes.list}>
                                <Paper className={classes.paper}>
                                    {
                                        onMaking 
                                        && (onMaking 
                                        && onMaking.count ) ?
                                       <Link to='/approveCreate' style={{textDecoration: 'none'}}>
                                            <TypographyAtoms 
                                                    variant="body1" 
                                                    align="center" 
                                                    className={classes.title}>
                                                {`${onMaking?.count}件の貸し借り作成依頼があります`}
                                            </TypographyAtoms>
                                        </Link>:
                                        <TypographyAtoms 
                                                variant="body1" 
                                                align="center" 
                                                className={classes.title}>
                                        {'作成依頼はありません'}
                                    </TypographyAtoms>
                                    }

                                </Paper>
                            </div>  

                            <div className={classes.list}>
                                <Paper className={classes.paper}>
                                    {
                                        onBeingSuggested 
                                        && onBeingSuggested
                                        && Boolean(onBeingSuggested.count) ?
                                       <Link to='/approveNegotiate' style={{textDecoration: 'none'}}>
                                            <TypographyAtoms 
                                                    variant="body1" 
                                                    align="center" 
                                                    className={classes.title}>
                                                {`${onBeingSuggested?.count}件の貸し借り解消依頼があります`}
                                            </TypographyAtoms>
                                        </Link>:
                                        <TypographyAtoms 
                                                variant="body1" 
                                                align="center" 
                                                className={classes.title}>
                                        {'解消依頼はありません'}
                                    </TypographyAtoms>
                                    }
                                </Paper>
                            </div>  
                        </div>

                        
                            {
                                keepLorB && 
                                (
                                    <>          
                                        <Paper className={classes.paper}>
                                                <ListMolecule 
                                                            willShows={keepLorB?.LKeepOn} 
                                                            text={`${keepLorB?.LCount}件の貸しがあります`}
                                                            className={classes}
                                                            root={'Lend'}
                                                />
                                        </Paper>

                                        <Paper className={classes.paper}>
                                                <ListMolecule 
                                                        willShows={keepLorB?.BKeepOn} 
                                                        text={`${keepLorB?.BCount}件の借りがあります`}
                                                        className={classes}
                                                        root={'Borrow'}
                                                />
                                        </Paper>    
                                    </>
                                )
                            }
                </Container>
            }
        </div>
        
    );
};


export default Home;