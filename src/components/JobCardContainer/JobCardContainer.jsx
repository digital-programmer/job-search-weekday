import { JobCard } from "../JobCard/JobCard";
import PropTypes from 'prop-types';
import "./jobCardContainer.css";

export const JobCardContainer = ({ jobList }) => {
    return (
        <div className='job-card-container'>
            {jobList.map(item => <JobCard key={item.jdUid} jobDetail={item} />)}
        </div>
    )
}

JobCardContainer.propTypes = {
    jobList: PropTypes.array.isRequired,
    totalJobCount: PropTypes.number.isRequired
}