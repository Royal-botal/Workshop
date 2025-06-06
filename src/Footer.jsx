
    import React from 'react';

    const Footer = () => {
      const [hoveredLink, setHoveredLink] = React.useState(null);
      const [hoveredIcon, setHoveredIcon] = React.useState(null);
    
      const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/' },
        { name: 'Services', href: '/' },
        { name: 'Blog', href: '/' },
        { name: 'Contact', href: '/' },
      ];
    
      const socialLinks = [
        {
          name: 'Facebook',
          href: 'https://facebook.com',
          svg: (
            <svg viewBox="0 0 24 24" style={styles.iconSvg} aria-hidden="true" focusable="false" role="img">
              <path d="M22.675 0h-21.35C.59 0 0 .592 0 1.326v21.348C0 23.406.59 24 1.325 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.465.098 2.794.142v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.734 0 1.324-.594 1.324-1.326V1.326C24 .592 23.406 0 22.675 0z" />
            </svg>
          ),
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com',
          svg: (
            <svg viewBox="0 0 24 24" style={styles.iconSvg} aria-hidden="true" focusable="false" role="img">
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .39.045.765.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.722-.666 1.561-.666 2.457 0 1.69.86 3.178 2.17 4.05-.799-.025-1.55-.244-2.205-.609v.06c0 2.367 1.683 4.34 3.918 4.785-.41.111-.842.171-1.287.171-.315 0-.623-.031-.924-.087.624 1.951 2.432 3.374 4.58 3.412-1.68 1.319-3.808 2.105-6.115 2.105-.397 0-.79-.023-1.17-.068 2.179 1.396 4.768 2.211 7.557 2.211 9.054 0 14-7.498 14-13.986 0-.21 0-.423-.015-.634.962-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
            </svg>
          ),
        },
        {
          name: 'Instagram',
          href: 'https://instagram.com',
          svg: (
            <svg viewBox="0 0 24 24" style={styles.iconSvg} aria-hidden="true" focusable="false" role="img">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.248 2.47.415a4.92 4.92 0 011.675 1.08 4.919 4.919 0 011.08 1.675c.167.466.36 1.264.415 2.47.058 1.267.07 1.647.07 4.851s-.012 3.585-.07 4.852c-.056 1.206-.248 2.004-.415 2.47a4.902 4.902 0 01-1.08 1.675 4.9 4.9 0 01-1.675 1.08c-.466.167-1.264.36-2.47.415-1.267.059-1.647.07-4.851.07s-3.584-.012-4.851-.07c-1.206-.056-2.004-.248-2.47-.415a4.917 4.917 0 01-1.675-1.08 4.917 4.917 0 01-1.08-1.675c-.167-.466-.36-1.264-.415-2.47-.059-1.267-.07-1.647-.07-4.851s.012-3.584.07-4.851c.056-1.206.248-2.004.415-2.47a4.917 4.917 0 011.08-1.675 4.917 4.917 0 011.675-1.08c.466-.167 1.264-.36 2.47-.415 1.267-.059 1.647-.07 4.851-.07zM12 0C8.741 0 8.332.014 7.052.072 5.78.13 4.75.348 3.9.667a6.92 6.92 0 00-2.5 1.47A6.92 6.92 0 00.667 4.638c-.32.85-.537 1.88-.595 3.152C.014 8.332 0 8.741 0 12c0 3.259.014 3.667.072 4.948.058 1.27.275 2.3.595 3.15a6.92 6.92 0 001.47 2.5 6.918 6.918 0 002.5 1.47c.85.32 1.88.537 3.15.595 1.28.058 1.69.072 4.949.072s3.668-.014 4.949-.072c1.27-.058 2.3-.275 3.15-.595a6.925 6.925 0 002.5-1.47 6.925 6.925 0 001.47-2.5c.32-.85.537-1.88.595-3.15.058-1.28.072-1.69.072-4.949s-.014-3.668-.072-4.949c-.058-1.27-.275-2.3-.595-3.15a6.921 6.921 0 00-1.47-2.5 6.928 6.928 0 00-2.5-1.47c-.85-.32-1.88-.537-3.15-.595C15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.184A4.023 4.023 0 018 12a4.023 4.023 0 014-4 4.023 4.023 0 014 4 4.023 4.023 0 01-4 4zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          ),
        },
        {
          name: 'LinkedIn',
          href: 'https://linkedin.com',
          svg: (
            <svg viewBox="0 0 24 24" style={styles.iconSvg} aria-hidden="true" focusable="false" role="img">
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.27.792 24 1.77 24h20.46c.978 0 1.77-.73 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.08 20.452H3.54v-11.12H7.08v11.12zM5.31 7.68a2.07 2.07 0 01-2.07-2.07c0-1.149.933-2.08 2.07-2.08 1.143 0 2.07.931 2.07 2.08 0 1.142-.927 2.07-2.07 2.07zM20.452 20.452h-3.535v-5.94c0-1.414-.028-3.234-1.97-3.234-1.973 0-2.275 1.54-2.275 3.13v6.044h-3.533v-11.12h3.393v1.52h.048c.472-.897 1.623-1.845 3.342-1.845 3.576 0 4.236 2.352 4.236 5.41v6.035z" />
            </svg>
          ),
        },
      ];
    
      return (
        <footer style={styles.footer} aria-label="Site Footer">
          <div style={styles.container}>
            <div style={styles.logo} aria-label="Site Logo">
              CodeCraft
            </div>
            <nav style={styles.nav} aria-label="Footer Navigation">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name} // Use link.name for a unique key
                  href={link.href}
                  style={{
                    ...styles.navLink,
                    color: hoveredLink === idx ? styles.navLinkHover.color : styles.navLink.color,
                  }}
                  onMouseEnter={() => setHoveredLink(idx)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div style={styles.socialIcons} aria-label="Social Media Links">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.name} // Use social.name for a unique key
                  href={social.href}
                  style={styles.iconLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  onMouseEnter={() => setHoveredIcon(idx)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
          <div style={styles.copyright}>&copy; {new Date().getFullYear()} CodeCraft. All rights reserved.</div>
        </footer>
      );
    }
    
    export default Footer;
