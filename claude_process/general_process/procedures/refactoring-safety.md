# Procedure: Refactoring with Safety Nets

**Use when:** changing the internal structure of code WITHOUT changing observable behavior. Refactors without safety nets are walking accidents.

## Concrete smell thresholds — refactor when

- A method exceeds 30 lines (one screen).
- Nesting exceeds 3 levels deep.
- A function takes more than 4 parameters.
- A block of 6+ lines is duplicated in two or more places.
- A class has more than 7 public methods.
- A file mixes more than 2 distinct responsibilities.

These are triggers, not laws. Investigate when one fires; refactor when the investigation confirms the smell. Do not refactor just to hit a threshold.

## The procedure

### Step 1 — Characterization test FIRST

Before changing any internal structure, write a test that captures the CURRENT observable behavior — including any bugs the current code has. Run it. Confirm green.

If you cannot write a characterization test (the code reaches out to live services, has no clear contract, etc.), STOP. Build the testability first. Refactoring untested code is rewriting it blind.

### Step 2 — Define the invariant

Write down in one sentence: *"after this refactor, X must still be true."* Specifically:
- What inputs must still produce what outputs?
- What side effects (DB writes, API calls, file I/O) must still occur?
- What error modes must still be handled?

If you cannot state the invariant, the scope of the refactor is unclear and you are not ready to start.

### Step 3 — Atomic compilable commits

Decompose the refactor into commits where EACH commit:
- Compiles cleanly
- Passes the full test suite
- Makes ONE structural change

Forbidden: "refactor in progress" commits that don't compile. If you find yourself wanting one, the refactor scope is wrong — make a smaller step.

### Step 4 — Run the full test suite after each commit

Not just the touched files' tests. The full suite. Refactors hit places you don't expect through shared utilities, dependency injection, runtime polymorphism, and import-time side effects.

### Step 5 — Behavioral diff against the truth surface

The characterization test catches automated regressions. The truth surface (CLI stdout, library return value, API response, generated file, log output) catches what the test misses. Exercise it before, exercise it after. Compare.

## What is NOT a refactor

- A "refactor" that also adds a feature is a feature. Split it.
- A "refactor" that fixes a bug is a bug fix. Split it.
- A "refactor" that changes external interface (function signature, REST contract, schema) is an API change. Different rules apply.
- A "refactor" that ships in the same commit as the change that triggered it is two changes. Split them.

If your single commit changes structure AND behavior, you're not refactoring — you're hoping nothing breaks. See [[scope-discipline]].

**Trace:** adapted from `refactoring-specialist` in [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit). Complements [[expected-before-change]] (the characterization test IS the expected-before-change for a refactor).
