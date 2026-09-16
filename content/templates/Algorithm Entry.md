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
### The Problem

> [!problem] 
> **Setting.** Who the players are, what they can and can't do.
> **Input.** 
> **Output.** What counts as a correct answer.
> **Guarantees.** Termination, agreement, validity, approximation ratio, whatever applies.

Why the obvious approach doesn't work. This is usually the most interesting
paragraph in the whole entry, so it's worth more than one line.

---
### Intuition

> [!intuition] 
> The one-sentence version, before any formalism.

Then the longer version. What's the trick? Where does the leverage come from?

---
### The Algorithm

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
### Why It Works

> [!invariant] 
> The property that holds at the top of every round.

> [!proof]- Correctness
> Show the invariant survives one step, then induct.

> [!proof]- Termination
> Why it stops. If it's randomised, with what probability and in expectation.

---
### Complexity

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
### Worked Example

A small instance traced by hand. Small enough to follow, big enough to show the
interesting case rather than the trivial one.

| Round | State | Note |
| ----- | ----- | ---- |
| 0     |       |      |
| 1     |       |      |

---
### Summary

What to actually remember. The one idea worth carrying to the next algorithm.

---
### References

- 
