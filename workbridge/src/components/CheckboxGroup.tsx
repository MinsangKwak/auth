// src/components/CheckboxGroup.tsx
import React from 'react'

interface CheckboxGroupProps {
  selectedSites: string[]
  setSelectedSites: (sites: string[]) => void
}

const sites = ['잡코리아', '사람인', '잡플래닛']

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ selectedSites, setSelectedSites }) => {
  const toggleSite = (site: string) => {
    if (selectedSites.includes(site)) {
      setSelectedSites(selectedSites.filter((s) => s !== site))
    } else {
      setSelectedSites([...selectedSites, site])
    }
  }

  return (
    <div className="flex items-center justify-center mt-4 space-x-4">
      {sites.map((site) => (
        <label key={site} className="flex items-center space-x-1">
          <input
            type="checkbox"
            checked={selectedSites.includes(site)}
            onChange={() => toggleSite(site)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>{site}</span>
        </label>
      ))}
    </div>
  )
}

export default CheckboxGroup
