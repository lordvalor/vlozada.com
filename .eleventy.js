 module.exports = function(eleventyConfig) {
 eleventyConfig.addPassthroughCopy("src/assets"); 

  templateFormats: ["md", "njk", "html", "liquid"]

 return{
  markdownTemplateEngine: "njk",
  htmlTemeplateEngine: "njk",
  dir: {
    input: "src",
    output: "public",
    data: "_data",
    includes: "_includes",
    layouts: "_layouts"
  },
  pathPrefix: "/",
 }
}
