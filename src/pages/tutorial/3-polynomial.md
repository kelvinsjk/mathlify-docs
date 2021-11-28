---
title: Polynomial tutorial
description: Guided examples for the Polynomial class
layout: ../../layouts/MainLayout.astro
setup: |
  import T1aDemo from '../../components/Demos/T1aDemo.svelte';
  import T1bDemo from '../../components/Demos/T1bDemo.svelte';
  import T1cDemo from '../../components/Demos/T1cDemo.svelte';
---

## Why the Polynomials class?

Polynomials are the most common type of expressions we will encounter.
The `Polynomial` class extends the `xExpression` class and includes
support for polynomial multiplication in addition to scalar multiplication.

## Constructor

To create a new `Polynomial` instance, we call the constructor and
supply an array with the coefficients of the Polynomial.

By default, we assume that the polynomial is in descending order terminating
at the constant term with a `variableAtom` of "x".

We can also supply options to change the polynomial to ascending order, change
the `variableAtom` and explicitly set the degree of the polynomial (instead
of inferring from the coefficient array).

```js
import { Polynomial, Fraction } from 'mathlify';
const oneHalf = new Fraction(1,2); // 1/2 
// constructor
const threeX2MinusXPlusHalf = new Polynomial([3, -1, oneHalf]);
// options
const onePlusTwoX = new Polynomial([1, 2], {ascending: true});
const x9MinusTwoX7 = new Polynomial([1, 0, 2], {degree: 9});
const threeY2MinusYPlusHalf = new Polynomial([3, -1, oneHalf], {variableAtom: "y"});
```

<!-- markdownlint-disable -->
<T1aDemo />
<!-- markdownlint-enable -->

## Class methods

### toString method

The `toString` method outputs the $\LaTeX$ representation of the fraction instance.
Integers will be typeset accordingly.

```js
import { Fraction } from 'mathlify';
const oneHalf = new Fraction(1,2); // 1/2 
const negativeThree = new Fraction(-3,1); // -3
// toString method
oneHalf.toString(); // "\\frac{1}{2}"
// using template literal
`${negativeThree} + ${oneHalf}`; // "- 3 + \\frac{1}{2}"
```

<!-- markdownlint-disable -->
<T1aDemo />
<!-- markdownlint-enable -->

### Polynomial addition and multiplication

The usual arithmetic operations of addition, subtraction, multiplication, division
and exponentiation are implemented as the `plus`, `minus`, `times`, `divide`, `pow`
methods. The first four support inputs of type `Fraction` or `number`. They can
also be chained together.

```js
import { Fraction } from 'mathlify';
const oneHalf = new Fraction(1,2); // 1/2 
const threeQuarter = new Fraction(3,4); // 3/4
// arithmetic
oneHalf.plus(threeQuarter); // 5/4
oneHalf.times(3); // 3/2
threeQuarter.pow(2); // 9/16
// chaining
oneHalf.minus(threeQuarter).divide(2); // -1/8
// demo below
`${oneHalf}^2 \\times ${threeQuarter} = ${oneHalf.pow(2).times(threeQuarter)}`;
```

<!-- markdownlint-disable -->
<T1bDemo />
<!-- markdownlint-enable -->

Other useful arithmetic methods that are included are `negative`, `abs`, `reciprocal`
and `square`: see the API reference for more details.

### Substituting values

Test

## Static properties

The building blocks $0$ and $1$ are implemented as a static property.

```js
import { Fraction } from 'mathlify';
const one = Fraction.ONE; // same as calling new Fraction(1,1);
const zero = Fraction.ZERO; // same as calling new Fraction(0,1);
```

`gcd` and `factorize` are static methods:

```js
import { Fraction } from 'mathlify';
const oneHalf = new Fraction(1,2); // 1/2
const threeQuarter = new Fraction(3, 4); // 3/4
// gcd
Fraction.gcd(oneHalf, threeQuarter); // 1/4
// factorize
const [[a,b], k] = Fraction.factorize(oneHalf, threeQuarter); // [[2, 3], 1/4]
// demo below
`${oneHalf} + ${threeQuarter} = ${k} ( ${a} + ${b} )`;
```

<!-- markdownlint-disable -->
<T1cDemo />
<!-- markdownlint-enable -->

## Possible errors

The `Polynomial` class only supports non-negative powers: an error will be
thrown if the negative powers are encountered.
