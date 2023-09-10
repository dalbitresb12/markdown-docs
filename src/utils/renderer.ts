import BiblatexPlugin from "@arothuis/markdown-it-biblatex";
import MarkdownIt from "markdown-it";
import AnchorPlugin from "markdown-it-anchor";
import AttrsPlugin from "markdown-it-attrs";
import HLJSPlugin from "markdown-it-highlightjs";
import MultiMdTablePlugin from "markdown-it-multimd-table";
import ReplaceLinkPlugin, { ReplaceLinkFn } from "markdown-it-replace-link";
import TocPlugin from "markdown-it-toc-done-right";

export type SlugifyFn = (s: string) => string;

export interface RendererOptions {
  slugify: SlugifyFn;
  replaceLink?: ReplaceLinkFn;
  referencesFile?: string;
}

export class Renderer {
  private renderer: MarkdownIt;

  constructor(options?: RendererOptions) {
    this.renderer = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });
    this.use(ReplaceLinkPlugin, { replaceLink: options?.replaceLink });
    this.use(
      BiblatexPlugin,
      {
        bibPath: options?.referencesFile,
      },
      !!options?.referencesFile,
    );
    this.use(AnchorPlugin, { slugify: options?.slugify });
    this.use(TocPlugin, { slugify: options?.slugify });
    this.use(MultiMdTablePlugin, {
      multiline: true,
      rowspan: true,
      headerless: true,
      multibody: true,
      autolabel: true,
    });
    this.use(HLJSPlugin, { inline: true });
    this.use(AttrsPlugin);
  }

  private use<T>(plugin: MarkdownIt.PluginWithOptions<T>, options?: T, enabled: boolean = true) {
    if (!enabled) return;
    this.renderer.use(plugin, options);
  }

  render(source: string): string {
    return this.renderer.render(source);
  }
}
