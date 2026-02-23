# Project Canon — SMB AI Tool Builder Program Site
> Version: 1.0 | Created: 2026-02-23 | Last Reviewed: 2026-02-23
> Next Review: 2026-05-24

---

## 1. Identity

- **Project:** SMB AI Tool Builder Program Site — a web-based, academic-level, job-ready training program for building and marketing AI tools for small businesses.
- **Owner:** Michael
- **Audience:** Self-directed builders, freelancers, AI automation consultants, career switchers.
- **Deliverable:** GitHub-hosted curriculum site (36-week program) with lessons, rubrics, templates, capstones, and portfolio/sales assets.
- **Timeline:** Build incrementally; ship v0.1 with core pages + Week 1 + templates first, then expand through all 36 weeks.
- **AI Role:** OpenAI Codex for implementation/refactors/scaffolding; ChatGPT for curriculum design, QA, and system architecture.

---

## 2. Rules and Constraints

### Critical Rules (never violate)
1. The curriculum structure must remain aligned to the approved **36-week blueprint** unless Michael explicitly changes it.
2. Every week/module page must map to measurable competencies and explicit pass criteria.
3. No major project/capstone page ships without required artifacts and rubric sections.
4. No fabricated case studies, outcomes, or statistics. Simulated examples must be labeled.
5. GitHub site v1 is **docs-first** and **no backend** unless approved.

### Style Rules
6. Direct, clear language. Lead with outcomes and actions.
7. Use headers/checklists/tables where useful for scannability.
8. Maintain academic rigor and practical job-readiness in the same page.
9. Use consistent terminology: competency gate, artifact, rubric, capstone, deliverable.
10. Avoid hype language and vague “AI magic” phrasing.

### Format Rules
11. Weekly pages must include: Goal, Competencies, Concepts, Labs, Build Assignment, Artifacts, Rubric, Pass Criteria, Hours, Ship Checklist.
12. Rubric pages use weighted criteria and explicit scoring guidance.
13. Templates live under `docs/templates/` and are reused, not copied ad hoc.
14. Decision changes must be logged in `ops/log.md` and mirrored in this canon if structural.

### Anti-Failure Rules
15. Re-inject this canon at every new session.
16. Re-anchor every 10–15 turns or phase transition.
17. If drift occurs, run recovery protocol from `ops/drift.txt`.
18. If task scope is ambiguous, list interpretations and proceed with the safest default (marked as assumption).

---

## 3. Decision Log

| Date | Decision | Rationale | Made By |
|------|----------|-----------|---------|
| 2026-02-23 | Build as GitHub-hosted docs site first (no backend v1) | Low friction, fast shipping, easy versioning | Michael (approved direction) |
| 2026-02-23 | Use AI Workflow Mastery methods as operating system for build process | Ensures consistency, QA, and scalability across 36 weeks | Michael |
| 2026-02-23 | Program format locked: 36 weeks, academic + job-ready, SMB service-business focus | Aligns with business outcome and portfolio goals | Michael |
| 2026-02-23 | Framework selected: Docusaurus with GitHub Pages deploy workflow | Matches docs-first v1 constraint and fast incremental curriculum shipping | Michael + Codex session implementation |

> Add every significant decision here. Decisions not logged will be forgotten.

---

## 4. Style Guide

### Voice
- Direct, precise, practical.
- Academic-level rigor without academic fluff.
- Teacher-builder tone: clear instruction, explicit criteria, actionable next steps.

### Reference Paragraph
```text
This week trains one job-critical capability and produces one concrete artifact. You do not advance by reading alone. You advance by demonstrating the competency gate with working output, documentation, and a short verification pass against the rubric.
```

### Vocabulary
- **Use:** competency gate, artifact, rubric, capstone, deliverable, verification, deployment checklist, KPI hypothesis
- **Avoid:** hack, magic, effortless, revolutionary, guru

### Formatting Preferences
- Checklists for action steps
- Tables for grading/rubric criteria
- Code blocks for prompts and templates
- Short paragraphs; one main idea per paragraph

---

## 5. Current Status

### Completed
- [x] Program blueprint defined (36 weeks, 3 terms, 16 modules, capstones, deliverables)
- [x] Phase 1 operating-system structure planned (ops files + prompts folders)
- [x] Docusaurus v0.1 scaffold created with required docs structure and GitHub Pages workflow

### In Progress
- [ ] Phase 4: Expand from v0.1 slice to full 36-week content in phased releases

### Upcoming
- [ ] Enable GitHub Pages in repository settings and run first deployment from `main`
- [ ] Add Term 1 weeks w02-w12 using `docs/templates/week.md`
- [ ] Add remaining rubric/template sets and portfolio asset pages

### Open Issues
- Choose first example vertical for case studies (default suggested: Home Services)

---

## 6. Site Information Architecture (Locked for v0.1+)

```text
/docs
  intro.md
  outcomes.md
  grading.md
  stack.md
  roadmap.md
  /term1 (w01-w12 + cap1)
  /term2 (w13-w24 + cap2)
  /term3 (w25-w36 + cap3)
  /rubrics (labs, projects, caps, gates)
  /templates (week, lab, project, cap, case, demo, sop, test, deploy)
  /portfolio (tools, cases, demos, pricing, offers, scripts, onboarding, support, analytics)
  /ops (canon, decisions, changelog)
```

### v0.1 Slice (must ship first)
1. intro
2. outcomes
3. grading
4. roadmap
5. term1/w01 (fully built)
6. templates/week + rubrics/labs (or equivalent starter templates)
7. GitHub Pages deploy working

---

## 7. Program Blueprint Snapshot (source anchor)

- **Goal:** Build and market a portfolio of AI tools for SMBs (service businesses first)
- **Format:** Self-directed, academic-style, graded checkpoints
- **Duration:** 36 weeks (part-time)
- **Outcome:** 6–8 shipped tools, portfolio, case studies, sales system

### Term Structure
- **Term 1 (Weeks 1–12):** Foundations (Python/APIs/data/LLMs/frontend/deploy)
- **Term 2 (Weeks 13–24):** Real SMB product builds, integrations, security, UX, offers
- **Term 3 (Weeks 25–36):** Sales, marketing, analytics, advanced AI patterns, founder/job readiness

### Competency Gates (must demonstrate)
- API integration
- Structured LLM output
- DB CRUD + logging
- Basic auth/permissions
- Deployment + monitoring
- Pricing + offer design
- Sales demo competency

---

## Usage Instructions

### Every Session Start
1. Paste/upload `ops/rules.md`
2. Paste/upload this canon file
3. Paste/upload `ops/sum.md`
4. State today’s task
5. Provide only task-relevant source files

### Every Session End
1. Update `ops/log.md`
2. Update this canon (Decision Log / Current Status if needed)
3. Update `ops/sum.md` (<100 words)
4. Save outputs to repo

---

*Customized from the AI Workflow Mastery Project Canon template (FLX AI Studio).*
