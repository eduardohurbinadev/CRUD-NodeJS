import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import DeleteButton from './Buttons/DeleteButton';
import UpdateButton from './Buttons/UpdateButton';
class UserTable extends Component {
  render() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Age</th>
              <th>City</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Eduardo</td>
              <td>urbinaa@gmail.com</td>
              <td>5580349725</td>
              <td>25</td>
              <td>Mexico City</td>
              <td>M</td>
              <td>
                <UpdateButton/>
                <DeleteButton/>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserTable;
