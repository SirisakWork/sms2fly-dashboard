import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = ({ rows = 5, columns = 5 }) => {
    return (
        <div className="skeleton-table">
            {/* Header Skeleton */}
            <div className="skeleton-header">
                {Array.from({ length: columns }).map((_, i) => (
                    <div key={`header-${i}`} className="skeleton-header-cell" />
                ))}
            </div>

            {/* Body Skeletons */}
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={`row-${rowIndex}`} className="skeleton-row">
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <div key={`cell-${rowIndex}-${colIndex}`} className="skeleton-cell" />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SkeletonLoader;
