// src/hooks/useSearch.ts
import { useState } from 'react'

interface LinkItem {
  title: string
  url: string
}

interface SiteResult {
  count: number
  links: LinkItem[]
}

interface SearchResultsData {
  [site: string]: SiteResult
}

export const useSearch = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<SearchResultsData>({})

  const search = async (query: string, sites: string[]) => {
    setLoading(true)
    setError(null)
    try {
      // 실제 API 호출 대신 모의 데이터를 사용합니다.
      const simulatedResults: SearchResultsData = {}
      sites.forEach((site) => {
        simulatedResults[site] = {
          count: Math.floor(Math.random() * 100),
          links: [
            { title: `${site} 검색 결과 1 for "${query}"`, url: 'https://example.com/1' },
            { title: `${site} 검색 결과 2 for "${query}"`, url: 'https://example.com/2' }
          ]
        }
      })
      // 모의 API 딜레이 처리 (예: 1초)
      setTimeout(() => {
        setResults(simulatedResults)
        setLoading(false)
      }, 1000)
    } catch (err) {
      setError('검색 중 오류가 발생했습니다.')
      setLoading(false)
    }
  }

  return { loading, error, results, search }
}
