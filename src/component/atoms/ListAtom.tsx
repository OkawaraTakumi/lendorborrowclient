import { 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText
} from "@material-ui/core";
import { 
    AccountCircle
} from "@material-ui/icons";
import { Link } from "react-router-dom";

interface ListProps <T>{
    ListChild:T[]
}

type ListComponent = <T>(
    props:ListProps<T>
) => React.ReactElement<ListProps<T>>

const ListAtom :ListComponent= ({
    ListChild
}) => {
    return (
        <List>
            {
                ListChild.map((item, index) => (
                    <Link to="/mypage" key={index}>
                        <ListItem>
                            <ListItemIcon>
                                { index === 0 && <AccountCircle/> }
                            </ListItemIcon>
                            <ListItemText primary={item}/>
                        </ListItem>
                    </Link>
                ))
            }
        </List>
    )
}

export  default ListAtom