import { Button, Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import RecipeReviewCarf from '../components/RecipeReviewCard';

export default function MaterialUI() {

    const handleBtn = () => {
        console.log("Hi");
    }

    return (
        <div>
            <h1>Hello Material-UI</h1>
            <Button variant="contained" onClick={handleBtn}>Contained</Button>
            <h1>
                <DeleteIcon style={{
                    fontSize: 100,
                    color: 'red'
                }} />
                <Switch {...label} />
                <ResponsiveAppBar />
                <RecipeReviewCarf />
            </h1>
        </div>
    );
}