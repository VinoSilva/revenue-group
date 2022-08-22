import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4559F7"
        },
        secondary: {
            main: "#BBBBBB",
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
});

export default theme;
