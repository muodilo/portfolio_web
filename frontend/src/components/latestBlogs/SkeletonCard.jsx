import React from 'react'

const SkeletonCard = () => {
  return (
  <div className="flex flex-col gap-4">
    <div className="skeleton lg:h-48 md:h-36 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
  )
}

export default SkeletonCard
