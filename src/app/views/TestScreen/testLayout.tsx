import { Link } from 'react-router-dom';
import './testStyle.scss'

interface Props {
    data: any
    isFetching: boolean
}

const TestLayout = ({data, isFetching}: Props) => {
    return (
        <div style={{height: '100vh'}} className="centralizar">
            <div>Test</div>
            { !isFetching ? (
                <>
                    <div>{data.name}</div>
                    <Link to="/">home</Link>
                </>
            ): (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default TestLayout;