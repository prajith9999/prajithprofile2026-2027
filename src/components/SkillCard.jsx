import { Link } from 'react-router-dom';
import AppIcon from './AppIcon';
import './SkillCard.css';

export default function SkillCard({ skill }) {
  const isLight = skill.tone === 'light';

  return (
    <Link
      to={skill.link}
      className={`skill-card skill-card-item skill-card--${isLight ? 'light' : 'dark'}`}
      style={skill.gradient ? { '--skill-accent': skill.gradient } : undefined}
      aria-label={`View details about ${skill.title}`}
    >
      <div className="skill-card-inner">
        <span className="skill-card-label">{skill.category}</span>
        <h3 className="skill-card-title">{skill.title}</h3>
        <p className="skill-card-desc">{skill.description}</p>
        <span className="skill-card-stack-label">Key skills</span>
        <ul className="skill-card-stack" aria-label={`${skill.title} technologies`}>
          {skill.skills.slice(0, 5).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="skill-card-footer">
          <span className="skill-card-count">{skill.skills.length} technologies</span>
          <span className="skill-card-expand-btn" aria-label={`View ${skill.title}`}>
            <AppIcon name="chevronRight" size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
