---
title: Overview
description: Overview of Mathlify
layout: ../../layouts/MainLayout.astro
setup: |
  const R = "R", Q = "Q", pmatrix = "pmatrix", i = "i";
---

## Mathematical Overview

The real numbers $\mathbb{R}$ are reasonably well modelled by the default
Javascript number type and its floating point representation.

But while we nominally work in the real numbers most of the time
in an educational context, the specific examples we use are
almost always in the rational field $\mathbb{Q}$, with the occasional extension
with a few quantities like $\pi$ and $\sqrt{2}$.

In fact, we can almost view most of high school mathematics as a vector space
over $\mathbb{Q}$, with the space spanned by elements we are studying.

### Mathlify's mathematical model

This mental model is how we build Mathlify. For example, we break up
an expression like $2 - 3 \pi + \frac{1}{4} \sin x$ as follows:

- Model $2, -3$ and $\frac{1}{4}$ as ***Fractions***
- Build ***Terms*** with those fractions as coefficients and the variable modelled by
"the empty string", $\pi$ and $\sin x$ respectively.
- Combine them together as an ***Expression***

These three constructs are implemented as Javascript classes.

Other quantities like surds $2 + 3 \sqrt{5}$, angles and special
functions $\frac{1}{4} \pi$ and $2 \sin x$, vectors $\begin{pmatrix}1\\-2\\3\end{pmatrix}$
and complex numbers $1-\frac{1}{2}\mathrm{i}$ are then built on top of these three
foundational classes.

## Mathlify Overview

The Mathlify library is broadly made up of three types of modules:

- Javascript **classes** representing various mathematical objects. For example,
  - `Fraction`,
  - `Term` and `Expression`,
  - `Polynomial`
  - (Coming soon) `Vectors` and more
- **Utility** functions like `gcd`
- **Random** functions like `getRandomInt` to randomly generate elements

### LaTeX output

Calculations and manipulations are carried out mainly through
class methods.

In addition, all Mathlify classes come with an in-built `toString` method that
converts the mathematical object into a $\LaTeX$ string representation.

This gives rise to idiomatic code, especially when paired with the
Javascript "backticks" template literals and code highlighting via a code editor.

```js
import { Fraction, Term, Polynomial } from 'mathlify';
const oneHalf = new Fraction(1,2);
const threeX = new Term(3, 'x');
const x2MinusXPlusHalf = new Polynomial([1, -1, oneHalf]);
// LaTeX output
`${oneHalf}` // returns "\\frac{1}{2}"
`2 - ${threeX}` // returns "2 - 3 x"
`${x2MinusXPlusHalf} = 0` // returns "x^2 - x + \\frac{1}{2} = 0"
```

We can then pair Mathlify with $\KaTeX$ for web applications, or use nodeJS to
produce tex and pdf documents.

$\frac{1}{2}$, $2 - 3 x$, $x^2 - x + \frac{1}{2} = 0$
