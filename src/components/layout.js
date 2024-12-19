import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // if (isRootPath) {
  //   header = (
  //     <Link className="text-5xl" to="/">
  //       {title}
  //     </Link>
  //   )
  // } else {
  header = (
    <header className="bg-white border-b border-gray-300 shadow-sm">
      <nav className="flex justify-between mx-auto max-w-4xl py-6 px-8 sm:px-1">
        <div className="flex sm:flex-1">
          <Link className="sm:text-sm xl:text-4xl" to="/">
            {title}
          </Link>
        </div>
        <div className="flex w-32 justify-evenly">
          <span className="sm:text-xs xl:text-base">Tech</span>
          <span className="sm:text-xs xl:text-base">Diary</span>
        </div>
      </nav>
    </header>
  )
  // }

  return (
    <>
      {header}
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
