import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI, type Translations } from 'fumadocs-ui/i18n';

export const i18n = defineI18n({
  languages: ['zh', 'en'],
  defaultLanguage: 'zh',
  hideLocale: 'default-locale',
  parser: 'dot',
});

const zhTranslations: Partial<Translations> = {
  search: '搜尋文件',
  searchNoResult: '找不到結果',
  toc: '目錄',
  tocNoHeadings: '沒有標題',
  lastUpdate: '最後更新',
  chooseLanguage: '選擇語言',
  nextPage: '下一頁',
  previousPage: '上一頁',
  chooseTheme: '選擇主題',
  editOnGithub: '在 GitHub 上編輯',
};

export const i18nUI = defineI18nUI(i18n, {
  translations: {
    zh: {
      displayName: '繁體中文',
      ...zhTranslations,
    },
    en: {
      displayName: 'English',
    },
  },
});
