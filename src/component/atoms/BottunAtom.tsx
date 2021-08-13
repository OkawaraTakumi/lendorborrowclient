import { FC } from "react";
import Button from '@material-ui/core/Button';

interface Props {
    color?: "inherit" | "primary" | "secondary" | "default" ,
    onClick?: () => void,
    textWillShow:string,
    disabled?:boolean
    className?:string
}

const ButtonAtom: FC<Props> = ({
    color,
    onClick,
    textWillShow,
    disabled,
    className
}) => {
    return (
        <Button onClick={onClick} 
                disabled={disabled} 
                color={color} 
                variant="contained"
                className={className}>
                    {textWillShow}
        </Button>
    );
};

export default  ButtonAtom;