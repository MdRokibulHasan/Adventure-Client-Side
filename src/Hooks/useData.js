import { useEffect, useState } from 'react';

const useData = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch('https://frozen-fjord-73803.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setValues(data));
    }, []);
    return { values }
};

export default useData;