import { TableCell, Table, TableContainer, TableHead, TableRow, TableBody, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

function List({ items, onDelete }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align='center'>
                No items added yet
              </TableCell>
            </TableRow>
          ) : (
            items.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>
                  <IconButton
                    aria-label='delete'
                    onClick={() => onDelete(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
