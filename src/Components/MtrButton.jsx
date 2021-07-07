import React from "react"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

const MtrButton = (props) =>{
    
    const classes = useStyles();

    const clickHandler =(e)=>{
        e.preventDefault();
        props.btnClick()
    }

    return(
        <div className={classes.root}>
            <Button
            disabled = {props.disabled} 
            onClick={clickHandler}
            variant="outlined"
            >
            {props.btnText}
            </Button>
        </div>
    )
}

export default MtrButton