---
title: Fraction tutorial
description: Guided examples for the Fraction class
layout: ../../layouts/MainLayout.astro
setup: |
  import T1aDemo from '../../components/Demos/T1aDemo.svelte';
  import T1bDemo from '../../components/Demos/T1bDemo.svelte';
  import T1cDemo from '../../components/Demos/T1cDemo.svelte';
---

## Why the fraction class?

Cases like $\frac{6}{4}, \frac{3}{1}$ and $\frac{5}{-2}$ are avoided when we use
the `Fraction` class in Mathlify. They will be automatically converted to and typeset as
$\frac{3}{2}, 3$ and $- \frac{5}{2}$ respectively.

The class methods discussed below also handle common operations when working
with fractions.

## Constructor

To create a new `Fraction` instance, we call the constructor and
supply the numerator and denominator.

```js
import { Fraction } from 'mathlify';
// constructor
const oneHalf = new Fraction(1,2); // 1/2 
// automatic simiplification
const twoThird = new Fraction(-4,-6); // 2/3
```

## Class Properties

After simplification, the numerator and denominator of the fraction will be stored as
`num` and `den`, where `num` is an integer and `den` is a positive integer.

```js
import { Fraction } from 'mathlify';
const twoThird = new Fraction(-4,-6);
// num and den properties
const numerator = twoThird.num; // 2
const denominator = twoThird.den; // 3
```

## Class Methods

### toString

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

### Arithmetic methods

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

### Comparison methods

We provide comparison methods `isInteger`, `isEqualTo`, `isGreaterThan`,
`isLesserThan`, `isAtLeast` and `isAtMost`.

```js
import { Fraction } from 'mathlify';
const oneHalf = new Fraction(1,2); // 1/2 
const negativeThree = new Fraction(-3, 1); // -3
// comparison
oneHalf.isInteger(); // false
negativeThree.isInteger(); // true
oneHalf.isGreaterThan(negativeThree); // true
negativeThree.isEqualTo(-3); // true
oneHalf.isAtMost(-3); // false
```

### Conversion to primitive types

The `valueOf` method converts the Fraction instance to the Javascript `number`
type. The `sign`, `toFixed` and `toPrecision` methods are also implemented for
the `Fraction` class.

```js
import { Fraction } from 'mathlify';
const twoThird = new Fraction(2,3); // 2/3
const negativeThree = new Fraction(-3, 1); // -3
// to number type
twoThird.valueOf(); // 0.66666666667
negativeThree.sign(); // -1
// to String type
twoThird.toPrecision(3); // "0.667"
negativeThree.toFixed(2); // "-3.00"
```

## Static methods and properties

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

Errors will be thrown if:

- 0 is provided as the denominator, e.g. `new Fraction(1,0)`
- A non-integer is provided, e.g. `new Fraction(2.1,3)`
