import { useLanguage } from '@/contexts/LanguageContext';

const MobileBookButton = () => {
  const { t } = useLanguage();

  return (
    <button className="mobile-book-btn">
      {t('nav.bookNow')}
    </button>
  );
};

export default MobileBookButton;
