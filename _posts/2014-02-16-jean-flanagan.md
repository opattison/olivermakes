---
title: 'Website for Jean Flanagan (2014)'
layout: singel
category: 'projects'
tags:
  - 'design'
  - 'jekyll'
  - 'process'
  - 'responsive'
  - 'web'
updated: 2016-10-03 11:20
drafted: 2014-12-03 17:10
unique_id: 2014-02-16:jean-flanagan
period: 2013-06 to 2016-10
description: 'A personal website for a science education and communication specialist.'
project:
  url: https://2016.jeancflanagan.com
  source: https://github.com/jeancflanagan/jeancflanagan/tree/2016-09-archive
custom_style: custom-2014-02-16-jean-flanagan.css
image_index: index/2014-12-05-jean-flanagan-feature.jpg
image:
  - src: 2014-12-05-jean-flanagan-feature.jpg
    alt: 'A screenshot of jeancflanagan.com'
    date: 2014-12-05
  - src: 2013-07-08-jean-flanagan-early-excerpt.png
    alt: 'Two text excerpts from a prototype of Jean’s website'
    caption: 'Content excerpts from the very early stages of the site’s design.'
    date: 2013-07-08
  - src: 2014-12-05-jean-flanagan-excerpt.png
    alt: 'Two text excerpts from a current version of Jean’s website'
    caption: 'How the same content excerpts turned out in a later design iteration of the site.'
    date: 2014-12-05
  - src: 2014-12-05-jean-flanagan-large-grid.jpg
    alt: 'The grid of posts on the home page on a large desktop screen'
    caption: 'What the grid of posts [on the homepage](https://2016.jeancflanagan.com/) looks like on a large screen. This four-column grid is different from the single-column grid on small-sized screens and the double-column grid on medium-sized screens.'
    date: 2014-12-05
  - src: 2014-12-05-jean-flanagan-photo-page.jpg
    alt: 'A screenshot of the photo layout on a medium-sized browser'
  - src: 2014-12-05-jean-flanagan-article-mobile.jpg
    alt: 'A screenshot of the writing layout on a phone-sized browser'
    date: 2014-12-05
  - src: 2014-12-05-jean-flanagan-article-desktop.jpg
    alt: 'A screenshot of the writing layout on a large desktop browser'
    date: 2014-12-05
  - src: 2014-12-05-jean-flanagan-article-float-image.png
    alt: 'A screenshot of an image floated right alongside some text in a flexible layout'
    caption: 'The image of Darwin’s finches floats right on larger screens, while it would be layed out in the center on smaller screens. [View this page](https://2016.jeancflanagan.com/2013/communicating-about-evolution-the-danger-of-shortcuts/).'
    date: 2014-12-05
  - src: 2014-02-16-PhyloPic.ef63437d.Michelle-Site.Scyphozoa.svg
    alt: 'Floating jellyfish vector graphic'
    caption: 'A snippet from the [404 page](https://2016.jeancflanagan.com/404.html), using CSS `keyframes` animations to `translate` an SVG image and shift the background color. The vector jellyfish illustration is by [Michelle Site via Phylopic](http://phylopic.org/image/ef63437d-d6f4-4583-9d75-a8c9b19a203d/), licensed [CC BY-NC](http://creativecommons.org/licenses/by-nc/3.0/).'
    license: 'CC BY-NC'
    license-url: http://creativecommons.org/licenses/by-nc/3.0/

---

My partner Jean Flanagan and I have a shared interest in writing, photography, and self-archiving. Over the years we’ve experimented with shared blogs and photo repositories on a number of different web services. We enjoyed working together but limitations in those services often made our projects feel ephemeral. So it made sense for us to pool our resources to make Jean a website to serve as a portfolio featuring her writing and photography. Jean would collect and edit her output and I would help her design and develop it.

## Features of the site

### Responsive design

The site was designed from small screens upward, using flexible images, fluid layouts, and `min-width` media queries. Typographic elements were tested out early on to ensure readability and appropriate scale and tone at different widths.

### Content first

The first thing we started out with were full-length articles about science, already written and edited. Having content ahead of time meant that the site could be designed around *actual words and images* rather than lorem ipsum filler text. (I really don’t like using lorem ipsum if I can help it. [^1]) It was essential to the process to test typography and proportion with real content.

Designing in a browser meant that HTML prototypes were an early part of the process, right after sketching and rough notes. In the first week of active development, prototype code was being written that would evolve into the finished product.

{% assign image = page.image[1] %}
{% include block/image.html class="image screenshot" %}  

{% assign image = page.image[2] %}
{% include block/image.html class="image screenshot" %}

{% assign image = page.image[3] %}
{% include block/image.html class="image--wide screenshot" %}

### Flexible layout for long writing and featured photography

