import { useEffect } from 'react';

const useIntro = () => {

const storage = window.sessionStorage;
const currTimestamp = Date.now();
const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');

const timeLimit = 3 * 60 * 60 * 1000;

const hasTimePassed = currTimestamp - timestamp > timeLimit;

useEffect(() => {
    hasTimePassed ? 
        storage.setItem('timestamp', currTimestamp.toString()) 
        : 
        storage.setItem('timestamp', timestamp.toString());
}, []);

return hasTimePassed;
};

export default useIntro;