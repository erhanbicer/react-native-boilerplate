import i18n from 'i18n-js';
import RNLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import en from '../resources/translations/en.json';
import tr from '../resources/translations/tr.json';

i18n.defaultLocale = 'tr';
const bestLocale = RNLocalize.findBestAvailableLanguage(['en', 'tr']);

i18n.locale = bestLocale?.languageTag || 'tr';
I18nManager.forceRTL(bestLocale?.isRTL || false);
i18n.fallbacks = true;
i18n.translations = { en, tr };

export default i18n;
