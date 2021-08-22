import { BottonAtom } from "../atoms";
import { AppBar,
         makeStyles,
         Toolbar,
         Typography,
         CssBaseline
         } from "@material-ui/core";
import { IconButton } from "@material-ui/core";         
import { Menu } from "@material-ui/icons";
import { useHistory, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { SelectUser, logout } from '../../slices/loginSlice';
import { useState } from "react";
import SideNav from "../organisms/SideNav";


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
    const [open, setOpen] = useState<boolean>(false)

    const handleLogout = () => {
        dispatch(logout())
        history.push('/')
    }

    const handleFlag = () => {
        setOpen(prevState => {
            return !prevState
        })
    }
    

                    
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <IconButton 
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleFlag}
                            >
                            <Menu />
                    </IconButton>
                    <Typography variant="h4" className={classes.logo}>
                        <Link to="/" style={{
                                                textDecoration: 'none',
                                                fontWeight:'bold',
                                                marginLeft:'2rem'
                                             }}>
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
            <SideNav handleFrag={handleFlag} open={open}/>
        </div>
    )
}

export default Header;