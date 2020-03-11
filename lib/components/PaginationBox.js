import React, { useState, useEffect, useMemo } from 'react'
import clsx from 'clsx'

const PaginationBox = ({
  itemsLength = 0,
  page = 0,
  itemsPerPage = 5,
  handleChangePage
}) => {

  const groupSize = 5

  const maxPages = useMemo( () => {
    return Math.ceil(itemsLength / itemsPerPage)
  }, [itemsLength, itemsPerPage])

  const pages = useMemo( () => {
    let arr = []
    for (let i = 0; i < maxPages; i++) {
      arr.push(i)
    }
    return arr
  }, [maxPages])

  const [activeGroup, setActiveGroup] = useState(pages.slice(0, groupSize))

  useEffect(() => {
    setActiveGroup(pages.slice(0, groupSize))
  }, [pages])

  const nextGroup = activeGroup[activeGroup.length - 1] < maxPages - 1
  const prevGroup = activeGroup[0] !== 0

  function handleNextGroup () {
    const newActivePage = activeGroup[0] + groupSize
    const newActiveGroup = pages.slice(newActivePage, newActivePage + groupSize)
    setActiveGroup(newActiveGroup)
    handleChangePage(null, newActivePage)
  }

  function handlePrevGroup () {
    const newActivePage = activeGroup[0] - groupSize
    const newActiveGroup = pages.slice(newActivePage, newActivePage + groupSize)
    setActiveGroup(newActiveGroup)
    handleChangePage(null, newActivePage)
  }

  function handlePageClick (page) {
    return () => {
      handleChangePage(null, page)
    }
  }

  return <div className={'pagination-box'}>
    <div className={'group-fn-button'}>
      {prevGroup && <button
        style={{ outline: 'none' }}
        onClick={handlePrevGroup}
        className={'fn-button flo-data-badge'}>Prev</button>}
    </div>
    {activeGroup.map( pageNum => {
      return <button
        key={pageNum}
        className={clsx(
        'pagination-box-item',
        'flo-data-badge',
        page === pageNum && 'active-page-box'
      )}
       onClick={handlePageClick(pageNum)}
      >
        {pageNum + 1}
      </button>
    })}
    <div className={'group-fn-button'}>
      {nextGroup && <button
        style={{ outline: 'none' }}
        onClick={handleNextGroup}
        className={'fn-button flo-data-badge'}>Next</button>}
    </div>
  </div>
}

PaginationBox.propTypes = {}

export default PaginationBox
