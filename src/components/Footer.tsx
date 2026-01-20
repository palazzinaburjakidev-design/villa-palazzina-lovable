import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Impressum / Legal Info */}
          <div>
            <h3 className="text-gold font-display text-lg mb-4">{t('footer.impressum')}</h3>
            <div className="space-y-2 text-linen/70 text-sm">
              <p className="text-linen font-medium">Villa Palazzina Burjaki</p>
              <p>{t('footer.renterType')}</p>
              <p>Vedran Grubišić</p>
              <div className="flex items-start gap-2 mt-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Burjaki 36, Trgetari 52224, Hrvatska</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:palazzinaburjaki@gmail.com" className="hover:text-linen transition-colors">
                  palazzinaburjaki@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+385911513014" className="hover:text-linen transition-colors">
                  +385 91 151 3014
                </a>
              </div>
            </div>
          </div>

          {/* Reservation Notice */}
          <div>
            <h3 className="text-gold font-display text-lg mb-4">{t('footer.reservations')}</h3>
            <div className="space-y-3 text-linen/70 text-sm">
              <p>{t('footer.reservationsNotice')}</p>
              <a
                href="https://www.airbnb.com/rooms/948498096498498227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.08c-.746 1.174-1.924 2.078-3.486 2.684-1.562.606-3.434.752-5.064.284-1.684-.482-3.09-1.472-4.012-2.75-.922-1.278-1.332-2.818-1.332-4.298 0-1.974.758-3.894 2.188-5.406.692-.732 1.53-1.324 2.466-1.73.936-.406 1.958-.608 2.988-.608 1.542 0 3.068.456 4.228 1.306 1.16.85 2.03 2.076 2.402 3.476l-5.494 2.08c-.25-.47-.68-.85-1.22-1.08-.54-.23-1.154-.29-1.736-.17-.582.12-1.114.406-1.512.814-.398.408-.658.924-.738 1.478-.08.554.02 1.12.282 1.614.262.494.68.894 1.188 1.142.508.248 1.078.336 1.62.25.542-.086 1.048-.342 1.44-.726l5.228 1.886c.202.284.372.586.508.9z" />
                </svg>
                {t('footer.bookOnAirbnb')}
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-xs text-linen/50">{t('footer.noPaymentData')}</p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-gold font-display text-lg mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-linen/70 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-linen transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-linen transition-colors">
                  {t('footer.cookiePolicy')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Website Notice */}
          <div>
            <h3 className="text-gold font-display text-lg mb-4">{t('footer.websiteNotice')}</h3>
            <p className="text-linen/70 text-sm">
              {t('footer.websiteNoticeText')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-linen/50 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Villa Palazzina Burjaki. {t('footer.allRightsReserved')}
          </p>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <Link to="/privacy-policy" className="text-linen/50 hover:text-linen transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link to="/cookie-policy" className="text-linen/50 hover:text-linen transition-colors">
              {t('footer.cookiePolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
