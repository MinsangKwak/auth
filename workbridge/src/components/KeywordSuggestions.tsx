// src/components/KeywordSuggestions.tsx
import React from 'react'

interface KeywordSuggestionsProps {
  suggestions: string[]
  onSelectSuggestion: (keyword: string) => void
}

const KeywordSuggestions: React.FC<KeywordSuggestionsProps> = ({ suggestions, onSelectSuggestion }) => {
  return (
    <div className="flex justify-center mt-2 space-x-2">
      {suggestions.map((keyword) => (
        <button
          key={keyword}
          onClick={() => onSelectSuggestion(keyword)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded"
        >
          {keyword}
        </button>
      ))}
    </div>
  )
}

export default KeywordSuggestions
