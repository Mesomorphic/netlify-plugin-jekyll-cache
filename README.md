# Netlify Build Plugin: Persist the Jekyll Cache between builds

Speed up deploys by caching your previous build cache, so you only need to build changed files (and any other cached assets)

## Installation

You can install the plugin using npm. Add the plugin as a development dependency:

```
npm install -D netlify-plugin-jekyll-cache
```

At some point this will be added to Netlify's plugin directory, but for now NPM installation will work fine.

## Configuration

Add the following to your `netlify.toml`:

```
[[plugins]]
  package = "netlify-plugin-jekyll-cache"

	[plugins.inputs]

    # This is only required if you have defined a source directory in Jekyll
    # At some point this will become automated, but for now it must be specified 
	jekyllSource = "/jekyll"
```
