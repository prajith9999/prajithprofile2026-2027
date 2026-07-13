import { Link } from 'react-router-dom';
import AppIcon from './AppIcon';
import './ClassCard.css';

export default function ClassCard({ course }) {
  const isLight = course.tone === 'light';

  return (
    <Link
      to="/contact"
      className={`class-card class-card-item class-card--${isLight ? 'light' : 'dark'}`}
      style={{ background: course.gradient }}
      aria-label={`Enquire about ${course.title}`}
    >
      <div className="class-card-inner">
        <span className="class-card-label">{course.category}</span>
        <h3 className="class-card-title">{course.title}</h3>
        <p className="class-card-desc">{course.description}</p>
        <div className="class-card-meta">
          <span className="class-card-meta-item">
            <AppIcon name="video" size={15} />
            {course.mode}
          </span>
          <span className="class-card-meta-item">
            <AppIcon name="book" size={15} />
            {course.duration}
          </span>
        </div>
        <div className="class-card-footer">
          <span className="class-card-expand-btn" aria-label={`View ${course.title}`}>
            <AppIcon name="chevronRight" size={16} />
          </span>
        </div>
      </div>
      <div className="class-card-visual" aria-hidden="true">
        <AppIcon name={course.icon} size={56} className="class-card-icon" />
      </div>
    </Link>
  );
}
