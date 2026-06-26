import AppIcon from './AppIcon';
import './ClassCard.css';

export default function ClassCard({ course }) {
  return (
    <article className="class-card box">
      <div className="class-card-head">
        <span className="class-icon-wrap">
          <AppIcon name={course.icon} size={28} />
        </span>
        <span className="class-category">{course.category}</span>
      </div>
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
    </article>
  );
}
