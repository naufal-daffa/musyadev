import SkillsMarquee from './SkillsMarquee';

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-block">
        <div className="section-title">Education</div>
        <div className="resume-item">
          <div className="resume-dot"></div>
          <div className="resume-item-body">
            <div className="resume-item-title">Pengembangan Perangkat Lunak dan Gim</div>
            <div className="resume-item-sub">SMKS WIKRAMA BOGOR 2024 - Now</div>
            <div className="resume-item-desc">
              Majoring in Software and Game Development (PPLG). I am a dedicated, enthusiastic, and highly motivated student who has a strong desire to grow in the professional world. I have a solid background and experience in IT.

              I chose PPLG because I wanted to develop skills in programming and technology, so that I could create useful digital solutions and open up career opportunities in this technological era.
            </div>
          </div>
        </div>
      </div>
      {/*       
      <div className="resume-block">
        <div className="section-title">Experience</div>
        <div className="resume-item">
          <div className="resume-dot"></div>
          <div className="resume-item-body">
            <div className="resume-item-title">Software Engineer</div>
            <div className="resume-item-sub">TechGulf Solutions · 2022 – Present</div>
            <div className="resume-item-desc">
              Building full-stack web applications using React, Node.js, and PostgreSQL. Leading a team of 3 junior developers.
            </div>
          </div>
        </div>
        <div className="resume-item">
          <div className="resume-dot"></div>
          <div className="resume-item-body">
            <div className="resume-item-title">Frontend Developer Intern</div>
            <div className="resume-item-sub">DigitalHub Egypt · 2021 – 2022</div>
            <div className="resume-item-desc">
              Developed responsive UI components and optimized web performance.
            </div>
          </div>
        </div>
      </div> */}

      <div className="resume-block">
        <div className="section-title">Skills</div>
        <SkillsMarquee />
      </div>
    </section>
  );
};

export default Resume;