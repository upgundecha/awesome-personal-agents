# Personal AI Agents: Selection Guide

Research checked: 30 September 2026. Repository-ready companion to `awesome-personal-agents`.

This guide compares agents that take actions, complete delegated tasks, or proactively assist an individual. It separates persistent personal assistants, computer/browser task agents, knowledge assistants, and specialist scheduling products. These categories overlap, but their products should not be treated as interchangeable.

## Inclusion policy

- Open-source entries must have at least **1,000 GitHub stars** on their canonical repository at the time of review, a verifiable open-source license, and a relevant personal-agent use case.
- Commercial products have no GitHub-star requirement. Record pricing model, availability, and any preview restrictions.
- Stars indicate community interest; they do not establish reliability, security, or task quality.
- A roadmap feature is not a supported capability. Record unverified capabilities as **Unknown**, not **No**.
- Open source and paid are separate dimensions. Open-source software can use paid model APIs or hosted services.
- Self-hosted execution does not mean all data stays local: configured models, search providers, messaging services, and connectors can receive data.

## Choose by the outcome you need

The shortlists below are editorial recommendations based on documented capabilities, not benchmark rankings.

| Your priority | Start by evaluating | Why these are relevant | Deciding question |
| --- | --- | --- | --- |
| An assistant you contact through messaging | OpenClaw, Hermes Agent, NanoClaw, Poke | Messaging access combined with persistent context or recurring work | Does it support your actual channel and required actions? |
| Memory and reusable personal workflows | Hermes Agent, OpenClaw, nanobot | Persistent context, skills, and extensibility | Can you inspect, correct, export, and delete its memory? |
| Ownership and customization | OpenClaw, nanobot, ZeroClaw | Self-hosted runtimes with tools and configurable model providers | How much operation and maintenance will you accept? |
| Explicit execution isolation | NanoClaw, Moltis, IronClaw | Container execution or WASM tool boundaries are documented | Which tools remain outside the boundary, and how are credentials handled? |
| Inexpensive or constrained hardware | PicoClaw, ZeroClaw | Go/Rust implementations designed for a small runtime footprint | What are measured requirements for your workload, excluding the model? |
| Notes, documents, and personal research | Khoj | Document/web grounding, custom agents, and automations | Can it retrieve and cite your sources accurately? |
| Delegated browser and computer tasks | Agent Zero, OpenMuse — CopilotKit, Manus, Claude | Agent workspaces, browser actions, or file-based task execution | Can you inspect progress, intervene, and resume unfinished work? |
| Consumer life administration | Meta Muse, Poke, Wajo / Fo; Instinct subject to access verification | Personal context and everyday connected-service workflows | Is it available in your country and compatible with your services? |
| Work across Microsoft 365 | Copilot Autopilot, when eligible | Persistent workplace agent integrated with Copilot | Are preview access, tenant permissions, and usage budgets available? |
| A hosted personal agent across connected apps | Dots, when eligible; Lindy | Managed execution and connected-app actions | Does your account support the required capabilities and approvals? |
| Professional networking and warm introductions | Boardy | Matches people around stated goals, obtains mutual opt-in, and coordinates meetings | Does its network cover your target people, and are introductions useful? |
| Primarily calendar management | Reclaim, Motion | Scheduling and priority management | Does it handle your calendar provider and scheduling rules? |

## Comparison criteria

