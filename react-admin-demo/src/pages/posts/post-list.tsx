import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  FunctionField,
  EditButton,
  TextInput,
  ReferenceInput,
} from "react-admin";

// const PostPanel = () =>{
//   const record = useRecordContext();
//   return <div>{record?.body}</div>;
// }

const PostList = () => {

  const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User Search" reference="users" />,
  ];

  return(
    <List filters={postFilters}>
      <Datagrid
        // expand={<PostPanel />}
        // sx={{'.RaDatagrid-headerCell':{padding:'16px'}}}
      >
        <TextField source="id" />
        <TextField source="title" label="Post Title" />
        <FunctionField
          label="Excerpt"
          render={(record) => `${record.body.substring(0, 50)}...`}
        />
        <ReferenceField source="userId" reference="users" />
        <EditButton />
      </Datagrid>
      {/*<SimpleList primaryText={(record)=>record.title} secondaryText={(record)=>record.body}/>*/}
    </List>
  );
};

export default PostList;
