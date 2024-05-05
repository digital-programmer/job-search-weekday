import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { getJobList } from './utils/helpers';
import { JobCard } from './components/JobCard/JobCard';

function App() {
  const [jobList, setJobList] = useState([]);
  const [totalJobCount, setTotalJobCount] = useState(0);

  useEffect(() => {
    (async function () {
      try {
        const response = await getJobList();
        const result = await response.json();
        setJobList(result.jdList);
        setTotalJobCount(result.totalCount);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [])


  return (
    <>
      <div className='job-card-container max-width-container'>
        {jobList.map(item => <JobCard key={item.jdUid} jobDetail={item} />)}
      </div>
    </>
  )
}

export default App
