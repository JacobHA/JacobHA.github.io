source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# Better yet, use
#     bundle exec jekyll doctor -t
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
# gem "jekyll", "~> 4.2.2"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# Find the most recent version here, https://pages.github.com/versions/
gem "github-pages", "~> 228", group: :jekyll_plugins

# If you have any plugins, put them here!
# group :jekyll_plugins do
#   gem "jekyll-feed", "~> 0.12"
# end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1.2.10"
  gem "tzinfo-data"
end

# Necessary add-on for a proper compile:
# Found here https://github.com/jekyll/jekyll/issues/8523
gem "webrick", ">= 1.8.2"

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem 'jekyll-relative-links'

# Dependabot vulnerabilities:
gem "nokogiri", ">= 1.13.9"
gem "activesupport", ">= 7.0.7.1"
gem "commonmarker", ">= 0.23.10"