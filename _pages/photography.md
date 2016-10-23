---
title: Photography
layout: category
option:
  - map-collection
  - mapbox
category: index
unique_id: photography
description: 'A collection of photos of nature and urban environments by Oliver Pattison.'
permalink: /photography/
zoom: 2
latitude: 40
longitude: -70

---

{% for post in site.categories.photography %}
  {% include block/item--photo.html %}
{% endfor %}

{% include block/map--collection.html %}

{% include block/index-nav.html %}
