import "./CandidateCard.css";

function CandidateCard() {
  return (
    <>
    <div class="candidate-card">
      <img
        class="round"
        src="https://randomuser.me/api/portraits/women/79.jpg"
        alt="user"
      />
      <h2>Ricky Park</h2>
      <h5>New York</h5>
      <p>
       front-end developer
      </p>
      <div class="buttons">
        <button class="primary">Message</button>
      </div>
      <div class="skills">
        <h5>Skills</h5>
        <ul>
          <li>UI / UX</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Angular</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>

    <div class="candidate-card">
      <img
        class="round"
        src="https://randomuser.me/api/portraits/women/2.jpg"
        alt="user"
      />
      <h2>Jane Foster</h2>
      <h5>Las Vegas</h5>
      <p>
        Game developer
      </p>
      <div class="buttons">
        <button class="primary">Message</button>
      </div>
      <div class="skills">
        <h5>Skills</h5>
        <ul>
          <li>.Net</li>
          <li>C#</li>
          <li>JavaScript</li>
          <li>Blender</li>
          <li>Unity</li>
          <li>Unreal Engine</li>
          <li>Game Designer</li>
        </ul>
      </div>
    </div>

    <div class="candidate-card">
      <img
        class="round"
        src="https://randomuser.me/api/portraits/women/49.jpg"
        alt="user"
      />
      <h2>Scarlet Frost</h2>
      <h5>London</h5>
      <p>
        Fullstack Developer
      </p>
      <div class="buttons">
        <button class="primary">Message</button>
      </div>
      <div class="skills">
        <h5>Skills</h5>
        <ul>
          <li>Node</li>
          <li>Front End Development</li>
          <li>Express</li>
          <li>Mogodb</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Mysql</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default CandidateCard;
