import * as React from "react"
import "../styles/index.scss"

import CanvasAnimation from "../components/ThreeAnim"

const IndexPage = () => {
  return (
    <body>
      <CanvasAnimation />
      <main>
        <div className="header">
          <h1>Holaaaaaa</h1>
          <h3>BY : ME</h3>
        </div>
      </main>
    </body>
    
  )
}

export default IndexPage

export const Head = () => <title>Portfolio by M</title>
