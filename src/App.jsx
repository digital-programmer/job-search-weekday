import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { getJobList } from './utils/helpers';

function App() {
  const [jobList, setJobList] = useState([]);
  const [totalJobCount, setTotalJobCount] = useState(0);

  useEffect(() => {
    (async function () {
      try {
        const response = await getJobList();
        const result = await response.json();
        console.log(result);
        setJobList(result.jdList);
        setTotalJobCount(result.totalCount);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [])


  return (
    <>
      <div>{totalJobCount}</div>
    </>
  )
}

export default App
