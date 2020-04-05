import React from "react";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function BookingsList() {
  const bookings = useSelector((state) => state.bookings);
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <h1>List of Bookings</h1>
        </Grid>
      </Grid>
      <Grid ontainer>
        <Grid item md={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Gas connection Name</TableCell>
                  <TableCell>Gas Connection Number</TableCell>
                  <TableCell>Mobile number</TableCell>
                  <TableCell>Gas connection Type</TableCell>
                </TableRow>
              </TableHead>
              {bookings.map((connection) => (
                <TableBody key={connection.id}>
                  <TableRow>
                    <TableCell>{connection.id}</TableCell>
                    <TableCell>{connection.gasConnectionNumber}</TableCell>
                    <TableCell>{connection.gasConnectionName}</TableCell>
                    <TableCell>{connection.mobileNumber}</TableCell>
                    <TableCell>{connection.connectionType}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default BookingsList;
