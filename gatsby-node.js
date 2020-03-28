const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Auto generate pages
  // Pages built using templates/page-template.js
  const pageData = [
    {
      name: "Research",
      title:
        "Research",
      content:
        "Turnout in Transitional Elections: Who Votes in Iraq?, Journal of the Middle East and Africa (Revise and Resubmit).",
      extra: "“Labor Productivity: Large vs. Small, Turkey vs. EU.”(2014). TUSIAD Competitiveness Forum Briefs. <http: //ref.sabanciuniv.edu/sites/ref.sabanciuniv.edu/files/not_ahmed_ezz_eldin_policy_note_0.pdf>",
      extraOne: "“The Egyptian Welfare State in Transition (1995-2005): A Comparative Approach.” (2014). Doha Institute Research Papers. <http://english.dohainstitute.org/release/be4fad25-d7c6-4a7a-aa98-7286e89675 f6 > .",
      extraTwo: "“Scandiracy: How Interacting Scandals and Conspiratorial Framing Shapes Voters’ Behavior” (with Giovanna Invernizzi)",
    },
    {
      name: "Teaching",
      title:
        "Teaching",
      content:
        "Teaching Assistant, Introduction to Comparative Politics, Department of Political Science, Columbia University, Spring 2018.",
      extra: "Teaching Assistant, The Logic of Collective Choice, Department of Political Science, Columbia University, Fall 2017.",
      extraOne: "Instructor, Sawiris Scholars Program Pre - Departure Preparation Course in Mathematical and Statistical Methods, Summer 2012.",
      extraTwo: "Teaching Assistant, Introduction to Macroeconomics, Department of Economics, the American University in Cairo, Fall 2011 and Spring 2012. "
    },
    {
      name: "cv",
      title:
        "CV",
      content:
        "Vestibulum vestibulum finibus sem at fringilla. Morbi sed metus eu libero tincidunt pretium vel et nunc. Maecenas elementum fermentum dignissim. Cras vestibulum congue nisl, vitae euismod lectus ultricies sed. Mauris euismod fermentum ligula, a vehicula orci posuere ut. Maecenas congue sapien sit amet est pellentesque, eu rhoncus erat volutpat. Integer ut odio mattis, scelerisque magna ut, interdum urna. Aliquam sollicitudin enim sit amet bibendum mattis. Suspendisse vitae luctus sem, vitae luctus lorem. Aenean luctus risus sed rutrum vulputate. Donec vel auctor velit.",
    },
    {
      name: "404",
      title:
        "This is the error page.",
    },
  ]
  pageData.forEach(page => {
    createPage({
      path: `/${page.name}`,
      component: require.resolve(`./src/templates/page-template.js`),
      context: { page },
    })
  })

  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
    })
  })

  // Create blog list pages
  const posts = result.data.allMarkdownRemark.edges
  const postsPerPage = 1
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
