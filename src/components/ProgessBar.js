import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgessBar = ({ file, setFile }) => {
    const { url, progess } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progess + '%' }}
        ></motion.div>
    )
}

export default ProgessBar;