---
title: 'Patterns'
layout: category
option:
  - code
  - code-block
  - srcset
  - patterns
category: meta
date: 2014-10-31 18:25
updated: 2016-01-26 23:04
description: 'A collection of patterns for this website.'

---

<div class="primer">
  <p>This is a collection of all of the patterns on <a href="/">olivermak.es</a>, organized by <a href="/patterns/color/">color</a>, <a href="/patterns/text/">text</a>, modular <a href="/patterns/component/">components</a>, and other <a href="/patterns/interface/">interface</a> elements. These patterns serve as living documentation for this site’s present design. They also prescribe use and specification for every element on the site. The source for these patterns is <a href="{{ site.source_url.repo }}">on GitHub</a>.</p>
</div>

{% assign items = site.data.pattern_items %}
{% for item in items %}
{% include block/item--pattern.html %}
{% endfor %}

{% include block/pattern-nav--index.html %}
