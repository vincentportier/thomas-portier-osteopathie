import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  Osteopathe,
  Osteopathy,
  Hero,
  Informations,
  Cabinet,
} from "../components/sections/index"

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Informations />
    <Osteopathy />
    <Osteopathe />
    <Cabinet />
  </Layout>
)

export default IndexPage
