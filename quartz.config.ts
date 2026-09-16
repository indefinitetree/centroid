import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Indefinite Tree",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    // No analytics. Nothing third-party is loaded on a page view.
    analytics: null,
    locale: "en-US",
    baseUrl: "indefinitetree.github.io/centroid",
    // Anything matched here never reaches the built site.
    // Both the bare name and the `/**` form are listed: the bare name covers the
    // minimatch check in the dev-server watcher, the `/**` form covers the
    // globby/fast-glob `ignore` used by the build and the asset emitter.
    ignorePatterns: [
      "private",
      "private/**",
      "templates",
      "templates/**",
      ".obsidian",
      ".obsidian/**",
      ".trash",
      ".trash/**",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Geometric grotesque with enough character to not read as a default.
        header: { name: "Space Grotesk", weights: [500, 600, 700] },
        // Inter is drawn for screens: tall x-height, open apertures, and it
        // stays legible at the small sizes the sidebar and captions use.
        body: { name: "Inter", weights: [400, 500, 600], includeItalic: true },
        // Tall x-height and clearly distinguished 0/O and 1/l/I, which is what
        // you want in pseudocode blocks.
        code: { name: "JetBrains Mono", weights: [400, 500, 700] },
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      //Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({
        renderEngine: "katex",
        // Shorthands usable in any $...$ or $$...$$ block, site-wide.
        // Backslashes are escaped twice: once for TS, once for TeX.
        // Arity is inferred from the highest #n used, so \ket{x} takes one arg.
        customMacros: {
          // Quantum
          "\\Hn": "H^{\\otimes n}",
          "\\ket": "\\left|#1\\right\\rangle",
          "\\bra": "\\left\\langle#1\\right|",
          "\\braket": "\\left\\langle#1\\middle|#2\\right\\rangle",
          "\\outer": "\\left|#1\\right\\rangle\\!\\left\\langle#2\\right|",

          // Sets and spaces
          "\\bits": "\\{0,1\\}",
          "\\bitsn": "\\{0,1\\}^n",
          "\\R": "\\mathbb{R}",
          "\\N": "\\mathbb{N}",
          "\\Z": "\\mathbb{Z}",
          "\\C": "\\mathbb{C}",
          "\\F": "\\mathbb{F}",

          // Probability and analysis
          "\\E": "\\mathbb{E}",
          "\\Prob": "\\mathbb{P}",
          "\\Var": "\\mathrm{Var}",
          "\\inner": "\\langle#1,#2\\rangle",

          // Fourier
          "\\chr": "\\mathcal{X}_{#1}",
          "\\fhat": "\\hat{#1}",

          // Complexity
          "\\poly": "\\mathrm{poly}",
          "\\negl": "\\mathrm{negl}",
        },
      }),
    ],
    filters: [
      // Same as Plugin.RemoveDrafts(), except drafts stay visible during local
      // preview. Lets you see a `draft: true` entry with `npx quartz build
      // --serve` without unsetting the flag and risking a sync while it's off.
      // A real build (what GitHub Actions runs) still drops them.
      //
      // Defined here rather than by editing quartz/plugins/filters/draft.ts so
      // `npx quartz update` doesn't conflict.
      {
        name: "RemoveDrafts",
        shouldPublish(ctx, [, vfile]) {
          if (ctx.argv.serve) return true
          const draft = vfile.data?.frontmatter?.draft
          return !(draft === true || draft === "true")
        },
      },
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
