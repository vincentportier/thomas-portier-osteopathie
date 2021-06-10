import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Page introuvable" />
    <h1>404: Page introuvable</h1>
    <Link to="/">Retourner à l'accueil</Link>
  </Layout>
)

export default NotFoundPage
