import { skillCategories } from '../data/portfolio';

function Skills() {
  // 左 4 个分类，右 5 个分类（将主流框架移到右侧）
  const leftCategories = skillCategories.slice(0, 4);
  const rightCategories = skillCategories.slice(4, 9);

  return (
    <div className="page-wrapper">
      <h1 className="page-title">🎯 专业技能</h1>
      <p className="page-subtitle">擅长的技术方向与核心能力</p>

      <div className="mindmap-container mindmap-horizontal">
        {/* 左侧分类 */}
        <div className="mindmap-side mindmap-left">
          {leftCategories.map((cat) => (
            <div key={cat.category} className="mindmap-node mindmap-node-left" style={{ '--node-color': cat.color }}>
              <div className="mindmap-leaves mindmap-leaves-right">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="mindmap-leaf">{skill}</span>
                ))}
              </div>
              <div className="mindmap-card">
                <span className="mindmap-icon">{cat.icon}</span>
                <span className="mindmap-title">{cat.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 中心节点 */}
        <div className="mindmap-center">
          <div className="mindmap-center-card">
            <span className="mindmap-center-icon">🧠</span>
            <span className="mindmap-center-title">专业技能</span>
          </div>
        </div>

        {/* 右侧分类 */}
        <div className="mindmap-side mindmap-right">
          {rightCategories.map((cat) => (
            <div key={cat.category} className="mindmap-node mindmap-node-right" style={{ '--node-color': cat.color }}>
              <div className="mindmap-card">
                <span className="mindmap-icon">{cat.icon}</span>
                <span className="mindmap-title">{cat.title}</span>
              </div>
              <div className="mindmap-leaves mindmap-leaves-left">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="mindmap-leaf">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
