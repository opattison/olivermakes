# <a href="https://olivermak.es/"><img src="https://olivermak.es/icons/favicon32.svg" width="32" height="32"></a> <a href="https://olivermak.es/">olivermak.es</a> an archive

**Read about [my process for building this site](https://olivermak.es/2014/12/oliver-pattison/).**

Not interested in the code? **Take a look at [the pattern library](https://olivermak.es/patterns/).**

## Goals

- Build a personal website as an archive for my creative output.
- Experiment with HTML, CSS, and JavaScript using design patterns that I have not implemented before.
- Self-built: design and implement as much as possible by myself.
- Showcase my work for others.
- Improve at building advanced static sites with Jekyll.

## Principles

- Future-friendly
- Focused on content
- Economical, high performance design
- Progressively enhanced
- Flexible in layout and form
- Respectful of users and their devices
- Usable and accessible
- Empathetic in content, design and tone

## Implementation

- Building: [Jekyll](http://jekyllrb.com) and [npm scripting](https://docs.npmjs.com/cli/run-script)
- Archive generation: [Jekyll Archives](https://github.com/jekyll/jekyll-archives) gem
- Hosting: Amazon [CloudFront](https://aws.amazon.com/cloudfront/), [S3](https://aws.amazon.com/s3/) and [imgix](https://www.imgix.com) for hosting; [AWS ACM](https://aws.amazon.com/certificate-manager/) for TLS (HTTPS) certificate
- Deploying: [s3_website](https://github.com/laurilehmijoki/s3_website), via [Travis CI](https://travis-ci.org)
- Version control: GitHub
- Typography: [Adobe Typekit](https://typekit.com/colophons/hro5wuc) – 300, 400 and 500 weights of [the Ratio typeface](http://cargocollective.com/pstype/Ratio) and system monospace fonts (Menlo or Consolas if available)
- Layout: custom [`flexbox`](https://www.w3.org/TR/2016/CR-css-flexbox-1-20160301/) CSS
- Responsive images: [`srcset`](https://responsiveimages.org), processed with [imgix](https://www.imgix.com/)
- Maps: [MapBox](https://www.mapbox.com/)
- No templates, frameworks or boilerplate
- A minimum of front-end JavaScript

## Requirements

### Configuration

- [Jekyll](http://jekyllrb.com) >3.1
- [Jekyll Archives](https://github.com/jekyll/jekyll-archives)
- [rouge](https://github.com/jneen/rouge)
- [Sass (SCSS)](https://github.com/sass/sass)
- [jekyll-imgix](https://github.com/imgix/jekyll-imgix)
- [npm for dependencies and building](https://www.npmjs.com)
- [uglifyJS](https://github.com/mishoo/UglifyJS2)
- [watch](https://github.com/mikeal/watch)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)

### Testing and deploying

- [HTMLProofer](https://github.com/gjtorikian/html-proofer)
- [s3_website](https://github.com/laurilehmijoki/s3_website)
- [Travis CI](https://travis-ci.org)

### Front-end

- [Velocity.js](http://julian.com/research/velocity/)
- [typekit-cache](https://github.com/morris/typekit-cache)

## License

All writing and photography on the site is my original work and is licensed under [Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC)](http://creativecommons.org/licenses/by-nc/4.0/) except where explicitly noted. All design and code is licensed under [the MIT license](https://olivermak.es/license/#mit), but is available for fair use [on GitHub](https://github.com/opattison/olivermakes). Almost everything in the `_pages`, `_posts`, `icons`, and `images` folders is CC BY-NC and the most of the rest of the repository is under copyright, where applicable.

[Read more](https://olivermak.es/license/) on attribution and copyright. If you have any questions about licensing or use of content from the site, please [contact me by email](oliverpattison@gmail.com).

<a href="https://olivermak.es/"><img src="https://olivermak.es/icons/favicon144.svg" width="100%" height="144"></a>
