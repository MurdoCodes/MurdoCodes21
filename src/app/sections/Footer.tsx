const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-text-muted">
          &copy; {year} Lidel Kim B. Daddie | MurdoCodes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
