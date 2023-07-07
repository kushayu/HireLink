import "./JobCard.css";

function JobCard() {
  return (
    <>
      <div className="job-card">
        <div className="left">
          <div className="img-c">
            <img src="./logo-3.png" alt="company logo" />
          </div>
          <div className="card-info">
            <p>Photosnap</p>

            <h6>Senior Frontend developer</h6>
            <ul>
              <li>1d ago</li>
              <li>Full Time</li>
              <li>Remote</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>Ui/UX</li>
            <li>Angular</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>

      <div className="job-card">
        <div className="left">
          <div className="img-c">
            <img src="./logo-8.png" alt="company logo" />
          </div>
          <div className="card-info">
            <p>EA(Electronic Arts)</p>

            <h6>Fullstack Developer</h6>
            <ul>
              <li>2d ago</li>
              <li>Full Time</li>
              <li>USA Only</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Mongodb</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>

      <div className="job-card">
      <div className="left">
        <div className="img-c">
          <img src="./logo-9.png" alt="company logo" />
        </div>
        <div className="card-info">
          <p>HP</p>

          <h6>Software developer</h6>
          <ul>
            <li>3d ago</li>
            <li>Contract</li>
            <li>World Wide</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>Java</li>
          <li>React</li>
          <li>Spring</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>

    <div className="job-card">
      <div className="left">
        <div className="img-c">
          <img src="./logo-5.png" alt="company logo" />
        </div>
        <div className="card-info">
          <p>Loop Studios</p>

          <h6>Software Testing</h6>
          <ul>
            <li>5d ago</li>
            <li>Part Time</li>
            <li>UK Only</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>Python</li>
          <li>Sql</li>
          <li>SeleniumL</li>
          <li>Mysql</li>
        </ul>
      </div>
    </div>

    <div className="job-card">
      <div className="left">
        <div className="img-c">
          <img src="./logo-6.png" alt="company logo" />
        </div>
        <div className="card-info">
          <p>Logistic</p>

          <h6>Backend Developer</h6>
          <ul>
            <li>1w ago</li>
            <li>Full Time</li>
            <li>Remote</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>Mongodb</li>
          <li>Mysql</li>
          <li>sql</li>
        </ul>
      </div>
    </div>

    <div className="job-card">
      <div className="left">
        <div className="img-c">
          <img src="./logo-7.png" alt="company logo" />
        </div>
        <div className="card-info">
          <p>Mazda</p>

          <h6>UI/UX Designer</h6>
          <ul>
            <li>2w ago</li>
            <li>Part Time</li>
            <li>USA Only</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>Frontened</li>
          <li>UI/UX</li>
          <li>Figma</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default JobCard;
