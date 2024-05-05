import './jobCard.css';
import PropTypes from 'prop-types';

export const JobCard = ({ jobDetail }) => {
    const { logoUrl, companyName, jobRole, location, salaryCurrencyCode, minJdSalary, maxJdSalary, jobDetailsFromCompany, minExp, maxExp } = jobDetail;
    return <>
        <div className='job-card'>
            <div className="posting-date-time font-regular text-xs">
                <span className="material-symbols-outlined text-sm font-medium">
                    trophy
                </span>
                Posted 10 days ago
            </div>
            <div className="company-details">
                <div className="company-img" style={{ backgroundImage: `url(${logoUrl})` }}>
                </div>
                <div className='role-details'>
                    <div className='text-md'>{companyName}</div>
                    <div className='text-md'>{jobRole}</div>
                    <div className='text-sm'>{location}</div>
                </div>
            </div>
            <div className="estimated-salary text-md">
                Estimated Salary : {salaryCurrencyCode} {minJdSalary || 0}K - {maxJdSalary}K
            </div>
            <div className='about-company-container'>
                <div className='about-company-heading text-l'>About Company:</div>
                <div className="about-company text-md">
                    {jobDetailsFromCompany}
                </div>
                <span className='show-more-btn text-md'>View job</span>
            </div>
            <div className="exp-required text-md">
                <div>Experience required</div>
                <div>{minExp || 0} - {maxExp || 0} years</div>
            </div>
            <div className="action-cta-wrapper">
                <button className="easy-apply-btn action-btn">
                    <span className="material-symbols-outlined easy-apply-icon">
                        electric_bolt
                    </span>
                    <span className='text-md'>Easy Apply</span>
                </button>
                <button className="unlock-referral-btn action-btn">
                    <span className="material-symbols-outlined">
                        account_circle
                    </span>
                    <span className='text-md'>Unlock Referral Asks</span>
                </button>
            </div>
        </div>
    </>
}


JobCard.propTypes = {
    jobDetail: PropTypes.any.isRequired
}