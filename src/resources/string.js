import i18n from '../helpers/i18n';

const t = (translationKey) => {
   return i18n.t(translationKey.toString());
};

export default t;
