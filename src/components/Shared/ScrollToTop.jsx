import useScrollPosition from '../../hooks/useScrollPosition';

export default function ScrollToTop() {
  const scrollY = useScrollPosition();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`stb${scrollY > 400 ? ' show' : ''}`}
      onClick={handleClick}
      role="button"
      aria-label="Scroll to top"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  );
}
