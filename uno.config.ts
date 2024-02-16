// eslint-disable-next-line no-restricted-imports
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetTypography,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
});
