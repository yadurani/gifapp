import React from 'react'

const LoadingSkeleton = () => {
  return Array(12).fill(10).map((_, i) => (
    <div className="skeleton__wrapper" key={i}></div>
  ))
}

export default LoadingSkeleton
