export const darkModeList = ['dark', 'light', 'auto'] as const
export type DarkMode = (typeof darkModeList)[number]