| Parameter | What to compare | Evidence to request or test |
| --- | --- | --- |
| Task fit | Life administration, research, files, browsing, email, or scheduling | Complete representative end-to-end tasks rather than isolated chat prompts |
| Autonomy | User-triggered, scheduled, event-triggered, or proactive | Confirm what starts work and where it pauses for input |
| Persistence | Memory, browser sessions, task state, and background execution | Close the interface; reconnect; restart the service and inspect recovery |
| Human assistance | Fully automated or assisted by human operators | Verify escalation triggers, human access to task data, and any additional charges |
| Memory control | Editable preferences, provenance, retention, export, deletion | Correct a remembered fact and verify subsequent behavior |
| Deployment | Local device, own server, vendor cloud, or hybrid | Map the locations of execution, inference, storage, and backups separately |
| Model choice | Fixed models, bring-your-own API keys, or local inference | Verify supported providers and feature parity with the chosen model |
| Interfaces | Web, desktop, mobile, messaging, voice, and notifications | Test supported devices and delivery channels |
| Integrations | Email/calendar providers, apps, APIs, MCP, plugins, and skills | Verify each required read/write action; a connector name alone is insufficient |
| Computer access | Browser, files, shell, graphical desktop, and remote workspace | Identify the execution boundary and supported operating systems |
| Permissions | Action approval, scoped access, sender authentication, and revocation | Test allowed reads, restricted writes, cancellation, and revoked access |
| Credentials | Storage, injection, rotation, and exposure to model/tool code | Inspect documented credential flow and revocation behavior |
| Observability | Plans, tool activity, logs, receipts, and failure reporting | Trace a completed task and explain an unsuccessful one |
| Reliability | Retry behavior, recovery, duplicate prevention, and notifications | Interrupt a task and check that it resumes without duplicate side effects |
| Cost | Subscription, credits/tokens, compute, storage, and maintenance | Calculate cost per successfully completed task |
| Setup effort | Installation, model setup, OAuth, hosting, updates, and backups | Time the first useful task and ongoing maintenance |
| Portability | Data export, model switching, skills, and connector migration | Export useful state and test migration to another provider |
| Availability | Country, account tier, waitlist, beta, and enterprise policies | Verify actual signup and eligibility before shortlisting |
| Project health | Releases, maintenance, issue handling, license, and stars | Review current release activity and maintainer responses |

## Open-source comparison

Star counts are snapshots from the GitHub repository API on the review date. Each project link is the primary evidence source for its count and description. Recheck before publication and when updating the list.

### Deployment, model choice, and intended use

