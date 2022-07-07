import { useQuery } from 'react-query';
import userService from '../../shared/services/userService';
import sessionStorage from '../../shared/utils/sessionStorage';
import TestLayout from './testLayout';

const TestScript = () => {
    const { data, isFetching } = useQuery('usuario', () => {
        const user = sessionStorage.getToken('usuario')
        let response = null
        if (user != undefined) {
            response = userService.pesquisarPorId(parseInt(user)).then(
                it => {
                    return it
                }
            )    
        }
        return response
    })

    return (
        <div>
            <TestLayout data={data} isFetching={isFetching} />
        </div>
    );
};

export default TestScript;