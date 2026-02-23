---
title: Lab Rubric
sidebar_position: 1
---

# Lab Rubric

Use this rubric to grade all lab submissions unless a week overrides it explicitly.

---

## Scoring Model

- Total score: **100 points**
- Passing score (default): **>= 80**
- Labs must also satisfy competency gate thresholds in `rubrics/gates`
- A lab can fail even with a numeric passing score if it violates a **critical gate** (e.g., missing required artifact, no reproducible output, unsafe handling in a security-sensitive lab)

---

## Criteria and Weights

| Criterion | Weight | What it measures |
|---|---:|---|
| Problem/Task understanding | 15 | Correct interpretation of the lab goal and constraints |
| Execution quality | 30 | Correctness and completeness of the lab steps/output |
| Verification and evidence | 20 | Proof that output works / is checked |
| Documentation and format compliance | 20 | Required file schema, naming, clarity, reproducibility |
| Reflection and improvement thinking | 15 | Insight into what worked, failed, and next automation improvements |

**Total = 100**

---

## Performance Levels (applies to each criterion)

### 4 — Excellent
- Complete, accurate, reproducible
- Follows instructions precisely
- Evidence is clear and sufficient
- Documentation is clean and easy to review
- Reflection shows real understanding and next-step judgment

### 3 — Proficient
- Mostly correct and complete
- Minor errors/omissions that do not break reviewability
- Evidence present but may be light
- Documentation understandable
- Reflection is present and relevant

### 2 — Developing
- Partially complete or partially correct
- Important steps missing or inconsistent
- Weak evidence / unclear validation
- Documentation gaps make review harder
- Reflection is vague or generic

### 1 — Insufficient
- Major misunderstanding or incomplete execution
- Output missing, nonfunctional, or not reviewable
- No meaningful evidence
- Documentation does not follow required format
- Reflection missing or non-substantive

---

## Scoring Guidance by Criterion

## 1) Problem/Task Understanding (15)

### Full-credit signals
- Goal is correctly interpreted
- Constraints are followed
- No out-of-scope substitutions
- Required outputs match the lab prompt

### Common deductions
- Solves a different problem than assigned
- Ignores required constraints
- Produces “something useful” but not the required artifact

---

## 2) Execution Quality (30)

### Full-credit signals
- Core lab task is completed successfully
- Output is correct and complete
- Work follows the required sequence or an equivalent valid sequence
- No critical errors in the result

### Common deductions
- Partial completion
- Wrong format or missing required fields
- Steps skipped without justification
- Output appears generated but not verified

---

## 3) Verification and Evidence (20)

### Full-credit signals
- Output is checked against expected behavior/schema
- Validation steps are shown
- Test or proof is included (screenshots/logs/results if relevant)
- Assumptions are documented

### Common deductions
- “Works” claimed without proof
- No validation step shown
- Evidence does not match final output
- Simulated examples not labeled

---

## 4) Documentation and Format Compliance (20)

### Full-credit signals
- Required file names used
- Required schema/sections present
- Writing is clear and reviewable
- Another reviewer can follow what was done

### Common deductions
- Missing files
- Missing required sections
- Inconsistent naming
- Hard-to-follow notes / undocumented assumptions

---

## 5) Reflection and Improvement Thinking (15)

### Full-credit signals
- Reflection identifies what worked and what failed
- Notes specific blockers
- Suggests a plausible improvement/automation for next time
- Demonstrates learning, not just completion

### Common deductions
- Generic reflection (“it was good”)
- No mention of blockers/errors
- No improvement thinking
- Reflection missing

---

## Gate Enforcement Rules (Critical)

The following conditions trigger automatic **FAIL** regardless of numeric score:

- Missing required artifact(s)
- Output is not reviewable / cannot be opened / wrong file format
- No evidence of execution/verification for labs requiring proof
- Safety/compliance violation in a lab that explicitly includes safety constraints
- Plagiarized or undisclosed AI-generated work where original reasoning/process evidence was required by the lab prompt

---

## Reviewer Workflow (Recommended)

1. Confirm all required artifacts exist.
2. Check competency gate requirements in `rubrics/gates`.
3. Score each criterion (1–4 level + weighted points).
4. Record deductions with specific evidence.
5. Return:
   - total score,
   - pass/fail,
   - top 2 strengths,
   - top 2 fixes.

---

## Student Self-Scoring Workflow (Recommended)

1. Run the lab QA checklist in the week/lab page.
2. Check all artifact names and schemas.
3. Verify your evidence actually matches the final output.
4. Score yourself honestly using this rubric.
5. Note 1 improvement for future labs.

---

## Feedback Format (Recommended)

```md
# Lab Feedback

## Result
- Score: XX/100
- Pass/Fail: [Pass|Fail]

## Strengths
- [Strength]
- [Strength]

## Fixes Required
- [Fix]
- [Fix]

## Gate Notes
- [Any gate threshold issues]
