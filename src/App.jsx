import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { getJobList } from './utils/helpers';
import { JobCardContainer } from './components/JobCardContainer/JobCardContainer';
import { JobFilter } from './components/JobFilter/JobFilter';
import { CircularProgress } from '@mui/material';

function App() {
  const [jobList, setJobList] = useState([]);
  const [totalJobCount, setTotalJobCount] = useState(0);
  const [loading, setLoading] = useState(false);

  async function getLatestJobs() {
    try {
      const response = await getJobList();
      const result = await response.json();
      setJobList(result.jdList);
      setTotalJobCount(result.totalCount);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    (async function () {
      await getLatestJobs();
    })();
  }, []);

  if (loading) {
    return (<>
      <div className='max-width-container loader-container'>
        <div className='loader'>
          <CircularProgress />
          <div className='secondary-text text-l font-light'>Searching jobs...</div>
        </div>
      </div>
    </>)
  }


  return (
    <>
      <div className='max-width-container'>
        <JobFilter />
        <JobCardContainer jobList={jobList} totalJobCount={totalJobCount} />
      </div>
    </>
  )
}

export default App
