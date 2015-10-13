## Website deploying config ##

require 'jekyll'
require 's3_website'
require 'image_optim'
# require npm uglifyjs

local_static   = "resources"
local_images   = "resources/images"
local_site     = "_site"


## "rake serve"
desc "custom Jekyll serve for local development"
task :serve do
  system "jekyll serve -H 10.0.0.13 --config _config.yml,_config-dev.yml"
end

## "rake optimize" to optimize a folder of images in ImageOptim-CLI
desc "run a folder of images through ImageOptim-CLI"
task :optimize do
  system "image_optim #{local_images} -r"
  puts "## Images optimized ##"
end

## "rake dev" for development deployment
desc "build and deploy scripts, images and site to development servers via s3_website"
task :dev do
  puts "## Concatenating JavaScript ##"
  system "uglifyjs resources/scripts/velocity.js resources/scripts/velocity.ui.js resources/scripts/site.js --comments -b -o resources/scripts/all.min.js"
  system "jekyll build --config _config.yml,_config-dev.yml"
  system "s3_website push --site #{local_site}"
  puts "## Deployed site to S3 ##"
end

## "rake prod" for production deployment
desc "build and deploy scripts, images and site to production servers via s3_website"
task :prod do
  puts "## Concatenating and minifying JavaScript ##"
  system "uglifyjs resources/scripts/velocity.js resources/scripts/velocity.ui.js resources/scripts/site.js --comments -o resources/scripts/all.min.js"
  system "jekyll build"
  system "DEPLOY=production s3_website push --site #{local_site}"
  puts "## Deployed site to S3 ##"
end


def get_stdin(message)
  print message
  STDIN.gets.chomp
end
