import AppIcon from './AppIcon';
import './ClassCard.css';

export default function ClassCard({ course }) {
  const isLight = course.tone === 'light';

  return (
    <article
      className={`class-card color-glass-card${isLight ? ' color-glass-card--starlight class-card--light' : ''}`}
      style={{ background: course.gradient }}
    >
      <div className="class-card-head color-glass-card__header">
        <span className="class-icon-wrap">
          <AppIcon name={course.icon} size={28} />
        </span>
        <span className="class-category">{course.category}</span>
      </div>
      <div className="class-card-content color-glass-card__body">
        <h3 className="class-title">{course.title}</h3>
        <p className="class-description">{course.description}</p>
        <div className="class-meta">
          <span className="class-meta-item">
            <AppIcon name="video" size={16} />
            {course.mode}
          </span>
          <span className="class-meta-item">
            <AppIcon name="book" size={16} />
            {course.duration}
          </span>
        </div>
        <div className="class-topics">
          {course.topics.map((topic) => (
            <span key={topic} className="class-topic">{topic}</span>
          ))}
        </div>
        <span className="card-arrow" aria-hidden="true">
          <AppIcon name="arrowUp" size={18} />
        </span>
      </div>
    </article>
  );
}
