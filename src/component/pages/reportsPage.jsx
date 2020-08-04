import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/core/Avatar";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [numOfRows, setNumOfRows] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getData = async (page, rowsPerPage) => {
    var Url = "https://localhost:5001/api/Reports?page="
      .concat(page)
      .concat("&size=" + rowsPerPage);
    return await axios.get(Url);
  };

  const memorizeData = React.useCallback(() => {
    getNumberOfRows().then((resp) => setNumOfRows(resp.data));
    getData(page, rowsPerPage).then((resp) => setRows(resp.data));
  }, [page, rowsPerPage]);

  const getNumberOfRows = async () => {
    return await axios.get(
      "https://localhost:5001/api/Reports/numberOfReports"
    );
  };

  React.useEffect(() => {
    memorizeData();
  }, [memorizeData]);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, numOfRows - page * rowsPerPage);

  const createAvatars = function (images) {
    const src = "http://127.0.0.1:8887/";
    if (images === []) {
      return "no picture";
    }
    return (
      <AvatarGroup max={4}>
        {images.map((image) => {
          return (
            <Avatar
              alt={image.imgaeName}
              src={src.concat(image.imageName)}
            ></Avatar>
          );
        })}
      </AvatarGroup>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Longitude</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Comment</TableCell>
            <TableCell align="right">Images</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              // Implement modal, with the details of the report, images and a map with a marker
              onClick={() => alert("Leendő részletes ablak")}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.comment}</TableCell>
              <TableCell align="right">{createAvatars(row.images)}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={numOfRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
