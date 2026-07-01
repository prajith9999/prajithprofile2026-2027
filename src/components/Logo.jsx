import { Link } from 'react-router-dom';
import logoBird from '../assets/logo-bird-white.png';
import './Logo.css';

export default function Logo({ to, className = '', onClick, ...rest }) {
  const content = (
    <span className="brand-logo__icon" aria-hidden="true">
      <img src={logoBird} alt="" width={52} height={52} decoding="async" />
    </span>
  );

  const classes = ['brand-logo', className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
        aria-label="Home"
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={classes} {...rest}>
      {content}
    </div>
  );
}
