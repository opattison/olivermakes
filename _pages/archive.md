---
title: Full Site Archive
layout: archive
category: index
description: 'A minimal archive list of all posts on this website, by Oliver Pattison.'
permalink: /archive/

---

{% include block/index-title.html title='archive' %}

{% for post in site.posts %}
{% include block/item--short.html %}
{% endfor %}
{% include block/index-nav--archive-full.html %}
