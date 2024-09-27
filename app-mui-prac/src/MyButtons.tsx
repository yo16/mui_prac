import { Stack as MuiStack, Button as MuiButton } from "@mui/material";

export const MyButtons: React.FC = () => {
    return (
        <>
            <MuiStack direction="row" spacing={2} sx={{m:2, p:2}} >
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
            </MuiStack>
        </>
    );
}