---
title: 'Fluid responsive typography'
layout: singel
category: 'writing'
option:
  - featured-home
  - featured-writing
  - minor
tags:
  - 'css'
  - 'design'
  - 'typography'
  - 'web'
updated: 2017-02-07 17:35
drafted: 2016-12-20 12:34
unique_id: 2017-02-01:fluid-typography
description: 'A walkthrough for an implementation of flexible web typography using CSS viewport units.'
image_index: 2017-02-13-fluid-typography.svg
image:
  - src: 2017-02-13-fluid-typography.svg
    src_png: 2017-02-13-fluid-typography.png
    alt: 'fluid typography'
  - src: 2017-02-07-discrete-vs-fluid.svg
    alt: 'discrete stair steps vs. gradual fluid linear line'
  - src: 2017-02-07-wikipedia-type.png
    alt: 'A long line length demonstrated on a Wikipedia page.'
    caption: 'More than 200 characters per line on a fluid column of text on Wikipedia.'
  - src: 2017-02-07-wintershead-type.png
    alt: 'Typographic sample from Wintershead'
    caption: 'Responsive body text from the [Wintershead](https://wintershead.olivermak.es/) site.'
---

Responsive web design is often treated as a collection of techniques, but more fundamentally, it is a philosophy of design. The philosophy of responsiveness is concerned with looseness, flexibility, and fluidity. A design should fit multiple contexts since on the web we can never know what the context will be. But an element can actually become too fluid. Constraints on fluidity are needed when the approach would otherwise result in formlessness and a lack of boundaries and structure. How do we create a shape and structure for fluidity in a responsive environment?

