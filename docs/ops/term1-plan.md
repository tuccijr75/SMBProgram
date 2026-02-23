# Term 1 Authoring Batch Plan (W02-W12)

## Global Authoring Rules (Apply Every Time)

### Required Weekly Page Standard

Every week must include:

- measurable objective
- competency gate
- exact step-by-step instructions
- required artifacts + file schemas
- labs (exact steps)
- QA checklist
- submission checklist
- pass criteria
- troubleshooting
- "what excellent looks like"

### Vertical Stance

- Vertical-agnostic by default
- Any examples must be labeled `SIMULATED` unless explicitly real

### File Naming Rule (Learner Artifacts)

Keep names simple and consistent. Recommended per-week folder structure:

- `submissions/wXX/` (or equivalent)
- simple file names inside (`brief.md`, `tests.md`, `data.csv`, etc.)

## Batch Structure (Authoring Order)

### Batch A - W02-W04

Module 2: Python + API Fundamentals

- W02: Python basics + scripts + files/errors
- W03: HTTP/REST/JSON + API calls + env vars
- W04: Batch processing + transformations + tests + checkpoint scripts

### Batch B - W05-W06

Module 3: Data + Storage

- W05: SQL basics + schemas + SQLite
- W06: CRUD patterns + logging + interaction history / queue patterns

### Batch C - W07-W08

Module 4: LLM Fundamentals + Prompt Systems

- W07: prompt systems + structured outputs
- W08: guardrails + evaluation + human review workflows

### Batch D - W09-W10

Module 5: Frontend Basics for Internal Tools

- W09: forms/tables/filters/validation
- W10: UX polish, states, role views, approval flows

### Batch E - W11-W12

Module 6: Deployment Basics

- W11: hosting, secrets, logging, quotas
- W12: monitoring, backup/export, deployment hardening + pre-capstone release prep

Recommended Batch F (immediately after): Term 1 Capstone page.

## Per-Week Authoring Map (W02-W12)

### W02 - Python Fundamentals for SMB Tool Scripts

#### Week Focus
Build confidence writing practical Python scripts for admin-style SMB tasks.

#### Core Learning Outcomes (Authoring Target)
Learner can:

- write functions
- parse files (CSV/text)
- handle common errors
- use CLI arguments/basic script inputs
- produce repeatable script outputs

#### Required Learner Artifacts (Week Deliverables Map)

Folder: `submissions/w02/`

- `brief.md` - what script problems were chosen and why
- `clean.py` - CSV cleaner script (basic normalization)
- `parse.py` - lead parser script (raw text -> structured fields)
- `batch.py` - batch processor script (process multiple rows/files)
- `tests.md` - manual test cases + expected/actual outputs
- `log.md` - changelog / iteration notes
- `check.md` - self-QA checklist completion

#### Labs to Author (W02)

- Lab 1: Python functions + file I/O mini task
- Lab 2: error handling + input validation mini task
- Lab 3: CSV cleanup mini task

#### Week Project/Checkpoint (W02)
"Script Pack v1" (3 small scripts, rough but working)

#### Gate Emphasis

- scripts run without syntax errors
- inputs/outputs documented
- at least one handled error case per script

### W03 - HTTP, REST, JSON, and API Integration Basics

#### Week Focus
Teach the learner to call APIs reliably and transform responses into useful outputs.

#### Core Learning Outcomes
Learner can:

- make HTTP requests
- read JSON responses
- handle status codes/basic failures
- use environment variables for API keys
- transform API output into structured records/files

#### Required Learner Artifacts

Folder: `submissions/w03/`

- `brief.md` - API use case chosen (vertical-agnostic)
- `env.md` - env var setup notes (no secrets included)
- `call.py` - API request script
- `transform.py` - response transformation script
- `out.json` - sample structured output
- `tests.md` - request/response validation notes
- `check.md` - self-QA checklist
- `log.md` - changelog

#### Labs to Author (W03)

- Lab 1: inspect JSON payloads
- Lab 2: request + parse + extract fields
- Lab 3: error handling (rate/error response simulation)

#### Week Checkpoint
API integration script that produces a clean JSON output from a remote response.

#### Gate Emphasis

- no hardcoded secrets
- status/error handling demonstrated
- JSON transformation reproducible

### W04 - Batch Processing, Utilities, and Testing Basics (Module 2 Checkpoint)

#### Week Focus
Combine Python + API skills into practical script workflows and basic test discipline.

#### Core Learning Outcomes
Learner can:

- batch process records
- chain scripts/utilities
- create reusable helpers
- validate outputs with a test checklist
- deliver a mini script toolkit for admin tasks

#### Required Learner Artifacts

Folder: `submissions/w04/`

