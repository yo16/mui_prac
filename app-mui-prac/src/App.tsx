import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { MyButtons } from './MyButtons';

export default function App() {
    // MUIのthemeを決定
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MyButtons />
        </ThemeProvider>
    )
}
