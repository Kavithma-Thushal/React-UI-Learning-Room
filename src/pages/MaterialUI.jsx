import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Style } from '@mui/icons-material';

export default function MaterialUI() {
    return (
        <div>
            <h1>Hello Material-UI</h1>
            <Button variant="contained">Contained</Button>
            <h1>
                <DeleteIcon style={{
                    fontSize: 100,
                    color: 'red'
                }} />
            </h1>
        </div>
    );
}