// Accelance — service page content. One entry per service; no shared boilerplate
// (Phase 2 §9 rule: kill duplicate service copy). Partners listed are confirmed only.
export const SERVICES = {
  'process-assessments': {
    name: 'Process Assessments',
    hook: "You can't automate what you haven't measured.",
    sub: 'Find out exactly where your process is losing time before you automate anything.',
    opening: 'Automation that starts with a tool instead of a diagnosis is how failed pilots happen. We start by measuring the process you already run — then recommend the smallest change that moves it.',
    bullets: [
      { t: 'A current-state map', d: 'How work actually flows across your ERP, CRM, and operations — from system evidence, not workshop opinions.' },
      { t: 'Bottleneck analysis', d: 'Where time, handoffs, and exceptions accumulate — ranked by operational cost, not anecdote.' },
      { t: 'A governed roadmap', d: 'A prioritized automation roadmap, with a recommended governance tier for every candidate step.' }
    ],
    governance: 'Assessment work is read-only by definition — nothing in your systems is touched. Every later automation candidate leaves the assessment already tagged autonomous, review-required, or mandatory-approval.',
    partners: [],
    hasDiagram: false,
    related: [
      { label: 'Process Mining', href: 'Service.dc.html?s=process-mining' },
      { label: 'Intelligent BPM', href: 'Service.dc.html?s=intelligent-bpm' }
    ]
  },
  'intelligent-bpm': {
    name: 'Intelligent Business Process Management',
    hook: "Workflows shouldn't need a rebuild to get better.",
    sub: 'Self-improving workflow orchestration across your existing process layer — no rebuild required.',
    opening: 'Most BPM programs fail by starting over. We orchestrate on top of the workflow logic your teams already trust — and let it improve itself, with people at the checkpoints that matter.',
    bullets: [
      { t: 'Orchestration on what exists', d: 'Workflow orchestration layered onto your current ERP/CRM process logic — not a parallel system your teams have to migrate to.' },
      { t: 'Improvement loops', d: 'Workflows that measure their own cycle times and propose refinements — every proposal reviewed before it applies.' },
      { t: 'Visible logic', d: 'Process logic your operations team can read and adjust — not a black box only vendors can maintain.' }
    ],
    governance: 'Workflow refinements are proposals, never silent changes: routine re-sequencing runs autonomous, logic changes are review-required, and anything touching approvals or payments is mandatory-approval.',
    partners: [],
    hasDiagram: true,
    related: [
      { label: 'Process Mining', href: 'Service.dc.html?s=process-mining' },
      { label: 'Robotic Process Automation', href: 'Service.dc.html?s=rpa' }
    ]
  },
  'process-mining': {
    name: 'Process Mining',
    hook: 'Your systems already logged the answer.',
    sub: 'Surface hidden inefficiencies directly from the event logs your systems already generate.',
    opening: "You don't need another round of interviews to find out where the process breaks. The event data in your ERP and CRM already recorded it — mining makes it legible.",
    bullets: [
      { t: 'Evidence, not assumptions', d: 'Findings drawn from your own event data — the process as it runs, not as the manual describes it.' },
      { t: 'Variant analysis', d: 'Every path a case actually takes — including the exception routes nobody documented.' },
      { t: 'Discovery becomes action', d: 'Findings flow directly into Process Assessments and BPM work, so analysis never ends as a slide deck.' }
    ],
    governance: "Mining is observation, not intervention — read-only access, results logged like everything else. It's how we decide what deserves a governance tier at all.",
    partners: [],
    hasDiagram: false,
    related: [
      { label: 'Process Assessments', href: 'Service.dc.html?s=process-assessments' },
      { label: 'Intelligent BPM', href: 'Service.dc.html?s=intelligent-bpm' }
    ]
  },
  'rpa': {
    name: 'Robotic Process Automation',
    hook: "Rules for the work that doesn't need judgment.",
    sub: "Rules-based automation for the work that doesn't need judgment — freeing agentic AI for the work that does.",
    opening: "RPA didn't fail — it was asked to do work that needed judgment. We keep bots on the deterministic work they're good at, and draw a hard boundary where agentic AI takes over.",
    bullets: [
      { t: 'Deterministic automation', d: 'High-volume, rules-clear tasks — data entry, reconciliation, transfers — automated end to end.' },
      { t: 'Built with UiPath', d: "Delivered on UiPath, a confirmed Accelance partner platform — not a proprietary bot framework you can't staff for." },
      { t: 'A clean handoff line', d: 'An explicit boundary between what stays rules-based and what escalates to a governed agent.' }
    ],
    governance: "Bots run autonomous by design — that's the point of rules. The moment a case needs interpretation, it escalates into the agentic layer and inherits the three-tier model.",
    partners: ['UiPath'],
    hasDiagram: false,
    related: [
      { label: 'Agentic AI', href: 'AgenticAI.dc.html' },
      { label: 'Intelligent BPM', href: 'Service.dc.html?s=intelligent-bpm' }
    ]
  },
  'crm': {
    name: 'CRM',
    hook: 'One governed view of the customer — on the CRM you already run.',
    sub: 'Customer data unification and agentified CRM workflows, built on your existing platform.',
    opening: 'The fix for a messy CRM is rarely a new CRM. We unify customer data and agentify the workflows around it — on the platform your team already knows.',
    bullets: [
      { t: 'One governed customer view', d: 'Unified across sales, service, and operations — deduplicated, attributable, auditable.' },
      { t: 'Agentified workflows', d: 'Follow-ups, routing, and data hygiene proposed by agents — approved by your rules.' },
      { t: 'On your platform', d: 'Delivered on Salesforce and Microsoft platforms — both confirmed Accelance partners.' }
    ],
    governance: 'Customer-facing actions default to review-required. Anything that changes account ownership or pricing is mandatory-approval, without exception.',
    partners: ['Salesforce', 'Microsoft'],
    hasDiagram: false,
    related: [
      { label: 'ERP', href: 'Service.dc.html?s=erp' },
      { label: 'Agentic AI', href: 'AgenticAI.dc.html' }
    ]
  },
  'erp': {
    name: 'ERP',
    hook: "Your ERP isn't outdated. It's just missing a brain.",
    sub: 'We agentify the ERP you already run — SAP and Microsoft included — so it acts on its own information, safely.',
    opening: 'Rip-and-replace is a five-year project with a two-year shelf life. Augmentation starts working in weeks, because the system of record stays exactly where it is.',
    bullets: [
      { t: 'Acts on its own data', d: 'Purchase orders, exceptions, and reconciliations handled by agents reading the data your ERP already holds.' },
      { t: 'No migration prerequisite', d: 'The agentic layer sits on top of SAP and Microsoft ERP — confirmed partner platforms — not in place of them.' },
      { t: 'Reversible by design', d: 'Every agent action on the ERP is logged and reversible — the audit trail is part of the architecture.' }
    ],
    governance: "ERP is the system of record, so the defaults are conservative: read-and-propose first, autonomous only where you've explicitly cleared it.",
    partners: ['SAP', 'Microsoft'],
    hasDiagram: false,
    related: [
      { label: 'CRM', href: 'Service.dc.html?s=crm' },
      { label: 'Process Mining', href: 'Service.dc.html?s=process-mining' }
    ]
  },
  'custom-software': {
    name: 'Custom Software',
    hook: 'For the gaps no platform closes.',
    sub: 'Purpose-built systems for the gaps no off-the-shelf platform closes.',
    opening: "We build custom software reluctantly — and that's a feature. If a platform you already own can close the gap, we'll tell you. When it genuinely can't, we build exactly the missing piece.",
    bullets: [
      { t: 'The missing piece only', d: 'Scoped to the gap — not a parallel platform that duplicates what your ERP or CRM already does.' },
      { t: 'Governed from day one', d: 'Anything we build that acts autonomously inherits the same three-tier approval model as everything else.' },
      { t: 'Low-code where it fits', d: 'Delivered on OutSystems — a confirmed Accelance partner — when low-code gets you there faster.' }
    ],
    governance: "Custom systems inherit governance, they don't reinvent it — same confirmation cards, same audit trail, same tiers.",
    partners: ['OutSystems'],
    hasDiagram: false,
    related: [
      { label: 'Agentic AI', href: 'AgenticAI.dc.html' },
      { label: 'Cloud & Managed Services', href: 'Service.dc.html?s=cloud-managed-services' }
    ]
  },
  'cloud-managed-services': {
    name: 'Cloud & Managed Services',
    hook: 'The layer underneath everything, kept running.',
    sub: 'The operational layer underneath all of the above, kept running.',
    opening: 'Agentic systems are only as trustworthy as the infrastructure they run on. We run that layer — including the audit and approval infrastructure itself — as a managed service.',
    bullets: [
      { t: 'Managed operations', d: 'Monitoring, patching, and capacity for the systems that carry your agentic layer.' },
      { t: 'The audit trail, guaranteed', d: 'The governance log is treated as production-critical infrastructure — retained, backed up, and available to compliance.' },
      { t: 'On Microsoft cloud', d: 'Operated on Microsoft cloud infrastructure — a confirmed Accelance partner.' }
    ],
    governance: 'Infrastructure changes follow the same rules as agent actions: routine ops run autonomous and logged; anything touching the audit infrastructure is mandatory-approval.',
    partners: ['Microsoft'],
    hasDiagram: false,
    related: [
      { label: 'ERP', href: 'Service.dc.html?s=erp' },
      { label: 'Custom Software', href: 'Service.dc.html?s=custom-software' }
    ]
  }
};
