import { Datagrid, List, ReferenceField, TextField, SimpleList, FunctionField } from 'react-admin';

const PostList = () => (
  <List>
    <Datagrid sx={{'.RaDatagrid-headerCell':{padding:'16px'}}}>
      <TextField source="id" />
      <TextField source="title" label="Post Title" />
      <FunctionField label="Excerpt" render={(record) => `${record.body.substring(0,50)}...`}/>
      <ReferenceField source="userId" reference="users" />
    </Datagrid>
    {/*<SimpleList primaryText={(record)=>record.title} secondaryText={(record)=>record.body}/>*/}
  </List>
);

export default PostList;