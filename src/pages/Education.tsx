import { education } from '../data/portfolio';

function Education() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">🎓 教育背景</h1>
      <p className="page-subtitle">在学习过程中积累的知识与成长</p>

      <div className="list-container">
        {education.map((item, index) => (
          <div key={index} className="list-item">
            {item.logo && (
              <div className="list-logo-wrap edu-logo-wrap">
                <img src={item.logo} alt={item.school} className="list-logo-img" />
              </div>
            )}
            <div className="list-content">
              <div className="edu-title-row">
                <div className="list-title">{item.degree}</div>
                <div className="edu-period">{item.period}</div>
              </div>
              {item.schoolUrl ? (
                <a
                  className="list-subtitle list-link"
                  href={item.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.school} ↗
                </a>
              ) : (
                <div className="list-subtitle">{item.school}</div>
              )}
              <div className="list-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
