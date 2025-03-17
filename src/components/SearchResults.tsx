// src/components/SearchResults.tsx
import React from 'react'

interface LinkItem {
  title: string
  url: string
}

interface SiteResult {
  count: number
  links: LinkItem[]
}

interface SearchResultsProps {
  totalCount: number
  resultsBySite: { [site: string]: SiteResult }
}

const SearchResults: React.FC<SearchResultsProps> = ({ totalCount, resultsBySite }) => {
  return (
    <div className="mt-6 p-4">
      <h2 className="text-xl font-semibold mb-2">검색 결과 {totalCount}건</h2>
      <div className="space-y-4">
        {Object.entries(resultsBySite).map(([site, data]) => (
          <div key={site} className="border p-3 rounded">
            <h3 className="text-lg font-bold">
              {site} - {data.count}건
            </h3>
            <ul className="list-disc ml-5 mt-2">
              {data.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults
