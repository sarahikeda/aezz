import React from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"

export default ({ pageContext: { page } }) => (
  <Layout>
    <Seo title={page.name} description={page.title} />
    <div className="page-standard">
      <h1>{page.title}</h1>
      <ul>
        <li key="1">{page.content}</li>
        <li key="2">{page.extra}</li>
        <li key="3">{page.extraOne}</li>
        <li key="4">{page.extraTwo}</li>
      </ul>
    </div>
  </Layout>
)
