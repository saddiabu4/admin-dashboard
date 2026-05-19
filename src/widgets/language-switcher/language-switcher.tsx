import { useTranslation } from 'react-i18next'

import { supportedLanguages } from '@/shared/i18n/i18n'
import { Select } from '@/shared/ui/select'

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const language = event.target.value

    i18n.changeLanguage(language)
    window.localStorage.setItem('app-language', language)
  }

  return (
    <Select
      aria-label={t('language.label')}
      value={i18n.language}
      onChange={handleChange}
      className="h-9 w-[120px] rounded-xl border-border/50 bg-background/80 text-xs font-medium backdrop-blur-xl sm:w-[140px]"
    >
      {supportedLanguages.map(language => (
        <option key={language} value={language}>
          {t(
            `language.${language === 'en' ? 'english' : language === 'ru' ? 'russian' : 'uzbek'}`,
          )}
        </option>
      ))}
    </Select>
  )
}
