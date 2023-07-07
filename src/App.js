import "./Navbar.js";
import "./App.css";
import Navbar from "./Navbar.js";
import JobCard from "./JobCard.js";
import CandidateCard from "./CandidateCard.js";
import OfferCard from "./OfferCard.js";

function App() {
  return (
    <>
      <div className="body">
        <Navbar />
        <section class="header">
          <div class="content">
            <h1 className="p-heading">The Future of Hiring</h1>
            <p className="paragraph">
              Welcome to a recruitment solution that brings the power of data-
              driven decision-making to your fingertips. Say goodbye to endless
              piles of résumés and inefficient processes.
            </p>
            <p className="paragraph">
              Our platform offers a seamless hiring experience designed
              specifically for multinational corporations, streamlining the
              entire process to save time and reduce costs.
            </p>
            <p className="paragraph">
              Embrace the future of recruiting and become part of the elite
              group of companies that rely on our cutting-edge technologies.
            </p>
          </div>
          <div>
            <img src="./img.png" alt="vector" height="550" />
          </div>
        </section>

        <section className="service">
          <div className="service_card">
            <img src="./dollar.svg" alt="" height="60" />
            <h3>25%</h3>
            <p>Reduced Hiring Costs</p>
          </div>
          <div className="service_card">
            <img src="./light.svg" alt="" height="60" />
            <h3>10x</h3>
            <p>Faster Candidate Screening</p>
          </div>
          <div className="service_card">
            <img src="./smile.svg" alt="" height="60" />
            <h3>95%</h3>
            <p>Satisfied Client Companies</p>
          </div>
          <div className="service_card">
            <img src="./feedback.svg" alt="" height="60" />
            <h3>100%</h3>
            <p>Direct Contact</p>
          </div>
        </section>

        <section className="offers">
          <div className="offer-container">
            <div className="offer_title">
              <h3>Services We Offer</h3>
              <p>
                We provide various services to cater to the needs of both hiring
                companies and candidates, streamlining the recruitment process
                and improving efficiency.
              </p>
            </div>
            <div className="offer-wrapper">
              <OfferCard />
            </div>
          </div>
        </section>

        <section>
          <div className="job">
            <div className="job_title">
              <h3>Explore Job Opportunities</h3>
              <p>
                Discover a wide range of job listings from top companies across
                industries.
              </p>
            </div>
            <div>
              <JobCard />
            </div>
          </div>
        </section>

        <section className="profile">
          <div className="title">
            <h1>Candidate Profiles</h1>
          </div>
          <div className="candidate-profiles">
            <CandidateCard />
          </div>
        </section>

        <section className="contact_us">
          <div className="text-center">
            <h1>CONTACT US</h1>
            <p>
              If you have any questions, concerns, or need assistance with our
              recruitment solution app, our team is just a message away.
            </p>
          </div>
          <div>
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write a Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </section>

        <footer>
          <div className="footer-div">
            <div className="about">
              <h3>About</h3>
              <p>
                Are you tired of spending countless hours sifting through stacks
                of resumes, struggling to find the perfect candidate for your
                organization? Look no further! Our cutting-edge hiring website
                is here to revolutionize your recruitment process and simplify
                your life as an HR professional. With our platform, you gain
                access to an extensive talent pool, where top-notch candidates
                from diverse industries and backgrounds are just a click away.
              </p>
            </div>
            <div>
              <h3>Navigational Links</h3>
              <ul className="footer-list">
                <li>Home</li>
                <li>Services</li>
                <li>Jobs</li>
                <li>Profiles</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="newsletter">
              <h3>Newsletter</h3>
              <p>
                Join our newsletter today for valuable updates delivered
                straight to your inbox. Don't miss out, subscribe now!
              </p>
              <input type="email" placeholder="Your email" />
              <button className="btn2">Subscribe</button>
            </div>
          </div>
          <div className="bottom-div">
            <p>© HireLink 2023 All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
