import AppIcon from './AppIcon';
import './SkillCard.css';

export default function SkillCard({ skill, showImage = false, index }) {
  const number = String(index).padStart(2, '0');
  const isLight = skill.tone === 'light';

  return (
    <article
      className={`skill-card skill-card-item color-glass-card${isLight ? ' color-glass-card--starlight skill-card--light' : ''}`}
      style={{ background: skill.gradient }}
    >
      <div className="skill-card-top color-glass-card__header">
        <span className="skill-number">{number}</span>
        {showImage && skill.image ? (
          <div className="skill-thumb">
            <img src={skill.image} alt={skill.title} className="skill-thumb-img" loading="lazy" />
            <span className="skill-badge">{skill.category}</span>
          </div>
        ) : (
          <div className="skill-thumb skill-thumb-text">
            <span className="skill-thumb-icon">
              <AppIcon name={skill.icon} size={32} />
            </span>
            <span className="skill-badge skill-badge-inline">{skill.category}</span>
          </div>
        )}
      </div>
      <div className="skill-body color-glass-card__body">
        <h3 className="skill-title">{skill.title}</h3>
        <p className="skill-description">{skill.description}</p>
        <div className="skill-tags">
          {skill.skills.slice(0, 4).map((item) => (
            <span key={item} className="skill-tag">{item}</span>
          ))}
          {skill.skills.length > 4 && (
            <span className="skill-tag">+{skill.skills.length - 4} more</span>
          )}
        </div>
        <span className="card-arrow" aria-hidden="true">
          <AppIcon name="arrowUp" size={18} />
        </span>
      </div>
    </article>
  );
}
