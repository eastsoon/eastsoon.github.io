import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-5xl">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="text-5xl" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <div className="flex justify-between pl-10 pr-10">
        <header className="">{header}</header>
        <div className="flex">
          <span>Tech</span>
          <span>Diary</span>
        </div>
      </div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
