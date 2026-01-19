import { useLanguage } from '@/contexts/LanguageContext';

const MobileBookButton = () => {
  const { t } = useLanguage();

  return (
    <a 
      href="https://hr.airbnb.com/rooms/1374488?_set_bev_on_new_domain=1759776626_EANmIzZjMwMzBlZm&set_everest_cookie_on_new_domain=1759776626.EAZTc0YzVhMzQ2NjM1Mz.1SKP7GRHZCCh7kEL-c4mglEEFUYXy0c2fdwyNyEgf5s&source_impression_id=p3_1768839068_P3JJtgKZZG0aLdcA"
      target="_blank"
      rel="noopener noreferrer"
      className="mobile-book-btn"
    >
      {t('nav.bookNow')}
    </a>
  );
};

export default MobileBookButton;
