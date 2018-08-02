import React from 'react'
import {Pagination} from 'semantic-ui-react'

const Paginator = ({handlePaginationChange, pages}) => {
  return (
    <Pagination
      defaultActivePage={1}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={pages || 3}
      onPageChange={handlePaginationChange}
    />
  )
}

export default Paginator
