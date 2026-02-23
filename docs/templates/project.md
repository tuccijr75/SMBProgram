---
title: [Project Name]
sidebar_position: 99
---

# [Project Name]

> **Template Type:** Project  
> **Purpose:** Build a working software artifact that solves a real SMB workflow problem  
> **Default stance:** Vertical-agnostic by default; vertical-specific examples must be labeled

---

## Project Outcome (Measurable)

Build and deliver [project artifact] that [does what] and demonstrates [technical + business competency].

### Required success criteria
- [ ] [Functional requirement]
- [ ] [Functional requirement]
- [ ] [Quality/reliability requirement]
- [ ] [Documentation requirement]
- [ ] [Demo/proof requirement]

---

## Why This Project Matters

[Explain what capability this project proves and how it connects to capstones / job-ready outcomes.]

---

## Scope Definition

### In scope (v1)
- [Feature/process #1]
- [Feature/process #2]
- [Feature/process #3]

### Out of scope (v1)
- [Not included #1]
- [Not included #2]
- [Not included #3]

### Scope control rule
If a requested feature does not directly improve the project KPI or competency gate, defer it to a later version.

---

## Prerequisites

- [Required prior weeks/labs]
- [Required environment/tooling]
- [Required accounts/data/setup]

### Readiness checklist
- [ ] [Check #1]
- [ ] [Check #2]
- [ ] [Check #3]
- [ ] [Check #4]

---

## Time Budget

**Target:** [X–Y hours]  
**Recommended sessions:** [e.g., 4 sessions × 2.5h]

### Suggested phase breakdown
- **[Xh]** Planning/spec
- **[Xh]** Build implementation
- **[Xh]** Test + debug
- **[Xh]** Packaging + demo + docs

---

## Project Brief

### Problem statement
[Describe the SMB workflow problem in concrete terms.]

### Intended user
- Primary user: [owner/admin/staff/etc.]
- Secondary user (optional): [role]

### KPI hypothesis (required)
If this project is used correctly, it should improve:
- [KPI #1] by [target range]
- [KPI #2] by [target range]

> If data is hypothetical, mark as **SIMULATED** and state assumptions.

---

## Required Artifacts

Create and submit all of the following:

- `problem.md` — problem statement + context
- `stories.md` — user story map / user flows
- `arch.md` — architecture diagram and component notes
- `schema.md` — data schema and field definitions
- `risk.md` — threat/risk checklist
- `test.md` — test plan + results
- `deploy.md` — deployment checklist + run notes
- `demo.md` — demo script and evidence links
- `kpi.md` — KPI hypothesis and measurement notes
- `log.md` — versioned changelog (or link to changelog)

> You may add code and app files as needed, but these project artifacts are mandatory.

---

## Exact Build Instructions

### Phase 1 — Plan and define (Timebox: [Xh])

#### Objective
Produce the project specification package before building.

#### Instructions
1. Write `problem.md` using the problem statement template.
2. Create `stories.md` with the user story map.
3. Draft `arch.md` with component boundaries.
4. Draft `schema.md` with required entities/fields.
5. Write initial `risk.md` checklist.
6. Define `kpi.md` with baseline assumptions and target metric(s).

#### Pass check
- [ ] Problem is specific and measurable
- [ ] Stories align to problem and scope
- [ ] Architecture matches scope
- [ ] Schema supports required workflow
- [ ] KPI hypothesis is explicit

---

### Phase 2 — Build v1 implementation (Timebox: [Xh])

#### Objective
Create the minimum working version of the project within scope.

#### Instructions
1. Set up project structure and environment.
2. Implement core workflow path first (happy path only).
3. Add input validation and error handling for core inputs.
4. Add logging/observability basics (if applicable).
5. Save sample test data (or simulated test data).
6. Do not add out-of-scope features.

#### Pass check
- [ ] Core workflow works end-to-end
- [ ] Inputs are validated
- [ ] Basic errors are handled
- [ ] Work stays within v1 scope

---

### Phase 3 — Test and reliability pass (Timebox: [Xh])

#### Objective
Prove the project works reliably enough for review/demo.

#### Instructions
1. Write/complete `test.md` with test cases.
2. Run functional tests for all required flows.
3. Test common failure scenarios.
4. Record results and fixes.
5. Re-run critical tests after fixes.

#### Pass check
- [ ] All required flows tested
- [ ] Failure cases tested
- [ ] Results documented
- [ ] Regressions checked

---

### Phase 4 — Deployment and packaging (Timebox: [Xh])

#### Objective
Produce a reviewable, runnable project package.

#### Instructions
1. Complete `deploy.md` checklist.
2. Capture run/setup steps for another reviewer.
3. Prepare `demo.md` (script + evidence).
4. Update `log.md` / changelog.
5. Final QA against project rubric and competency gates.

#### Pass check
- [ ] Deployment steps documented
- [ ] Demo script complete
- [ ] Changelog updated
- [ ] Project is reviewable without verbal explanation

---

## File Templates (Required Schemas)

### `problem.md`
```md
# Problem Statement

## Workflow Problem
[What is happening]

## Who Is Affected
[Role(s)]

## Business Impact
[Revenue/time/risk impact]

## Why Current Workaround Fails
[Short explanation]
stories.md
# User Story Map

## Primary User
- As a [role], I want to [action], so that [outcome].

## Core Flow
1. [Step]
2. [Step]
3. [Step]

## Edge Cases
- [Case]
- [Case]
arch.md
# Architecture

## Components
- [Component A]
- [Component B]
- [Component C]

## Data Flow
1. [Input source]
2. [Processing]
3. [Storage/output]

## External Dependencies
- [Dependency]
schema.md
# Data Schema

## Entity: [Name]
- field_name (type) — purpose
- field_name (type) — purpose

## Validation Rules
- [Rule]
- [Rule]
risk.md
# Risk Checklist

## Operational Risks
- [ ] [Risk]
- [ ] [Risk]

## Security/Privacy Risks
- [ ] [Risk]
- [ ] [Risk]

## Mitigations
- [Mitigation]
test.md
# Test Plan and Results

## Required Flows
- [Flow #1]
- [Flow #2]

## Test Cases
- Case: [name]
  - Input:
  - Expected:
  - Actual:
  - Pass/Fail:

## Regression Checks
- [Check]
deploy.md
# Deployment Checklist

- [ ] Environment variables configured
- [ ] Secrets not committed
- [ ] Startup instructions documented
- [ ] Backup/export path documented
- [ ] Health check verified

## Run Notes
[Notes]
demo.md
# Demo Script

## Audience
[Who this demo is for]

## Flow (2-5 minutes)
1. [Show]
2. [Show]
3. [Show]

## Evidence
- URL:
- Screenshots:
- Logs:
kpi.md
# KPI Hypothesis

## KPI
[Name]

## Baseline (or simulated baseline)
[Value + source]

## Target
[Value]

## Measurement Method
[How measured, frequency, owner]

## Assumptions
- [Assumption]
QA Checklist (Self-Review)
Functional quality

 Core workflow solves stated problem

 Output matches success criteria

 No required feature is missing

Reliability quality

 Common failures handled

 Test results documented

 Re-test after fixes completed

Documentation quality

 All required artifact files included

 Architecture/schema/risk docs are complete

 Demo and deployment steps are clear

Scope discipline

 v1 scope preserved

 Nice-to-have features deferred

 KPI alignment maintained

Submission Checklist

 Working software artifact included or linked

 All required project artifact docs included

 Test plan/results complete

 Deployment checklist complete

 Demo script/evidence complete

 KPI hypothesis documented

 Self-scored using rubrics/projects

Grading Summary

Primary rubric: rubrics/projects

Criterion	Weight
Problem-fit and scope discipline	20%
Technical execution	25%
Reliability and testing	20%
Documentation and reproducibility	20%
Business reasoning (KPI/ROI fit)	15%
Pass Criteria (Competency Gate)

To pass the project, all of the following must be true:

All required artifacts are submitted and reviewable

Core workflow functions end-to-end

Test plan includes required flows and results

Deployment instructions are usable by a reviewer

Rubric score is >= 80/100

No critical criterion falls below threshold in rubrics/gates

Common Failure Modes

Building features before defining the problem and scope

Demo looks good but core workflow fails on real inputs

Missing test evidence

Missing deployment/run instructions

KPI claims without assumptions or measurement method

Troubleshooting
“My project keeps expanding.”

Return to In scope / Out of scope. Freeze v1 and move extra ideas to a backlog list.

“It works on my machine only.”

Complete deploy.md and have another person (or future-you) follow the steps exactly.

“I built something cool but not valuable.”

Re-check problem.md and kpi.md. If the KPI is weak or unmeasurable, the project is off-target.

Optional Stretch (Not Required)

Add basic observability dashboard

Add config-driven settings instead of hardcoded values

Add rollback notes to deploy.md

Add a v2 backlog tied to KPI improvements only

What “Excellent” Looks Like (A-Level Signals)

Problem scope is tight and business-relevant

Build is stable and tested beyond happy path

Documentation is complete and reproducible

KPI hypothesis is realistic and measurable

Project shows both technical and business judgment
