// src/pages/Home.tsx
import React, { useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CheckboxGroup from '../components/CheckboxGroup'
import KeywordSuggestions from '../components/KeywordSuggestions'
import SearchResults from '../components/SearchResults'
import { useSearch } from '../hooks/useSearch'

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSites, setSelectedSites] = useState([
    '잡코리아',
    '사람인',
    '잡플래닛',
  ])
  const [suggestions] = useState([
    '프론트엔드 개발',
    '백엔드 개발',
    'AI 딥러닝',
  ])
  const { loading, error, results, search } = useSearch()

  const handleSearch = () => {
    if (searchQuery.trim() === '') return
    search(searchQuery, selectedSites)
  }

  const handleKeywordSelect = (keyword: string) => {
    setSearchQuery(keyword)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onKeywordSelect={handleKeywordSelect} />
      <div className="container mx-auto px-4">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />
        <KeywordSuggestions
          suggestions={suggestions}
          onSelectSuggestion={handleKeywordSelect}
        />
        <CheckboxGroup
          selectedSites={selectedSites}
          setSelectedSites={setSelectedSites}
        />
        {loading && <p className="text-center mt-4">검색 중...</p>}
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}
        {!loading && !error && Object.keys(results).length > 0 && (
          <SearchResults
            totalCount={Object.values(results).reduce(
              (acc, cur) => acc + cur.count,
              0
            )}
            resultsBySite={results}
          />
        )}
      </div>
    </div>
  )
}

export default Home
