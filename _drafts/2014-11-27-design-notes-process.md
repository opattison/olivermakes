---
title: 'Design notes: process'
layout: singel
category: writing
date: 2014-11-27 21:55
updated: 2014-11-28 00:21
image:
  - src: 2014-11-27-pattern-library-sample.png
    alt: 'Screenshot of a grid of boxes with examples of color patterns from this website'
    caption: 'A sample of colors from an early version of this site’s [pattern library](/patterns). This is only a screenshot from the pattern library captured 2014-11-28.'
  - src: 2014-10-23-chrome-emulator-typography-testing.png
    alt: 'Screenshot of testing typography in Chrome, the web browser'

---

My process for designing this site began with a handful of sketches and notes. As soon as I had enough to start with, I started work in a text editor and browser and came up with a typographic measure and fundamental ratios. I avoid mockups and high-fidelity compositions in favor of sketching, followed by iterative HTML/CSS prototyping that that I worked into finished code as the project progressed.

<aside class="ancillary">
  <h1>Designing in developer tools in Chrome</h1>
  <img
  src="{{ site.image-url }}/{{ page.image[1].src }}" 
  alt="{{ page.image[1].alt }}"
>
</aside>

When I design for the web, I target small-screens first (commonly known as [“mobile-first”](http://www.abookapart.com/products/mobile-first) implementation), so I make sure to test on a variety of devices as I go along. The first browser width I look at is under `20em` (less than ~320 pixels). Working with fewer assumptions about device types informs the design process; it is easier to design with empathy and flexibility with a responsive and iterative process.

## Patterns

A significant part of my process involved establishing a [pattern page](/patterns) with reference examples of general HTML and specific use cases for my own designs. I plan to expand it and turn it into a pattern library and style guide for the site.

Here is an example of what this looks like:

<figure class="wide">
  <img
    src="{{ site.image-url }}/{{ page.image[0].src }}" 
    alt="{{ page.image[0].alt }}"
>
  <figcaption>{{ page.image[0].caption | markdownify }}</figcaption>
</figure>

## Responsive Images

- - -