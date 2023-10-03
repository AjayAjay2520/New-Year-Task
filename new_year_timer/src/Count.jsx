import { useEffect } from 'react';

function Count() {


  useEffect(() => {
    function updateTimer() {
    }

    const timerInterval = setInterval(updateTimer, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div>
     
    </div>
  );
}

export default Count;

