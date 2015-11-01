---
title: 'Styles'
layout: singel
option:
  - code
  - code-block
  - srcset
  - patterns
category: meta
date: 2015-03-01 15:27
updated: 2015-03-01 15:27
description: 'A style guide for this website.'
image:
  - src: 'logo.svg'
    caption: 'Shown here in the standard color scheme of the site, this logo appears in different contexts on different pages.'
    alt: 'the logo for this website'
  - src: 'image.gif'
    caption: 'This is a caption pulled from the yaml front matter. It describes the image in the same `figure` element. By&nbsp;<cite>Oliver&nbsp;Pattison</cite>.'
    alt: 'A placeholder image'

---

This style guide is a work in progress. Take a look at the [pattern library](/patterns/) as well.

- - -

## Body text

Some paragraph text may require <em>stress</em> emphasis and some it may be important enough to require something <strong>stronger</strong>. <q>Just as the plume of smoke rose and died so too will the glow of gold. Elevated status moves us now through the darkened halls of the quick.</q> This is <mark>highlighted text</mark> that uses the <code>&lt;mark&gt;</code> element. <dfn>H<sub>2</sub>O</dfn> is the chemical formula for a water molecule, indicating that it contains one oxygen and two hydrogen atoms. Oxygen is the 8<sup>th</sup> element on the <a href="https://en.wikipedia.org/wiki/Periodic_table">periodic table of elements</a>.

This is “feature” text, used for emphasis and attention in storytelling.
{:.focus}

<blockquote>
  This text is quoted. A <code>blockquote</code> is particularly useful to emphasize and give space to a quotation from an attributed piece of writing. Make sure to include a footer with a citation to an author, where applicable.
  <footer>
    – said <cite>someone <time datetime="2014-11-24 15:07">today</time></cite>
  </footer>
</blockquote>

- - -

## List items

### Ordered list

1. First list item
2. Second item in a list of ordered items
3. Third item in the list

### Unordered list

- A list item
- Another item in a list
- Yet another item in this list of items

- - -

## Image styles

### Figure+image

<figure class="image--narrow">
  <img
    src="{{ site.image_url }}/{{ page.image[1].src }}"
    sizes="{{ site.wide-sizes }}"  
    srcset="{% for srcset1440 in site.srcset1080 %}{{ site.image_url }}/{{ site.srcset1080[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1080[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[1].alt }}"
  >
  <figcaption>{{ page.image[1].caption | markdownify }}</figcaption>
</figure>

### Figure+image `.wide`

<figure class="image--wide">
  <img
    src="{{ site.image_url }}/{{ page.image[1].src }}"
    sizes="{{ site.wide-sizes }}"  
    srcset="{% for srcset1440 in site.srcset1440 %}{{ site.image_url }}/{{ site.srcset1440[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1440[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
    alt="{{ page.image[1].alt }}"
  >
  <figcaption>{{ page.image[1].caption | markdownify }}</figcaption>
</figure>

### Figure+image `grid` block

<div class="grid grid--wide">
  <figure class="grid-figure">
    <img
      src="{{ site.image_url }}/{{ page.image[1].src }}"
      sizes="{{ site.wide-sizes }}"  
      srcset="{% for srcset1080 in site.srcset1080 %}{{ site.image_url }}/{{ site.srcset1080[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1080[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
      alt="{{ page.image[1].alt }}"
    >
    <figcaption>{{ page.image[1].caption | markdownify }}</figcaption>
  </figure>
  <figure class="grid-figure">
    <img
      src="{{ site.image_url }}/{{ page.image[1].src }}"
      sizes="{{ site.wide-sizes }}"  
      srcset="{% for srcset1080 in site.srcset1080 %}{{ site.image_url }}/{{ site.srcset1080[forloop.index0] }}/{{ page.image[1].src }} {{ site.srcset1080[forloop.index0] }}w{% if forloop.last == false %}, {% endif %}{% endfor %}"
      alt="{{ page.image[1].alt }}"
    >
    <figcaption>{{ page.image[1].caption | markdownify }}</figcaption>
  </figure>
</div>

Text below a grid.

### Image (no `srcset`; no `<figure>`)

<img
  src="{{ site.image_url }}/{{ page.image[1].src }}"
  alt="{{ page.image[1].alt }}"
>
