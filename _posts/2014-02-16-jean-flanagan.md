---
title: 'Website for Jean Flanagan'
layout: 'dubbel'
option:
  - code
  - index-image
  - custom-css
category: 'project'
date: 2014-02-16 12:34
updated: 2014-12-05 14:49
drafted: 2014-12-03 17:10
unique-id: 2014-02-16:jean-flanagan
period: 2013-06 to present
description: 'A story about my work on a collaboratively designed website for a science writer and editor.'
project-url: 'http://jeancflanagan.com'
project-source: 'https://github.com/opattison/jeancflanagan'
custom-css: 2014-02-16-jean-flanagan.css
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
    caption: 'What the grid of posts [on the homepage](http://jeancflanagan.com/) looks like on a large screen. This four-column grid is different from the single-column grid on small-sized screens and the double-column grid on medium-sized screens.'
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
    caption: 'This image floats right on large screens, and would appear centered on smaller screens. [View this page](http://jeancflanagan.com/2013/communicating-about-evolution-the-danger-of-shortcuts/).'
    date: 2014-12-05

---

My partner Jean Flanagan and I have a shared interest in self-archiving. Often we write and edit collaboratively. We have worked together on shared photography repositories. So it made sense for us to pool our resources to make Jean a website to feature her writing and photography. Jean would collect and edit her output and I would help her design and develop it.

## Features of the site

### Responsive design 

The site was designed from small screens up, using flexible images, fluid layout and `min-width` media queries. Typographic elements were tested out early on to ensure readability and appropriate scale and tone at different widths.

### Content first

The first thing we started out with were full-length articles about science, already written and edited. Having content ahead of time meant that the site could be designed around *actual words and images* rather than lorem ipsum filler text. (I really don’t like using lorem ipsum if I can help it. [^1]) It was essential to the process to test typography and proportion with real content.

Designing in a browser meant that HTML prototypes were an early part of the process, right after sketching and rough notes. In the first week of active development, prototype code was being written that would evolve into the finished product.

<figure class="image screenshot">
  <img
    src="{{ site.image-url }}/{{ page.image[1].src }}" 
    alt="{{ page.image[1].alt }}"
  >
  <figcaption>{{ page.image[1].caption | markdownify }}</figcaption>
</figure>

<figure class="image screenshot">
  <img
    src="{{ site.image-url }}/{{ page.image[2].src }}" 
    alt="{{ page.image[2].alt }}"
  >
  <figcaption>{{ page.image[2].caption | markdownify }}</figcaption>
</figure>

<figure class="wide screenshot">
  <img
    src="{{ site.image-url }}/{{ page.image[3].src }}" 
    alt="{{ page.image[3].alt }}"
  >
  <figcaption>{{ page.image[3].caption | markdownify }}</figcaption>
</figure>

### Flexible layout for long writing and large format photography

