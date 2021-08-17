import { FC } from "react";
import { 
    Grid, GridSpacing
 } from "@material-ui/core";

interface Props {
    children:any
    spacing:GridSpacing
}

export const GridComponent :FC<Props> = ({
    children,
    spacing
}) => {


    return (
        <Grid container spacing={spacing}>
            {children}
        </Grid>
        
    );
};


export default GridComponent;