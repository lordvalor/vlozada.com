const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/site.webmanifest");
    eleventyConfig.addPassthroughCopy("src/browserconfig.xml");
    eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
    eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
    eleventyConfig.addPassthroughCopy("src/mstile-150x150.png");
    eleventyConfig.addPassthroughCopy("src/safari-pinned-tab.svg");
    eleventyConfig.addPassthroughCopy("src/android-chrome-192x192.png");
    eleventyConfig.addPassthroughCopy("src/android-chrome-512x512.png");
    eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png ");
    eleventyConfig.addPlugin(pluginRss);

    return {
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        pathPrefix: "/", // This is necessary for the site to work on GitHub Pages
        dir: {
            input: "src",
            output: "dist",
            assets: "assets",
            data: "_data"
        }
        
    };
}