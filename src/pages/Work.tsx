import { useState } from 'react';
import { workProjects, WorkProject } from '../data/portfolio';

function Work() {
  const [selected, setSelected] = useState<WorkProject | null>(null);

  return (
    <div className="page-wrapper">
      <h1 className="page-title">💼 工作经历</h1>
      <p className="page-subtitle">
        在工作过程中积累的项目经验与成长（点击条目查看详情）
      </p>

      {/* 工作经历列表（与教育背景一致的列表样式） */}
      <div className="list-container">
        {workProjects.map((project) => (
          <div
            key={project.id}
            className="list-item clickable-list-item"
            onClick={() => setSelected(project)}
          >
            {project.logo && (
              <div className="list-logo-wrap">
                <img src={project.logo} alt={project.company} className="list-logo-img" />
              </div>
            )}
            <div className="list-content">
              <div className="list-header">
                <div className="list-title">{project.title}</div>
              </div>
              <div className="list-subtitle-row">
                <div className="list-subtitle">{project.company}</div>
                <div className="list-period">{project.period}</div>
              </div>
              <div className="list-description">{project.brief}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 详情弹窗 */}
      {selected && (
        <div className="match-modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="match-modal work-modal-detail work-modal-detail-new"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="match-modal-header">
              <div className="match-modal-title">{selected.title}</div>
              <button
                className="match-modal-close"
                onClick={() => setSelected(null)}
              >
                关闭
              </button>
            </div>

            {/* 第一板块：公司信息 */}
            <div className="work-section company-section">
              <div className="work-section-header">
                <span className="work-section-title">🏢 公司信息</span>
                <span className="work-section-sub">
                  COMPANY PROFILE
                </span>
              </div>
              <div className="company-info">
                <div className="info-item">
                  <span className="info-label">时间</span>
                  <span className="info-value">{selected.period}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">公司</span>
                  <span className="info-value">
                    {selected.companyUrl ? (
                      <a
                      href={selected.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      {selected.company} ↗
                    </a>
                    ) : (
                      selected.company
                    )}
                  </span>
                </div>
                <div className="info-item info-item-full">
                  <span className="info-label">简介</span>
                  <span className="info-value">{selected.brief}</span>
                </div>
              </div>
            </div>

            {/* 第二板块：项目列表（横向并排） */}
            {selected.projects && selected.projects.length > 0 ? (
              <div className="work-section projects-section">
                <div className="work-section-header">
                  <span className="work-section-title">� 项目经历</span>
                  <span className="work-section-sub">
                    PROJECTS & TOOLS
                  </span>
                </div>
                <div className="projects-row">
                  {selected.projects.map((project, idx) => (
                    <div key={idx} className="project-card">
                      <div className="project-card-header">
                        <div className="project-name">
                          项目 {idx + 1} · {project.name}
                        </div>
                      </div>

                      <div className="project-meta">
                        <div className="meta-block">
                          <div className="meta-label">技术栈</div>
                          <div className="project-tech">
                            {project.techStack.map((tech, tIdx) => (
                              <span key={tIdx} className="tech-chip">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="meta-block">
                          <div className="meta-label">项目描述</div>
                          <div className="project-desc">
                            {project.description}
                          </div>
                        </div>
                      </div>

                      <div className="project-works">
                        <div className="meta-label">主要工作</div>
                        <ul className="works-list">
                          {project.works.map((work, wIdx) => (
                            <li key={wIdx}>{work}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="work-section projects-section">
                <div className="work-section-header">
                  <span className="work-section-title">📌 项目亮点</span>
                  <span className="work-section-sub">
                    HIGHLIGHTS
                  </span>
                </div>
                <ul className="highlights-list">
                  {selected.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 第三板块：心得与思考 */}
            <div className="work-section reflection-section">
              <div className="work-section-header">
                <span className="work-section-title">💭 心得与思考</span>
                <span className="work-section-sub">
                  REFLECTION
                </span>
              </div>
              <ul className="highlights-list">
                {selected.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
