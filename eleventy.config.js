import fs from 'fs';
import path from 'path';
import cssnano from 'cssnano';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

import pluginRss from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
// compile tailwindcss befrore eleventy process the file.
    eleventyConfig.on('eleventy.before', async () => {
    const tailwindInputPath = path.resolve("src/assets/css/style.css");
    const tailwindOutputPath = path.resolve("dist/assets/css/style.css");
    const cssContent = fs.readFileSync(tailwindInputPath, 'utf-8');
    const outputDir = path.dirname(tailwindOutputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const result = await processor.process(cssContent, {
        from: tailwindInputPath,
        to: tailwindOutputPath,
    });
    fs.writeFileSync(tailwindOutputPath, result.css);
    });

    const processor = postcss([
        //compile tailwind
        tailwindcss(),
    
        //minify tailwind css
        cssnano({
          preset: 'default',
        }),
      ]);
    //eleventyConfig.addPassthroughCopy("src/assets/css");
    //eleventyConfig.addPassthroughCopy("src/assets/js");
    //eleventyConfig.addPassthroughCopy("src/favicon.ico");
    //eleventyConfig.addPassthroughCopy("src/robots.txt");
    //eleventyConfig.addPassthroughCopy("src/site.webmanifest");
    //eleventyConfig.addPassthroughCopy("src/browserconfig.xml");
    //eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
    //eleventyConfig.addPassthroughCopy("src/assets/images");
    //eleventyConfig.addPassthroughCopy("src/favicon-16x16.png");
    //eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
    //eleventyConfig.addPassthroughCopy("src/mstile-150x150.png");
    //eleventyConfig.addPassthroughCopy("src/safari-pinned-tab.svg");
    //eleventyConfig.addPassthroughCopy("src/android-chrome-192x192.png");
    //eleventyConfig.addPassthroughCopy("src/android-chrome-512x512.png");
    //eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png ");
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