- `brief.md` - script toolkit scope and use cases
- `tool1.py` - utility script #1
- `tool2.py` - utility script #2
- `tool3.py` - utility script #3
- `sample.csv` - test input data (`SIMULATED` allowed)
- `out.csv` - processed output
- `tests.md` - test cases + results (required)
- `readme.md` - how to run scripts
- `check.md` - self-QA
- `log.md` - changelog

#### Labs to Author (W04)

- Lab 1: batch loop + file set processing
- Lab 2: validation + skip bad rows
- Lab 3: simple CLI interface / parameterization

#### Module 2 Checkpoint Outcome (Must Be Explicit in W04 Page)
3 small scripts solving admin tasks end-to-end (from blueprint).

#### Gate Emphasis

- exactly 3 scripts present
- at least one batch workflow demonstrated
- test evidence included
- run instructions usable

### W05 - SQL Fundamentals and Schema Design for SMB Workflows

#### Week Focus
Introduce relational thinking and schema design using practical SMB entities.

#### Core Learning Outcomes
Learner can:

- define tables and fields
- write basic SQL queries
- design schemas for leads/customers/jobs/interactions
- use SQLite for local development

#### Required Learner Artifacts

Folder: `submissions/w05/`

- `brief.md` - chosen workflow domain + entities
- `schema.sql` - initial schema (SQLite)
- `seed.sql` - seed/sample rows (`SIMULATED` allowed)
- `queries.sql` - core queries (filters/sorts/lookups)
- `erd.md` - simple entity relationship notes/diagram (text acceptable)
- `tests.md` - query validation results
- `check.md`
- `log.md`

#### Labs to Author (W05)

- Lab 1: create tables + insert records
- Lab 2: filtering/sorting queries
- Lab 3: joins across 2-3 entities

#### Week Checkpoint
Working SQLite schema for a simple SMB workflow (lead/customer/job).

#### Gate Emphasis

- schema supports stated workflow
- queries run successfully
- keys/relationships are sensible
- sample data matches schema

### W06 - CRUD Patterns, Task Queue Basics, and Audit Logging (Module 3 Checkpoint)

#### Week Focus
Teach data mutation patterns + operational tracking, not just reading data.

#### Core Learning Outcomes
Learner can:

- implement CRUD logic against SQLite/Postgres-ready schema
- record interaction history
- model a basic task queue table/state flow
- implement audit logging basics (who/what/when)

#### Required Learner Artifacts

Folder: `submissions/w06/`

- `brief.md` - CRUD workflow scope
- `schema.sql` - updated schema (CRUD + queue + logs)
- `crud.py` (or `crud.md` if SQL-only week variant) - CRUD execution examples
- `queue.md` - queue design (states, retries, timestamps)
- `audit.md` - audit logging rules + examples
- `queries.sql` - CRUD verification / reporting queries
- `tests.md` - create/read/update/delete test results
- `check.md`
- `log.md`

#### Labs to Author (W06)

- Lab 1: CRUD lifecycle on one entity
- Lab 2: queue record state transitions
- Lab 3: audit trail inserts + verification

#### Module 3 Checkpoint Outcome
Lead intake DB + task queue + interaction history store (from blueprint scope).

#### Gate Emphasis

- CRUD demonstrated end-to-end
- queue model includes status + timestamps
- audit entries exist for key changes
- test evidence includes update/delete paths

### W07 - LLM Prompt Systems for Business Tasks (Structured Outputs Focus)

#### Week Focus
Use LLMs for reliable business tasks with clear prompt patterns and JSON outputs.

#### Core Learning Outcomes
Learner can:

- write task-specific prompts (extract/classify/draft/transform)
- define JSON output schemas
- handle malformed outputs with retries/basic validation
- separate system/task/output constraints clearly

#### Required Learner Artifacts

Folder: `submissions/w07/`

- `brief.md` - chosen business tasks (2-3)
- `prompts.md` - prompt set (extraction/classification/drafting/transform)
- `schema.json` - structured output schema(s)
- `samples.md` - input/output examples (`SIMULATED` allowed)
- `rules.md` - allowed/blocked output rules (draft)
- `tests.md` - prompt test matrix (cases + results)
- `check.md`
- `log.md`

#### Labs to Author (W07)

- Lab 1: extraction prompt (email -> structured record)
- Lab 2: classification prompt
- Lab 3: drafting/transformation prompt with schema output

#### Week Checkpoint
At least one task reliably returns schema-conformant structured output.

#### Gate Emphasis

- schema is explicit
- examples include expected vs actual
- prompt intent and output contract are separated
- malformed output handling is addressed (even if manual retry logic in notes)

### W08 - Guardrails, Evaluation, and Human-in-the-Loop Review (Module 4 Checkpoint)

