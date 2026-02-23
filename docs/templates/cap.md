---
title: "[Capstone Name]"
sidebar_position: 99
---

# [Capstone Name]

> **Template Type:** Term capstone  
> **Purpose:** Integrate multiple weeks/modules into a customer-ready, measurable outcome  
> **Default stance:** Vertical-agnostic unless the capstone explicitly defines a vertical

---

## Capstone Outcome (Measurable)

Build and present [integrated system / suite / workflow] that combines skills from [weeks/modules] and demonstrates:

- [Integrated technical competency]
- [Business value competency]
- [Operational/documentation competency]

### Required success criteria
- [ ] [Integration requirement #1]
- [ ] [Integration requirement #2]
- [ ] [Measurement requirement]
- [ ] [Demo requirement]
- [ ] [Documentation requirement]

---

## Why This Capstone Exists

[Explain how this capstone validates term-level learning and prepares the learner for the next term/final suite.]

---

## Capstone Brief

### Problem domain
[Describe the workflow/system challenge]

### Users / stakeholders
- Primary: [role]
- Secondary: [role]
- Reviewer/evaluator: [role]

### KPI claim (required)
This capstone should improve or demonstrate:
- [KPI #1]
- [KPI #2]

If using simulated data, label all claims **SIMULATED**.

---

## Scope Definition

### In scope
- [Integrated component/workflow #1]
- [Integrated component/workflow #2]
- [Integrated component/workflow #3]

### Out of scope
- [Feature/system #1]
- [Feature/system #2]

### Integration requirement
You must integrate at least:
- [X] previously built components/artifacts
- [Y] workflow stages
- [Z] shared data objects/events

---

## Prerequisites

- [Required completed weeks/projects]
- [Required tooling]
- [Required environment]

### Readiness checklist
- [ ] [Check #1]
- [ ] [Check #2]
- [ ] [Check #3]

---

## Time Budget

**Target:** [X–Y hours]  
**Recommended schedule:** [e.g., 2 weeks / 4 sessions / 6 sessions]

### Suggested breakdown
- **[Xh]** Capstone planning + integration design
- **[Xh]** Implementation + integration
- **[Xh]** Testing + hardening
- **[Xh]** Demo + report + packaging

---

## Required Artifacts

- `brief.md` — capstone brief + scope + KPI claim
- `plan.md` — integration plan and milestones
- `arch.md` — system architecture/integration map
- `events.md` — shared events/data contracts (if applicable)
- `risk.md` — risk/threat checklist
- `test.md` — integration test plan + results
- `deploy.md` — deployment/runbook
- `demo.md` — demo script + evidence
- `report.md` — capstone review (results, limitations, next steps)
- `log.md` — versioned changelog

---

## Exact Capstone Execution Plan

### Phase 1 — Capstone planning (Timebox: [Xh])

#### Objective
Define integration scope, system design, and success criteria before implementation.

#### Instructions
1. Complete `brief.md` with problem, scope, users, and KPI claim.
2. Write `plan.md` with milestones and work sessions.
3. Draft `arch.md` showing component boundaries and data flow.
4. Define `events.md` (or shared schema notes) for integration points.
5. Draft `risk.md` and identify top risks.

#### Pass check
- [ ] Scope is clear and bounded
- [ ] Integration points are defined
- [ ] KPI claim is measurable
- [ ] Milestones are realistic

---

### Phase 2 — Build and integrate (Timebox: [Xh])

#### Objective
Implement capstone v1 and connect components/workflows.

#### Instructions
1. Build the minimum integrated flow first.
2. Validate shared data/state between components.
3. Add basic error handling at integration points.
4. Log key events/results for debugging and review.
5. Freeze scope after integrated v1 works.

#### Pass check
- [ ] End-to-end integrated flow works
- [ ] Shared data/events are consistent
- [ ] Core integration errors handled
- [ ] Scope freeze maintained

---

### Phase 3 — Test and harden (Timebox: [Xh])

#### Objective
Prove integration reliability and capture evidence.

#### Instructions
1. Complete `test.md` with integration test cases.
2. Test happy path + common breakpoints.
3. Record failures and fixes.
4. Re-run critical tests after fixes.
5. Document known limitations in `report.md`.

#### Pass check
- [ ] Integration tests documented
- [ ] Results captured clearly
- [ ] Critical failures addressed or documented
- [ ] Known limitations stated

---

### Phase 4 — Demo and report (Timebox: [Xh])

#### Objective
Deliver a professional capstone package for review.

#### Instructions
1. Complete `demo.md` (script + evidence links/screenshots/logs).
2. Complete `deploy.md` runbook.
3. Complete `report.md` with results, KPI discussion, limitations, and v2 priorities.
4. Update `log.md`.
5. Self-score against capstone rubric(s) and competency gates.

#### Pass check
- [ ] Demo is coherent and evidence-backed
- [ ] Runbook is usable
- [ ] Report is complete and honest
- [ ] Changelog updated
- [ ] Self-score completed

---

## File Schemas (Required)

### `brief.md`
```md
# Capstone Brief

## Problem Domain
[Description]

## Users / Stakeholders
- Primary:
- Secondary:
- Reviewer:

## Scope (v1)
- In scope:
- Out of scope:

## KPI Claim
- KPI:
- Baseline (or simulated):
- Target:
plan.md
# Capstone Plan

## Milestones
1. [Milestone]
2. [Milestone]
3. [Milestone]

## Session Plan
- Session 1:
- Session 2:
- Session 3:

## Risks to Schedule
- [Risk]
events.md
# Shared Events / Data Contracts

## Event: [name]
- Producer:
- Consumer:
- Required fields:
- Failure behavior:

## Data object: [name]
- field (type) — purpose
report.md
# Capstone Report

## What Was Built
[Summary]

## What Worked
- [Item]

## What Failed / Limitations
- [Item]

## KPI Discussion
- Baseline:
- Observed:
- Gap:
- Why:

## Next Priorities (v2)
1. [Priority]
2. [Priority]
3. [Priority]
QA Checklist (Self-Review)
Integration quality

 Components are truly integrated (not separate demos)

 Shared data/events are consistent

 End-to-end flow is testable

Evidence quality

 Tests documented with actual results

 Demo evidence included

 KPI claim includes assumptions and method

Documentation quality

 All capstone artifacts included

 Runbook and report are complete

 Limitations are explicitly stated

Submission Checklist

 All required capstone artifacts submitted

 Integrated system/build is reviewable

 Test results included

 Demo script + evidence included

 Capstone report included

 Self-scored with applicable rubric(s)

Grading Summary

Primary rubrics: rubrics/projects + rubrics/gates

Criterion	Weight
Integration and systems design	25%
Technical execution and reliability	25%
Testing and evidence quality	20%
Documentation and reproducibility	15%
Business value reasoning / KPI framing	15%
Pass Criteria (Competency Gate)

To pass the capstone, all of the following must be true:

All required artifacts are submitted and reviewable

Integrated workflow/system functions end-to-end

Integration test evidence is included

KPI claim or measurement method is documented

Rubric score is >= 80/100

No critical criterion falls below threshold in rubrics/gates

Common Failure Modes

Capstone is a collection of disconnected parts instead of an integrated system

Demo works once but is not reproducible

KPI claims are vague or unsupported

Missing test evidence

Report hides limitations

Troubleshooting
“The pieces work separately but break when connected.”

Check events.md and shared schema consistency first. Most integration failures come from contract mismatches.

“The capstone is too big.”

Reduce scope to the smallest integrated flow that proves the term competencies.

“I don’t have real data.”

Use SIMULATED data and label it clearly. Focus on architecture, process, testing, and evidence quality.

Optional Stretch (Not Required)

Add a metrics dashboard for capstone KPIs

Add rollback and recovery procedures to runbook

Add a v2 roadmap mapped to measurable KPI gains

What “Excellent” Looks Like (A-Level Signals)

Integration is real, coherent, and stable

Documentation is strong enough for handoff

Testing includes failure handling evidence

KPI reasoning is explicit and credible

Report is honest, specific, and roadmap-disciplined
