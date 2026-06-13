import { useNavigate } from 'react-router-dom';
import { exploreProjects, notes } from '../data/portfolio';

function Explore() {
  const navigate = useNavigate();

  const handleNoteClick = (title: string) => {
    alert(`📝 《${title}》\n\n（示例页面：真实部署时可链接到对应的笔记内容）`);
  };

  const handleProjectClick = (proj: typeof exploreProjects[0]) => {
    if (proj.path) {
      navigate(proj.path);
    } else if (proj.url) {
      window.open(proj.url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`✨ ${proj.title}\n\n（示例页面：真实部署时可展示更详细的项目介绍或 demo 链接）`);
    }
  };

  return (
    <div className="page-wrapper">
      <h1 className="page-title">🚀 学习与探索</h1>
      <p className="page-subtitle">
        记录学习过程中的项目实践与技术沉淀
      </p>

      <h2 style={{ fontSize: 22, marginBottom: 20, marginTop: 10 }}>
        ✨ 近期探索项目
      </h2>
      <div className="explore-grid">
        {exploreProjects.map((proj) => (
          <div
            key={proj.id}
            className={'explore-card' + ((proj.url || proj.path) ? ' explore-card-has-link' : '')}
            onClick={() => handleProjectClick(proj)}
          >
            <div className="explore-icon">{proj.icon}</div>
            <div className="explore-title">
              {proj.title}
              {(proj.url || proj.path) && <span className="explore-external">↗</span>}
            </div>
            <div className="explore-date">{proj.date}</div>
            <div className="explore-desc">{proj.description}</div>
            <div className="explore-tags">
              {proj.tags.map((tag) => (
                <span key={tag} className="explore-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 笔记展示区 */}
      <div className="notes-section">
        <h2 style={{ fontSize: 22, marginBottom: 20 }}>📚 学习笔记</h2>
        <div className="notes-list">
          {notes.map((note) => (
            <div
              key={note.id}
              className="note-item"
              onClick={() => handleNoteClick(note.title)}
            >
              <div className="note-title">{note.title}</div>
              <div className="note-meta">
                {note.date} · {note.readTime}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
