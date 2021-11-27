---
title: Term and Expression tutorial
description: Guided examples for the Term and Expression classes
layout: ../../layouts/MainLayout.astro
setup: |
  import T2aDemo from '../../components/Demos/T2aDemo.svelte';
  import T2bDemo from '../../components/Demos/T2bDemo.svelte';
  import T2cDemo from '../../components/Demos/T2cDemo.svelte';
---

## The Term class

### Why the Term class?

The majority of quantities we will work with, like $2x, 3 \sin x$ and
$\frac{1}{4} \pi$ can be broken down into two components: a *coefficient*
and a *variable*.

The `Term` class in Mathlify models this, with the coefficient stored as
a `Fraction` and the variable a `string`.

During typesetting, the `Term` class will do automatic simplification of
edge cases like $1x$ and $0x^2$ into $x$ and $0$ respectively.

### The Term constructor

To create a new `Term` instance, we call the constructor and
supply the coefficient and variable.

If no variable is provided, it will default to the empty string so that
the term will represent a "constant term".

```js
import { Term, Fraction } from 'mathlify';
// constructor
const twoX = new Fraction(2, 'x'); // 2 x
const piOver4 = new Term(new Fraction(1,4), '\\pi'); // 1/4 pi 
// constant term
const three = new Term(3); // 3
```

## The Expression class

### Why the Expression class?

The next natural step after creating `Terms` is to combine them together
(via addition) to form an `Expression`, like $2x - 3 + \frac{1}{4} \pi$.

The `Expression` class will **combine like terms** automatically, so
$2x - 3 + 5x$ will be stored as $7x - 3$.

The class also handle edge typesetting
cases around terms with 0 coefficient and positive/negative signs, so
that $2x + -3 + 0x^2 + 5x$ will become $7x - 3$.

### The Expression constructor

To create a new `Expression` instance, we call the constructor and
supply the `Terms` making up the expression.

A `number` or `Fraction` input will be treated as the constant term while a
`string` input will be treated as a Term with coefficient 1.

```js
import { Expression, Term, Fraction } from 'mathlify';
const oneQuarter = new Fraction(1, 4); // 1/4
const twoX = new Term(2, 'x'); // 2 x
// expression constructor
const twoXMinus3 = new Expression(twoX, -3); // 2x - 3
// combining like terms
const threeXPlusOneQuarter = new Expression(twoX, oneQuarter, 'x'); // 3x + 1/4
```

## Class methods

### toString methods

```js
import { Term, Expression, Fraction } from 'mathlify';
const oneHalf = new Fraction(1,2); // 1/2 
// terms
const negativeX = new Term(-1, 'x'); // - x
const halfPi = new Term(oneHalf, '\\pi'); // 1/2 pi
const zeroY = new Term(0, 'y'); // 0
// term toString method
negativeX.toString() + `, ${halfPi}, ${zeroY}`; // "- x, \\frac{1}{2} \\pi, 0"
// expression
const yPlusHalfPiMinusOne = new Expression('y', negativeX, halfPi, -1, 'x'); // y + 0 x + 1/2 pi - 1;
// expression toString method
`${yPlusHalfPiMinusOne}`; // "y + \\frac{1}{2} \\pi - \\frac{1}{2}"
```

<!-- markdownlint-disable -->
<T2aDemo />
<!-- markdownlint-enable -->

### Arithmetic methods

Both `Terms` and `Expressions` come with the `add` and `subtract` methods to
form new expressions.

They also come with a `multiply` method that does **scalar multiplication**.

```js
import { Expression, Term, Fraction } from 'mathlify';
const oneHalf = new Fraction(1,2); // 1/2 
const halfX = new Term(oneHalf, 'x'); // 1/2 x
const xMinusTwo = new Expression('x', -2); // x - 2
// add and subtract
const xMinusTwoPlusY = xMinusTwo.add('y'); // x - 2 + y
// scalar multiply
const quarterX = halfX.multiply(oneHalf); // 1/4 x
// demo below
`${halfX} - 1 + y \\equiv ${halfX.subtract(1).add('y')}`;
`3 ( ${xMinusTwo} ) = ${xMinusTwo.multiply(3)}`;
```

<!-- markdownlint-disable -->
<T2bDemo />
<!-- markdownlint-enable -->

### What about other multiplications?

Notice that the `Fraction` class has `plus`, `minus`, `times` and `divide` methods
while the `Term` and `Expression` classes have `add`, `subtract` and `multiply`.

We adopt the convention that `add`, `subtract` and `multiply` refer to
operations on `Term`/`Expression` like objects, where `multiply` would refer
to **scalar multiplication**.

Meanwhile, `plus`, `minus` and `times` refer to the operations within the
mathematical construct like fractional arithmetic.

More complicated objects that will be added to the library like the `SquareRoot`
class (which will be an extension of the `Term` class) will then have a `times`
method that will allow $3 \sqrt{2} \times \sqrt{5} = 3 \sqrt{10}$.

Meanwhile, the `ComplexNumber` class representing $a+b\mathrm{i}$ will then have
its own `plus`, `minus`, `times` and `divide` methods representing complex
arithmetic.

This naming conventions allow these new classes to still be compatible with
the `Term` and `Expression` construct.

## Class extensions: xTerm, xExpression

The `Term` class by itself treats the variable as just a `string`. `Terms` with
the same variable string are "like terms" that can be combined, but other than
that we can't do much else with them.

Mathematically we treat `Terms` like $2a, 3x^2, 4\pi$ and $5 \sin x$ slightly
differently. In particular, we often like to substitute a value of $x$ into
the $3x^2$ and $5 \sin x$ terms.

### The xTerm class

We thus extend the `Term` class into the `xTerm` class by providing a function
that allows substitution. For example, we could set up the $3x^2$ term as follows:

```js
import { xTerm, Fraction } from 'mathlify';
const oneHalf = new Fraction(1,2);
// xTerm constructor
const threeX2 = new xTerm(3, 'x^2', (x)=>{
  // note that coefficients should not be included here
  const xFrac = typeof x === 'number' ? new Fraction(x) : x;
  return x.times(x);
});
// demo below: substituting values
`${threeX2} = 3 ( ${oneHalf} )^2 = ${threeX2.subXAs(oneHalf)}`;
```

<!-- markdownlint-disable -->
<T2cDemo />
<!-- markdownlint-enable -->

### The xExpression class

Just like the `Expression` class can be thought of as a collection of
`Terms`, the `xExpression` class is a collection of `xTerms`.

## The pTerm class

**Polynomials** are the next type of mathematical object we will be
modelling, and as such, we will need our class to have an understanding
of the *index/power* of a term.

We thus have the `pTerm` class where a term like $3x^2$ is modelled with
a coefficient 3, a `variableAtom` "x" and a index, $n$, of 2. The variable
is then automatically constructed as "x^2".

This class is used mainly to construct the `Polynomial` class covered in
the next chapter, and will rarely be called directly.
