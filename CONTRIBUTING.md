# Contributing

Thank you for helping maintain Awesome Personal Agents.

## Entry requirements

1. The product should act through tools, complete delegated work, coordinate people, or run recurring workflows for an individual. Generic chat interfaces and agent-building frameworks do not qualify by themselves.
2. An open-source project must have **at least 1,000 GitHub stars** on its canonical repository when reviewed. Link its license and record the star count and verification date. Forks must qualify on their own; upstream stars do not count.
3. Commercial products have no star requirement. Record their pricing model and availability restrictions. A free service is not automatically open source.
4. Use official repositories, documentation, product pages, release notes, or pricing pages as evidence. Include no affiliate or tracking URLs.
5. Describe supported capabilities, not marketing promises or roadmap items. Mark unknown information explicitly. Label alpha, beta, and preview products.
6. Choose the most appropriate category. Add an entry once and use the selection guide to explain overlapping use cases.
7. Include ongoing costs where relevant: model APIs, hosting, subscriptions, credits, and service dependencies. Do not label an open-source runtime as cost-free to operate.

Read the [code of conduct](CODE_OF_CONDUCT.md) when participating in project spaces. Disclose any affiliation with a suggested product.

## Submit a change

- Keep entries alphabetized within their category, ignoring capitalization.
- Use `- [Name](https://example.com) - One factual sentence. **Relevant labels**.`.
- Keep the README concise; place detailed comparisons in `docs/selection-guide.md`.
- In the pull request description, include the category, user-facing value, primary evidence, last-verified date, and applicable license/star count.
- Update the selection guide when a change affects its recommendations, comparison tables, or inclusion status.
- For corrections, explain what changed and cite the primary source.

Run `npm ci --ignore-scripts` and `npm run lint` with Node.js 22 or newer before submitting. Explain any checks you could not run.

## Review checks

- Does the entry fit the personal-agent scope?
- Does its canonical open-source repository still meet the 1,000-star threshold?
- Is the license verified, with dual licensing represented accurately?
- Are current features separated from planned features?
- Are deployment, human assistance, pricing, and availability described accurately?
- Do links and Markdown anchors resolve, and are names consistent between documents?
- Are unverified capabilities marked Unknown instead of No?

Stars are an eligibility rule, not a quality or security score. Avoid untested performance claims and unsupported rankings. Do not add installation commands unless they are necessary and independently checked.

By contributing original documentation, you agree to publish it under this repository's [CC0 1.0 dedication](LICENSE). Third-party project licenses remain unchanged.
