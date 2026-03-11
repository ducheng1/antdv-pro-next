import type { ThemeConfig } from 'antdv-next'

export const themeToken: Omit<ThemeConfig, 'algorithm'> = {
  token: {
    colorBgLayout: '#f5f5f5',
  },
  components: {
    Layout: {
      lightSiderBg: '#f5f5f5',
      headerBg: '#ffffff',
    },
  },
}
