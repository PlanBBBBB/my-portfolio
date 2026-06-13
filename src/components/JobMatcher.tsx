import { useState } from 'react';
import { profile, skillCategories, workProjects } from '../data/portfolio';

interface MatchResult {
  score: number;
  matchedSkills: string[];
  matchedKeywords: string[];
  missingSkills: string[];
  summary: string;
}

// 从 JD 中提取关键词，与简历内容做匹配（纯前端实现）
function analyzeJobDescription(jd: string): MatchResult {
  // 收集简历中所有可能的关键词
  const allSkills: string[] = [];
  skillCategories.forEach((cat) => {
    cat.skills.forEach((s) => allSkills.push(s.name));
  });

  // 扩展关键词池 - 将工作项目标签与通用技能关键词也纳入
  const extendedKeywords: { term: string; category: string }[] = [];
  workProjects.forEach((p) => {
    p.tags.forEach((t) => extendedKeywords.push({ term: t, category: '项目经验' }));
  });

  // 简历中提到的关键词领域
  const domainKeywords: { term: string; category: string }[] = [
    { term: '产品经理', category: '产品' },
    { term: '产品策划', category: '产品' },
    { term: '产品设计', category: '产品' },
    { term: '需求分析', category: '产品' },
    { term: '项目管理', category: '管理' },
    { term: '项目协调', category: '管理' },
    { term: 'AI', category: 'AI' },
    { term: '人工智能', category: 'AI' },
    { term: '大模型', category: 'AI' },
    { term: 'LLM', category: 'AI' },
    { term: 'Agent', category: 'AI' },
    { term: 'vibe coding', category: 'AI' },
    { term: '数据分析', category: '数据' },
    { term: '数据驱动', category: '数据' },
    { term: 'SQL', category: '数据' },
    { term: 'Python', category: '技术' },
    { term: 'Figma', category: '设计' },
    { term: 'Cursor', category: '工具' },
    { term: '用户调研', category: '用户研究' },
    { term: '用户体验', category: '用户研究' },
    { term: '敏捷开发', category: '研发流程' },
    { term: '跨部门协调', category: '软技能' },
    { term: '沟通', category: '软技能' },
    { term: '团队协作', category: '软技能' },
    { term: '创新', category: '软技能' },
    { term: '0-1', category: '产品' },
    { term: '从0到1', category: '产品' },
    { term: 'B端', category: '产品' },
    { term: 'C端', category: '产品' },
    { term: '增长', category: '产品' },
    { term: '流程优化', category: '产品' },
    { term: '标准化', category: '产品' }
  ];

  // 将技能和标签合并到关键词池中
  skillCategories.forEach((cat) => {
    cat.skills.forEach((s) => {
      extendedKeywords.push({ term: s.name, category: cat.title });
    });
  });

  const text = jd.toLowerCase();

  // 匹配技能关键词
  const matchedSkills: string[] = [];
  const matchedKeywords: string[] = [];
  allSkills.forEach((skill) => {
    if (text.includes(skill.toLowerCase())) {
      matchedSkills.push(skill);
    }
  });

  domainKeywords.forEach((kw) => {
    if (text.includes(kw.term.toLowerCase())) {
      if (!matchedKeywords.includes(kw.term)) {
        matchedKeywords.push(kw.term);
      }
      if (!matchedSkills.includes(kw.term) && allSkills.includes(kw.term)) {
        matchedSkills.push(kw.term);
      }
    }
  });

  // 额外关键词匹配 - 分析 JD 是否提及典型产品经理职责
  const extraKeywords = [
    '产品', '需求', '项目', '数据', '用户', '增长', '运营', '研发', '设计',
    '经理', 'PM', '优化', '迭代', '上线', '方案', '流程', '系统', '平台',
    '智能', '自动', '效率', '协作', '团队', '业务', '商业', '策略'
  ];
  extraKeywords.forEach((kw) => {
    if (text.includes(kw.toLowerCase()) && matchedKeywords.length < 15) {
      matchedKeywords.push(kw);
    }
  });

  // 未匹配的技能（前几个）
  const missingSkills = allSkills
    .filter((s) => !matchedSkills.includes(s) && !matchedKeywords.some((k) => k.includes(s)))
    .slice(0, 5);

  // 计算匹配分数 - 基于匹配的关键词数量
  const baseMatch = matchedSkills.length + matchedKeywords.filter((k) => domainKeywords.some((d) => d.term === k)).length * 2;
  let score = 55 + matchedSkills.length * 6 + matchedKeywords.length * 2 + (jd.length > 100 ? 10 : 0);
  score += baseMatch * 3;

  if (matchedSkills.length >= 3) score += 5;
  if (matchedKeywords.length >= 8) score += 10;

  if (text.includes('ai') || text.includes('人工智能') || text.includes('llm')) score += 10;
  if (text.includes('产品') && text.includes('经理')) score += 5;
  if (text.includes('项目') && text.includes('管理')) score += 5;
  if (text.includes('vibe') || text.includes('coding')) score += 8;
  if (text.includes('简历') || text.includes('自我介绍')) score += 2;

  score = Math.max(40, Math.min(98, score));

  // 生成匹配总结
  const matchedTermsList = matchedSkills.slice(0, 5);
  let summary = `基于您提供的 JD 内容，我识别到了 ${matchedSkills.length} 个匹配技能点，以及 ${matchedKeywords.length} 个相关领域关键词。`;

  if (matchedSkills.length >= 3 || matchedKeywords.length >= 5) {
    summary += `\n\n我的产品策划与项目管理经验与该岗位的核心要求较为契合。我在过去工作中搭建过业务流程标准化系统、AI 项目协作平台等，对 0-1 项目建设与跨团队协调有丰富经验。`;
  }

  if (missingSkills.length > 0 && score < 85) {
    summary += `\n\n同时我也留意到 JD 中可能有一些要求是我简历中没有直接体现的，这也正是我想要进一步沟通的内容。`;
  }

  summary += `\n\n期待有机会详细聊聊我怎么用 Vibe Coding 的方式来为团队创造价值 ✨`;

  // 为了类型安全，这里明确声明
  return {
    score: score,
    matchedSkills: matchedSkills,
    matchedKeywords: matchedKeywords,
    missingSkills: missingSkills,
    summary: summary
  };
}

