
import React from 'react';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  petType?: 'all' | 'dogs' | 'cats';
  onPetTypeChange?: (type: 'all' | 'dogs' | 'cats') => void;
  sortBy?: string;
  onSortChange?: (sort: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  activeFilter, 
  onFilterChange,
  petType = 'all',
  onPetTypeChange,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
      <div className="flex flex-wrap gap-2">
        {onPetTypeChange && (
          <>
            <button
              onClick={() => onPetTypeChange('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                petType === 'all' 
                  ? 'bg-pawmi-orange text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Pets
            </button>
            <button
              onClick={() => onPetTypeChange('dogs')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                petType === 'dogs' 
                  ? 'bg-pawmi-orange text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Dogs
            </button>
            <button
              onClick={() => onPetTypeChange('cats')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                petType === 'cats' 
                  ? 'bg-pawmi-orange text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Cats
            </button>
          </>
        )}
        
        {!onPetTypeChange && (
          <>
            <button
              onClick={() => onFilterChange('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-pawmi-orange text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => onFilterChange('available')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'available' 
                  ? 'bg-pawmi-orange text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Available
            </button>
            <button
              onClick={() => onFilterChange('pending')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'pending' 
                  ? 'bg-pawmi-orange text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => onFilterChange('adopted')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'adopted' 
                  ? 'bg-pawmi-orange text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Adopted
            </button>
          </>
        )}
      </div>
      
      {onSortChange && (
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pawmi-orange/50"
          >
            <option value="recent">Most Recent</option>
            <option value="oldest">Oldest</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
