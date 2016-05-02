---
title: 'Jekyll Version of Pattern Primer'
layout: singel
option:
  - minor
category: 'projects'
tags:
  - 'css'
  - 'design'
  - 'html'
  - 'jekyll'
  - 'web'
updated: 2014-12-01 20:30
drafted: 2014-12-01 12:40
unique_id: 2014-11-30:pattern-primer
description: 'A pattern documentation tool for designing websites, based on Jeremy Keith’s Pattern Primer.'
period: '2013-07 to present'
project:
  url: http://patternprimer.olivermak.es
  source: https://github.com/opattison/Pattern-Primer-Jekyll
image:
  - src: /images/2014-12-01-pattern-primer-project-feature-screen.png
    alt: 'A screenshot of Pattern Primer Jekyll'
    date: 2014-12-01
  - src: /images/2014-12-01-pattern-primer-headings.png
    alt: 'Heading styles in Pattern Primer Jekyll'
    caption: 'Find out how your headings look and what markup is needed for them with a primer.'
    date: 2014-12-01

---

On a lazy Saturday afternoon in the early stages of designing [Jean’s website](http://jeancflanagan.com), I was reading about pattern libraries and related design communication tools. A simple and straightforward implementation that appealed to me was Jeremy Keith’s [Pattern Primer](http://patternprimer.adactio.com) ([view source](https://github.com/adactio/Pattern-Primer)). The idea is that you take a folder of HTML snippets and then test them against your own CSS file. The result is a self-generating and self-documenting set of HTML patterns, alongside the CSS for a project. The primer includes some useful HTML samples to start off with, but any HTML snippets could be used.

I thought it would be straightforward enough to port to [Jekyll](http://jekyllrb.com), which I use to build websites. This suited my workflow since I could use it with my Jekyll projects with only Jekyll dependencies (and no PHP dependencies). This way I could run my pattern primer on a local machine or deploy it just about anywhere as static HTML, the same as any other Jekyll site.

## Why document patterns?

While working on a project, it can be helpful to both designers, developers and others involved to abstract patterns – both structural (HTML) and presentational (CSS). That is:

<blockquote>
  … beginning with the atomic units of content and styling them first before even thinking about layout. This ensures that those styles are extremely robust—because they don’t depend on any particular context, they can be safely dropped into any part of a page.</p>
  <footer>
    from <cite>Jeremy Keith’s <a href="https://adactio.com/journal/5028">Pattern Primer explanation</a></cite>
  </footer>
</blockquote>

Pattern Primer ([as well as many other similar tools](http://styleguides.io/tools.html)) can be used as design clarification and communication tools at any stage in a design process. This approach is quite useful near the beginning of a project, to make sure that design patterns can stand on their own as atomic units.

{% assign image = page.image[1] %}
<figure class="image screenshot">
  {% include block/image--imgix.html %}
  {% include block/figcaption--image.html %}
</figure>

## Implementation

I forked [Jeremy’s source](https://github.com/adactio/Pattern-Primer) from GitHub, and faithfully re-worked the minimal set of features in Jekyll. I did not change the base styles, so what you see on the finished page is exactly what you see in the original project. It took me less time to implement the features of Pattern Primer than it did to write and edit [the brief documentation for it](https://github.com/opattison/Pattern-Primer-Jekyll) and set up Amazon S3 to host it.

## What I learned from this project

- How Jekyll could be used for a project other than a blog or personal site.
- How to make an open source Jekyll project that would be reusable for other people with the same goals.
- How to set up Amazon Web Services (S3 and CloudFront) for hosting a Jekyll site.

{% capture endnote %}
**[View Pattern Primer Jekyll live]({{ page.project.url }})** or **[check it out on GitHub]({{ page.project.source }})**.

**[View the original project](https://github.com/adactio/Pattern-Primer)** that this is forked from.
{% endcapture %}

<aside class="ancillary--endnotes">
{{ endnote | markdownify }}
</aside>
