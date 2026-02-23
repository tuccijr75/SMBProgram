# Project Usage Note

Use after creating/updating any reusable prompt. Record fixes in `ops/log.md`.

---

# Prompt Test Harness v1.0
> Systematic testing framework for master prompts.
> Use this to stress-test any prompt before deployment.
> FLX AI Studio — AI Workflow Mastery

---

## Purpose

This harness provides a repeatable process for testing master prompts.
Run every new or modified prompt through this harness before deploying.
A prompt that passes all tests is production-ready.
A prompt that fails any test needs repair before use.

---

## Test Categories

### Test 1: Standard Input (Baseline)
> Confirms the prompt works under normal conditions.

**Procedure:**
1. Fill all parameter slots with typical, complete values
2. Run the prompt
3. Evaluate the output against the output schema

**Pass Criteria:**
- [ ] Output follows the output schema exactly
- [ ] All constraints are satisfied
- [ ] Verification checklist passes
- [ ] Output quality meets your standard

**If it fails here:** The prompt has fundamental issues. Revise before continuing.

---

### Test 2: Edge Case
> Confirms the prompt handles unusual but valid inputs.

**Procedure:**
1. Identify an unusual but legitimate input for your task
2. Run the prompt with this input
3. Evaluate: does the output handle the edge case appropriately?

**Example edge cases by domain:**
- **Writing:** A topic with no available data
- **Coding:** A function with no inputs or outputs
- **Research:** Sources that are all opinion with no data
- **Strategy:** Options that are not directly comparable
- **Operations:** A process with only 2 steps

**Pass Criteria:**
- [ ] Output acknowledges the unusual nature of the input
- [ ] Quality does not degrade significantly
- [ ] No hallucinated content to fill gaps
- [ ] Failure handling activates if appropriate

---

### Test 3: Missing Data
> Confirms the prompt handles incomplete inputs without hallucinating.

**Procedure:**
1. Remove one critical parameter value
2. Run the prompt
3. Check: does it hallucinate the missing data or flag it?

**Pass Criteria:**
- [ ] Missing data is explicitly identified
- [ ] Prompt requests the missing information
- [ ] No fabricated data fills the gap
- [ ] Output is either paused or clearly marked as incomplete

**If it fails:** Add to failure handling:
```
"If [PARAMETER] is missing or incomplete, state:
'MISSING: [parameter name]. Provide [description] to continue.'
Do not proceed with assumptions."
```

---

### Test 4: Out-of-Scope Request
> Confirms the prompt rejects tasks it shouldn't handle.

**Procedure:**
1. Submit a request that falls outside the defined scope
2. Run the prompt
3. Check: does it attempt the task or correctly redirect?

**Pass Criteria:**
- [ ] Prompt identifies the request as out of scope
- [ ] Does not attempt to fulfill the out-of-scope request
- [ ] Suggests the appropriate alternative (if possible)
- [ ] Remains helpful and professional in the rejection

**If it fails:** Tighten the scope definition. Add explicit boundaries.

---

### Test 5: Adversarial Input
> Confirms the prompt handles tricky, ambiguous, or misleading inputs.

**Procedure:**
1. Create an input that is:
   - Ambiguous (could mean two different things)
   - Contradictory (parameters conflict with each other)
   - Misleading (seems like one task but is actually another)
2. Run the prompt
3. Check: does it handle the ambiguity appropriately?

**Pass Criteria:**
- [ ] Ambiguity is identified (not silently resolved)
- [ ] Contradictions are flagged
- [ ] Prompt asks for clarification before proceeding
- [ ] Does not produce confident output from ambiguous input

**If it fails:** Add to failure handling:
```
"If input is ambiguous or contradictory, list the possible
interpretations and ask for clarification. Do not proceed
with an assumption."
```

---

### Test 6: Scale Extreme
> Confirms the prompt works at unusual sizes.

**Procedure:**
1. Run with a very small input (minimum viable)
2. Run with a very large input (maximum realistic)
3. Compare quality of both outputs to the baseline

**Pass Criteria:**
- [ ] Small input produces proportionally scaled output
- [ ] Large input does not truncate or lose information
- [ ] Quality is consistent across scales
- [ ] Context management handles large inputs (chunking if needed)

**If it fails:** Add scale-handling instructions:
```
"If input exceeds [threshold], break into sections and process
sequentially. If input is minimal, produce proportionally
concise output rather than padding."
```

---

## Test Results Log

| Test | Status | Notes | Repair Needed |
|------|--------|-------|---------------|
| 1. Standard Input | PASS / FAIL | | |
| 2. Edge Case | PASS / FAIL | | |
| 3. Missing Data | PASS / FAIL | | |
| 4. Out of Scope | PASS / FAIL | | |
| 5. Adversarial | PASS / FAIL | | |
| 6. Scale Extreme | PASS / FAIL | | |

**Overall: READY / NOT READY**

---

## Repair Process

For each FAIL:

```
FAILURE:     [Test number and name]
SYMPTOM:     [What the output did wrong]
ROOT CAUSE:  [Which prompt component was insufficient]
REPAIR:      [Specific change to make]
```

After each repair:
1. Re-run the failing test → must now PASS
2. Re-run ALL other tests → must still PASS (no regressions)
3. Update the test results log

---

## Compression Test

After all 6 tests pass on the full prompt:

1. Create compressed version (40–60% shorter)
2. Re-run Tests 1, 3, and 5 with compressed version
3. Compare output quality to full version

| Test | Full Version | Compressed | Quality Match? |
|------|-------------|------------|----------------|
| 1. Standard | [quality note] | [quality note] | YES / NO |
| 3. Missing Data | [quality note] | [quality note] | YES / NO |
| 5. Adversarial | [quality note] | [quality note] | YES / NO |

If any quality drops: restore the compressed sections that caused the drop.

---

## Versioning

After testing is complete:

- Save full version as `[PromptName]_full_v1.0.md`
- Save compressed version as `[PromptName]_v1.0.md`
- Save this test log as `[PromptName]_test_results_v1.0.md`

When modifying the prompt later:
- Increment version (v1.1, v2.0, etc.)
- Re-run the full test harness
- Document changes in version history

---

*This test harness is from the AI Workflow Mastery course by FLX AI Studio.*
