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
            justifyContent:"center"
        },
        paper:{
            color: theme.palette.text.secondary,
            padding: theme.spacing(2),
            margin: "10px 0 0 0"
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
        console.log(onMaking,'Home')
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
                                        && (Array.isArray(onMaking) 
                                        && Boolean(onMaking.length)) ?
                                       <Link to='/approveCreate' style={{textDecoration: 'none'}}>
                                            <TypographyAtoms variant="body1" align="center" >
                                                {`${onMaking?.count}件の貸し借り作成依頼があります`}
                                            </TypographyAtoms>
                                        </Link>:
                                        <TypographyAtoms variant="body1" align="center" >
                                        {'作成依頼はありません'}
                                    </TypographyAtoms>
                                    }

                                </Paper>
                            </div>  

                            <div className={classes.list}>
                                <Paper className={classes.paper}>
                                    {
                                        onBeingSuggested 
                                        && (Array.isArray(onBeingSuggested) 
                                        && Boolean(onBeingSuggested.length)) ?
                                       <Link to='/approveCreate' style={{textDecoration: 'none'}}>
                                            <TypographyAtoms variant="body1" align="center" >
                                                {`${onBeingSuggested?.count}件の貸し借り解消依頼があります`}
                                            </TypographyAtoms>
                                        </Link>:
                                        <TypographyAtoms variant="body1" align="center" >
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