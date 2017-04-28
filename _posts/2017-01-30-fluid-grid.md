---
title: 'Fluid responsive image grids'
layout: singel
category: 'projects'
option:
  - featured-home
  - minor
tags:
  - 'css'
  - 'design'
  - 'html'
  - 'jekyll'
  - 'web'
updated: 2017-02-09 17:54
drafted: 2017-01-10 12:34
period: 2016-11 to 2017-01
unique_id: 2017-01-30:fluid-grid
description: 'Flexible asymmetric grids featuring photography, using flexbox.'
project:
  url: https://jeanandoliver.space
image_index: 2017-02-08-photo-grid.svg
image:
  - src: 2017-02-08-photo-grid.svg
    src_png: 2017-02-08-photo-grid.png
    alt: 'A representation of an asymmetric grid.'
  - src: 2017-01-23-mount-hunger-grid.png
    alt: 'An asymmetric grid of photos.'
    caption: 'From [a photo collection I designed](https://jeanandoliver.space/2016/mount-hunger-peak/).'
  - src: 2017-01-23-each-row-grid.png
    alt: 'A single row of photos in a row aligned in a grid.'
  - src: 2017-01-23-grids-stacked.png
    alt: 'Multiple rows of photos aligned in a grid.'
---

I designed a custom, asymmetric, responsive grid system for displaying for [Field Notes, a photo storytelling website](https://jeanandoliver.space). I had seen implementations of this sort of grid on a variety of websites (Flickr photosets are a notable implementation), but they are often quite heavy solutions, requiring JavaScript and having issues on load and when reflowing. The challenge in this case is creating a responsive grid system that respects the aspect ratio of images, since dealing with fixed ratios in a variable width context is a difficult issue in CSS.

## The goal

- Images fit together precisely with thin gutters.
- The layout is implemented using CSS alone, not relying on JavaScript.
- The size of images is based on each image’s aspect ratio, with height constrained to a maximum and width dependent on height.
- Markup is relatively straightforward to write, with grids generated automatically from image metadata.
- On the smallest screen sizes, the layout is a single column instead of a grid.

{% assign image = page.image[1] %}
{% include block/image.html class="image--wide" %}

## The Implementation

### Each row is a grid

{% assign image = page.image[2] %}
{% include block/image.html class="image" %}

### Grids are stacked

{% assign image = page.image[3] %}
{% include block/image.html class="image" %}

### Aspect-dependent heights

Making a fluid grid like this requires CSS [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Flexbox specifies a container-based layout system which causes elements inside the container to resize flexibly, either filling available space or shrinking to fit the box. Elements inside a flexbox container can be proportionally resized based on the container’s size and also based on the size of the elements inside the container.

{% capture ancillary %}
## Why aspect ratios? Doesn’t flexbox already reflow and resize images?

Reflowing while maintaining a set aspect ratio is something that one might expect flexbox would do automatically, but that’s not how flexbox works. In a flexbox layout, an image element’s height scales up or down dependent on the element’s width. This causes a problem for the desired grid, unless we can design a system of constraints to account for the ratio of an image’s width and height (its aspect ratio).
{% endcapture %}

{% include block/ancillary.html %}

I found part of the solution in Kartik Prabhu’s [“Equal height images with flexbox”](https://kartikprabhu.com/articles/equal-height-images-flexbox), which shows a neat trick with the `flex-grow` property. If `flex-grow` is set to the calculated aspect ratio of the image (with a common ratio like 3:2 written as `1.5`), images that have the same `flex-basis` (initial width) will maintain *the same height* while adjusting their width proportionally.

{% capture code %}
```scss
.grid {
  display: flex; // our flexbox container
  margin: .5em -1em .5em -1.5em;

  @media (min-width: 40em) {
    margin: .5em 0 .5em -.5em;
    // setting the left margin at -.5em and the right at 0 offsets the grid to account for the gutters
  }
}

.grid + .grid {
  margin-top: -.5em;
}

%grid-image {
  flex: 0 auto;
  margin: 0 auto;
  padding: .5em 0 0 .5em;
  width: 100%;

  @media (min-width: 40em) {
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
  @media (min-width: 40em) {
    flex: 1.5 0%;
  }
}

.grid-image--aspect4x3 {
  @media (min-width: 40em) {
    flex: 1.333333 0%;
  }
}

.grid-image--aspect2x3 {
  @media (min-width: 40em) {
    flex: .666667 0%;
  }
}

.grid-image--aspect3x4 {
  @media (min-width: 40em) {
    flex: .75 0%;
  }
}

.grid-image--aspect3x1 {
  @media (min-width: 40em) {
    flex: 3 0%;
  }
}

.grid-image--aspect1x1 {
  @media (min-width: 40em) {
    flex: 1 0%;
  }
}
```
{% endcapture %}

{% capture caption %}
This example uses the `flex` shorthand property which simplifies declarations for `flex-grow`, `flex-shrink` and `flex-basis` properties.

I’m using SCSS here for legibility and convenience – one does not have to.
{% endcapture %}

{% include block/code.html title="grid-image.scss" %}

Why does `flex-grow` work this way? The number is a factor which determines the amount of space the element should take up in the flexbox container. If each image in the same flexbox also is set to its own factor, the result is that every image scales not only based on width, but based on width *and* ratio.

{% capture ancillary %}
One limitation to this method is needing to specify all of the aspect ratios that are possible. However, the cost in markup and extra styles is not too great for the benefits of having a flexible grid that works so well without JavaScript. It is less “automatic”, however, as the aspect ratios have to be determined ahead of time. This generally works for photography since photos are often already cropped to standard sizes. This would be a case where [imgix](https://www.imgix.com) or another server-side image host could be used to crop images to match the desired aspect ratio if they don’t already match the presentational context.
{% endcapture %}

{% include block/ancillary.html %}

### Using Jekyll collections

For [our photo site](https://jeanandoliver.space), I used [Jekyll collections](https://jekyllrb.com/docs/collections/) to generate the markup and lay out 78 photos in 9 posts (each post being a grid of selected images). This would be a lot of markup to write by hand, which is why Liquid templating in Jekyll is essential. The same principles would apply for any other template system, but the examples here use Liquid and Jekyll collection variables to generate HTML.

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

{% capture caption %}
A Liquid [iteration](https://shopify.github.io/liquid/tags/iteration/) and [control flow](https://shopify.github.io/liquid/tags/control-flow/) loop that assigns variables to metadata from [Jekyll’s YAML front matter](http://jekyllrb.com/docs/frontmatter/).
{% endcapture %}

{% include block/code.html title="post.html layout" %}

A Liquid loop that builds the grid row by row. In the `for` loop, the group number determines the row, and each row is stacked on top of one another other in that numerical order.

For exach image in the group, there can be multiple images per group, but no explicit minimum or maximum is set. If there is only one item in a group, the image will take up 100% of the grid’s width, while if there are three items, the images will divide the grid’s width proportionally based on each images’s calculated width.

Gutters are calcuated as proportional values as well, so they will always make up the same proportion of the grid regardless of how many images are in the containing row grid. Vertical gutters between rows are set with top margins.

As for what’s in the `block/grid-image.html` file that is looped, let’s take a closer look at the needs of a high performance responsive image pattern.

### Extending grids with responsive images

Since I use [`srcset` responsive images]({% post_url 2016-05-07-jekyllconf-responsive-images %}) for photos to make sure that the right size images are served, a new problem arises. For `srcset` with `sizes` to work properly, we need to know the approximate size of the image ahead of time, and a variable flexbox grid prevents this. We can’t even guess if an image is supposed to be 50% of the viewport or 100% of the viewport, since its neighbor determines its size. The fluidity built into the design of the grid takes away some control we would otherwise exert over the exact dimensions of a given image.

### A solution for implementing responsive images: lazysizes

For implementing responsive images with this constraint in mind, I use [lazysizes](https://github.com/aFarkas/lazysizes), a JavaScript tool that can automatically calculate the `sizes` attribute for an image. Instead of creating a complex pattern of media queries that state the likely dimensions of an image (or our best guess), we can use the auto-sizing feature of lazysizes to accurately measure the width of the image element before the image has loaded.

{% capture code %}
```
sizes="(min-width: 60em) 50vw, (min-width: 36em) 33.3vw, 100vw"
```
{% endcapture %}

{% include block/code.html title="a typical sizes attribute" %}


{% capture code %}
```
data-sizes="auto"
```
{% endcapture %}

{% capture caption %}
Much simpler! And more important than being easier to author, having lazysizes handle the `sizes` automatically ensures that otherwise unknowable layout is still calculated for the purposes of serving the right image size from the `srcset` attribute.
{% endcapture %}

{% include block/code.html title="auto-sizing with lazysizes" %}

### Putting it all together with imgix and Jekyll

I am building a file that holds the markup for responsive images (mainly an `img` element with `src`, `srcset`, `sizes` and `alt` attributes, contained in a `figure` with an optional `figcaption`). There is a lot going on here, but the important thing to note is that the variables like the `src` and the caption are set by the front matter of the image. This is where we assign the CSS class determining the aspect ratio for every single image. Using the [Jekyll plugin](https://github.com/imgix/jekyll-imgix) for imgix, all of the desired image sizes are generated with a Liquid loop.

{% capture code %}
```html
{% raw %}{% assign src = image.path | replace: '_photos', '/images' | replace: '.md', '.jpg' %}
{% assign quality = 70 %}

<figure class="
  {% if image.aspect %}
    grid-image--aspect{{ image.aspect }}
  {% else %}
    grid-image
  {% endif %}
">
  <a href="{{ image.url }}">
    <img
      class="lazyload"
      src="{{ src | imgix_url: w: 480, q: 40 }}"
      data-src="{{ src | imgix_url: w: 640, q: quality }}"
      data-sizes="auto"
      data-srcset="{% for width in site.srcset %}
        {{ src | imgix_url: w: width, q: quality }} {{ width }}w{% if forloop.last == false %}, {% endif %}
      {% endfor %}"
      alt="{{ image.alt }}">
  </a>
  {% if image.caption %}
  <figcaption>{{ image.caption | markdownify }}</figcaption>
  {% endif %}
</figure>
{% endraw %}
```
{% endcapture %}

{% capture caption %}
As in the earlier example, this is written in HTML with [Liquid](https://shopify.github.io/liquid/) variables and logic.
{% endcapture %}

{% include block/code.html title="grid-image.html" %}

## Principles of a fluid grid

### Fluidity

The aspect ratio of images is maintained at all widths of the grid. The images in the grid resize in a fluid manner so that the grid maintains the relationship of the images to each other at any size. The grid’s form is static while its contents shift dynamically yet harmoniously.

### Constraints

The relationship between items in the grid is based on constraints that allow for an image of any size to be placed next to another image, automatically resizing and reflowing based on the size of *both* images.

### Robustness

The grid system handles multiple common image aspect ratios with minimal configuration. It works without JavaScript.

{% capture endnote %}
## Alternative approaches

- [“Seamless responsive photo grid” by Chris Coyier](https://css-tricks.com/seamless-responsive-photo-grid/) (using vertically-oriented CSS multi-columns)
- [“Using Modern CSS to Build a Responsive Image Grid” by George Martsoukos](https://www.sitepoint.com/using-modern-css-to-build-a-responsive-image-grid/) (using `display: inline-block` and flexbox, but with identically sized images)
- [Cascading JavaScript grid layout library by David DeSandro](http://masonry.desandro.com)

## Further reading

- [“Equal height images with flexbox”](https://kartikprabhu.com/articles/equal-height-images-flexbox) by Kartik Prabhu (inspiration for this method)
- [“srcset and sizes”](https://ericportis.com/posts/2014/srcset-sizes/) by Eric Portis (a thorough guide to responsive images)
- [“Responsive images with Jekyll”]({% post_url 2016-05-07-jekyllconf-responsive-images %}) by me (a presentation on repsonsive image markup with Jekyll)
{% endcapture %}

{% include block/ancillary--endnotes.html %}