Jean takes [beautiful photos](https://2016.jeancflanagan.com/photos/), which I wanted to feature in a “full-bleed” format with photos taking up as much of the screen width as possible (without being so tall that they require vertical scrolling). The photo pages have a distinct layout from the writing pages to ensure that images are featured prominently without affecting the typographic measure of writing pages. Both layouts are able to feature edge-to-edge (margin-breaking) images, but the page proportions are different for each. Both page layouts feature images, but the photo pages tend to feature original photography, while writing layouts often make use of Creative Commons-attributed images.

#### Sample from photo layout

{% assign image = page.image[4] %}
{% include block/image.html class="image screenshot" %}

#### Samples from writing layout

<div class="grid--wide">
  {% assign image = page.image[5] %}
  {% include block/image.html class="grid-figure--33 screenshot" %}

  {% assign image = page.image[6] %}
  {% include block/image.html class="grid-figure--66 screenshot" %}
</div>

Not every image is meant to be showcased, nor should every image overshadow the writing. For complementary images in writing posts, I crafted alternative styles for right/left floated images for large screens. These optional styles are automated through a [Jekyll figure/image plugin](https://github.com/opattison/jekyll-figure-image-tag) that I wrote. The styles are flexible, reusable, and easy to maintain as well.

{% assign image = page.image[7] %}
{% include block/image.html class="image screenshot" %}

### Personality

We wanted to make sure that some of Jean’s interests and personality were part of the site’s design. For example, [the 404 page](https://2016.jeancflanagan.com/404.html) has a floating jellyfish animation which echoes her interest in marine biology.

<div id="error-404">
  {% assign image = page.image[8] %}
  {% include block/image.html class="image--wide" %}
</div>

## Choosing Jekyll

Jean already had a personal WordPress site. I had helped her transition from the limited WordPress.com service to her own personal domain and host. However, Jean was still feeling constrained by limitations in configuration and design. I could certainly help redesign a WordPress site, but it would be a significant challenge since I have not ever made a theme from scratch, nor have I worked extensively with PHP. Building on existing themes was a sure way to end up with a compromised design with inflexible configuration. Hacking around in WordPress would only take time away from my developing my existing strengths in responsive HTML and CSS.

Both of us realized that WordPress was no longer a good fit. Jean wanted more control over content and flexible layouts, as well as an interface that wouldn’t involve fighting with a WYSIWYG editor or administering a content management system and database. The trade-off for ease-of-use and getting started quickly with WordPress was outweighed by a desire to publish independently and to develop a process that would be able to withstand servers misbehaving, databases being corrupted, or any of the pitfalls of locking in to a “platform”.

We chose [Jekyll](http://jekyllrb.com) because it would allow for a high performance site with plenty of flexibility in design and configuration. We realized that there would be a learning curve for both of us, since I had only just gotten started with Jekyll and it would be new for Jean. A site built of flat files with neither a <abbr title="content management system">CMS</abbr> nor server-side processing is limiting for some applications, but has great advantages in performance and maintainability. [^2]

## Getting it right is difficult

Publishing *something* on the web is relatively easy, but designing a lasting home for creative output that you won’t be forced to abandon or migrate later takes a significant amount of time and effort. For this project, both design and content were weighed deliberately. Working **content first** informed the design. The layout, typography and other design elements had to suit the content well.

{% capture ancillary %}
## What Jean learned from this project

by <cite><a href="https://jeancflanagan.com">Jean Flanagan</a></cite>

- How to use Jekyll, Git, GitHub, and a command line interface.
- How photo file sizes, fonts, and more affect a website's performance.
- That learning to care about usability, metadata, and performance would be rewarding and make me a more responsible content creator.
- That content will always require a lot more work than many content-hosting web services imply.
- That context and presentation influence my approach to creative content.

{% endcapture %}

{% include block/ancillary.html %}

## What I learned from this project

- That Jekyll is fast and I love using it to design and build a website.
- How to set up a Jekyll site for personal publishing, with processes that would inspire me to create my own site.
- How to use [GitHub Issues](https://github.com/jeancflanagan/jeancflanagan/issues) to communicate in real time about the process, organize collaborative work, and document the history of the project.
- That working with development environments and version control is essential for a collaborative project, even if only two people are involved and their roles are well-defined.
- That designing for yourself or someone close to you takes time – in this case, our personal time. (This process took months longer than we thought it might initially, but it ended up being worth additional effort to get certain design and content elements done *right*.)

{% capture endnote %}
**[View the archived version of Jean’s website live]({{ page.project.url }})** or **[check it out on GitHub]({{ page.project.source }})**.

**Note:** this website is no longer in development, but a redesigned version of it is, which you can [visit](https://jeancflanagan.com) or [read about]({% post_url 2016-10-02-jean-flanagan-2016 %}).
{% endcapture %}

{% include block/ancillary--endnotes.html %}


[^1]: Using lorem ipsum filler text encourages people reviewing the design *not* to read the text, which makes it difficult to judge legibility of body text until too late in the design process. [Nathan Ford wrote some good words](http://artequalswork.com/posts/tweeking.php) on this topic. Nathan Ford suggests reading tweets instead of ipsum, but I prefer a different approach. If I am constrained in my ability to design content-first, [my current practice]({% post_url 2014-12-19-reading-driven-design %}) is to use unread content from my Instapaper queue, so my eyes will focus on trying to read in the working design or prototype.
[^2]: I wrote more about my preference of minimal tools like Jekyll over tools like WordPress in [an essay on why Jekyll]({% post_url 2016-03-16-consider-jekyll %}).
