import { BottonAtom } from "../atoms";
import { AppBar,
         makeStyles,
         Toolbar,
         Typography
         } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { SelectUser, logout } from '../../slices/loginSlice';
         

const useStyles = makeStyles((thema) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        backgroundColor:"orange"
    },
    button: {
        marginLeft: thema.spacing(2)
    },
    logo:{
        fontSize: "18px",
        flexGrow:1
    },
}))

const Header = () => {
    const classes = useStyles();
    const user = useAppSelector(SelectUser);
    const dispatch = useAppDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logout())
        history.push('/')
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                        <Link to="/">
                            貸し借りDB
                        </Link>
                    </Typography> 

                    <div>
                        {user && user.name && <span>ようこそ{user.name}さん</span>}
                    </div>
                    
                {
                    user.name &&
                    <BottonAtom 
                            onClick={() => history.push('/createLorB')} 
                            color={"primary"} 
                            textWillShow={"貸し借り作成"}
                            className={classes.button}
                    />
                }

                {
                    user.name &&
                    <BottonAtom 
                            onClick={() => history.push('/completed')} 
                            color={"primary"} 
                            textWillShow={"貸し借り履歴"}
                            className={classes.button}
                    />
                }

                {
                    user.name ? 
                    <BottonAtom 
                            onClick={() => handleLogout()} 
                            color={"primary"} 
                            textWillShow={"ログアウト"}
                            className={classes.button}
                    /> :
                    <BottonAtom 
                            onClick={() => history.push('/login')} 
                            color={"primary"} 
                            textWillShow={"ログイン"}
                            className={classes.button}
                    />
                                        
                }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;