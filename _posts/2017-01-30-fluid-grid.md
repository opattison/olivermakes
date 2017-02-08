---
title: 'Fluid responsive image grids'
layout: singel
category: 'projects'
option:
  - featured-home
  - minor
tags:
  - design
  - web
updated: 2017-02-07 20:28
drafted: 2017-01-10 12:34
period: 2016-11 to 2017-01
unique_id: 2017-01-30:fluid-grid
description: '/…'
image:
  - src: 2017-01-23-each-row-grid.png
    alt: 'A single row of photos in a row aligned in a grid.'
  - src: 2017-01-23-grids-stacked.png
    alt: 'Multiple rows of photos aligned in a grid.'
  - src: 2017-01-23-mount-hunger-grid.png
    alt: 'An asymmetric grid of photos.'
---

<!-- /… via JF: hook people with the use case first -->
<!-- /… structure: state, define the problem; state a design solution and why it was chosen; walk through implementation -->

Working on a [photo storytelling website](https://jeanandoliver.space), each page of the site required a large number of photos to be juxtaposed, ideally in a grid. I decided to experiment with an asymmetric, responsive grid system that maintains its form at any width. I had seen implementations of this on a variety of websites (Flickr photosets are a notable implementation), but they are often quite heavy solutions, requiring JavaScript and having issues on load and when reflowing. The challenge in this case is creating a responsive grid system that respects the aspect ratio of images, since dealing with fixed ratios in a variable width context is a difficult issue in CSS.

## Principles of a fluid grid

### Fluidity

The aspect ratio of images should be maintained at all widths of the grid. The images in the grid resize in a fluid manner so that the grid maintains the relationship of the images to each other at any size. The grid’s form is static while its contents shift dynamically and harmoniously.

### Constraints

The relationship between items in the grid is based on constraints (using CSS [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)) that allow for an image of any size to be placed next to another image and automatically resize and reflow. [^1]

### Robustness

The grid system can handle multiple common image aspect ratios with minimal configuration.

## How implementation should work

- Images should fit together precisely with thin gutters and with even gaps.
- Support for image sizing based on each image’s aspect ratio, with height constrained to a maximum and width dependent on height.
- Markup should be easy to write, with grids generated automatically from image metadata.
- On the smallest screen sizes, the layout should instead appear as a single column.
- The layout should be implemented using CSS alone, not relying on JavaScript.

## Each row is a grid

{% assign image = page.image[0] %}
{% include block/image.html class="image" %}

## Grids are stacked

{% assign image = page.image[1] %}
{% include block/image.html class="image" %}

## Aspect-dependent heights

The key piece of this solution to responsive images is CSS flexbox. Elements inside a flexbox container can be proportionally resized by width according to their

I found part of the solution in Kartik Prabhu’s [“Equal height images with flexbox”](https://kartikprabhu.com/articles/equal-height-images-flexbox), which shows a neat trick with the `flex-grow` property. If set at the calculated aspect ratio of the image (such as 3:2 being 1.5), images that have the same `flex-basis` (initial width) will maintain *the same height* while adjusting their width proportionally. The easiest way to write this is to set the `flex-basis` to `0` and then override the `flex-grow` for each aspect ratio.

{% capture code %}
```scss
%grid-image {
  flex: 0 auto;
  margin: 0 auto;
  padding: .5em 0 0 .5em;
  width: 100%;

  @include min-width(s) {
    flex: 0; // flex-basis set at 0 rather than 100%
  }
}

// register all possible ratios
.grid-image,
.grid-image--aspect3x2,
.grid-image--aspect4x3,
.grid-image--aspect2x3,
.grid-image--aspect3x4,
.grid-image--aspect3x1,
.grid-image--aspect1x1 {
  @extend %grid-image;
}

.grid-image--aspect3x2 {
  @include min-width(s) {
    flex: 1.5 0%;
  }
}

.grid-image--aspect4x3 {
  @include min-width(s) {
    flex: 1.333333 0%;
  }
}

.grid-image--aspect2x3 {
  @include min-width(s) {
    flex: .666667 0%;
  }
}

.grid-image--aspect3x4 {
  @include min-width(s) {
    flex: .75 0%;
  }
}

.grid-image--aspect3x1 {
  @include min-width(s) {
    flex: 3 0%;
  }
}

.grid-image--aspect1x1 {
  @include min-width(s) {
    flex: 1 0%;
  }
}
```
{% endcapture %}

{% include block/code.html title="grid-image.scss" %}

Why does `flex-grow` work this way? The number is a factor which determines the amount of space the element should take up in the flexbox container.

/… visualization of what happens when flex-grow items are added

{% capture ancillary %}
One limitation to this method is needing to specify all of the aspect ratios that are possible. However, the cost in markup and extra styles is not too great for the benefits of having a flexible grid that works so well without JavaScript. It is less “automatic”, however, as the aspect ratios have to be determined ahead of time. This generally works for photography since photos are often already cropped to standard sizes. This would be a case where [imgix](https://www.imgix.com) or another server-side image host could be used to crop images to match the desired aspect ratio if they don’t already match the presentational context.
{% endcapture %}

<aside class="ancillary">
{{ ancillary | markdownify }}
</aside>

## Using Jekyll collections

For the photo site [Jean and Oliver](https://jeanandoliver.space), I used [Jekyll collections](https://jekyllrb.com/docs/collections/) to generate the markup and lay out 78 photos in 9 posts (each post being a grid of selected images). This would be a lot of markup to write by hand, which is why Liquid templating in Jekyll is essential. The same principles would apply for any other template system, but the examples here use Liquid and Jekyll collection variables to generate HTML.

Each photo in the `_photos` directory would be named with the scheme `yyyy-mm-dd-photo-name.md` and include [YAML front matter](https://jekyllrb.com/docs/frontmatter/) for the content’s metadata like this:


{% capture code %}
```yml
---
title: 'a title for the photo'
alt: 'an accessible description of the photo'
category: 'category-name'
group: 1
aspect: '3:2'
---
```
{% endcapture %}

{% capture caption %}
Minimal front matter for an individual photo. Each image is in a “group” which is a number series that is iterated through to build each row of the grid. The aspect ratio is the intended aspect ratio of each image file.
{% endcapture %}

{% include block/code.html title="2017-01-10-photo-name.md" %}

Additionally each image is placed in a separate image directory with the same naming scheme `yyyy-mm-dd-photo-name.jpg`.

{% capture code %}
```html
{% raw %}
{% assign category = page.slug %}
{% assign images = site.photos | where: 'category', category | sort: 'group' %}
{% assign group_max = images.last.group %}

{% for group in (1..group_max) %}
<div class="grid">
{% assign images = site.photos | where: 'category', category | where: 'group', group %}
{% for image in images %}
  {% include block/grid-image.html %}
{% endfor %}
</div>
{% endfor %}
{% endraw %}
```
{% endcapture %}

{% include block/code.html title="post.html layout" %}

A Liquid loop that builds the grid row by row. In the `for` loop, the group determines the row number, and each row is stacked on top of one another other in that order.

{% assign image = page.image[2] %}
{% include block/image.html class="image--wide" %}

## Extending

/… imgix and responsive image sizing

/…

{% capture endnote %}
## Alternative approaches

- [“Seamless responsive photo grid” by Chris Coyier](https://css-tricks.com/seamless-responsive-photo-grid/) (using vertically-oriented CSS multi-columns)
- [“Using Modern CSS to Build a Responsive Image Grid” by George Martsoukos](https://www.sitepoint.com/using-modern-css-to-build-a-responsive-image-grid/) (using `display: inline-block` and flexbox, but with identically sized images)
- [Cascading JavaScript grid layout library by David DeSandro](http://masonry.desandro.com)
{% endcapture %}

<aside class="ancillary--endnotes">
{{ endnote | markdownify }}
</aside>

[^1]: Reflowing while maintaining a set aspect ratio is something that one might expect flexbox would do automatically, but that’s not how flexbox works. In a flexbox layout, an image element’s height scales up or down dependent on the element’s width unless a system of constraints is designed to account for the ratio of an image’s width and height (its aspect ratio).
