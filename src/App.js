import { useEffect, useState } from 'react'

const Clock = ({ children }) => {
    const [current, setCurrent] = useState(Date.now());

    useEffect(() => {
        const id = setInterval(() => setCurrent(Date.now()), 1000)
        return () => clearInterval(id)
    }, [])
    return children(current);
};
export default Clock;

