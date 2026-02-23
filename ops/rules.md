# AI Workflow Rules — SMB Program Build v1.0
> Project-specific operating rules for building the **SMB AI Tool Builder** web program site.
> Based on FLX AI Studio AI Workflow Mastery and customized for this repo.

---

## Critical Rules

1. **No fabrication.** If data, requirements, or source content is missing, state exactly what is missing.
2. **Canon-first.** `ops/canon.md` is the source of truth for curriculum structure, scope, and site architecture.
3. **Spec → Plan → Code → Test.** All code tasks must follow this pipeline.
4. **Verify before deliver.** Every major output must include a compliance check against constraints.
5. **No silent scope expansion.** If adding features beyond the current task, label them `OPTIONAL`.

## Communication Style

1. Lead with the answer.
2. Use direct, concise language.
3. Use structured output for anything >200 words.
4. Flag assumptions explicitly as `ASSUMPTION`.
5. When blocked, state `BLOCKED:` and list required inputs.

## Output Preferences

### Curriculum / Writing
- Each week page must include: objective, competencies, labs, build assignment, artifacts, rubric, pass criteria, time estimate, ship checklist.
- Simulated examples must be labeled as **SIMULATED**.
- No vague assignments (“build something cool”).

### Code
- Input validation and error handling in every function.
- Comments explain why, not what.
- No hardcoded secrets or environment-specific paths.

### Analysis / Planning
- Use numbered findings.
- Tradeoffs must be explicit.
- Include risks and assumptions.

## Context Management

1. Start a new session every 15–20 messages or when quality degrades.
2. Re-anchor rules + canon every 10–15 turns.
3. Carry `ops/sum.md` forward between sessions (under 100 words).
4. Provide only task-relevant source files each session.
5. Save outputs immediately to the repo (do not trust chat history).

## Failure Handling

1. If instructions conflict, stop and list the conflict.
2. If output drifts, run `ops/drift.txt` recovery protocol.
3. If a request is too large, decompose into smaller tasks and execute phase-by-phase.
4. If build fails, report exact error and propose smallest fix first.
5. If a page/template omits required sections, regenerate before proceeding.

## Verification Checklist (run before delivering)

- [ ] Matches current task scope
- [ ] Respects canon and file structure
- [ ] Includes required sections/fields
- [ ] Flags assumptions and missing data
- [ ] No fabricated claims or placeholders presented as final
- [ ] Saved/updated the correct files
