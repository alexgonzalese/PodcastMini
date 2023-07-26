import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../../App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";


const columns = [
  {
    id: "title",
    label: "Title",
    minWidth: 170,
    format: (episode) => getEpisodeName(episode),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 50,
    format: (dateString) => formatDate(dateString),
  },
  {
    id: "duration",
    label: "Duration",
    minWidth: 50,
    align: "right",
    format: (milliseconds) => formatMillisecondsToMinutes(milliseconds),
  },
];

function getEpisodeName(episode) {  
  const episodeParts = episode.split(" ");
  const episodeName = episodeParts[episodeParts.length - 1];
  return episodeName;
}
function formatDate(dateString) {
  const date = new Date(dateString);
  return format(date, "dd/MM/yyyy");
}
function formatMillisecondsToMinutes(milliseconds) {
  const minutes = milliseconds / 60000;
  return `${minutes.toFixed(2)} min`; 
}
function createData(id, title, date, duration) {
  return { id, title, date, duration };
}

export default function GridComponents({ episodes }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = episodes.map((episode) =>
    createData(
      episode.trackId,
      episode.trackName,
      episode.releaseDate,
      episode.trackTimeMillis
    )
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="detailspage">
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <div className="AppBarStyle">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    const isIdColumn = column.id === "id";

                    return (
                      <TableCell
                        key={column.id}
                        style={{ display: isIdColumn ? "none" : "table-cell" }}
                      >
                        {column.format && typeof column.format === "function"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
