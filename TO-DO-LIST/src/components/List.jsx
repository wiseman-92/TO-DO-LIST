import { TableCell,Table, TableContainer, TableHead, TableRow } from "@mui/material";

function List(){
    return (
        <>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Due Date</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
        </>
    )
}

export default List;