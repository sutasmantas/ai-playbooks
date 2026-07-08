# Open Research Questions

These are questions we're actively trying to answer. Each one feeds into either improving the kit-maker process or improving an existing playbook.

To contribute research on any of these: see [CONTRIBUTING.md](CONTRIBUTING.md). Research contributions run the AI research workflow on your own PC — not manual searching.

If you have a question to add, open a Discussion.

---

## When is a structured playbook actually better than just asking an LLM?

angle-gen-kit was tested on general LLM/AI and sports science domains — and on both, the baseline LLM without the kit already scored at the ceiling on the main coverage metric. So the kit's value is clearest for structural quality (null-hypothesis angles, adversarial separation, precise queries) rather than raw breadth.

**What we want to know:**
- Are there specific task classes or domains where structured procedures produce measurably better results than an unstructured prompt?
- Are there good published comparisons of structured vs unstructured AI agents on research or information-retrieval tasks?
- Do structured procedures help more with novice users than experts? Is there evidence either way?

---

## How do humans find cross-disciplinary research that's hard to find with keywords?

One of the core ideas in angle-gen-kit is that AI agents miss vocabulary traditions the user didn't already know about. Humans face the same problem.

**What we want to know:**
- How do researchers in systematic review methodology describe the process of identifying non-obvious search terms?
- What strategies do librarians or research consultants use to find literature outside a researcher's home vocabulary?
- Are there documented examples of important findings that were missed because researchers searched only within their own vocabulary tradition?

---

## What task classes should become kits?

The kit-maker process can be applied to any repeatable AI task. We don't have a principled way to decide which ones are worth building kits for.

**What we want to know:**
- What are the AI tasks (in real use) that produce the most inconsistent results? Where do people say "the AI sometimes does this well and sometimes badly, and I don't know why"?
- Are there documented surveys or analyses of AI failure modes across different task types?
- What tasks do AI developers and researchers consistently say they can't rely on AI for?

---

## What makes a behavioral contract actually effective?

Each playbook has a CLAUDE.md behavioral contract — rules the AI agent follows. We built these from research, but the research base is limited.

**What we want to know:**
- What makes an instruction more or less likely to be followed by a language model? Is there published research beyond the basics?
- Are there studies comparing different phrasings of the same rule and measuring compliance?
- What instruction formats are most robust when the context window gets long or the session goes on for a while?

---

## How do other structured AI workflow systems handle quality measurement?

We use a 0–3 scale and defined rubric dimensions (Q3, Q5, Q7) to score angle-gen-kit outputs. This was designed from first principles.

**What we want to know:**
- How do existing LLM evaluation frameworks measure output quality for open-ended generation tasks?
- Are there better scoring rubric designs for tasks like "generate a diverse set of questions"?
- What are common failure modes in rubric-based LLM evaluation? (When does the rubric produce misleading scores?)
