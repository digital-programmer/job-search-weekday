import './jobCard.css';
import PropTypes from 'prop-types';

export const JobCard = ({ jobDetail }) => {
    const { logoUrl, companyName, jobRole, location, salaryCurrencyCode, minJdSalary, maxJdSalary, jobDetailsFromCompany, minExp, maxExp } = jobDetail;
    const randomNum = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
    return <>
        <div className='job-card'>
            <div className="posting-date-time font-regular text-xs">
                <span className="material-symbols-outlined text-sm font-medium">
                    trophy
                </span>
                Posted {randomNum} days ago
            </div>
            <div className="company-details">
                <div className="company-img" style={{ backgroundImage: `url(${logoUrl})` }}>
                </div>
                <div className='role-details primary-text'>
                    <div className='text-md font-medium'>{companyName}</div>
                    <div className='text-md font-light'>{jobRole}</div>
                    <div className='text-sm location-details'>
                        <span className="material-symbols-outlined text-sm">
                            location_on
                        </span>
                        {location}
                    </div>
                </div>
            </div>
            <div className="estimated-salary text-md font-light">
                <span className='primary-text'>Estimated Salary : &nbsp;</span>
                <span className='font-medium secondary-text'>{salaryCurrencyCode} {minJdSalary || 0}K - {maxJdSalary}K</span>
            </div>
            <div className='about-company-container'>
                <div className='about-company-heading text-l primary-text'>About Company:</div>
                <div className="about-company text-md font-light secondary-text">
                    {jobDetailsFromCompany}
                </div>
                <span className='show-more-btn text-md font-regular'>View job</span>
            </div>
            <div className="exp-required text-md">
                <div className='secondary-text font-medium'>Experience required</div>
                <div className='font-light primary-text'>{minExp || 0} - {maxExp || 0} years</div>
            </div>
            <div className="action-cta-wrapper">
                <button className="easy-apply-btn action-btn">
                    <span className="material-symbols-outlined easy-apply-icon text-md">
                        electric_bolt
                    </span>
                    <span className='text-l font-medium primary-text'>Easy Apply</span>
                </button>
                <button className="unlock-referral-btn action-btn">
                    <span className="material-symbols-outlined">
                        account_circle
                    </span>
                    <span className='text-l font-medium'>Unlock Referral Asks</span>
                </button>
            </div>
        </div>
    </>
}


JobCard.propTypes = {
    jobDetail: PropTypes.any.isRequired
}