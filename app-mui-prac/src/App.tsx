import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery'

import { MyButtons } from './MyButtons';

export default function App() {
    // MUIのthemeを決定
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? "dark": "light"
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MyButtons />
        </ThemeProvider>
    )
}