#### Week Focus
Move from "works once" prompts to controlled, reviewable LLM workflows.

#### Core Learning Outcomes
Learner can:

- define guardrails and failure handling
- create an evaluation harness/checklist
- measure accuracy/consistency at a basic level
- insert human review points for risky outputs

#### Required Learner Artifacts

Folder: `submissions/w08/`

- `brief.md` - workflow and risk profile
- `flow.md` - LLM workflow steps + review checkpoints
- `guard.md` - guardrails, blocked outputs, fallback rules
- `eval.md` - evaluation rubric/checklist + sample scoring
- `cases.md` - test cases (good/bad/edge)
- `results.md` - evaluation results summary
- `check.md`
- `log.md`

#### Labs to Author (W08)

- Lab 1: guardrail design for a drafting task
- Lab 2: hallucination/consistency check harness
- Lab 3: human approval workflow simulation

#### Module 4 Checkpoint Outcomes (Blueprint-Aligned)

- Email-to-CRM structured extraction
- Review response generator w/ tone settings
- Estimate note summarizer

These can be "mini systems" with simulated inputs if needed.

#### Gate Emphasis

- evaluation criteria visible
- human-review step explicitly placed
- fallback/retry behavior documented
- risky outputs are constrained

### W09 - Frontend Basics for Internal Tools (Forms, Tables, Validation)

#### Week Focus
Build usable internal UI patterns for speed and clarity (not visual polish).

#### Core Learning Outcomes
Learner can:

- build form inputs and validation
- display tabular data and filters
- design one-screen operator flow
- handle basic loading/error states

#### Required Learner Artifacts

Folder: `submissions/w09/`

- `brief.md` - UI workflow target (internal tool)
- `ui.md` - screen plan / layout notes
- `form.md` - form fields + validation rules
- `table.md` - table columns + filters/sorts
- `states.md` - loading/error/empty states
- `demo.md` - screenshots + walkthrough notes
- `tests.md` - UI behavior checklist
- `check.md`
- `log.md`

If code is required in the week build, add:

- `app.*` (or `page.*`) - minimal implementation file(s)

#### Labs to Author (W09)

- Lab 1: intake form with validation
- Lab 2: table + filters
- Lab 3: empty/error/loading states

#### Week Checkpoint
Admin dashboard + intake form prototype (blueprint-aligned).

#### Gate Emphasis

- one-screen flow is clear
- validation rules exist and are tested
- state handling documented (not just happy path)
- UI supports speed-first workflow

### W10 - UX for Non-Technical Owners (Defaults, Role Views, Approval Flows) (Module 5 Checkpoint)

#### Week Focus
Make internal tools adoptable by non-technical SMB users.

#### Core Learning Outcomes
Learner can:

- reduce settings overload (default-first design)
- create role-based views
- design manual override / approve-edit-send workflows
- write onboarding/help copy that reduces support burden

#### Required Learner Artifacts

Folder: `submissions/w10/`

- `brief.md` - target user roles and workflow
- `roles.md` - owner/admin/staff permission view matrix
- `setup.md` - first-run setup wizard flow
- `approve.md` - approve/edit/send workflow screen spec
- `copy.md` - onboarding copy/tooltips/help text
- `demo.md` - UX walkthrough + rationale
- `tests.md` - usability checklist / scenario tests
- `check.md`
- `log.md`

#### Labs to Author (W10)

- Lab 1: first-run setup flow
- Lab 2: role view / permissions display logic
- Lab 3: approval queue UX with manual override

#### Module 5 Checkpoint Outcomes (Blueprint-Aligned)

- Admin dashboard
- Intake form
- Simple approval queue

Refined for adoption, not just functionality.

#### Gate Emphasis

- role differences are explicit
- defaults are sane and documented
- manual override exists
- UI copy explains risky/confusing actions

### W11 - Deployment Basics: Hosting, Secrets, Logging, Quotas

#### Week Focus
Get tools online safely with minimal operational discipline.

#### Core Learning Outcomes
Learner can:

- prepare a deployment checklist
- configure environment variables/secrets correctly
- add basic logging/monitoring hooks
- account for rate limits/quotas
- document startup and run steps

#### Required Learner Artifacts

Folder: `submissions/w11/`

- `brief.md` - deployment target and assumptions
- `deploy.md` - deployment checklist + steps (required)
- `env.md` - env var map (names only, no values)
- `logs.md` - logging events to capture
- `limits.md` - rate/usage quota plan
- `run.md` - runbook / startup steps
- `tests.md` - smoke test checklist/results
- `check.md`
- `log.md`

#### Labs to Author (W11)

- Lab 1: secrets/env management checklist
- Lab 2: smoke test + health check
- Lab 3: logging + quota failure scenario planning

#### Week Checkpoint
Deployable package/checklist for one internal tool.

