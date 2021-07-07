import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Footer from "./Footer"
import Header from "./Header"
import SnusBakarGuiden from "./SnusBakarGuiden";


const App = () =>{

    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });

    return(
        <ThemeProvider theme={darkTheme}>
            <div className="wrapper">
            <Header />
            <div className="wrapper__content">
                <div className="content">
                    <SnusBakarGuiden />
                </div>
            </div>
            <Footer />
            </div>
        </ThemeProvider>
    )
}

export default App