---
title: 'Oliver Pattison'
layout: micro
option:
  - hero
date: 2016-07-18 12:34
updated: 2016-07-27 14:07
unique_id: 2016-07-18:hire
permalink: /hire/
custom_style: custom-hire.css
description: 'Why you should hire or work with me, Oliver Pattison, a web designer.'

---

# Available for hire

I’m [Oliver Pattison](https://olivermak.es/about/), a designer who makes responsive, forward-thinking websites. I bring a multi-disciplinary set of skills to every project that I work on.
{:.focus}

<!-- IDEA
in the second sentence, talk about interest instead of skills
-->

## Seeking

{% capture first %}
### Full-time role

I am looking for a design role that requires both design and development expertise. I am also seeking non-profits or businesses who want to enhance their websites and other outward-facing projects.

This might look like a “web designer” or “front-end developer” role, though my experience is wider than those terms suggest, and as a generalist I am happy to work outside and in between those boundaries.
{% endcapture %}

{% capture second %}
### Part-time or contract role

I am available to provide design and light development work for small projects (or as a small part of a larger team).
{% endcapture %}

{% capture third %}
### Side projects and collaboration

I am interested in providing design, prototyping, or other assistance for open source projects that solve interesting problems, communicate provocative ideas, or promote social justice.
{% endcapture %}

<section class="opportunities">
  <div class="opportunities-item--first">
    {{ first | markdownify }}
  </div>

  <div class="opportunities-item--second">
    {{ second | markdownify }}
  </div>

  <div class="opportunities-item--third">
    {{ third | markdownify }}
  </div>
</section>

{% include block/outreach.html %}

{% include block/elsewhere.html %}

## What I work with

<ul class="details no-bullets">

  {% include block/details-item.html title="HTML and CSS" expanded="I have a passion for well-written, thoughtful HTML and CSS. Although it is often dismissed as a simple markup language, getting HTML right is challenging, both when dealing with visual design and accessibility and usability." icon="html5" %}

  {% include block/details-item.html title="Jekyll" expanded="Jekyll is my favorite tool for designing and publishing content on the web. Most of the sites that I build these days are static sites (using Jekyll), with minimal but flexible configuration and high performance." icon="jekyll" %}

  {% include block/details-item.html title="JavaScript" expanded="I have been learning JavaScript for the past few years, working on interactive user interfaces and enhancing projects." icon="javascript" %}

  {% include block/details-item.html title="Web publishing systems" expanded="I have designed and developed sites with Shopify, Statamic, WordPress, and other content management systems. My focus has been on integrating front-end design with content editing systems, and organizing content structures for editors." icon="shopify" %}

  {% include block/details-item.html title="Git" expanded="" icon="git" %}

</ul>

<!-- IDEA
write prose about writing editing and passion for web
-->

## What I’m up to

- Presented [a talk at JekyllConf](https://olivermak.es/2016/05/jekyllconf-responsive-images/) on responsive images with Jekyll and imgix
- Learning [Mapbox GL API](https://www.mapbox.com/mapbox-gl-js/api/) to make interactive maps with JavaScript and WebGL
- Learning [Vue.js](http://vuejs.org) to make user interfaces with JavaScript
- Developing client websites, such as [Acorn Landscape Supply](http://acornlandscapesupply.ca)
- Attending [Homebrew Website Club](https://indieweb.org/Homebrew_Website_Club) (organized by IndieWebCamp)
- Attending [CodeNewbie DC community coding group](http://www.meetup.com/CodeNewbie-DC/) sessions to collaborate with people who are new to web development
- Contributing to online communities such as [Spec’s design and development Slack network](http://spec.fm/) and [Jekyll Talk, the official resource for Jekyll](https://talk.jekyllrb.com/)
<!-- IDEA
add a joke or note about things that are not about work
-->

{% include block/outreach.html %}
