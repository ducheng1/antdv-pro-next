import { i18n } from '@/plugins'

type I18nType = ReturnType<typeof useI18n>

export function useGlobalI18n(): I18nType {
  if (getCurrentInstance()) {
    return useI18n() as I18nType
  }
  return i18n.global as unknown as I18nType
}
