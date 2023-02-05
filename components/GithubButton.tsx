import { GithubLink } from '@/utils/types'
import React from 'react'
import Github from './Github'

export default function GithubButton() {
  return (
    <a
      className="github-btn"
      href={GithubLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github />
      <p>Star on GitHub</p>
    </a>
  )
}
