export default {
  settings: {
    bullet: '-',
    fences: true,
    listItemIndent: 'one',
    resourceLink: true, // false (default) should be preferred later
    rule: '-',
    tightDefinitions: true,
  },
  plugins: [
    'preset-lint-markdown-style-guide',
    ['frontmatter', { type: 'yaml', marker: '-' }],
    ['gfm', { singleTilde: false }],
    ['lint-definition-case', false],
    ['lint-fenced-code-flag', { allowEmpty: true }],
    ['lint-final-newline'],
    ['lint-hard-break-spaces', false],
    ['lint-hard-break-style', 'backslash'],
    ['lint-linebreak-style', 'unix'],
    ['lint-list-item-indent', 'space'],
    ['lint-list-item-spacing', { checkBlanks: true }],
    ['lint-maximum-heading-length', false],
    ['lint-maximum-line-length', false],
    ['lint-no-duplicate-definitions'],
    ['lint-no-duplicate-headings', false],
    ['lint-no-duplicate-headings-in-section'],
    ['lint-no-emphasis-as-heading', false],
    ['lint-no-file-name-articles', false],
    ['lint-no-file-name-irregular-characters', '\\.a-zA-Z0-9-_!'],
    ['lint-no-file-name-mixed-case', false],
    ['lint-no-heading-content-indent'],
    ['lint-no-heading-indent'],
    ['lint-no-heading-like-paragraph'],
    ['lint-no-html'],
    ['lint-no-missing-blank-lines', { exceptTightLists: true }],
    ['lint-no-shortcut-reference-link', false],
    ['lint-no-tabs'],
    ['lint-no-undefined-references'],
    ['lint-no-unused-definitions'],
    ['lint-ordered-list-marker-value', 'ordered'],
    ['lint-osu-links'],
    ['lint-osu-wiki-links'],
    ['lint-table-cell-padding', false],
    ['lint-table-pipe-alignment', false],
    ['osu/lint-table-align-style'],
    ['osu/lint-table-cell-padding'],
    ['osu/lint-table-no-missing-cells'],
  ],
};
