import { Datagrid, List, ReferenceField, TextField, SimpleList } from 'react-admin';

const PostList = () => (
  <List>
    {/*<Datagrid>*/}
    {/*  <TextField source="id" />*/}
    {/*  <TextField source="title" />*/}
    {/*  <TextField source="body" />*/}
    {/*  <ReferenceField source="userId" reference="users" />*/}
    {/*</Datagrid>*/}
    <SimpleList primaryText={(record)=>record.title} secondaryText={(record)=>record.body}/>
  </List>
);

export default PostList;