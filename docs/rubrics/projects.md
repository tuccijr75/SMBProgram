---
title: Project Rubric
sidebar_position: 2
---

# Project Rubric

Use this rubric for weekly projects and major build assignments unless a project page overrides it explicitly.

---

## Scoring Model

- Total score: **100 points**
- Passing score (default): **>= 80**
- Projects must also satisfy competency gate thresholds in `rubrics/gates`
- A project can fail despite a passing numeric score if it violates a **critical gate** (e.g., missing required artifacts, no runnable core workflow, no test evidence)

---

## Criteria and Weights

| Criterion | Weight | What it measures |
|---|---:|---|
| Problem-fit and scope discipline | 20 | Does the build solve the stated problem without uncontrolled scope creep? |
| Technical execution | 25 | Functionality, correctness, implementation quality |
| Reliability and testing | 20 | Evidence of testing, failure handling, and validation |
| Documentation and reproducibility | 20 | Can a reviewer understand, run, and evaluate the project? |
| Business reasoning (KPI/ROI fit) | 15 | KPI hypothesis, value framing, and assumptions quality |

**Total = 100**

---

## Performance Levels (applies to each criterion)

### 4 — Excellent
- Strong, complete, reliable work
- Scope is disciplined and intentional
- Testing evidence is meaningful
- Documentation supports handoff/review
- Business reasoning is specific and defensible

### 3 — Proficient
- Solid working project with minor gaps
- Scope mostly controlled
- Testing/documentation present but not deep
- KPI framing is present and plausible

### 2 — Developing
- Partial or fragile implementation
- Scope drift or unclear problem-fit
- Limited testing evidence
- Incomplete documentation
- Weak business framing

### 1 — Insufficient
- Core workflow missing or nonfunctional
- No scope discipline
- No meaningful testing
- Missing required documentation
- Business value unsupported or absent

---

## Criterion Guidance

## 1) Problem-Fit and Scope Discipline (20)

### Full-credit signals
- Problem statement is specific and relevant to SMB workflow pain
- v1 scope is explicit and respected
- Features map to problem and KPI
- Out-of-scope items are deferred (not silently added)

### Common deductions
- Build solves a vague or different problem
- Scope creep adds flashy features without value
- No explicit out-of-scope section
- KPI and features do not align

---

## 2) Technical Execution (25)

### Full-credit signals
- Core workflow works end-to-end
- Inputs/outputs behave as specified
- Required features are complete
- Errors are handled at a basic acceptable level
- Implementation choices are reasonable for the assignment stage

### Common deductions
- Partial feature completion
- Broken workflow steps
- Incorrect outputs
- Happy-path-only with obvious breakpoints
- Missing required implementation pieces

---

## 3) Reliability and Testing (20)

### Full-credit signals
- Test plan includes required flows and expected results
- Actual results recorded
- Common failure cases tested
- Fixes documented and re-tested where relevant

### Common deductions
- No real test evidence
- “Tested manually” with no details
- No failure-case coverage
- No regression check after fixes

---

## 4) Documentation and Reproducibility (20)

### Full-credit signals
- All required artifacts are present and complete
- Another reviewer can run/inspect the project with provided instructions
- Architecture/schema/risk/test/deploy docs are usable
- Naming and structure are consistent

### Common deductions
- Missing artifact files
- Incomplete or unclear setup/run instructions
- Architecture or schema docs are shallow/misaligned
- Reviewer must guess how to evaluate the project

---

## 5) Business Reasoning (KPI/ROI Fit) (15)

### Full-credit signals
- KPI hypothesis is specific and measurable
- Assumptions are explicit
- Value framing matches the actual build capability
- Claims are labeled **SIMULATED** when applicable
- Limits of confidence are stated

### Common deductions
- KPI too vague to measure
- ROI claims unsupported
- Build capability does not support claimed business outcome
- Assumptions hidden
- Simulated claims presented as real

---

## Gate Enforcement Rules (Critical)

Automatic **FAIL** regardless of numeric score if any apply:

- Required project artifact(s) missing
- Core workflow not functioning end-to-end
- No test evidence submitted
- Deployment/run instructions missing for projects that require execution
- Safety/privacy/compliance requirement explicitly assigned in the project is ignored
- Misrepresented evidence, fabricated results, or unlabeled simulated claims presented as real outcomes

---

## Reviewer Workflow (Recommended)

1. Confirm required artifacts and core workflow presence.
2. Check competency gate thresholds in `rubrics/gates`.
3. Score each criterion using performance levels and weighted points.
4. Record specific evidence for deductions.
5. Return:
   - total score,
   - pass/fail,
   - critical gate notes,
   - top strengths,
   - required fixes.

---

## Student Self-Scoring Workflow (Recommended)

1. Run the project QA checklist in the project page.
2. Verify all required artifacts exist and are readable.
3. Confirm your core workflow actually works end-to-end.
4. Review your test evidence and KPI claims for honesty and clarity.
5. Score yourself and list top fixes before submission.

---

## Feedback Format (Recommended)

```md
# Project Feedback

## Result
- Score: XX/100
- Pass/Fail: [Pass|Fail]

## Strengths
- [Strength]
- [Strength]

## Required Fixes
- [Fix]
- [Fix]

## Gate Notes
- [Gate issue or "None"]
