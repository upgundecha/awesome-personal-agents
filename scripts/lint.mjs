import lint from 'awesome-lint/index.js';
import config from 'awesome-lint/config.js';
import githubRule from 'awesome-lint/rules/github.js';

// Keep content lint usable before publication and without GitHub API access.
// Run `npm run lint:full` separately to include repository metadata checks.
const contentRules = config.filter(entry => (Array.isArray(entry) ? entry[0] : entry) !== githubRule);
await lint.report({filename: 'README.md', config: contentRules});
