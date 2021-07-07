import React, {useState} from "react"

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ingredienser from "./ingredienser"



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
    },
}));

// const snusIngredienser =["Natriumklorid (Hushållssalt)", "Glycerol", "Natriumkarbonat (Hushållssoda)"]


const PrepIngredienser =(props)=>{
  
  const snus = props.snus
  const snusIngredienser =[{namn: "Natriumklorid (Hushållssalt)", gram: ingredienser[snus].natriumklorid.gram, ml: ingredienser[snus].natriumklorid.ml},
  {namn: "Natriumkarbonat (Hushållssoda)", gram: ingredienser[snus].natriumkarbonat.gram, ml: ingredienser[snus].natriumkarbonat.ml},
  {namn: "Glycerol", gram: ingredienser[snus].glycerol.gram, ml: ingredienser[snus].glycerol.ml}
  ]
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

    // const preparingIngredients=(props)=>{
    //     const snus = props.snus

    //     const saltGram = ingredienser.snus.natriumklorid.gram
    //     const saltMl = ingredienser.snus.natriumklorid.ml

    //     const sodaGram = ingredienser.snus.natriumkarbonat.gram
    //     const sodaMl = ingredienser.snus.natriumkarbonat.ml

    //     const glycGram = ingredienser.snus.glycerol.gram
    //     const glycMl = ingredienser.snus.glycerol.ml

    // }

    return(
    <div>
        <div className="textblock_centrerad underrubrik">
          Nödvändiga ingredienser:
        </div>
        <div className="textblock_centrerad">
          <br/><em>Mängden av varje ingrediens är baserat på det tidigare valet av snus.</em>
        </div>

        {/* {console.log(ingredienser.Original.glycerol.ml)} */}
        <div className="textblock_centrerad">
        <List className={classes.root}>
        {snusIngredienser.map((value, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          
          <ListItem 
            key={index} 
            role={undefined} 
            
            dense
            button
            onClick={handleToggle(index)}
          >

            <ListItemIcon>
              <Checkbox
                edge="start"
                color="primary"
                checked={checked.indexOf(index) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>

            <ListItemText id={labelId} primary={`${value.gram}g ${value.namn}`} />
          </ListItem>
        );
      })}
    </List>

    </div>
        
    <div className="textblock">
          <em>Natriumklorid är vanligt hushållssalt och det kan köpas där man vanligen köper salt. Glycerol och natriumkarbonat kan hittas i välsorterade hobbyaffärer. <span className="attention">Använd INTE kaustiksoda!</span></em>
    </div>
        
    </div>
    )
}

export default PrepIngredienser