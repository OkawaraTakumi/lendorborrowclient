import { FC } from "react";
import Button from '@material-ui/core/Button';

interface Props {
    color?: "inherit" | "primary" | "secondary" | "default" ,
    onClick?: () => void,
    textWillShow:String,
    disabled?:boolean
}

const ButtonAtom: FC<Props> = ({
    color,
    onClick,
    textWillShow,
    disabled,
}) => {
    return (
        <Button onClick={onClick} disabled={disabled} color={color} >{textWillShow}</Button>
    );
};

export default  ButtonAtom;