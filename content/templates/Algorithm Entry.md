---
entry number: ""
title: {{title}}
date: {{date:YYYY-MM-DD}}
tags:
  - Algoposting
summary: 
status: draft
draft: true
---
---

Where you ran into this algorithm, and why it was worth a rabbit hole.

---
### <span style="color:#8bd952">The Problem</span>

> [!problem] 
> **Setting.** Who the players are, what they can and can't do.
> **Input.** 
> **Output.** What counts as a correct answer.
> **Guarantees.** Termination, agreement, validity, approximation ratio, whatever applies.

Why the obvious approach doesn't work. This is usually the most interesting
paragraph in the whole entry, so it's worth more than one line.

---
### <span style="color:#8bd952">Intuition</span>

> [!intuition] 
> The one-sentence version, before any formalism.

Then the longer version. What's the trick? Where does the leverage come from?

---
### <span style="color:#8bd952">The Algorithm</span>

```text
procedure NAME(input):
    initialise
    loop:
        step
        step
    until condition
    return answer
```

A line-by-line walk through anything that isn't obvious from the pseudocode.

---
### <span style="color:#8bd952">Why It Works</span>

> [!invariant] 
> The property that holds at the top of every round.

> [!proof]- Correctness
> Show the invariant survives one step, then induct.

> [!proof]- Termination
> Why it stops. If it's randomised, with what probability and in expectation.

---
### <span style="color:#8bd952">Complexity</span>

> [!complexity] 
> | Resource | Bound | Where it comes from |
> | -------- | ----- | ------------------- |
> | Time     | $O()$ |                     |
> | Space    | $O()$ |                     |
> | Rounds   | $O()$ |                     |
> | Messages | $O()$ |                     |

Any recurrence worth writing out:

$$T(n) = T\left(\frac{n}{2}\right) + O(n)$$

---
### <span style="color:#8bd952">Worked Example</span>

A small instance traced by hand. Small enough to follow, big enough to show the
interesting case rather than the trivial one.

| Round | State | Note |
| ----- | ----- | ---- |
| 0     |       |      |
| 1     |       |      |

---
### <span style="color:#8bd952">Summary</span>

What to actually remember. The one idea worth carrying to the next algorithm.

---
### <span style="color:#8bd952">References</span>

- 
