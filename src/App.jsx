import { useCallback, useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { getJobList } from './utils/helpers';
import { JobCardContainer } from './components/JobCardContainer/JobCardContainer';
import { JobFilter } from './components/JobFilter/JobFilter';
import { Loader } from './components/Loader/Loader';

function App() {
  const [jobList, setJobList] = useState([]);
  const [totalJobCount, setTotalJobCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [allDataFetched, setAllDataFetched] = useState(false);

  const getLatestJobs = useCallback(async (filters = {}) => {
    if (allDataFetched || loading || nextPageLoading) {
      return;
    }
    try {
      if (page === 1) {
        setLoading(true);
      } else {
        setNextPageLoading(true);
      }
      const response = await getJobList(filters, page);
      const result = await response.json();
      setJobList(prevArr => [...prevArr, ...result.jdList]);
      setPage(page + 1);
      if (result.jdList.length === 0) {
        setAllDataFetched(true);
      }
      if (page === 1) {
        setTotalJobCount(result.totalCount);
      }
    } catch (err) {
      console.error(err);
    } finally {
      if (page === 1) {
        setLoading(false);
      } else {
        setNextPageLoading(false);
      }
    }
  }, [page, loading, nextPageLoading, allDataFetched])

  useEffect(() => {
    (async function () {
      await getLatestJobs();
    })();
  }, []);

  useEffect(() => {
    async function handleScroll() {
      if ((window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) && !loading && !nextPageLoading) {
        await getLatestJobs();
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [getLatestJobs, loading, nextPageLoading]);

  if (loading) {
    return (
      <div className='max-width-container loader-container'>
        <Loader text={'Searching jobs...'} />
      </div>
    )
  }

  return (
    <>
      <div className='max-width-container'>
        <h2 className='secondary-text font-black'>Total Jobs ({totalJobCount})</h2>
        <JobFilter />
        <div style={{ 'margin': "24px 0" }}></div>
        <JobCardContainer jobList={jobList} totalJobCount={totalJobCount} />
        {nextPageLoading &&
          <>
            <div style={{ margin: '32px 0' }}>
              <Loader text={'Loading more jobs...'} />
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
