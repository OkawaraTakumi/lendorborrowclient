import { FC, useEffect } from "react";
import { 
         List,
         ListItem,
         ListItemText
         } from '@material-ui/core';
import TypographyAtoms from "../atoms/TypographyAtoms";
import { Link } from 'react-router-dom' 

interface classType {
    [classChild:string]:any
}

interface Props {
    willShows:any
    count?:number
    text:string
    className?:classType,
    root: string
}

const ListModule: FC<Props> = ({
    willShows,
    text,
    className,
    root
}) => {

    useEffect(() => {
        console.log(willShows,'コンポーネント')        
    })

    return (
        <div className={className?.list}>
                <TypographyAtoms 
                        variant={"body1"} 
                        align="center"
                        className={className?.box}>
                    {text}
                </TypographyAtoms>
            

            <List>
                {
                    willShows.map((willShow:any, index:number) => {
                       return (
                            <ListItem key={index} className={className?.box}>
                                <Link to={`/${root}/${index}`} style={{textDecoration: 'none'}}>
                                    <ListItemText 
                                            primary={willShow.LorBBox.title}
                                            className={className?.box}    
                                    />
                                </Link>
                            </ListItem>
                        )
                    })
                }

            </List>
            
        </div>
    );
};

export default  ListModule;