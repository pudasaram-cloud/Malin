import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setIsScrolled(currentScrollY > 25);

          const sections = ['home', 'about', 'services', 'projects', 'contact'];
          const scrollPosition = currentScrollY + 200;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i]);
            if (el) {
              const top = el.offsetTop;
              if (scrollPosition >= top) {
                setActiveSection(sections[i]);
                break;
              }
            }
          }

          // Hide navbar when scrolling down, show when scrolling up
          if (currentScrollY <= 40) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current + 10) {
            // Scrolling down
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY.current - 10) {
            // Scrolling up
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isNavVisible = isVisible || mobileMenuOpen;
  const isHome = activeSection === 'home' && !isScrolled;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''} ${!isNavVisible ? 'is-hidden' : ''}`}>
      <div className="nav-container">
        {/* Left Floating Capsule: Navigation Links */}
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className={`nav-link nav-item-1 ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className={`nav-link nav-item-2 ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className={`nav-link nav-item-3 ${activeSection === 'services' ? 'active' : ''}`}
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className={`nav-link nav-item-4 ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`nav-link nav-item-5 ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>

          {/* Social Links Row Inside Mobile Menu Drawer */}
          <div className="mobile-drawer-socials">
            <span className="drawer-socials-label">Connect</span>
            <div className="drawer-socials-row">
              <a
                href="https://wa.me/94701095008"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-social-btn"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.38C8.64 7.38 8.43 7.45 8.24 7.66C8.06 7.86 7.55 8.35 7.55 9.35C7.55 10.36 8.28 11.33 8.39 11.47C8.49 11.61 9.8 13.63 11.83 14.51C13.51 15.24 13.86 15.09 14.21 15.06C14.57 15.03 15.36 14.59 15.52 14.13C15.68 13.67 15.68 13.28 15.63 13.2C15.58 13.11 15.44 13.06 15.23 12.95C15.02 12.85 13.98 12.34 13.79 12.27C13.6 12.2 13.46 12.16 13.32 12.37C13.18 12.58 12.78 13.06 12.65 13.2C12.53 13.35 12.41 13.37 12.2 13.26C11.99 13.16 11.12 12.87 10.08 11.95C9.28 11.23 8.73 10.35 8.58 10.09C8.42 9.83 8.56 9.69 8.67 9.58C8.76 9.49 8.88 9.33 8.99 9.2C9.09 9.07 9.13 8.97 9.2 8.83C9.27 8.69 9.23 8.57 9.18 8.47C9.13 8.36 8.73 7.38 8.83 7.38Z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/malin.rodrigo.54"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-social-btn"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14.5 6 16 6H17.5V2.14C17.07 2.08 15.7 2 14.4 2C11.3 2 9.5 3.86 9.5 7.15V9.5H6V13.5H9.5V22H14V13.5Z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/malin_.17/"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-social-btn"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-social-btn"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.867 20.203 8.84 21.531C9.34 21.624 9.52 21.314 9.52 21.047C9.52 20.81 9.51 20.03 9.51 19.2C7 19.68 6.35 18.52 6.15 17.96C6.04 17.67 5.55 16.78 5.13 16.54C4.78 16.35 4.28 15.89 5.12 15.88C5.91 15.87 6.47 16.61 6.66 16.91C7.56 18.44 9.02 18.01 9.6 17.75C9.69 17.09 9.95 16.65 10.24 16.4C7.97 16.14 5.59 15.26 5.59 11.34C5.59 10.22 5.99 9.29 6.64 8.56C6.54 8.3 6.18 7.25 6.74 5.83C6.74 5.83 7.6 5.56 9.54 6.88C10.36 6.65 11.23 6.54 12.1 6.54C12.97 6.54 13.84 6.65 14.66 6.88C16.6 5.54 17.46 5.83 17.46 5.83C18.02 7.25 17.66 8.3 17.56 8.56C18.22 9.29 18.61 10.21 18.61 11.34C18.61 15.27 16.22 16.14 13.95 16.39C14.31 16.71 14.63 17.32 14.63 18.28C14.63 19.65 14.62 20.76 14.62 21.05C14.62 21.32 14.8 21.63 15.31 21.53C19.28 20.198 22.14 16.444 22.14 12.017C22.14 6.484 17.523 2 12 2Z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/malin-pudasara-904439292/"
                target="_blank"
                rel="noopener noreferrer"
                className="drawer-social-btn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>

        {/* Right Floating Area: Social Links (Only visible when in Home section) */}
        <div className={`social-links ${!isHome ? 'hide-socials' : ''}`}>
          {/* WhatsApp */}
          <a
            href="https://wa.me/94701095008"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn slide-icon icon-1 whatsapp-btn"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.83 7.38C8.64 7.38 8.43 7.45 8.24 7.66C8.06 7.86 7.55 8.35 7.55 9.35C7.55 10.36 8.28 11.33 8.39 11.47C8.49 11.61 9.8 13.63 11.83 14.51C13.51 15.24 13.86 15.09 14.21 15.06C14.57 15.03 15.36 14.59 15.52 14.13C15.68 13.67 15.68 13.28 15.63 13.2C15.58 13.11 15.44 13.06 15.23 12.95C15.02 12.85 13.98 12.34 13.79 12.27C13.6 12.2 13.46 12.16 13.32 12.37C13.18 12.58 12.78 13.06 12.65 13.2C12.53 13.35 12.41 13.37 12.2 13.26C11.99 13.16 11.12 12.87 10.08 11.95C9.28 11.23 8.73 10.35 8.58 10.09C8.42 9.83 8.56 9.69 8.67 9.58C8.76 9.49 8.88 9.33 8.99 9.2C9.09 9.07 9.13 8.97 9.2 8.83C9.27 8.69 9.23 8.57 9.18 8.47C9.13 8.36 8.73 7.38 8.83 7.38Z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/malin.rodrigo.54"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn slide-icon icon-2"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14.5 6 16 6H17.5V2.14C17.07 2.08 15.7 2 14.4 2C11.3 2 9.5 3.86 9.5 7.15V9.5H6V13.5H9.5V22H14V13.5Z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/malin_.17/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn slide-icon icon-3"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn slide-icon icon-4"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.867 20.203 8.84 21.531C9.34 21.624 9.52 21.314 9.52 21.047C9.52 20.81 9.51 20.03 9.51 19.2C7 19.68 6.35 18.52 6.15 17.96C6.04 17.67 5.55 16.78 5.13 16.54C4.78 16.35 4.28 15.89 5.12 15.88C5.91 15.87 6.47 16.61 6.66 16.91C7.56 18.44 9.02 18.01 9.6 17.75C9.69 17.09 9.95 16.65 10.24 16.4C7.97 16.14 5.59 15.26 5.59 11.34C5.59 10.22 5.99 9.29 6.64 8.56C6.54 8.3 6.18 7.25 6.74 5.83C6.74 5.83 7.6 5.56 9.54 6.88C10.36 6.65 11.23 6.54 12.1 6.54C12.97 6.54 13.84 6.65 14.66 6.88C16.6 5.54 17.46 5.83 17.46 5.83C18.02 7.25 17.66 8.3 17.56 8.56C18.22 9.29 18.61 10.21 18.61 11.34C18.61 15.27 16.22 16.14 13.95 16.39C14.31 16.71 14.63 17.32 14.63 18.28C14.63 19.65 14.62 20.76 14.62 21.05C14.62 21.32 14.8 21.63 15.31 21.53C19.28 20.198 22.14 16.444 22.14 12.017C22.14 6.484 17.523 2 12 2Z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/malin-pudasara-904439292/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn slide-icon icon-5"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
            </svg>
          </a>

          {/* Mobile menu toggle */}
          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
