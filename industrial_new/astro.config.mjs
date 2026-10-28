// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: "HKGrotesk",
      cssVariable: "--font-hkgrotesk",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/hk-grotesk/HKGrotesk-Light.woff2",
              "./src/assets/fonts/hk-grotesk/HKGrotesk-Light.woff",
            ],
          },
        ],
      },
    },
    {
      name: "Spartan",
      cssVariable: "--font-spartan",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: [
              "./src/assets/fonts/league-spartan/LeagueSpartan-Bold.woff2",
              "./src/assets/fonts/league-spartan/LeagueSpartan-Bold.woff",
            ],
          },
        ],
      },
    },
  ],
});
