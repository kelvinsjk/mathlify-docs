---
title: Polynomial tutorial
description: Guided examples for the Polynomial class
layout: ../../layouts/MainLayout.astro
setup: |
  import T3aDemo from '../../components/Demos/T3aDemo.svelte';
  import T3bDemo from '../../components/Demos/T3bDemo.svelte';
  import T3cDemo from '../../components/Demos/T3cDemo.svelte';
---

## Why the Polynomial class?

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

### Demo of constructor and toString method

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
<T3aDemo />
<!-- markdownlint-enable -->

## Class methods

### Polynomial addition and multiplication

Polynomial addition, subtraction and multiplication are supported via the
`add`, `subtract` and `multiply` methods.

Mathlify does not check for if the `variableAtom` is the same for both polynomials
so it is up to the user to ensure that they are the same. The `variableAtom` and
`ascending` options of the first `polynomial` are used for the result.

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
<T3bDemo />
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
<T3cDemo />
<!-- markdownlint-enable -->

## Possible errors

The `Polynomial` class only supports non-negative powers: an error will be
thrown if the negative powers are encountered.
