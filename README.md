# Awesome Personal Agents [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of personal AI agents that take actions, remember context, complete delegated tasks, and help with everyday life and work.

Explore open-source agents you can run yourself, hosted assistants, computer and browser agents, and specialists for networking and scheduling.

**Start here:** [Selection guide](docs/selection-guide.md) - compare task fit, autonomy, memory, deployment, privacy, integrations, permissions, cost, and setup effort.

Research verified: **30 September 2026**. Descriptions are based on primary documentation, not hands-on benchmarks. Availability and pricing can change.

## Contents

- [Scope and inclusion](#scope-and-inclusion)
- [Legend](#legend)
- [Open-source personal agents](#open-source-personal-agents)
  - [Persistent personal assistants](#persistent-personal-assistants)
  - [Computer and task agents](#computer-and-task-agents)
  - [Personal knowledge and research](#personal-knowledge-and-research)
- [Commercial and hosted agents](#commercial-and-hosted-agents)
  - [Personal assistants and life administration](#personal-assistants-and-life-administration)
  - [Browser and delegated task agents](#browser-and-delegated-task-agents)
  - [Specialist personal agents](#specialist-personal-agents)
  - [Preview and availability-restricted agents](#preview-and-availability-restricted-agents)
- [Quick selection](#quick-selection)
- [Support](#support)

## Scope and inclusion

An entry should complete tasks or act through tools for an individual: browsing, working with files, managing schedules, coordinating people, or executing recurring workflows. Persistent assistants and user-triggered task agents are identified separately.

- Open-source projects must have **at least 1,000 GitHub stars** on their canonical repository and a verified open-source license.
- Commercial products have no star requirement. Free access does not make a hosted product open source.
- Features must be documented; roadmap capabilities are not treated as available.
- Frameworks and generic chat interfaces are outside the main list unless they provide a usable personal-agent application.
- Stars indicate community interest, not reliability or security. See [contribution criteria](CONTRIBUTING.md#entry-requirements).

## Legend

| Label                     | Meaning                                                        |
| ------------------------- | -------------------------------------------------------------- |
| 🏠 Self-hosted            | You operate the agent runtime or application                   |
| ☁️ Hosted                 | A vendor operates the service                                  |
| 💳 Paid / usage costs     | Subscription, model API, compute, or service charges may apply |
| 🆓 Free tier              | Some service usage is free, subject to limits                  |
| 🧪 Alpha / beta / preview | Availability or capabilities are still evolving                |
| 🤝 Human-assisted         | Human operators may help complete tasks                        |

License and cost are separate: open-source software can incur paid model and hosting costs. Self-hosting does not imply that models, search providers, or connected services receive no data.

## Open-source personal agents

All entries below passed the 1,000-star threshold on the review date. Counts, licenses, deployment details, and trade-offs are in the [selection guide](docs/selection-guide.md#open-source-comparison).

### Persistent personal assistants

- [Hermes Agent](https://github.com/NousResearch/hermes-agent) - Nous Research's personal agent with persistent memory, conversation recall, reusable skills, and scheduled jobs. **MIT · 🏠 · 💳**.
- [IronClaw](https://github.com/nearai/ironclaw) - Personal agent with WebAssembly isolation for untrusted tools, scoped permissions, credential injection, and tool audit logs. **MIT / Apache-2.0 · 🏠 · 💳**.
- [Moltis](https://github.com/moltis-org/moltis) - Persistent Rust agent server with sandboxed commands, memory, voice, scheduling, browser automation, and MCP. **MIT · 🏠 · 💳**.
- [NanoClaw](https://github.com/nanocoai/nanoclaw) - Lightweight messaging assistant with container-isolated agent execution, memory, and scheduled jobs, built on Anthropic's Agent SDK. **MIT · 🏠 · 💳**.
- [nanobot](https://github.com/HKUDS/nanobot) - Python personal-agent runtime with WebUI, messaging integrations, long-term memory, MCP, model routing, and scheduled automation. **MIT · 🏠 · 💳**.
- [OpenClaw](https://github.com/openclaw/openclaw) - Personal assistant with persistent local state, messaging channels, companion apps, skills, and configurable model providers and harnesses. **MIT · 🏠 · 💳**.
- [PicoClaw](https://github.com/sipeed/picoclaw) - Lightweight Go personal assistant designed for inexpensive hardware and multiple processor architectures. **MIT · 🏠 · 💳**.
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw) - Rust personal-agent runtime with configurable model providers, messaging channels, shell/browser tools, and MCP. **MIT / Apache-2.0 · 🏠 · 💳**.

### Computer and task agents

- [Agent Zero](https://github.com/agent0ai/agent-zero) - Agent application with a Dockerized Linux computer, browser, projects, files, skills, and plugins for delegated work. **MIT · 🏠 · 💳**.
- [OpenMuse - CopilotKit](https://github.com/CopilotKit/openmuse) - Personal-agent application with a persistent browser, optional Linux workspace, editable memory, visible plans, and action approvals. An independent project; autonomous checkout and graphical desktop support are roadmap items. **MIT · 🏠 · 💳 · 🧪 Alpha**.

### Personal knowledge and research

- [Khoj](https://github.com/khoj-ai/khoj) - Self-hostable personal knowledge assistant with document/web research, custom agents, and scheduled automations using local or online models. **AGPL-3.0 · 🏠 · 💳**.

## Commercial and hosted agents

### Personal assistants and life administration

- [Lindy](https://www.lindy.ai/) - Personal and team assistant for inbox management, meeting preparation, follow-ups, scheduled routines, and connected-tool actions. [Paid plans and work credits](https://www.lindy.ai/pricing). **☁️ · 💳**.
- [Meta Muse](https://ai.meta.com/muse/) - Consumer personal agent with memory, proactive suggestions, connected services, and a persistent cloud computer for everyday tasks. [Free usage and subscription plans; regional rollout](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/). **☁️ · 🆓 · 💳**.
- [Poke](https://poke.com/) - Proactive messaging assistant with email/calendar access, app integrations, memory, reminders, and background automations. Free, Pro, and Ultra plans. **☁️ · 🆓 · 💳**.
- [Wajo / Fo](https://wajo.ai/) - Personal action agent for calls, emails, appointments, bookings, purchases, and real-world coordination, with executive-assistant help when needed. Free Mini, invite-only free OG, and contact-for-pricing Pro offerings. **☁️ · 🆓 · 💳 · 🤝**.

### Browser and delegated task agents

- [Claude / Cowork capabilities](https://claude.com/product/cowork) - Delegated work across files and connected tools, browser operations, deliverables, and scheduled tasks. Paid-plan access; the current page says Cowork is becoming Claude. **☁️ · 💳**.
- [Manus](https://manus.im/) - General-purpose task agent for research, browser operations, websites, slides, and other deliverables. [Free, Pro, and Team plans](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus) with credit-based usage. **☁️ · 🆓 · 💳**.
- [Perplexity Comet](https://www.perplexity.ai/comet) - Browser-based assistant for web tasks, research, email assistance, and shopping workflows. Verify current plan requirements. **☁️ Hosted AI service + browser client**.

### Specialist personal agents

- [Boardy](https://www.boardy.ai/) - Networking and introductions agent that gathers your goals, finds relevant people, obtains mutual opt-in, and coordinates warm introductions and meetings. [Terms describe free use](https://www.boardy.ai/terms-and-conditions); current Pro pricing is unverified. **☁️ · Networking**.
- [Motion](https://www.usemotion.com/) - Specialist task and calendar assistant that prioritizes work and continuously adjusts schedules. [Paid plans](https://www.usemotion.com/pricing). **☁️ · 💳 · Scheduling**.
- [Reclaim](https://reclaim.ai/) - Specialist scheduling agent for tasks, habits, meetings, and focus time across supported calendars. [Free and paid plans](https://reclaim.ai/pricing). **☁️ · 🆓 · 💳 · Scheduling**.

### Preview and availability-restricted agents

- [Copilot Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/) - Microsoft's persistent, proactive personal workplace agent within Copilot. Private preview and usage-based billing. **☁️ · 💳 · 🧪 Private preview**.
- [Dots](https://help.openai.com/en/articles/20001554-manage-dots-in-chatgpt-workspaces) - OpenAI personal agents with connected-app actions and cloud computer/browser capabilities, plus optional local access and supported messaging integrations. Gradual beta rollout; confirm current account eligibility and plan terms. **☁️ · 💳 · 🧪 Beta**.
- [Instinct](https://instinct.com/) - Personal assistant connecting to apps and devices, reachable by text or phone, with proactive follow-ups and everyday task execution. Pricing, signup availability, and geographic coverage need verification. **☁️ · Availability unverified**.

## Quick selection

These are starting points based on documented features, not rankings.

| If you want…                             | Evaluate first                    |
| ---------------------------------------- | --------------------------------- |
| A self-hosted messaging assistant        | OpenClaw, Hermes Agent, NanoClaw  |
| Memory and reusable workflows            | Hermes Agent, nanobot, OpenClaw   |
| Inspectable execution boundaries         | IronClaw, Moltis, NanoClaw        |
| A small runtime for constrained hardware | PicoClaw, ZeroClaw                |
| Personal documents and research          | Khoj                              |
| Computer/browser workspaces              | Agent Zero, OpenMuse - CopilotKit |
| Managed task execution and deliverables  | Manus, Claude                     |
| Everyday life administration             | Meta Muse, Poke, Wajo / Fo        |
| Professional networking                  | Boardy                            |
| Calendar and priority management         | Reclaim, Motion                   |

Use the [full selection guide](docs/selection-guide.md#make-the-decision-in-three-steps) to apply hard requirements, compare parameters, choose weights, and evaluate candidates on the same workload. Human assistance, model choice, and deployment configuration affect comparisons.

## Contributing

Read the [contribution guidelines](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md), then open a pull request or use an issue template. Include primary sources, a verified license and star count for open-source projects, and the date checked. Keep descriptions factual and concise.

## Support

If this list helps you, you can [sponsor me on GitHub](https://github.com/sponsors/upgundecha) or [buy me a coffee](https://buymeacoffee.com/upgundecha) to support its maintenance.
