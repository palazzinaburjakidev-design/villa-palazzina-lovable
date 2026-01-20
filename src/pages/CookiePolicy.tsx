import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-charcoal overflow-y-auto h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-linen/70 hover:text-linen transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('legal.backToHome')}</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl text-linen mb-8">
            {t('cookie.title')}
          </h1>

          <div className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-linen/80 leading-relaxed">
                {t('cookie.intro')}
              </p>
            </section>

            {/* What are Cookies */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('cookie.whatAreCookies.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed">
                {t('cookie.whatAreCookies.text')}
              </p>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('cookie.typesOfCookies.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed mb-4">
                {t('cookie.typesOfCookies.text')}
              </p>
              
              <div className="space-y-4">
                <div className="glass-card rounded-lg p-4">
                  <h3 className="text-linen font-medium mb-2">{t('cookie.typesOfCookies.essential.title')}</h3>
                  <p className="text-linen/70 text-sm">{t('cookie.typesOfCookies.essential.text')}</p>
                </div>
                
                <div className="glass-card rounded-lg p-4">
                  <h3 className="text-linen font-medium mb-2">{t('cookie.typesOfCookies.thirdParty.title')}</h3>
                  <p className="text-linen/70 text-sm">{t('cookie.typesOfCookies.thirdParty.text')}</p>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('cookie.thirdPartyServices.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed mb-4">
                {t('cookie.thirdPartyServices.text')}
              </p>
              <ul className="list-disc list-inside text-linen/80 space-y-2">
                <li>{t('cookie.thirdPartyServices.item1')}</li>
                <li>{t('cookie.thirdPartyServices.item2')}</li>
              </ul>
            </section>

            {/* Consent */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('cookie.consent.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed">
                {t('cookie.consent.text')}
              </p>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('cookie.managing.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed">
                {t('cookie.managing.text')}
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('cookie.contact.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed">
                {t('cookie.contact.text')}
              </p>
              <p className="text-linen/80 mt-2">
                <a href="mailto:palazzinaburjaki@gmail.com" className="text-gold hover:underline">
                  palazzinaburjaki@gmail.com
                </a>
              </p>
            </section>

            {/* Last Updated */}
            <section className="border-t border-white/10 pt-6">
              <p className="text-linen/50 text-sm">
                {t('cookie.lastUpdated')}: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
