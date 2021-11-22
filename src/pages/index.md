---
title: Mathlify Docs
description: Mathlify Documentation
layout: ../layouts/MainLayout.astro
setup: |
  import { Code } from 'astro/components';
  import IndexDemo from '../components/Demos/IndexDemo.svelte';
  const codeBash = `# install via npm\rnpm i mathlify`;
  const codeImport = `// example.js\rimport { Fraction, Polynomial } from 'mathlify';`;
---
## What is Mathlify

**Mathlify** is a Javascript/Typescript library that helps us produce
mathematical content, primarily in an educational context.

Key features:

- 🎵 Idiomatic manipulation of mathematical objects
- ✍ Professional $\LaTeX$ output
- 🔌 Easy integration with other tools to create web apps and pdf documents
- ⭕ Zero dependencies for the base library
- Current features
  - ✅ Fractions
  - ✅ Terms and expressions
  - ✅ Polynomials
  - 🔧 Many more to be added

## Demo

Here we generate a linear equation

$$
ax+b=c,
$$

where $a,c \in \mathbb{Q}$ and $b \in \mathbb{Z}.$

<!-- markdownlint-disable -->
<IndexDemo client:load />
<!-- markdownlint-enable -->

## Why Mathlify?

### Calculate and typeset at the same time

Mathlify allows us to perform calculations and manipulate of mathematical objects.
At the same time,
all classes come with a `toString` method that outputs $\LaTeX$ markup.

Traditionally,
we may have to first work out the calculations separately before digitizing our content,
almost as an afterthought.

Working with Mathlify allows us to essentially do both at the same time.
This mimics the pen and paper/chalk
and board experience (except with supercharged computational power).

### Handle typesetting edge cases

We typically do not think much of common notational simplification such as expressing
$\frac{2}{1}$ as $2$, $1x$ as $x$ and $0y$ as $0$.

This will be a source of annoyance, however, when we start creating dynamic
content that are randomly generated or user-driven.

Mathlify automatically handles these edge cases so we no longer
need to stick to specific, handcrafted examples.

### Produce mathematical content for the digital era

While pen and paper is still a big pillar in mathematics education,
we should strive to produce more quality content on mobile devices.
Users scrolling through a pdf document on a mobile device
should be a relic of tha past.

As a Javascript library, Mathlify was built to tackle this.
We have had much success pairing Mathlify with $\KaTeX$, Svelte and Astro
in creating mathematics-rich websites [websites](https://math-bounty.vercel.app)
and [web](https://math-atlas.vercel.app) [applications](https://3d-vectors.vercel.app).

At the same time,
we have discovered that we can easily tweak our integrations to produce full
$\LaTeX$ pdf documents through a templating engine and nodeJS.
This gives us the opportunity to achieve the holy grail of "write once,
run anywhere" with the correct workflow setup.

We look forward to showcasing our own implementation of this in the near future.

## Getting started

### Add to project

<!-- markdownlint-disable -->
<Code code={codeBash} lang="bash" />
<!-- markdownlint-enable -->

### Import modules

Import the modules you require in javascript/typescript

<!-- markdownlint-disable -->
<Code code={codeImport} lang="js" />
<!-- markdownlint-enable -->
