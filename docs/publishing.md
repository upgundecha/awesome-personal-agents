# Publishing and repository setup

The list is published at [upgundecha/awesome-personal-agents](https://github.com/upgundecha/awesome-personal-agents). These instructions maintain the existing repository.

## Edit locally

Install Git, Node.js 22 or newer, and the [GitHub CLI](https://cli.github.com).

```bash
git clone https://github.com/upgundecha/awesome-personal-agents.git
cd awesome-personal-agents
npm ci --ignore-scripts
npm run lint
```

Make a focused branch, update related documents together, and submit a pull request using the repository template.

## Apply description and topics

The metadata file supplies a description and 20 relevant topics. To apply them with authenticated GitHub CLI access:

```bash
node -e 'const m=require("./docs/github-metadata.json"); require("node:child_process").execFileSync("gh",["repo","edit","upgundecha/awesome-personal-agents","--description",m.description,"--add-topic",m.topics.join(",")],{stdio:"inherit"})'
```

Check the repository About panel after applying metadata. The file alone does not change repository settings.

## Verify publication

1. Confirm `main` is the default branch and GitHub Actions are enabled.
2. Inspect the Lint workflow after a push. Run Check links manually or inspect its weekly run.
3. Run `npm run lint:full` when GitHub API access is available.
4. Confirm the Sponsor button exposes the configured GitHub Sponsors and Buy Me a Coffee destinations.
5. Optionally add a branch ruleset requiring pull requests and a passing lint check.
6. Keep public reporting guidance in CODE_OF_CONDUCT.md current.

## Discoverability

Use the description in GitHub's About field. Keep the README focused on personal AI agents, task execution, memory, tools, self-hosting, and everyday use cases. Avoid keyword stuffing, duplicate entries, or claims of search-ranking guarantees.

See [GitHub topic documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) and the [maintenance guide](maintaining.md).
