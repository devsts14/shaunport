import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && history.push('/');
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [count]);

  return (
    <div>
      <p>Redirecting you in {count}</p>
    </div>
  );
};

export default LoadingToRedirect;
