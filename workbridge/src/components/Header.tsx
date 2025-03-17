// src/components/Header.tsx
import React from 'react'

interface HeaderProps {
  onKeywordSelect: (keyword: string) => void
}

const recommendedKeywords = ['프론트엔드 개발', '백엔드 개발']

const Header: React.FC<HeaderProps> = ({ onKeywordSelect }) => {
  return (
    <header className="bg-white/30 backdrop-blur-md text-black py-4 px-6 flex flex-col md:flex-row justify-between items-center shadow-lg border border-white/30">
      <div className="text-2xl font-bold">WorkBridge</div>
      <div className="mt-2 md:mt-0">
        {recommendedKeywords.map((keyword) => (
          <button
            key={keyword}
            onClick={() => onKeywordSelect(keyword)}
            className="bg-white/40 hover:bg-white/50 text-black text-sm font-medium py-1 px-3 rounded mr-2 border border-white/20"
          >
            {keyword}
          </button>
        ))}
      </div>
    </header>
  )
}

export default Header
