# Common Beginner Mistakes — All 24 Lessons
> FLX AI Studio — AI Workflow Mastery
> Quick reference: the top mistakes students make per lesson and how to fix them.

---

## Module 1 — How AI Actually Works

### Lesson 1: What AI Models Are (and Are Not)
1. **Treating AI as sentient.** AI predicts patterns — it does not think. Adjust expectations.
2. **Expecting perfect accuracy.** AI generates plausible output, not verified truth. Always verify.
3. **Blaming the AI for bad output.** Bad output = bad input. Improve your prompt first.

### Lesson 2: Tokens and Context Windows
1. **Ignoring context limits.** Pasting too much causes truncation. Budget your context window.
2. **Assuming AI remembers everything.** Only what's in the current window exists. Re-inject important info.
3. **Not knowing what a token is.** ~4 characters = 1 token. Estimate before long prompts.

### Lesson 3: How AI Records Information
1. **Trusting conversation memory.** AI has no memory between sessions unless you provide it.
2. **Not saving outputs externally.** Chat history is not reliable storage. Save to files.
3. **Assuming "memory" features are complete.** Platform memory is summary-based, not full recall.

### Lesson 4: Referencing Information Correctly
1. **Asking AI to recall facts from training data.** Upload sources instead.
2. **No source grounding in prompts.** Add "use only the provided document" to prevent fabrication.
3. **Skipping the Data Ingestion Hierarchy.** File uploads > pasted text > plain prompts > memory.

### Lesson 5: Drift
1. **Not recognizing drift.** Compare outputs across turns — if tone/format changes, drift is happening.
2. **Trying to correct drift in-place.** Start a new session with fresh constraints instead.
3. **Never re-anchoring.** Re-inject your rules every 10–15 turns, not just at session start.

### Lesson 6: Failures and Setbacks
1. **Accepting AI output without checking.** Every output needs verification, especially factual claims.
2. **Not knowing recovery protocols.** When AI fails, re-state constraints or start a new session.
3. **Confusing confidence with accuracy.** AI sounds certain even when wrong. Tone ≠ truth.

---

## Module 2 — The AI Workflow System

### Lesson 7: The Core AI Workflow
1. **Skipping steps.** Going straight from Input to Output skips Reason and Verify. Use all five steps.
2. **Ignoring the Store step.** Outputs not saved are outputs lost. Save everything.
3. **Using the workflow once then abandoning it.** Consistency is the point. Use it every time.

### Lesson 8: Prompt Architecture
1. **No role in the prompt.** Without a role, AI defaults to generic voice. Always assign one.
2. **Vague constraints.** "Be professional" is ambiguous. "Third-person, no contractions, under 200 words" is specific.
3. **No output format.** Without format instructions, AI decides the structure for you (usually wrong).

### Lesson 9: Task Decomposition
1. **One giant prompt for complex tasks.** Break it into steps. Each step = one focused prompt.
2. **Unclear step boundaries.** Each sub-task should have a clear input and output.
3. **Not passing outputs between steps.** Step 2 needs Step 1's output as input. Chain them.

### Lesson 10: Output Verification
1. **Skipping verification entirely.** This is the #1 most costly mistake in the entire course.
2. **Self-checking only.** Use multiple methods: self-check + red-team + double-pass.
3. **Accepting "looks right."** Verify against specific criteria, not general impression.

### Lesson 11: The Canon System
1. **No canon file.** Projects without a canon lose decisions between sessions. Create one.
2. **Canon is too long.** Keep under 1,000 tokens. Compress ruthlessly.
3. **Canon is never updated.** If you make a decision, log it in the canon immediately.

### Lesson 12: Recovery Protocols
1. **Pushing through degraded output.** When quality drops, stop. Start a new session.
2. **No rolling summary.** Without a summary, new sessions start from zero context.
3. **Trying to fix context pollution.** You can't clean a polluted context. Fresh session = clean start.

