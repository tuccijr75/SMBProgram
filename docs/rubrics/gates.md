---
title: Competency Gates
sidebar_position: 3
---

# Competency Gates

This document defines the **minimum thresholds** required to pass weeks, labs, projects, and capstones.

A submission must pass:
1. the relevant rubric score threshold, **and**
2. the applicable competency gate checks below.

> Rubrics score quality. Gates enforce minimum viability, safety, and reviewability.

---

## How Gates Work

- Gates are **pass/fail** thresholds.
- A submission that fails a critical gate is **FAIL**, even if the rubric score is high.
- Week pages may add stricter gates, but they should not weaken these defaults.
- If a week/project requires an exception, the exception must be explicitly documented in that page.

---

## Gate Types

### 1) Artifact Completeness Gate
Confirms all required outputs exist and are reviewable.

### 2) Reproducibility Gate
Confirms a reviewer can inspect/execute/verify the work without guessing.

### 3) Correctness/Function Gate
Confirms the required result is actually achieved.

### 4) Evidence Gate
Confirms proof of execution/testing/validation is present.

### 5) Documentation Gate
Confirms assumptions, steps, and formats are clear enough for review/handoff.

### 6) Safety/Trust Gate (when applicable)
Confirms explicit safety/privacy/compliance constraints in the assignment are not violated.

---

## Default Thresholds by Submission Type

## Weekly Lessons (artifact-based weeks)

### Must pass
- [ ] All required artifacts submitted
- [ ] Artifacts follow required file names/formats (or clearly mapped equivalents)
- [ ] Week pass criteria checklist completed
- [ ] Self-QA checklist completed
- [ ] Rubric score >= 80/100 (or week-specific threshold if higher)

### Critical fail triggers
- Missing required artifact(s)
- Artifacts not reviewable
- Required counts/thresholds not met (e.g., exact item counts, mandatory fields)

---

## Labs

### Must pass
- [ ] Lab goal/output completed
- [ ] Required output format/schema followed
- [ ] Evidence of execution/verification included
- [ ] Reflection included (if required by lab template/page)
- [ ] Rubric score >= 80/100

### Critical fail triggers
- No evidence of execution
- Wrong or missing output file(s)
- Output not reproducible/reviewable
- Explicit lab safety constraints ignored

---

## Projects

### Must pass
- [ ] Core workflow works end-to-end
- [ ] All required project artifact docs submitted
- [ ] Test plan and results submitted
- [ ] Deployment/run instructions submitted (if project is executable)
- [ ] KPI hypothesis / business-value note included
- [ ] Rubric score >= 80/100

### Critical fail triggers
- Core workflow not functioning
- Missing project artifacts
- No test evidence
- No runnable/reviewable package for executable project
- Misrepresented results or unlabeled simulated claims

---

## Capstones

### Must pass
- [ ] Integrated workflow/system functions end-to-end
- [ ] Integration artifacts/docs submitted (architecture, plan, test, report, demo, runbook)
- [ ] Test evidence includes integration behavior
- [ ] KPI claim or measurement method documented
- [ ] Limitations documented
- [ ] Rubric score >= 80/100

### Critical fail triggers
- “Capstone” is disconnected parts rather than an integrated system
- No integration test evidence
- Missing capstone report/runbook/demo evidence
- Unsupported KPI claims presented as factual

---

## Competency Gate Patterns (Authoring Guidance)

Use these patterns when writing week-specific gates.

### Pattern A — Exact Count Gate
Use when assignments require exact counts.
- Example: “Exactly 20 pain statements submitted, with 10 per selected vertical.”

### Pattern B — Schema Compliance Gate
Use when structure matters.
- Example: “CSV includes required columns and computed totals.”

### Pattern C — Functionality Gate
Use when software must run.
- Example: “Core workflow completes without manual intervention in the happy path.”

### Pattern D — Evidence Gate
Use when proof matters.
- Example: “Test cases include expected vs actual results and pass/fail status.”

### Pattern E — Safety Gate
Use when privacy/compliance/sensitive data are in scope.
- Example: “No secrets committed; PII redacted in shared artifacts.”

---

## Reviewer Decision Protocol (Recommended)

Evaluate in this order:
1. **Critical gates first** (instant fail if violated)
2. Artifact completeness/reviewability
3. Rubric scoring
4. Week/project-specific gate checks
5. Final pass/fail decision

This prevents wasting time scoring submissions that fail minimum viability.

---

## Student Self-Check Protocol (Recommended)

Before submission:
1. Confirm all required artifacts exist.
2. Confirm outputs match required schema/format.
3. Confirm proof/evidence is included.
4. Confirm any simulated examples/claims are labeled **SIMULATED**.
5. Run the relevant rubric self-score.
6. Fix critical gate issues before polishing.

---

## Gate Reporting Template (Recommended)

```md
# Gate Review

## Result
- Pass/Fail: [Pass|Fail]

## Critical Gate Check
- Artifact Completeness: [Pass|Fail]
- Reproducibility: [Pass|Fail]
- Correctness/Function: [Pass|Fail]
- Evidence: [Pass|Fail]
- Documentation: [Pass|Fail]
- Safety/Trust (if applicable): [Pass|Fail|N/A]

## Notes
- [Specific evidence]
- [Specific failure or confirmation]

## Final Decision
[Pass|Fail] because [reason]