Trent Walton’s [“Fluid Type”](http://trentwalton.com/2012/06/19/fluid-type/) was an inspirational resource for me in the earlier days of responsive web design. [^1] This was 2012, when Ethan Marcotte’s [seminal article (2010)](http://alistapart.com/article/responsive-web-design) and [subsequent book (2011)](https://abookapart.com/products/responsive-web-design) were fresh and few good implementations existed. Most websites were “desktop-only” (not properly fluid or even legible on devices with viewports below around 1000 pixels wide), and a smaller portion had alternative “mobile” variants that were served based on user agent strings. [^2]

After Walton’s “Fluid Type”, the first considerations in all of my future projects would be balanced proportions and legible line lengths at every possible screen size.

> … the predictability & control we’ve had over web type is becoming a thing of the past.

Not only did the essay encourage me to think about type before any other consideration, it also planted the seed of an idea: “fully-fluid type”. Fluid in this case means scaling the size of fonts based on the viewport. One of the major tenets of responsive web design is “fluid images”, and some implementations of it rely on fluid grids, fluid type was a novel concept. Even though in 2012 there were barely any examples of this technique on actual website in the wild, I found the idea fascinating.

## The viewport

The viewport is defined as the visible portion of a web document. In most cases, this would be the entire window or view of the browser minus the browser interface and window borders. The viewport is not the same as the screen resolution of a device, since the entirety of a physical screen is rarely available for use for a web page because of browser and operating system interface elements that take up space. Additionally, the physical resolution of the device (how many of the smallest color-emitting units a physical screen has, oriented in a grid) is not the same as the software representation of “pixels” but we use the same word for both concepts. Therefore a [pixel is not a reliable measurement](http://alistapart.com/article/a-pixel-identity-crisis) in the first place.

In CSS a common approach specifies sizes of elements using pixels, but we can also use a more recently introduced unit, measured in terms of the viewport. A viewport can be measured in `vw` or `vh` units: respectively the width and height of the viewport. `1vw` is 1/100 of the viewport width, so `100vw` is equal to the the viewport width. This is a relative unit that can be compared to other common units like `px` (absolute pixels), `%` (proportional percentage values often used for length or font size), `em` (proportional [ems](https://en.wikipedia.org/wiki/Em_(typography)), based on the inherited typographic size). All of these units translate into physical dimensions, but the math they use to determine that value differs in each case. Viewport units are particularly interesting, because the values they represent are determined by the dimensions of the viewport, which is partly determined by the visitor’s choice of windowing or full-screen use in their operating system, and partly determined by the physical dimensions of the device.

The viewport is the central consideration in responsive design, with breakpoints used as rules for adjustments to layout. If a viewport is wide enough at a certain breakpoint, change the layout to fit the content more appropriately. Or if there is more room for larger type, increase the font size at a wider breakpoint. In conventional responsive web design, images are often sized fluidly, with width of the image element determined by the parent container rather than some fixed value. [^3] Most other elements in a responsive layout tend to be set at fixed widths or capped at maximum widths. Type is typically set at fixed values that make progressive, discrete steps rather than increasing gradually.

{% assign image = page.image[1] %}
{% include block/image.html class="image--wide" %}

Using [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) breakpoints is a foundation for responsive web design, but leads to increasing and often undesired complexity. How many breakpoints are ideal for a particular design? What happens in between breakpoints? Breakpoint-based design without fluidity leads to a stepped pattern that either creates awkward middle points or a proliferation of breakpoints past the point of uncomplicated maintenance. The risk is ending up with a design that operates on a list of exclusive exceptions rather than a set of unified principles.

## Drawbacks of fluidity alone

As a viewport grows in width, what happens to a block of text whose containing element is set to a percentage value width? Unfortunately, we get an ever-expanding line length (the [typographic measure](#what-is-a-measure)). A classic example of this is the current design of Wikipedia. The font size doesn’t increase but the line length is out of control. This isn’t just about aesthetics: a line length that is too long can be somewhat illegible, since it can be harder to follow the flow of prose text with a longer measure. A fluid layout will fail if it doesn’t increase font size *or* limit line length in correspondence with the viewport width.

{% assign image = page.image[2] %}
{% include block/image.html class="image--wide screenshot" %}

One common solution is capping the width of a container (to a width less than the width of the viewport), which results in white space. Many non-fluid responsive designs use fixed `max-width` declarations for containers of text or other content. Another solution is to increase the font size at wider breakpoints. The problem with this method is that setting a font in pixels or preferably relative values like `em` or `rem` has to be reset and overwritten at every breakpoint.

```css
:root {
  font-size: 1rem;
}

/* media query at a quite narrow viewport */
@media (min-width: 30em) {
  :root {
    font-size: 1.1rem;
  }
}

/* rewriting the declaration again at a wider viewport */
@media (min-width: 50em) {
  :root {
    font-size: 1.21rem;
  }
}
```

## Pure, scaled fluidity

Going back to the idea introduced earlier of the `vw` unit, we can see the shape of a solution. Setting a `font-size` in `vw` units means that the entire document can be scaled to that value. Instead of a fixed value, the scale of the typography and even the entire layout can be calculated based on a percentage value of the screen’s width.

### The wrong approach

```css
:root {
  font-size: 4vw;
  /* at 400px viewport width, this would be 16px
  but at 1200px viewport, this would be 48px, which won’t work */
}
```

Scaling font sizes against a viewport measure alone leaves an ever-accelerating value. Low values like `1.5vw` make for tiny fonts on small screens and high values like `4vw` make for absurdly large font sizes on large screens. It is a linear scale, which we want, but not one that works for responsive web typography. So what other approaches might solve this problem?

### An alternative approach with `calc` with a bottom limit

Instead of only using `vw` units, adding fixed root em (`rem`) to `vw` sets a bottom limit of at least that `rem` size plus the scaling factor based on the viewport.

```css
:root {
  font-size: calc(.75rem + 1vw);
  /* .75rem is 12px (at a 16px default scale) plus 1vw which scales gradually */
  /* at 400px viewport width, this would be 16px
  and at 1200px viewport, this would be 24px, which could work */
}
```

Setting the font-size based on a value that uses the `calc` function to add a baseline minimum. If we set it at `.75rem` we now have a minimum size of at least `12px` (although functionally it is closer to `15px` on the smallest screens). Using this method we might not even need media queries since the font will scale up gradually forever, making typography legible at every screen size.

If we want an even more gentle increase, we can set something more like `font-size: calc(1rem + .5vw)` which has the exact same scale at a screen width of 400px as the previous example, but a comparatively smaller scale at wider viewports than 400px.

### Another alternative approach with a top limit

```css
:root {
  font-size: 4vw;
}

@media (min-width: 37.5em) {
  :root {
    font-size: 1.5rem;
    /* limit to 24px (at a 16px default scale) */
  }
}
```

Using a media query we can create a maximum `font-size`. This will scale fluidly up to a certain point but then become a fixed size. The viewport-scaled font size meets up with the fixed size at a particular breakpoint. I don’t prefer this method to the purely fluid `calc` method but I can imagine cases where I might use it. One could even use the top limit method in combination with the fluid bottom limit method.

## Fluid type, fixed line length

By setting a bottom limit with the `calc` method, we now have a perfectly linear fluid scale. All values measured in `em` or `rem` from element sizes, to heading sizes, to margins and padding will now reference the style sheet’s root size. A container that is set at a fixed value measured in `em` will now increase in size at the same rate that fonts do. This results in a fixed line length – a typographic measure that does not change – which is a desirable goal that can’t be achieved in percentage-based layouts.

{% capture ancillary %}
## What is a measure?

Typographic measure is the number of characters set on a line of text. On paper, this is a fixed value, since a column of text is only laid out once. But on the web, this value may change depending on the width of the container. A fluid column of text with a font size that does not change will result in a changing typographic measure: the measure increases as the viewport widens. A fixed-width column with a font size that changes also changes the typographic measure: the measure decreases as the viewport widens. If the font size changes in equal proportion to the changes the width of the column, then the measure stays fixed at the same value.
{% endcapture %}

<aside class="ancillary">
{{ ancillary | markdownify }}
</aside>

Only on larger screens is the typographic measure able to stay fixed. On smaller screens we set a minimum font size so that the text will remain legible, even though this results in a shorter measure. This is an acceptable compromise since an appropriate font size contributes to legibility far more than measure does, and a wider range of measure lengths may be appropriate for a design.

Though [Robert Bringhurst prescribed](http://webtypography.net/2.1.2) a range of “anything from 45 to 75 characters” as satisfactory and 66 characters as ideal, these should be viewed as only as a guide. Bringhurst was primarily referring a print medium, but the web is not such a fixed medium. In principle there may be an ideal measure for a particular line of text, but in practice there is a range and a variety of contexts in which text may be read (including on a much smaller screen, such as on a mobile device), so we have to use the guidelines as a starting point but not as an arbiter for the “right” number. For reference, the page you are reading right now ranges from 40 to 80 characters per line depending on the viewport width.

## Examples

{% include block/project--satellite.html id="2016-12-14:jeanandoliver" %}

{% include block/project--satellite.html id="2017-01-12:wintershead" %}

{% assign image = page.image[3] %}
{% include block/image.html class="image--wide" %}

{% capture endnote %}
## Recommended reading

- [Fluid typography with viewport units](http://artequalswork.com/posts/fluid-type/) by Nathan Ford
- [Precise control over responsive typography](https://madebymike.com.au/writing/precise-control-responsive-typography/) by Mike Riethmuller
- [Flexible type with :root](http://allthingssmitty.com/2016/12/05/flexible-type-using-root/) by Matt Smith
{% endcapture %}

<aside class="ancillary--endnotes">
{{ endnote | markdownify }}
</aside>

[^1]: Mid-2012 was around the time I had finished working on my [first major responsive web design project]({% post_url 2012-03-06-casey-trees-redesign %}), which was originally conceived with the goal of responsive implementation in late 2011. I had been reading about responsive design for over a year at this point, but Trent’s “Fluid Type” was a turning point for me because it solidified the primacy of typography for almost any web design project.
[^2]: A [user agent](https://en.wikipedia.org/wiki/User_agent) string, provided by a browser during HTTP communication, provides an indication of what browser and operating system the user has. These indicators are notoriously unreliable and inconsistent. [User agent sniffing](https://en.wikipedia.org/wiki/Browser_sniffing) has been implemented to test for features and serve different content. For “mobile” sites, a guess is made about the user agent string (“is this a mobile browser/OS?”), and then a fixed-width small screen layout is served, potentially alongside other exclusive features like touch support and lighter resources (since mobile devices are assumed to have lower connection speeds). Assumptions like these lead to fragile and inconsistently applied solutions, which is part of the reason why responsive design and feature detection have largely replaced mobile-only sites and user agent sniffing.
[^3]: A fluid value would look like `width: 100%` in CSS (as opposed to a value like `width: 120px`). Historically web designers have been concerned with creating print-like constraints on width of elements by way of fixed values rather than letting content flow naturally into a container. This fixed approach to layout is why it took nearly a couple of decades of web design to “discover” responsive web design as we know it today. We had to suffer through table-based layout (a useful but short-sighted hack) and fixed-width grids which could not grow or shrink, before getting back to the fluid roots of the web which had been there all along.
