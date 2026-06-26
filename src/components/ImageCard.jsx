import './ImageCard.css';

export default function ImageCard({ src, alt, title, caption, variant = 'default' }) {
  return (
    <figure className={`image-card box image-card--${variant}`}>
      <div className="image-card-media">
        <img src={src} alt={alt || title} loading="lazy" />
      </div>
      {(title || caption) && (
        <figcaption className="image-card-caption">
          {title && <span className="image-card-title">{title}</span>}
          {caption && <span className="image-card-sub">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}
