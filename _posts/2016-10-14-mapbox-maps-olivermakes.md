---
title: 'Featuring photography with Mapbox'
layout: edgeless
theme: dark
category: 'projects'
option:
  - featured-home
  - mapbox
  - map-collection
  - minor
tags:
  - 'design'
  - 'javascript'
  - 'jekyll'
  - 'map'
  - 'metadata'
  - 'photography'
  - 'travel'
  - 'web'
updated: 2016-10-14 11:33
drafted: 2016-10-11 15:27
period: 2016-03 to 2016-10
unique_id: 2016-10-14:mapbox-maps-olivermakes
description: 'Making interactive maps to enhance photography metadata on this site.'
project:
  url: https://olivermak.es/photography/#map--collection-mapbox
  source: https://github.com/opattison/olivermakes
image_index: 2016-10-14-mapbox-collection-clustering-sample.jpg
image:
  - src: 2016-10-25-mapbox-collection-clustering-sample.jpg
    alt: 'example of clustering in photo collection map, made with Mapbox'
  - src: 2016-10-14-photo-metadata-sample.jpg
    alt: 'example of photo metadata which accompanies individual photos and maps, showing that the camera used is an iPhone and what camera settings were used'
    caption: 'Location, photographic metadata, and notes accompany every photo on the site, in addition to interactive maps.'
# add metadata from _photos/2015-03-23-chichester-sky
location: 'Bosham, near Chichester, England'
latitude: 50.828
longitude: -0.8599
zoom: 10

---

With the goal of learning how the [Mapbox GL JavaScript API](https://www.mapbox.com/mapbox-gl-js/api/) works, I designed and developed interactive maps for my website to provide more context for my photography. This involved working with a few features of Mapbox GL and Jekyll:

- [Designing a visual style]({% post_url 2016-10-24-mapbox-outdoorsy %}) to match my site’s color palette in [Mapbox Studio](https://www.mapbox.com/studio/).
- Fundamental Mapbox GL JS features like configuring and rendering a map, styling markers, and drawing points from GeoJSON data.
- Controlling map interactivity like scrolling behavior, flying interactions, popups, and cursor styles.
- [Visualizing map points as clusters](https://www.mapbox.com/mapbox-gl-js/example/cluster/).
- Generating GeoJSON data from Jekyll [collections](https://jekyllrb.com/docs/collections/) and page metadata.

## All photos mapped globally

<div class="grid--wide">
  <figure class="map--collection">
    <div id="map--collection-mapbox"></div>
    <figcaption class="map--collection-caption">
      <p><em>Zoom in or out to see individual photos or clusters by location.</em></p>
    </figcaption>
  </figure>
</div>

This map appears on the site’s [photography index page](/photography/). The index shows all of the photo posts on the site, but I wanted to design a map to enable browsing by location. I added geographic coordinates for each photo and created a GeoJSON data file that included other metadata like a thumbnail image for previewing the image and a hyperlink to each item.

The map visualizes frequency by clustering points at different zoom levels, uncovering single points when zoomed close enough to distinguish those points. As I add more photos to my archive, the map will show where I have traveled.

## Single photos mapped locally

<div class="grid--wide">
  <figure class="map--photo">
    <div id="map--photo-mapbox"></div>
    <button class="map-scrollzoom jsToggleScrollZoom">Toggle scroll zooming</button>
    <figcaption class="map--photo-caption">
      <p class="map-attribution">{{ site.mapbox.attribution }}</p>
    </figcaption>
  </figure>
</div>

These maps appear on every photo metadata page where single photos are featured and shown in detail. The example shown here represents the location of the photo [“Chichester sky”](/photography/2014-03-23-chichester-sky/).

{% assign image = page.image[1] %}
{% include block/image-srcset.html class="image--wide screenshot" %}

It was surprising to be able to work on this project almost entirely from Mapbox’s documentation without having to look further than [MDN’s JavaScript Web API reference](https://developer.mozilla.org/en-US/docs/Web/API) for guidance. My only previous experience building with Mapbox had been making [a photo map prototype with Mapbox JS](http://codepen.io/opattison/pen/eBsId) a couple of years earlier. I am looking forward to building more interactive maps after this initial exploration.

{% capture endnote %}
## Further reading

For a primer on how to generate GeoJSON and make maps with Jekyll, I recommend [Katy DeCorah’s “Jekyll and GeoJSON” explainer](http://katydecorah.com/code/jekyll-geojson/).

The [Mapbox GL JS examples](https://www.mapbox.com/mapbox-gl-js/examples/), API documentation, and style reference were essential in learning how to implement these maps.
{% endcapture %}

<aside class="ancillary--endnotes">
{{ endnote | markdownify }}
</aside>
