import { Button } from 'react-bootstrap';

export default function ReactBootstrap() {
    return (
        <div>
            <h1>Hello React-Bootstrap</h1>
            <Button variant="primary">Primary</Button>
            <h1>
                <i className="bi bi-people" style={{
                    fontSize: 100,
                    color: 'red'
                }}> </i>
            </h1>
        </div>
    );
}