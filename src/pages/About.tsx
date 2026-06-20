import { profile } from '../data/portfolio';

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

          {/* 联系信息卡片 */}
          <div className="contact-card">
            <div className="contact-row">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-text">
                  <div className="contact-label">所在城市</div>
                  <div className="contact-value">{profile.city}</div>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div className="contact-text">
                  <div className="contact-label">手机号码</div>
                  <div className="contact-value">{profile.phone}</div>
                </div>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div className="contact-text">
                  <div className="contact-label">微信</div>
                  <div className="contact-value">{profile.wechat}</div>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div className="contact-text">
                  <div className="contact-label">邮箱</div>
                  <div className="contact-value contact-link" onClick={() => window.navigator.clipboard?.writeText(profile.email)}>
                    {profile.email}
                    <span className="contact-clipboard">点击复制</span>
                  </div>
                </div>
              </div>
            </div>

            {profile.githubUrl && (
              <div className="contact-row contact-row-single">
                <div className="contact-item contact-item-github" onClick={() => window.open(profile.githubUrl, '_blank')}>
                  <span className="contact-icon">🦑</span>
                  <div className="contact-text">
                    <div className="contact-label">GitHub</div>
                    <div className="contact-value contact-link">{profile.githubUrl}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="about-actions">
            <a
              className="btn-primary"
              href={profile.resumeUrl}
              download={profile.resumeUrl.slice(1)}
            >
              📄 下载简历
            </a>
            <a
              className="btn-secondary"
              href={`mailto:${profile.email}?subject=联系 - ${profile.name}`}
            >
              ✉️ 联系我
            </a>
          </div>
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
