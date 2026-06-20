import { useState } from 'react';
import { profile } from '../data/portfolio';

function About() {
  const [showContact, setShowContact] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    const doCopy = (t: string) => {
      setToastMsg(`${label}已复制到剪贴板`);
      setTimeout(() => setToastMsg(''), 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => doCopy(label))
        .catch(() => fallbackCopy(text, label));
    } else {
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text: string, label: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.top = '-9999px';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setToastMsg(`${label}已复制到剪贴板`);
      setTimeout(() => setToastMsg(''), 2000);
    } catch (e) {
      setToastMsg('复制失败，请手动复制');
      setTimeout(() => setToastMsg(''), 2000);
    }
  };

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
              📄 下载简历
            </a>
            <button
              className="btn-secondary btn-clickable"
              onClick={() => setShowContact(true)}
            >
              ✉️ 联系我
            </button>
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

      {/* 联系我 Modal */}
      {showContact && (
        <div className="modal-overlay" onClick={() => setShowContact(false)}>
          <div className="modal-content modal-contact" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-wrap">
                <span className="modal-title-icon">👋</span>
                <span className="modal-title">联系方式</span>
              </div>
              <button className="modal-close-btn" onClick={() => setShowContact(false)}>
                关闭
              </button>
            </div>

            <div className="modal-body">
              <div className="contact-modal-item" onClick={() => copyToClipboard(profile.city, '城市')}>
                <span className="contact-modal-icon">📍</span>
                <div className="contact-modal-text">
                  <div className="contact-modal-label">所在城市</div>
                  <div className="contact-modal-value">{profile.city}</div>
                </div>
                <span className="contact-modal-copy">点击复制</span>
              </div>

              <div className="contact-modal-item" onClick={() => copyToClipboard(profile.phone.replace(/\s/g, ''), '手机号')}>
                <span className="contact-modal-icon">📱</span>
                <div className="contact-modal-text">
                  <div className="contact-modal-label">手机号码</div>
                  <div className="contact-modal-value">{profile.phone}（微信同号）</div>
                </div>
                <span className="contact-modal-copy">点击复制</span>
              </div>

              <div className="contact-modal-item" onClick={() => copyToClipboard(profile.email, '邮箱')}>
                <span className="contact-modal-icon">✉️</span>
                <div className="contact-modal-text">
                  <div className="contact-modal-label">邮箱</div>
                  <div className="contact-modal-value contact-modal-email">{profile.email}</div>
                </div>
                <span className="contact-modal-copy">点击复制</span>
              </div>

              <div className="contact-modal-tip">👆 点击任意一行即可快速复制</div>
            </div>
          </div>
        </div>
      )}

      {/* Toast 提示 */}
      {toastMsg && (
        <div className="toast-container">
          <div className="toast-content">
            <span className="toast-icon">✅</span>
            <span className="toast-text">{toastMsg}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