function JobMatcher() {
  const [jd, setJd] = useState('');
  const [result, setResult] = useState<MatchResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMatch = () => {
    if (!jd.trim()) return;
    setLoading(true);
    // 模拟 AI 处理时间，让体验更真实
    setTimeout(() => {
      const analysis = analyzeJobDescription(jd);
      setResult(analysis);
      setLoading(false);
    }, 800);
  };

  const handleClose = () => {
    setResult(null);
  };

  return (
    <>
      <div className="matcher-card">
        <div className="matcher-label">
          <span>🤖</span>
          <span>AI 岗位匹配器</span>
        </div>
        <div className="matcher-input-wrap">
          <input
            type="text"
            className="matcher-input"
            placeholder="粘贴您的 JD，查看我与岗位之间的匹配度"
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleMatch();
            }}
          />
          <button
            className="matcher-btn"
            onClick={handleMatch}
            disabled={loading || !jd.trim()}
          >
            {loading ? '匹配中...' : '开始匹配'}
            <span style={{ marginLeft: 4 }}>→</span>
          </button>
        </div>
      </div>

      {result && (
        <div className="match-modal-overlay" onClick={handleClose}>
          <div className="match-modal" onClick={(e) => e.stopPropagation()}>
            <div className="match-modal-header">
              <div className="match-modal-title">✨ 岗位匹配分析结果</div>
              <button className="match-modal-close" onClick={handleClose}>
                ×
              </button>
            </div>

            <div className="match-score">
              <div>
                <div className="match-score-number">{result.score}%</div>
                <div className="match-score-label">整体匹配度</div>
              </div>
              <div className="match-score-bar">
                <div
                  className="match-score-fill"
                  style={{ width: `${result.score}%` }}
                />
              </div>
            </div>

            <div className="match-section">
              <div className="match-section-title">✅ 匹配关键词</div>
              <div className="match-tags">
                {result.matchedSkills.slice(0, 10).map((skill) => (
                  <span key={skill} className="match-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {result.missingSkills.length > 0 && (
              <div className="match-section">
                <div className="match-section-title">
                  📝 可能需要进一步沟通的点
                </div>
                <div className="match-tags">
                  {result.missingSkills.slice(0, 5).map((skill) => (
                    <span key={skill} className="match-tag missing">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="match-section">
              <div className="match-section-title">💬 我的自白</div>
              <div className="match-summary" style={{ whiteSpace: 'pre-line' }}>
                {result.summary}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JobMatcher;
