---
title: Get started with gatsby
slug: new-gatsby-blog
author: Bertin NDAYISHIMIYE
Publish Date: 2021-03-29T04:58:56.995Z
thumb: ../images/thumbnails/gatsby.png
---
<!--StartFragment-->

### In this blog, we are going to see the easiet way to get started with gastby to build your site. You will also learn how to install Gatsby on your computer and use it to quickly develop a super-fast site using gasby starter pages.

<!--EndFragment-->

##### What we are going to cover:

* ##### \    What is gatsby?
* ##### \    Why gatsby?
* ##### \    Gatsby vs Create-react-app
* ##### \    Installations
* ##### \    Build your first simple page



#### 1.What is gatsby?

**Gatsby** is an open-source static website generator (SSG) that is based on the frontend development framework React and makes use of Webpack and GraphQL technology. It can be used to build static sites that are progressive web apps, follow the latest web standards, and optimized for speed and security

#### 2. Why gatsby?

The main benefit of GatsbyJS is that it is a complex solution. It comes packed with everything you need. This makes it incredibly to get started. From this point of view, GatsbyJS is more than just a static site generator. It is more like a framework. Let’s take a look at some concrete benefits so you know what can you expect.

First, GatsbyJS comes with both, ready-to-use front-end as well as back-end. There is basically no need to build or hack anything on your own. You can take it and use it right out of the box. Second, it is all written in JavaScript as a single programming language. GatsbyJS uses [React](https://reactjs.org/) component as a view layer on the front-end and [GraphQL](https://graphql.org/learn/) on the back-end.

This allows you to query and fetch data from anywhere. You no longer have to have all your data stored in local static Markdown files, or something similar. You can store your data on any database or storage you want. Then, you can leverage GraphQL to retrieve it and render it as you wish. Third, it has great and thorough documentation with guides and recipes.

Then, there is also a very rich system of plugins that is constantly growing. If you like something and want to continue using it, chances are there is a plugin for it. For example, if you are moving from WordPress, there are [plugins](https://www.gatsbyjs.org/plugins/?=wordpress) you can choose from and use. And, if you can’t find what you are looking for, or hit some roadblock, there is also a large community of passionate developers and evangelists you can reach to for help.

Fourth, GatsbyJS comes with code and data splitting out-of-the-box. There is no one big package of code that takes an eternity to load. Instead, you will get your code optimized and split into multiple files. This allows you to load first your critical HTML and CSS. When this is loaded, it prefetches resources for other pages. The result is that browsing your website feels, and is, so fast.

Fifth, when you build your website, you will end up with static files you can then easily deploy, using your favorite service. Almost as simple and easy as drag and drop. Sixth, minimum configuration. GatsbyJS requires only one config to get your website up and running. This is enough for the benefits. As you can see GatsbyJS is really great. Now, let’s start building.

#### 3. Gatsby vs Create-react-app

Create React App is an officially supported [CLI](https://www.gatsbyjs.com/docs/glossary/#cli) tool from Facebook to set up React apps, without having to deal with complicated configurations. It provides a default setup for tools like webpack and Babel that are useful in a modern development pipeline.

Gatsby is similar in that it can also help you set up an application and removes much of the configuration headache. However, Gatsby offers some additional advantages like performance optimizations with static rendering and a thriving ecosystem of plugins. Gatsby and Create React App even share nearly identical webpack and Babel configurations which makes porting less cumbersome. React’s own [docs](https://reactjs.org/) run on Gatsby, and React even [recommends Gatsby](https://github.com/facebook/create-react-app#popular-alternatives) to users of Create React App!

#### 4.Installations

First thing first, What is a stater?[Starters](https://www.gatsbyjs.com/docs/starters/) are boilerplate Gatsby sites maintained officially, or by the community.

###### Install gatsby CLI

Gatsby CLI (Command Line Interface) is the tool that lets you build Gatsby-powered sites. By running this command, we can install any Gatsby sites and the plugins we want.

\`\``shell

```shell
npm install -g gatsby-cli
```

\`\``

###### Generate a new site based on the starter. In the terminal, run:

\`\``shell

```shell
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

\`\``

* **new** - This is the command line that creates a new Gatsby project
* Hello-world - This is the name of the project. You can name it whatever you want here.
* **The URL** (https://github.com/gatsbyjs/gatsby-starter-hello-world[](https://github.com/gatsbyjs/gatsby-starter-blog)) - This URL specified points to a code repository that holds the starter code you want to use. In other words, I picked the theme for the project.

After the installation run the following commands:

\`\``shell

```shell
cd hello-world
```

\`\``

\`\``shell

```shell
gatsby develop
```

\`\``

gatsby develop will start up your server side complilation and bundles all required files together ready to be renderd to DOM

Now,

Open a new tab in your browser and go to `http://localhost:8000/`. You should now see your new Gatsby site!

Now, you have a basic gatsby site set up you can go on and make your changes.

There is still more to cover about Gatsby. One of the best ways to learn about them is to go through their documentation <https://www.gatsbyjs.com/docs/> .

I hope you found this guide useful!