#### Gate Emphasis

- no secrets committed
- runbook is usable
- smoke test evidence included
- logging and quota strategy documented

### W12 - Monitoring, Backup/Export, Hardening, and Pre-Capstone Release Prep (Module 6 Checkpoint)

#### Week Focus
Turn "deployed" into "operationally usable" and prep for Term 1 capstone tools.

#### Core Learning Outcomes
Learner can:

- define backup/export basics
- create monitoring/alert checks
- document rollback/recovery basics
- complete a pre-capstone release readiness review

#### Required Learner Artifacts

Folder: `submissions/w12/`

- `brief.md` - tool/release scope for readiness pass
- `monitor.md` - monitoring metrics/events/checks
- `backup.md` - backup/export/restore notes
- `rollback.md` - rollback/recovery playbook (basic)
- `risk.md` - deployment risk review updates
- `release.md` - release readiness checklist/results
- `tests.md` - operational test checks (smoke + failure scenarios)
- `check.md`
- `log.md`

#### Labs to Author (W12)

- Lab 1: backup/export path design
- Lab 2: monitoring & alert checklist
- Lab 3: release readiness review (go/no-go)

#### Module 6 Checkpoint / Term 1 Prep Outcome
Learner has at least one tool with:

- deployment checklist
- secrets handling plan
- logging/monitoring basics
- backup/export basics
- release readiness checklist

#### Gate Emphasis

- backup/export path exists and is documented
- rollback plan exists (even minimal)
- monitoring checks are defined
- release checklist completed honestly (with known risks)

## Batch Production Schedule (Authoring Execution Order)

### Batch A (W02-W04) - Python/API Fundamentals

#### What to Author in This Batch

- `w02.md`, `w03.md`, `w04.md`
- all associated lab pages (if separate pages)
- any shared appendix for:
  - Python setup verification
  - CLI basics
  - env vars
  - API error handling cheatsheet

#### Batch A QA Gates

- W02-W04 all include exact commands/steps
- W04 explicitly enforces 3-script checkpoint
- artifact maps are consistent across all 3 weeks
- simulated examples labeled

### Batch B (W05-W06) - Data + Storage

#### What to Author

- `w05.md`, `w06.md`
- optional shared SQL reference appendix
- shared schema conventions page (entities + naming)

#### Batch B QA Gates

- schema examples are consistent across W05/W06
- CRUD + logging + queue concepts are not conflated
- tests are required in both weeks
- vertical-agnostic examples preserved

### Batch C (W07-W08) - LLM Fundamentals + Prompt Systems

#### What to Author

- `w07.md`, `w08.md`
- shared prompt notation conventions page
- shared evaluation criteria reference page (optional)

#### Batch C QA Gates

- schema output requirements are explicit
- guardrails + eval + HITL are operational, not conceptual only
- examples clearly mark simulated inputs
- no "magic prompting" language without verification steps

### Batch D (W09-W10) - Frontend + UX

#### What to Author

- `w09.md`, `w10.md`
- optional shared UI checklist page for internal tools

#### Batch D QA Gates

- UI weeks include concrete workflow steps, not design theory only
- error/loading/empty states are required
- role-based view logic is explicit in W10
- approval flow includes manual override

### Batch E (W11-W12) - Deployment Basics

#### What to Author

- `w11.md`, `w12.md`
- shared deployment checklist appendix (optional)
- shared security/privacy reminders page (basic)

#### Batch E QA Gates

- secrets handling is explicit (no secret values)
- smoke tests required
- backup/export and rollback included
- release readiness checklist present in W12

## Term 1 Authoring Definition of Done (W02-W12)

Term 1 (weeks only) is done when all are true:

- W02-W12 exist and build cleanly
- every week uses the deep week template sections
- every week has exact step-by-step instructions
- every week includes required artifact schemas
- every week includes labs + QA + pass criteria
- all examples are vertical-agnostic (or labeled simulated)
- cross-week dependencies are accurate
- no dead links/frontmatter/build errors

Recommended immediately after: author Term 1 Capstone page using `docs/templates/cap.md`.

## Suggested Codex Handoff Prompt (Planning Files / Scaffolding Only)

```md
Create a Term 1 authoring planning document (not lesson content yet) using the provided batch plan and per-week artifact maps for W02-W12.

Output file:
- /docs/ops/term1-plan.md

Include:
1) Batch order (A-E)
2) W02-W12 per-week authoring summary
3) Per-week learner artifact map
4) Batch QA gates
5) Term 1 authoring Definition of Done

Do not generate week lesson pages in this task.
Then run local build and report any errors.
Update /docs/ops/changelog.md with: "Added Term 1 authoring batch plan (W02-W12) with artifact maps."
```
