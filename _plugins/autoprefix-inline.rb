# Autoprefix inline stylesheets
#
# {% capture input %}{% include input.scss %}{% endcapture %}
# <style>{{ input.scss | scssify | autoprefix }}</style>

require 'autoprefixer-rails'

module Jekyll
  module AutoprefixInline
    def autoprefix(input)
      AutoprefixerRails.process(input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::AutoprefixInline)