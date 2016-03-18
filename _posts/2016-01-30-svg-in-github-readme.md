---
title: 'How to enhance a GitHub readme with SVG'
layout: singel
option:
  - code
category: 'writing'
tags:
  - 'css'
  - 'design'
  - 'documentation'
  - 'git'
  - 'html'
  - 'web'
updated: 2016-01-30 15:05
drafted: 2016-01-29 20:00
unique_id: 2016-01-30:svg-in-github-readme
description: 'Enhancing Markdown files for open source projects.'
image_index: /images/index/2016-02-02-gh-mark.svg
image:
  - src: /images/2016-02-02-gh-mark.svg
    src_png: /images/2016-02-02-gh-mark.png
    alt: 'GitHub Octocat logo'
    date: 2016-02-02
    license: 'copyright'
    author: 'GitHub'
  - src: /images/2016-01-30-github-readme-svg.png
    alt: 'circular logo below readme text as rendered on a GitHub project page'
    date: 2016-01-30
    caption: 'This is just a screenshot. [View this readme on GitHub](https://github.com/opattison/olivermakes/blob/5c68d2ed4c97a236489548fd61f3254dd1235928/readme.md).'
    width: 1800

---

Most GitHub projects have a problem: their documentation is often bare, lacking images or illustrations that show a project visually or otherwise document its design. But this is not a limitation of how GitHub works. The public-facing output of open source projects can be designed.

Scalable Vector Graphics are amazing – regardless of screen density or size of image, the result will be sharp. Plenty of open source projects include PNG images embedded in their readme documents, which are rendered on GitHub pages as HTML (processed with Markdown). An SVG in a GitHub readme can be higher resolution than the sharpest PNG source, limited only by the resolution of the screen that it is displayed on.

An SVG in a readme can’t be included without consideration.
{:.focus}

Even though most people only write plain text in their Markdown files (maybe with some headings and links), the Markdown spec permits rendering HTML as HTML. GitHub has a built-in markdown converter that allows a narrow subset of HTML attributes. [This whitelist](https://github.com/jch/html-pipeline/blob/1b5058918eeb0507ac225934cd3e9238f0b94139/lib/html/pipeline/sanitization_filter.rb#L59-L75) prevents authors from turning a Markdown-based readme into a whole website. HTML can be inserted, but with limited control over layout and style (and no ability to threaten security by running JavaScript). Attempting to use inline styles within HTML elements in a readme file won’t work. Setting `style="display: block; width: 144px; margin: 0 auto"` (to limit the width and center a block element) will have no effect, since the `style` tag gets stripped by GitHub’s HTML processing filter.

An `<img>` element with an SVG source without a specified width will be set by GitHub at `max-width: 100%`, which will harm the output of the file, since the SVG at 100% width will almost certainly be oversized for the context. However, setting `width` and `height` attributes on an element is allowed. Limiting the element size with these attributes allows resizing and even rudimentary layout constraints for images.

Use responsibly.

## Sample implementation

{% capture code %}
```
<a href="https://olivermak.es/">
  <img src="https://olivermak.es/resources/icons/favicon144.svg" width="100%" height="144">
</a>
```
{% endcapture %}

{% capture caption %}
Setting width at `100%` centers the image. Alternatively, setting a unitless width sizes the element in pixels. This image sources an SVG from my website’s icon directory and is wrapped by a hyperlinked block.
{% endcapture %}

<figure class="code">
{{ code | markdownify }}
{% include block/figcaption--text.html %}
</figure>

## Sample output

<figure class="image--wide screenshot">
  {% assign image = page.image[1] %}
  {% include block/image--imgix.html %}
  {% include block/figcaption--image.html %}
</figure>
