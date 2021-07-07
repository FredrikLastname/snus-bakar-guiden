import React, {useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const PrepMaterialTobak =(props)=>{
    const classes = useStyles();
    const [snus, setSnus] = useState('');
    
    const handleChange = (event) => {
        props.snussatsVald(event.target.value)
        setSnus(event.target.value);
    };


    return(
        <>
        <div className="textblock_centrerad underrubrik">
            <p>Vilken snussats ska vi använda? </p>
        </div>
        <FormControl className={classes.formControl}>
            <InputLabel id="snusSats-select-label">Snussats:</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={snus}
                onChange={handleChange}
                >
                <MenuItem value={"Original"}>Prillan Original/Grov</MenuItem>
                <MenuItem value={"Sverige"}>Prillan Sverige/Skåne/Norrland</MenuItem>
                <MenuItem value={"Stark"}>Prillan Stark</MenuItem>
                <MenuItem value={"Grön"}>Coobra Grön/Blå/Orange</MenuItem>
                <MenuItem value={"Röd"}>Coobra Röd</MenuItem>
                <MenuItem value={"Westerose"}>Westerose</MenuItem>
                <MenuItem value={"Ekens"}>Ekens Råtobakspulver</MenuItem>
                <MenuItem value={"Jemtsnus"}>Jemtsnus</MenuItem>
            </Select>
            <FormHelperText>Välj snussats för att kunna gå vidare</FormHelperText>
        </FormControl>
        </>
    )
}

export default PrepMaterialTobak