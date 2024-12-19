/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaInstagram, FaGithub } from "react-icons/fa"
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            instagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex gap-11">
      <div className="grid w-24 justify-center">
        <div className="flex justify-center">
          <StaticImage
            className="rounded-full"
            // className="bio-avatar"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.jpg"
            width={60}
            height={60}
            quality={95}
            alt="Profile picture"
          />
        </div>
        <div className="flex h-7 gap-4 mt-3 items-center">
          <div className="w-6 h-6">
            <a
              href={`https://instagram.com/${social?.instagram}`}
              target="_blank"
            >
              <FaInstagram className="w-full h-full" />
            </a>
          </div>
          <div className="w-6 h-6">
            <a href={`https://github.com/${social?.github}`} target="_blank">
              <FaGithub className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
      <div>
        {author?.name && (
          <>
            <p>
              Written by <strong>{author.name}</strong>
            </p>
            <div>
              <p>{author?.summary || null}</p>
            </div>
            {/* <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a> */}
          </>
        )}
      </div>
    </div>
  )
}

export default Bio
