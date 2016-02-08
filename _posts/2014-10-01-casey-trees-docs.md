---
title: 'Technical documentation for Casey&nbsp;Trees'
layout: dubbel
option:
  - minor
  - no-imgix-source
category: 'projects'
tags:
  - 'archiving'
  - 'documentation'
  - 'jekyll'
date: 2014-10-01 12:00
updated: 2015-02-20 11:24
drafted: 2015-02-18 16:20
unique_id: 2015-02-19:casey-trees-docs
period: 2014-06 to 2014-10
description: 'An archive of organizational knowledge about web design, strategy, and implementation for a non-profit.'
image_index: /images/index/2015-02-18-casey-trees-docs-style.png
image:
  - src: /images/2015-02-18-casey-trees-docs-style.png
    alt: 'A screenshot and accompanying HTML code sample that document the design of a component.'
    date: 2015-02-18
    description: 'Feature image'
    aspect: '3:2'
  - src: /images/2015-02-18-casey-trees-docs-nav.png
    alt: 'The navigation for the documentation including headings for Documentation, Code Samples, and Reference, with listed items under each heading.'
    date: 2015-02-18
    aspect: '2:3'
  - src: /images/2015-02-18-casey-trees-docs-code.png
    alt: 'An HTML code sample that documents the design of a component, with class parameters.'
    caption: 'I used the [Solarized color scheme](http://ethanschoonover.com/solarized) for code highlighting.'
    date: 2015-02-18
    aspect: '3:2'

---

From 2010 to 2014, I worked in a wide variety of roles at Casey Trees, an urban forestry non-profit in Washington, DC. For my final project, I took the initiative to make sure that my work there was documented, so that future staff working on the website and other technical and design projects would have a strong starting point. Organizational knowledge can be difficult to maintain, so I wanted to make sure I wrote down what I knew and presented it in a structured and thorough format for others to browse.

I focused on the most important aspects of website management and design for the organization:

- Style, content strategy, and editorial guidelines for web and email.
- HTML and CSS samples and patterns (documenting the current state as well as normative ways to design new components).
- Common issues with WordPress and other content management systems.
- Resources and tools for further learning.

Unfortunately, the documents in the project contain proprietary information, so I can’t link to or substantially excerpt from the repository (it is not mine to share). Here is what the project looked like in the autumn of 2014:

<div class="grid--wide">
<figure class="grid-figure--33 grid-figure screenshot">
  <img
    src="{{ page.image[1].src | imgix_url }}"
    alt="{{ page.image[1].alt }}">
</figure>
<figure class="grid-figure--66 grid-figure screenshot">
  <img
    src="{{ page.image[2].src | imgix_url }}"
    alt="{{ page.image[2].alt }}">
  <figcaption>{{ page.image[2].caption | markdownify }}</figcaption>
</figure>
</div>

## Implementation

I chose [Jekyll](http://jekyllrb.com/), a static website generator, not only because I was familiar with it, but because I had some strong requirements. The project needed to be:

1. Maintainable through only text files and images.
2. Accessible with a web browser (rather than proprietary software), locally or remotely.
3. Robust, with no platform lock-in.

Jekyll is flexible enough for pretty much any small project that has text at the center of it. A lot of other platforms fail the third criterion of robustness, particularly solutions like local word processing, web content management systems, or wiki software. I had to make sure that the system would consist of plain text files that are readable even if Jekyll could not be used in the future or was temporarily unavailable. The Markdown files used as input for Jekyll (and their cached HTML output) can be reused in other contexts and are quite easily read as plain text.

## Design

While normally I would design all elements of a project like this from scratch, with constrained time I chose to use a template ([jekyll-docs-template](https://github.com/bruth/jekyll-docs-template)) to focus more of my efforts on content and information architecture. This template system had built-in support for chapter-style navigation that is commonly used in technical documentation, so that a user can see the entirety of the topics under their respective headings without needing to search.

This project accomplished two significant goals for Casey Trees. I was able to pass along my accrued knowledge to new employees that would extend far past my term. Additionally, I created the foundation for a history of the organization’s design patterns and approaches to communicating, encoded in a way that others would be able to contribute to or repurpose as needed.
