import { SmartLink } from "./smart-link";

export function Footer() {
  return (
    <footer className="bg-secondary/30 mt-auto border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-foreground/70">
          © {new Date().getFullYear()} Tutti i diritti riservati.
        </div>
        
        <div className="flex items-center gap-6 text-sm text-foreground/70">
          <SmartLink href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</SmartLink>
          <SmartLink href="/termini" className="hover:text-primary transition-colors">Termini di Servizio</SmartLink>
        </div>

        <div className="text-sm text-foreground/70 flex items-center gap-1 font-medium">
          Powered by
          <a 
            href="https://www.luminadigital.it" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary font-semibold transition-colors flex items-center border-b border-transparent hover:border-primary"
          >
            Lumina™
          </a>
        </div>
      </div>
    </footer>
  );
}
