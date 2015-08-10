## Website deploying config ##

# Assumes that Jekyll gem is configured for site.

require 's3_website'
require 'image_optim'
# require npm uglifyjs

local_static   = "_static"
local_images   = "_static/images"
local_site     = "_site"

velocity_js    = "File.read('_static/scripts/velocity.js')"
velocity_ui_js = "File.read('_static/scripts/velocity.ui.js')"
site_js        = "File.read('_static/scripts/site.js')"

## "rake optimize" to optimize a folder of images in ImageOptim-CLI
desc "run a folder of images through ImageOptim-CLI"
task :optimize do
  system "image_optim #{local_images} -r"
  puts "## Images optimized ##"
end

## "rake load" to load images and scripts in the local static directory to the server
desc "deploy Jekyll images and scripts to remote server via s3_website"
task :load do
    puts "## Concatenating and minifying JavaScript ##"
    system "uglifyjs _static/scripts/velocity.js _static/scripts/velocity.ui.js _static/scripts/site.js --comments -o _static/scripts/all.min.js"
    system "s3_website push --site #{local_static} --config-dir #{local_static}"
    puts "## Deployed images to S3 ##"
end

## "rake deploy" to deploy _site to the server
desc "build and deploy Jekyll _site and _images to remote servers via s3_website"
task :deploy => :load do
  system "jekyll build"
  system "s3_website push --site #{local_site}"
  puts "## Deployed site to S3 ##"
end


def get_stdin(message)
  print message
  STDIN.gets.chomp
end
