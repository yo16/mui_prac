import { Button as MuiButton } from "@mui/material";

export const MyButtons: React.FC = () => {
    return (
        <>
            <MuiButton
                variant="contained"
                color="primary"
            >primary</MuiButton>
            <MuiButton
                variant="contained"
                color="secondary"
            >secondary</MuiButton>
            <MuiButton
                variant="contained"
                color="info"
            >info</MuiButton>
            <MuiButton
                variant="contained"
                color="success"
            >success</MuiButton>
            <MuiButton
                variant="contained"
                color="error"
            >error</MuiButton>
            <MuiButton
                variant="contained"
                color="warning"
            >warning</MuiButton>
        </>
    );
}