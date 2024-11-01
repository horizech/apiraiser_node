export interface AddUpdateTranslationsRequest {
  I18nId: string;
  Locales: Record<string, TranslationDetail>;
}

export interface TranslationDetail {
  Translation: string;
  TranslationId: string;
}
