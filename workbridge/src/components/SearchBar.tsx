// src/components/SearchBar.tsx
import React from 'react'

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  onSearch: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="검색어를 입력하세요..."
        className="w-80 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white/50 backdrop-blur-sm"
      />
      <button
        onClick={onSearch}
        className="bg-white/40 hover:bg-white/50 text-black rounded-r px-4 py-2 border border-white/20 shadow"
      >
        검색
      </button>
    </div>
  )
}

export default SearchBar
