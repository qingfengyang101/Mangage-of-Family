/**
 *  language for change not common country
 *  China
 *  English
 *  author: xyh
 *  Date： 2020/10/21 14:30
 */

import cn from './cn.js';
import en from './en.js';
import Vue from 'vue';

const PMLanguageConfig = {
  locale: 'cn',
  languages: {
    cn: cn,
    en: en
  },
  languageDic: [
    { lang: '中文' , languageLocal: 'cn'},
    { lang: 'English', languageLocal: 'en'}
  ]
}

Vue.prototype.$PMLanguageConfig = PMLanguageConfig;

export default PMLanguageConfig;

