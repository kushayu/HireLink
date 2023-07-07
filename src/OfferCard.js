import "./OfferCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faChartSimple,
  faCalendarDays,
  faToolbox,
  faMessage,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function OfferCard() {
  const faFileIcon = <FontAwesomeIcon icon={faFile} />;
  const faChartSimpleIcon = <FontAwesomeIcon icon={faChartSimple} />;
  const faCalendarDaysIcon = <FontAwesomeIcon icon={faCalendarDays} />;
  const faToolboxIcon = <FontAwesomeIcon icon={faToolbox} />;
  const faMessageIcon = <FontAwesomeIcon icon={faMessage} />;
  const faMagnifyingGlassIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  return (
    <>
      <div className="offer-card">
        <div className="service_icon blue_icon">{faFileIcon}</div>
        <h4 className="index">01</h4>
        <div className="service_content">
          <h5>Resume/CV Builder</h5>
          <p>
            Offer a built-in tool for candidates to create or upload their
            resumes/CVs. Provide templates and formatting options to help
            candidates present their qualifications effectively. Allow
            candidates to update and edit their resumes/CVs within the app.
          </p>
          <a href="/" className="read">
            Read more
          </a>
        </div>
      </div>

      <div className="offer-card">
        <div className="service_icon ">{faChartSimpleIcon}</div>
        <h4 className="index">02</h4>
        <div className="service_content">
          <h5>Analytics and Reporting</h5>
          <p>
            Provide data analytics and reporting features to give hiring
            companies insights into their hiring processes. Offer metrics such
            as time-to-hire, applicant sources, candidate demographics, and
            other key performance indicators. Generate reports that help
            companies make data-driven decisions and improve their hiring
            strategies.
          </p>
          <a href="/" className="read">
            Read more
          </a>
        </div>
      </div>

      <div className="offer-card">
        <div className="service_icon green_icon">{faCalendarDaysIcon}</div>
        <h4 className="index">03</h4>
        <div className="service_content">
          <h5>Interview Scheduling</h5>
          <p>
            Facilitate the scheduling of interviews between hiring managers and
            candidates within the app. Provide a calendar interface where both
            parties can view availability and propose interview times. Send
            notifications and reminders to ensure interviews are conducted
            smoothly.
          </p>
          <a href="/" className="read">
            Read more
          </a>
        </div>
      </div>

      <div className="offer-card">
        <div className="service_icon blue_icon">{faToolboxIcon}</div>
        <h4 className="index">04</h4>
        <div className="service_content">
          <h5>Candidate Assessment and Evaluation</h5>
          <p>
            Offer tools for hiring managers to assess and evaluate candidates.
            Provide customizable evaluation forms or questionnaires to gather
            feedback on candidate interviews, skills assessments, and other
            stages of the hiring process. Allow for collaboration and feedback
            sharing among hiring team members.
          </p>
          <a href="/" className="read">
            Read more
          </a>
        </div>
      </div>

      <div className="offer-card">
        <div className="service_icon ">{faMessageIcon}</div>
        <h4 className="index">05</h4>
        <div className="service_content">
          <h5>Communication and Collaboration Tools</h5>
          <p>
            Provide communication features like instant messaging or chat
            functionality within the app, facilitating seamless communication
            between hiring managers, HR professionals, and candidates. Allow
            users to schedule interviews, share candidate profiles, and
            collaborate on candidate evaluations.
          </p>
          <a href="/" className="read">
            Read more
          </a>
        </div>
      </div>

      <div className="offer-card">
        <div className="service_icon green_icon">{faMagnifyingGlassIcon}</div>
        <h4 className="index">06</h4>
        <div className="service_content">
          <h5>Candidate Search and Matching</h5>
          <p>
            Enable hiring managers to search and browse through the app's
            database of candidates based on specific criteria such as skills,
            experience, location, and qualifications. Implement advanced
            algorithms that provide relevant matches to help hiring managers
            find the most suitable candidates for their job openings.
          </p>
          <a href="/" className="read">
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

export default OfferCard;
