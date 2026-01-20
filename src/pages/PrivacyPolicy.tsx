import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-charcoal">
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
            {t('privacy.title')}
          </h1>

          <div className="prose prose-invert prose-sm sm:prose-base max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-linen/80 leading-relaxed">
                {t('privacy.intro')}
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('privacy.dataCollection.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed mb-4">
                {t('privacy.dataCollection.text')}
              </p>
              <ul className="list-disc list-inside text-linen/80 space-y-2">
                <li>{t('privacy.dataCollection.item1')}</li>
                <li>{t('privacy.dataCollection.item2')}</li>
                <li>{t('privacy.dataCollection.item3')}</li>
              </ul>
            </section>

            {/* Data Storage */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('privacy.dataStorage.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed">
                {t('privacy.dataStorage.text')}
              </p>
            </section>

            {/* Third Parties */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('privacy.thirdParties.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed mb-4">
                {t('privacy.thirdParties.text')}
              </p>
              <ul className="list-disc list-inside text-linen/80 space-y-2">
                <li>{t('privacy.thirdParties.item1')}</li>
                <li>{t('privacy.thirdParties.item2')}</li>
              </ul>
            </section>

            {/* GDPR Rights */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('privacy.gdprRights.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed mb-4">
                {t('privacy.gdprRights.text')}
              </p>
              <ul className="list-disc list-inside text-linen/80 space-y-2">
                <li>{t('privacy.gdprRights.item1')}</li>
                <li>{t('privacy.gdprRights.item2')}</li>
                <li>{t('privacy.gdprRights.item3')}</li>
                <li>{t('privacy.gdprRights.item4')}</li>
                <li>{t('privacy.gdprRights.item5')}</li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-display text-xl text-gold mb-4">
                {t('privacy.contact.title')}
              </h2>
              <p className="text-linen/80 leading-relaxed">
                {t('privacy.contact.text')}
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
                {t('privacy.lastUpdated')}: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
