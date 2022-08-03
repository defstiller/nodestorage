import {useState} from 'react';
import axios from 'axios';

const useAxios = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchData(params) {
        setLoading(true);
        try {
            const response = await axios.request(params);
            setResponse(response.data);
            } catch( error ) {
              setError({
                message: error.response.data.message,
                code: error.response.status
              });
            } finally {
              setLoading(false);
            }

    };
    return { response, error, loading, fetchData, setResponse, setError };
};

export default useAxios;