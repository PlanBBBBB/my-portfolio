import { profile } from '../data/portfolio';
// import JobMatcher from '../components/JobMatcher';

function About() {
  return (
    <div className="page-wrapper">
      <div className="about-container">
        {/* 左侧：个人介绍 */}
        <div className="about-left">
          <h1 className="about-greeting">
            Hi，我是 <span className="about-name">{profile.name}</span>
          </h1>
          <div className="about-title">{profile.title}</div>
          <p className="about-bio">{profile.bio}</p>

          <div className="about-actions">
            <a
              className="btn-primary"
              href={profile.resumeUrl}
              download={profile.resumeUrl.slice(1)}
            >
              下载简历
            </a>
            <a
              className="btn-secondary"
              href={`mailto:${profile.email}?subject=联系 - ${profile.name}`}
            >
              联系我
            </a>
          </div>

          {/* <JobMatcher /> —— 暂时隐藏，需要时取消注释即可恢复 */}
        </div>

        {/* 右侧：个人照片（占位） */}
        <div className="about-right">
          <div className="photo-container">
            <div className="photo-outline" />
            <div className="photo-img">
              <div className="photo-placeholder">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