Jean takes [beautiful photos](http://jeancflanagan.com/photos/), which I wanted to feature in a “full-bleed” format with photos taking up as much of the screen width as possible without requiring vertical scrolling. The photo pages have a different layout from the writing pages to ensure that images are featured differently.

#### Sample from photo layout

<figure class="image">
  <img
    src="{{ site.image-url }}/{{ page.image[4].src }}" 
    alt="{{ page.image[4].alt }}"
  >
</figure>

#### Samples from writing layout

<div class="grid2">
  <figure class="w33 screenshot">
    <img
      src="{{ site.image-url }}/{{ page.image[5].src }}" 
      alt="{{ page.image[5].alt }}"
    >
  </figure>
  <figure class="w66 screenshot">
    <img
      src="{{ site.image-url }}/{{ page.image[6].src }}" 
      alt="{{ page.image[6].alt }}"
    >
  </figure>
</div>

However, not every image is meant to be showcased, nor should every image overshadow the writing. For complementary images, I crafted alternative styles for right/left floated images for large screens. These optional styles are automated through a [Jekyll figure/image plugin](https://github.com/opattison/jekyll-figure-image-tag) that I wrote. The styles are flexible, reusable, and easy to maintain as well.

<figure class="image screenshot">
  <img
    src="{{ site.image-url }}/{{ page.image[7].src }}" 
    alt="{{ page.image[6].alt }}"
  >
  <figcaption>{{ page.image[7].caption | markdownify }}</figcaption>
</figure>

### Personality

We wanted to make sure that some of Jean’s interests and personality were part of the site’s design. For example, on the 404 page has a floating jellyfish animation which echoes her interest in marine biology. 

<div id="error-404">
  <figure class="wide">
    <img src="{{ site.image-url }}/2014-02-16-PhyloPic.ef63437d.Michelle-Site.Scyphozoa.svg" alt="Floating jellyfish vector graphic">
    <figcaption><p>A snippet from <a href="http://jeancflanagan.com/404.html">the 404 page</a>, using CSS <code>keyframes</code> animations to <code>translate</code> an SVG image and shift the background color. The vector jellyfish illustration is by <a href="http://phylopic.org/image/ef63437d-d6f4-4583-9d75-a8c9b19a203d/">Michelle Site via Phylopic</a>, licensed <a href="http://creativecommons.org/licenses/by-nc/3.0/">CC BY-NC</a>.</p></figcaption>
  </figure>
</div>

## Choosing Jekyll

Jean already had a personal WordPress site, which I had helped her transition from the limited WordPress.com service to her own personal domain and host. The problems were limitations in configuration and design. I could certainly help redesign a WordPress site, but it would be an uphill battle since I have not ever made a theme from scratch, and developing a site with PHP is not my strength. Building on existing themes was a sure way to end up with a design with compromises and inflexibility. Hacking around in WordPress would only distract me from what I *am* strong in: responsive HTML and CSS.

Both of us realized that WordPress was no longer a good fit. We both wanted more control over the design. Jean wanted more control over content and flexible layouts, as well as an interface that wouldn’t involve fighting with a WYSIWYG editor or administering a content management system and database. The trade-off of ease-of-use and getting started quickly with WordPress was outweighed by a desire to publish independently and to develop a process that would be able to withstand servers misbehaving, databases being corrupted, or any of the pitfalls of locking in to a “platform”.

We chose [Jekyll](http://jekyllrb.com) because it would allow for a high performance site with plenty of flexibility in design and configuration. We realized that there would be a learning curve for both of us, since I had only just gotten started with Jekyll and it would be new for Jean. A site built of flat files and no <abbr title="content management system">CMS</abbr> nor server-side processing is limiting for some applications, but has great advantages in performance and maintainability. [^2]

## Getting it right is difficult

Publishing something on the web is relatively easy, but creating something lasting that you won’t want to scrap and rework later can take a significant amount of time and effort. For this project, both design and content were weighed deliberately. Working **content first** was key for the design, since it meant that the layout, typography and other design elements would suit the content well.

## What I learned from this project

- Jekyll is fast and I love using it to design and build a website.
- I learned how to set up a Jekyll site for personal publishing, with processes that would inspire me to create my own site.
- We figured out how to use [GitHub Issues](https://github.com/opattison/jeancflanagan/issues) to communicate in real time about the process, organize our work, and document the history of the project.
- Working with development environments and version control is essential for a collaborative project, even if only two people are involved and their roles are well-defined.
- Designing for yourself or someone close to you takes time. This process took months longer than we thought it might initially, but it ended up being worth additional effort to get certain design and content elements done *right*.

[^1]: Using lorem ipsum filler text encourages people reviewing the design *not* to read the text, which makes it difficult to judge legibility of body text until too late in the design process. [Nathan Ford wrote some good words](http://artequalswork.com/posts/tweeking.php) on this topic. Nathan Ford suggests reading tweets instead of ipsum, but I prefer a different approach. If I am constrained in my ability to design content-first, my current practice is to use unread content from my Instapaper queue, so my eyes will focus on trying to read in the working design or prototype.
[^2]: I wrote more about my preference of minimal tools like Jekyll instead of tools like WordPress in [an essay on future-friendliness and robustness]({% post_url 2014-11-06-design-notes-future-friendiness-robustness %}).

- - -

**[View Jean’s website live]({{ page.project-url }})** or **[check it out on GitHub]({{ page.project-source }})**.

**Note:** this website is in active development, so the information on this page is only a snapshot of it as it existed on {{ page.updated | date: '%Y-%m-%d' }}.