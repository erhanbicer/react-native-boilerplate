import i18n from 'i18n-js';
import en from '../resources/translations/en';
import tr from '../resources/translations/tr';

i18n.defaultLocale = 'tr';
i18n.locale = 'tr';
i18n.fallbacks = true;
i18n.translations = { en, tr };

export default i18n;
