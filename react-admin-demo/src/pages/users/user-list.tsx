import { Datagrid, List, TextField } from "react-admin";

const UserList = () =>{
  return (<List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="id" />
      <TextField source="id" />
      <TextField source="id" />
    </Datagrid>
  </List>);
}

export default UserList;