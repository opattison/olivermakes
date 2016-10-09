---
title: Writing
layout: category
category: index
description: 'A repository of writing and notes on archiving, technology, and other topics, by Oliver Pattison.'
permalink: /writing/

---

{% for post in site.posts %}
{% if post.option contains 'featured-writing' %}
{% include block/item.html %}
{% endif %}
{% endfor %}

{% assign index = 1 %}
{% for post in site.categories.writing %}
{% unless index > 7 %}
{% unless post.option contains 'featured-writing' %}
{% include block/item.html %}
{% assign index = index | plus: 1 %}
{% endunless %}
{% endunless %}
{% endfor %}
{% include block/index-nav.html %}
