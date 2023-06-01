import {I18n} from 'i18n-js';
import en from './Languages/en.json';
import ar from './Languages/ar.json';

// I18n.fallbacks = true;

const i18n = new I18n({...en,...ar})

i18n.enableFallback = true
i18n.defaultLocale = "en"

export  {i18n};
