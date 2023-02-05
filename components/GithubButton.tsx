import { GithubLink } from '@/utils/types'
import React from 'react'
import Github from './Github'

export default function GithubButton() {
  return (
    <a
          className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5"
          href={GithubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          <p>Star on GitHub</p>
        </a>
  )
}
