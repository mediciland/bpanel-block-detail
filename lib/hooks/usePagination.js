import React from 'react'

export default function usePagination ({
  page: _page = 0,
  items: items = [],
  itemsPerPage: _itemsPerPage = 5
}) {
  const [page, setPage] = React.useState(_page)
  const [itemsPerPage, setItemsPerPage] = React.useState(_itemsPerPage)

  const emptyItems = itemsPerPage - Math.min(itemsPerPage, items.length - page * itemsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeItemsPerPage = event => {
    setItemsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const activeItems = items.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)

  return {
    page,
    itemsPerPage,
    handleChangePage,
    handleChangeItemsPerPage,
    emptyItems,
    activeItems
  }
}
