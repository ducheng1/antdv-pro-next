import type { AppConfig } from '@/types/app'
import type { DeepPartial } from '@/types/utils'
import { toMerged } from 'es-toolkit'
import { defaultAppConfig } from './config.default'

const customConfig: DeepPartial<AppConfig> = {}

export const appConfig: AppConfig = toMerged(customConfig, defaultAppConfig)