| Project | Stars | License | Deployment / model relationship | Primary fit |
| --- | ---: | --- | --- | --- |
| [OpenClaw](https://github.com/openclaw/openclaw) | 390,801 | MIT | Own device/server; configurable hosted or local providers and harnesses | Broad persistent personal assistant |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | 250,099 | MIT | Self-hosted; configurable model providers | Memory, skill learning, and recurring personal workflows |
| [nanobot](https://github.com/HKUDS/nanobot) | 48,689 | MIT | Local/server gateway; API and local-model options | Customizable Python personal agent |
| [Khoj](https://github.com/khoj-ai/khoj) | 37,542 | AGPL-3.0 | Self-hostable; local or online models | Knowledge, documents, and research |
| [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw) | 32,918 | MIT / Apache-2.0 | Self-hosted Rust runtime; multiple providers including Ollama | Portable personal-agent runtime |
| [NanoClaw](https://github.com/nanocoai/nanoclaw) | 30,865 | MIT | Self-hosted with container execution; Anthropic Agent SDK | Lightweight messaging assistant |
| [PicoClaw](https://github.com/sipeed/picoclaw) | 30,023 | MIT | Self-hosted Go runtime; model-provider configuration | Constrained hardware |
| [Agent Zero](https://github.com/agent0ai/agent-zero) | 19,352 | MIT | Dockerized Linux agent workspace | Computer, browser, and file tasks |
| [IronClaw](https://github.com/nearai/ironclaw) | 12,637 | MIT / Apache-2.0 | Self-hosted Rust agent system | Tool permissions and credential boundaries |
| [OpenMuse — CopilotKit](https://github.com/CopilotKit/openmuse) | 3,270 | MIT | Self-hosted app/workers; model configuration and CopilotKit service key | Inspectable personal-agent application; alpha |
| [Moltis](https://github.com/moltis-org/moltis) | 2,877 | MIT | Self-hosted Rust server; multiple model providers | Persistent assistant with sandboxed command execution |

### Differentiators and trade-offs

Setup estimates are editorial judgments: **Medium** means installing/configuring a runtime and services; **High** means assembling application, worker, or development dependencies. They are not measured installation times.

| Project | Documented differentiator | Setup estimate | What to verify before choosing |
| --- | --- | --- | --- |
| OpenClaw | Messaging channels, local state, interchangeable models/harnesses, extensible skills/tools | Medium | Main-session tools run on the host unless sandboxing is configured; check your configuration |
| Hermes Agent | Persistent memory, conversation recall, reusable skill creation, built-in scheduled jobs | Medium | Memory quality, chosen execution backend, and cost of repeated autonomous work |
| nanobot | Python core, long-term memory, MCP, model routing, WebUI, and scheduled automation | Medium | Released-package capabilities versus current source; keep gateway available for schedules |
| Khoj | Research grounded in personal documents and web content; custom agents and automations | Medium | Retrieval quality, source freshness, and AGPL license obligations for your use |
| ZeroClaw | Single Rust runtime with messaging, shell/browser/HTTP tools, and MCP | Medium | Runtime permissions and feature coverage for your specific provider and channels |
| NanoClaw | Agents execute in their own containers; memory and scheduled jobs | Medium | Container mounts, secrets, SDK/model requirements, and supported channel behavior |
| PicoClaw | Small Go runtime and multiple hardware architectures | Medium | Published memory claims exclude the cost of running a local language model; measure your setup |
| Agent Zero | Linux computer, browser, projects, skills, and plugins | Medium–High | Host bridge exposure, persistence, and access boundaries for computer tasks |
| IronClaw | WASM isolation for untrusted tools, endpoint allowlisting, credential injection, and tool audit logs | Medium | Coverage of each tool boundary and real behavior when a requested action is blocked |
| OpenMuse — CopilotKit | Persistent browser, optional Linux workspace, editable memory, task plans and approvals | High | Alpha status and required service configuration; autonomous checkout and graphical desktop are roadmap items |
| Moltis | Sandboxed command execution, voice, memory, scheduling, browser automation, and MCP | Medium | Your container runtime, connector coverage, and recovery on your deployment |

## Commercial and hosted comparison

Pricing is expressed as a model rather than a fixed amount because subscriptions, credits, quotas, and eligibility change. Verify the linked official pages before purchase. Setup estimates are editorial judgments; connector authorization can add effort.

| Product | Main use | Execution / access | Pricing model | Setup estimate / status |
| --- | --- | --- | --- | --- |
| [Meta Muse](https://ai.meta.com/muse/) | Persistent consumer personal assistance | Dedicated vendor-cloud computer; app and WhatsApp | Free usage plus subscriptions | Low–Medium; regional rollout |
| [Wajo / Fo](https://wajo.ai/) | Real-world life administration and coordination | Hosted action agent with human assistance when needed | Free Mini; invite-only free OG; Pro by contact | Low–Medium; confirm regional availability |
| [Poke](https://poke.com/) | Personal messaging assistant, reminders, app actions | Hosted; messaging and connected services | Free tier; Pro/Ultra subscriptions with limits | Low–Medium |
| [Lindy](https://www.lindy.ai/pricing) | Personal/team routines, inbox and meeting work | Hosted; messaging, apps, computer use, MCP | Paid plans and work credits; introductory credits | Low–Medium |
| [Manus](https://manus.im/) | Delegated research, browser tasks, and deliverables | Managed agent service; browser operator and desktop options | Free/Pro/Team; credits | Low–Medium |
| [Claude / Cowork capabilities](https://claude.com/product/cowork) | Files, research, deliverables, and scheduled work | Desktop/web/mobile capabilities; browser and connected tools | Paid plan; plan-specific limits | Low–Medium; current page says Cowork is becoming Claude |
| [Dots](https://help.openai.com/en/articles/20001554-manage-dots-in-chatgpt-workspaces) | Personal agent across connected apps | Cloud browser/computer; optional local access; supported messaging | Commercial account eligibility; confirm current plan terms | Low–Medium; beta, gradual rollout |
| [Copilot Autopilot](https://blogs.microsoft.com/blog/2026/09/25/introducing-the-new-copilot-with-home-code-and-autopilot/) | Persistent personal workplace agent | Microsoft Copilot managed experience | Usage-based billing | Private preview; tenant/admin setup may be required |
| [Instinct](https://instinct.com/) | Proactive everyday assistance by text or phone | Connected apps/devices; phone/computer actions | Unknown from verified product page | Signup, price, and availability unverified |
| [Perplexity Comet](https://www.perplexity.ai/comet) | Browser-based task assistance | Browser assistant | Confirm current plan requirements | Low–Medium; browser-focused category |
| [Boardy](https://www.boardy.ai/) | Professional networking, warm introductions, and follow-through | Hosted specialist agent; conversation, email, and calendar coordination | Terms describe free use; Pro is advertised, but current fees are unverified | Low–Medium; specialist networking category |
| [Motion](https://www.usemotion.com/pricing) | Task planning and calendar optimization | Managed calendar/project service | Paid plans | Low–Medium; specialist category |
| [Reclaim](https://reclaim.ai/pricing) | Automated scheduling and time management | Managed calendar service | Free and paid plans | Low–Medium; specialist category |

Meta Muse and OpenMuse — CopilotKit belong to the same broad personal-agent category. Muse is a managed consumer product; OpenMuse is an independent application you can inspect and build on. OpenMuse is not Meta's official open-source release.

Wajo belongs under commercial personal agents, with a **Life administration / concierge** subcategory and a **Human-assisted** label. Its official page describes calls, emails, scheduling, bookings, and purchases, with escalation to executive assistants. Do not assume every completed task is fully automated.

Boardy belongs under **Specialist personal agents → Networking and introductions**. It gathers context about whom you need to meet, finds relevant people, seeks mutual opt-in, and coordinates introductions and meetings. Evaluate match relevance, consent, scheduling accuracy, and follow-through. Its official terms describe free use, while product material advertises Pro; confirm current pricing rather than assuming Pro is paid or free.

For hosted products, explicitly verify memory export/deletion, model selection, recurring execution, approval boundaries, and data retention. These are not established as equivalent by the comparison above.

## Make the decision in three steps

### 1. Apply hard requirements

Eliminate a product if it fails a requirement you cannot compromise on: country/account eligibility, supported email or calendar provider, deployment location, required task type, operating system, license, or maximum budget. For this list, apply the 1,000-star gate to open-source projects before any scoring.

### 2. Score the survivors

Use a 0–5 scale for observed performance: 0 = requirement fails, 1 = major gaps, 2 = substantial workaround, 3 = acceptable, 4 = strong, 5 = excellent in your test. Mark **Unknown** when evidence is missing. Do not award zero simply because a vendor did not document something.

| Criterion | Convenience-first personal use | Ownership-first technical use |
| --- | ---: | ---: |
| Task completion and output quality | 30% | 25% |
| Required integrations and interfaces | 20% | 10% |
| Persistence, memory, and recurring work | 15% | 15% |
| Data, permission, and credential control | 10% | 20% |
| Setup and maintenance burden | 15% | 5% |
| Total cost per completed task | 10% | 10% |
| Customization and portability | 0% | 15% |
| **Total** | **100%** | **100%** |

Weighted score out of 100 = sum of (criterion score / 5 × percentage weight). These weights are suggested starting points, not universal priorities. Customize them before testing. If a positively weighted criterion is Unknown, leave the overall score incomplete and report evidence coverage instead of presenting a misleading rank.

### 3. Test with the same small workload

Use the same inputs, account permissions, and success criteria for each candidate. For model-configurable systems, record the exact model, provider, and execution configuration; results compare the complete setup, not just the runtime.

| Test | Example | What to measure |
| --- | --- | --- |
| Personal research | Find three options satisfying stated constraints and write a sourced comparison | Factual accuracy, constraint satisfaction, citation quality, cost |
| Email and calendar | Prepare a reply and propose an event for review | Correct context, time zone, permissions, and review behavior |
| Memory | Remember a preference, then explicitly correct it | Cross-session recall, correction, and unwanted inference |
| Recurring work | Schedule a brief and close the interface | Delivery, persistence, failure notification, actual runtime requirement |
| Recovery | Interrupt a multi-step task and reconnect | State retention, resumption, and duplicate actions |
| Access boundary | Permit one workspace and attempt an out-of-scope action | Whether the configured boundary is enforced and clearly reported |

Record success rate, manual interventions, elapsed time, and cost. Do not generalize a successful demo to all tasks.

## Compare total cost

Monthly total cost = subscription + model/API usage + compute/storage + other paid services + estimated maintenance effort.

For API-based agents, include retries, tool-result context, recurring runs, and background memory work. For hosted agents, compare included usage and overages against the same workload. For local models, include hardware capacity and energy. Measure **cost per successfully completed task** so cheap failed runs do not appear attractive.

## Maintain the guide

Store a last-verified date for each entry. Recheck canonical repository, star threshold, license, current release, supported features, pricing model, and availability on each update. Keep preview labels visible and move roadmap features into supported columns only when confirmed by a release or documentation.

## Primary sources

The project and product links in the comparison tables are primary sources. Additional official evidence used:

- [Boardy product and matching workflow](https://www.boardy.ai/)
- [Boardy terms and fees](https://www.boardy.ai/terms-and-conditions)
- [Wajo product, pricing, and human assistance](https://wajo.ai/)
- [Meta Muse launch and pricing/rollout description](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/)
- [Manus membership options](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus)
- [Manus credit usage](https://manus.im/help/credits)
- [Reclaim agentic scheduling overview](https://help.reclaim.ai/en/articles/14846468-reclaim-ai-2-0-overview)
- [Agent Zero license](https://github.com/agent0ai/agent-zero/blob/main/LICENSE)

This is a documentation-based comparison. No hands-on benchmark, security certification, or guaranteed task success is claimed.
