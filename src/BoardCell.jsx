import React from 'react'

const BoardCell = props => (
  <code style={{ margin: '5px', padding: '5px', backgroundColor: 'wheat' }}>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </code>
)

export default BoardCell
