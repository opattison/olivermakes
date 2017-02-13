---
title: 'Outdoorsy style for Mapbox'
layout: edgeless
theme: dark
category: 'projects'
option:
  - map
  - mapbox
  - minor
tags:
  - 'design'
  - 'map'
  - 'travel'
  - 'web'
updated: 2016-10-25 07:52
drafted: 2016-10-24 19:16
unique_id: 2016-10-24:mapbox-outdoorsy
description: 'A vector map style based on the Mapbox Outdoors style, made with Mapbox Studio.'
project:
  url: https://api.mapbox.com/styles/v1/opattison/ciuoegxtl007i2inykyztlus6.html?title=true&access_token=pk.eyJ1Ijoib3BhdHRpc29uIiwiYSI6Il9DU3p1MEkifQ.3cvRQB5hVIONMpDAflBUNw#12/44.394699/-72.660606
  download: /resources/fragments/outdoorsy-ciuoegxtl007i2inykyztlus6.zip
  filetype: '.zip'
image_index: 2016-10-25-map-outdoorsy-catskills.png
image:
  - src: 2016-10-25-map-outdoorsy-catskills.png
    alt: 'terrain map of Catskill Mountains in New York'
map:
  - id: example1
    # location set at Mount Hunger, Vermont
    latitude: 44.394699
    longitude: -72.660606
    zoom: 14
    style: mapbox://styles/opattison/ciuoegxtl007i2inykyztlus6
    caption: 'Close up, there are walking and cycling trails, contour lines indicating elevation, park and building outlines, and landscape types.'
  - id: example2
    latitude: 44.394699
    longitude: -72.660606
    zoom: 8.5
    style: mapbox://styles/opattison/ciuoegxtl007i2inykyztlus6
    caption: 'Further away, there are hill shades showing mountain slopes, and a delicate color palette that matches this site’s design.'
  - id: example3
    latitude: 44.394699
    longitude: -72.660606
    zoom: 8.5
    style: mapbox://styles/opattison/ciuorfpjx00bb2io2wp2rp90w # Mapbox Outdoors
    caption: 'The original [Mapbox Outdoors](https://www.mapbox.com/blog/outdoors-design/) style for comparison.'
  - id: example4
    # location set at San Francisco bay
    latitude: 37.808419
    longitude: -122.464873
    zoom: 12
    style: mapbox://styles/opattison/ciuoegxtl007i2inykyztlus6
    caption: 'The design is intended to work in dense cities as well as mountain slopes and rural areas.'

---

With more travelogues and photo sharing planned for this site and other future projects, I wanted a map design that would suit the purpose. My goal was to make an “outdoorsy” web map less like a road atlas, but instead more like a topographical guide: with places and names as reference points rather than as featured locations.

I started out in Mapbox Studio with the [Outdoors](https://www.mapbox.com/blog/outdoors-design/) style, which has extensive topographical features and special treatment of parks, outdoor activities, and points of interest. One specific goal I had was to separate gray urban areas from greener areas using OpenStreetMap data, as Stamen Design did with their [terrain map](http://maps.stamen.com/terrain/#12/37.7706/-122.3782).

I adopted many of [the colors from my own website](/patterns/color/) and my [newbound light theme](https://github.com/opattison/newbound-light-syntax), varying opacity and lightness as necessary. I removed and cleaned up some layers, refining outdoor details at different zoom levels. [Source Sans Pro](http://adobe-fonts.github.io/source-sans-pro/) seemed like a better alternative compared to [FF DIN](https://www.fontshop.com/families/ff-din) (used in Outdoors). Source Sans is a more neutral and less opinionated typeface that can suit a variety of projects: less German wayfinding, more modern user interface.

I made new or revised styles for just about every feature in the Mapbox [terrain](https://www.mapbox.com/vector-tiles/mapbox-terrain/) and [streets](https://www.mapbox.com/vector-tiles/mapbox-streets-v7/) vector tile sets. See if you can spot how I’ve implemented national park boundaries, land use areas, walking and cycling paths, marsh lands, road and rail systems, and building styles.

<a class="action" href="https://api.mapbox.com/styles/v1/opattison/ciuoegxtl007i2inykyztlus6.html?title=true&access_token=pk.eyJ1Ijoib3BhdHRpc29uIiwiYSI6Il9DU3p1MEkifQ.3cvRQB5hVIONMpDAflBUNw#12/44.394699/-72.660606">view this map full screen</a>

## Samples of work in progress

{% include block/map.html id="example1" %}

{% include block/map.html id="example2" %}

{% include block/map.html id="example3" %}

{% include block/map.html id="example4" %}

All icons and the original map design on which this is based are licensed copyright [© Mapbox](https://www.mapbox.com/about/maps/). All map data is copyright [© OpenStreetMap](http://www.openstreetmap.org/copyright) contributors.

## Related project

{% include block/project--satellite.html id="2016-10-14:mapbox-maps-olivermakes" %}
