---
title: get started with gatsby
slug: gatsby-start
author: berry
Publish Date: 2021-03-21T09:01:39.629Z
thumb: ../images/thumbnails/pexels-photo-1097456.jpeg
---
Plugins can extend Gatsby in many ways:

Sourcing data (e.g. from the filesystem or an API or a database)
Transforming data from one type to another (e.g. a markdown file to HTML)
Creating pages (e.g. a directory of markdown files all gets turned into pages with URLs derived from their file names).
Modifying webpack config (e.g. for styling options, adding support for other compile-to-js languages)
Adding things to the rendered HTML (e.g. meta tags, analytics JS snippets like Google Analytics)
Writing out things to build directory based on site data (e.g. service worker, sitemap, RSS feed)Plugins can extend Gatsby in many ways:

Sourcing data (e.g. from the filesystem or an API or a database)
Transforming data from one type to another (e.g. a markdown file to HTML)
```js
post = {
					id: i + 1,
					title: metadata.title,
					author: metadata.author,
					date: metadata.date,
					image: metadata.image,
					content: contents,
				};
				postlist.push(post);
				if (i === files.length - 1) {
					let data = JSON.stringify(postlist);
					fs.writeFileSync('./src/blogposts.json', data);
				}
			});
		});
	});
	return;
```

Creating pages (e.g. a directory of markdown files all gets turned into pages with URLs derived from their file names).
Modifying webpack config (e.g. for styling options, adding support for other compile-to-js languages)
Adding things to the rendered HTML (e.g. meta tags, analytics JS snippets like Google Analytics)
Writing out things to build directory based on site data (e.g. service worker, sitemap, RSS feed)

