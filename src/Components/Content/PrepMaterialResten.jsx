import React, {useState} from "react"

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
    },
}));

const braAttHa =["Omslutande skyddsglasögon", "Andningsmask", "Elvisp", "Stektermometer", "Balja/Hink"]

const PrepMaterialResten =()=>{
    
    const classes = useStyles();
    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };



    return(
    <div>
        <div className="textblock_centrerad underrubrik">
          Bra att ha till hands:
        </div>
        <div className="textblock_centrerad">
        <List className={classes.root}>
        {braAttHa.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          
          <ListItem 
            key={value} 
            role={undefined} 
            dense
            button
            onClick={handleToggle(value)}
          >

            <ListItemIcon>
              <Checkbox
                edge="start"
                color="primary"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>

            <ListItemText id={labelId} primary={`${value}`} />
          </ListItem>
        );
        })}
        </List>
        </div>  
        
    </div>
    )
}

export default PrepMaterialResten

// const CheckboxElement =(props)=>{
//     return(
//         <FormControlLabel
//         control={<Checkbox 
//         //checked={state.checkedA} 
//         //onChange={handleChange} 
//         color="primary"
//         name="checkedA" />}
//         label={props.item}
//       />
//     )
// }