---

## Module 3 — Practical Applications

### Lesson 13: Model Categories and Tradeoffs
1. **Using one model for everything.** Match model tier to task complexity and cost.
2. **Using reasoning models for simple tasks.** Extraction and classification don't need expensive models.
3. **Ignoring temperature settings.** Low temp (0.1–0.3) for precision; high temp (0.7–1.0) for creativity.

### Lesson 14: AI for Coding
1. **Jumping straight to code.** Always write a spec first. Plan before implementation.
2. **Not testing from the spec.** Tests should verify the spec requirements, not the code structure.
3. **Deploying AI code without review.** AI code can have security gaps. Human review is mandatory.

### Lesson 15: AI for Writing and Content
1. **Writing in a single prompt.** Use the 4-stage pipeline: Ideation → Outline → Draft → Edit.
2. **No voice guide.** Without a reference paragraph, voice drifts across pieces.
3. **Skipping the edit pass.** AI drafts always need editing. Budget time for it.

### Lesson 16: AI for Research
1. **Researching from training data.** This is the hallucination trap. Upload actual sources.
2. **No anti-hallucination chain.** Extract → Synthesize → Verify. All three phases required.
3. **No confidence ratings.** Not all findings are equally supported. Rate them HIGH/MEDIUM/LOW.

### Lesson 17: AI for Business Operations
1. **Publishing SOPs without SME review.** AI-generated processes may have systematic errors.
2. **No exception handling.** SOPs must cover what to do when the normal process doesn't apply.
3. **Automating before understanding.** Map the manual process first, then automate.

### Lesson 18: AI for Strategic Thinking
1. **Asking AI to make the decision.** AI presents analysis. Humans decide.
2. **No criteria weights.** Without weighted criteria, comparisons are subjective.
3. **Skipping the red-team pass.** Every strategic plan needs adversarial testing.

---

## Module 4 — Master Prompts, Context Control, and Scaling

### Lesson 19: Long Projects and Context Management
1. **Never starting new sessions.** Context degrades after 15–20 messages. Start fresh.
2. **No chunking for long documents.** Documents over 15 pages should be chunked.
3. **No working context block.** Build: canon + rolling summary + source material + task.

### Lesson 20: Token Budgeting and Cost Control
1. **Verbose prompts with filler.** Compress prompts by 40–60% without losing content.
2. **No output control.** Always specify format and length. Unbounded output wastes tokens.
3. **No budget awareness.** Know how your context window is allocated before prompting.

### Lesson 21: Master Prompts Design and Structure
1. **Missing components.** All 7 components required: role, scope, constraints, schema, failure handling, verification, parameters.
2. **No parameter slots.** Without parameters, you rewrite the prompt for every use.
3. **Building master prompts for one-off tasks.** Master prompts are for recurring tasks only.

### Lesson 22: Creating Master Prompts Using AI
1. **Not stress-testing.** A prompt that passes standard input may fail on edge cases. Test all 5 categories.
2. **Over-compressing.** Removing failure handling or verification saves tokens but causes failures.
3. **Deploying without repair.** Fix every stress-test failure before using the prompt for real work.

### Lesson 23: Using MD Rule Systems
1. **No heading hierarchy.** # for critical rules, ## for sections, ### for specifics. Hierarchy = priority.
2. **Mixing instructions with examples.** Use code blocks to isolate templates and examples.
3. **Rule file never updated.** If your practice changes, update the rule file. Stale rules cause drift.

### Lesson 24: Capstone
1. **Hypothetical project instead of real.** Use a real project. Hypotheticals hide real-world complexity.
2. **Missing deliverables.** All four required: master prompt + canon + workflow diagram + output.
3. **System not tested end-to-end.** The output must be produced BY the system, not alongside it.

---

*FLX AI Studio — AI Workflow Mastery*
*Learn from others' mistakes before you make them.*
