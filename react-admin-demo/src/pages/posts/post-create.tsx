import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const PostCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" label="Post Title" />
        <TextInput source="body" multiline rows={5} label="Post Body" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
