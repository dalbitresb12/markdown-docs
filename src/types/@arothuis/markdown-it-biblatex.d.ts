declare module "@arothuis/markdown-it-biblatex" {
  import MarkdownIt from "markdown-it";

  interface BiblatexOptions {
    /**
     * Where to find the biblatex file (.bib)
     *
     * @default null
     */
    bibPath: string;
    /**
     * Change locale for displaying references and bibliography (.xml)
     *
     * @default __dirname + "/csl/locales-en-US.xml"
     * @see {@link https://github.com/citation-style-language/locales}
     */
    localePath: string;
    /**
     * Change citation style for displaying references and bibliography (.csl)
     *
     * @default __dirname + "/csl/apa-6th-edition.csl"
     * @see {@link https://github.com/citation-style-language/styles}
     */
    stylePath: string;
    /**
     * Which mark to use for suppress-author (don't show author)
     *
     * @default "-"
     */
    suppressAuthorMark: string;
    /**
     * Which mark to use for author-only (only show author)
     *
     * @default "!"
     */
    authorOnlyMark: string;
    /**
     * Which mark to use for composite (inline text citation, i.e. without parentheses)
     *
     * @default "~"
     */
    compositeMark: string;
    /**
     * Which mark to use to signify an infix text for composite citations
     *
     * @default "^"
     */
    infixMark: string;
    /**
     * Mark for placement of bibliography layout
     * (choose carefully to prevent collissions with other tokens)
     *
     * @default "[bibliography]"
     */
    bibliographyMark: string;
    /**
     * Replace bibliography title element
     *
     * @default '<h2 class="bibliography-title">Bibliography</h2>'
     */
    bibliographyTitle: string;
    /**
     * Wrap bibliography in a div
     *
     * @default true
     */
    wrapBibliography: boolean;
    /**
     * Element that wraps bibliography contents
     *
     * @default "div"
     */
    bibliographyContentsWrapper: string;
    /**
     * Element that wraps bibliography entry
     *
     * @default "div"
     */
    bibliographyEntryWrapper: string;
  }

  type PartialBiblatexOptions = Partial<BiblatexOptions>;

  const Biblatex: MarkdownIt.PluginWithOptions<PartialBiblatexOptions>;

  export default Biblatex;
  export { PartialBiblatexOptions as BiblatexOptions };
}
