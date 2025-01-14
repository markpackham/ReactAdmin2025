import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list.tsx";
import UserList from "./pages/users/user-list.tsx";
import PostShow from "./pages/posts/post-show.tsx";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} show={PostShow} />
    <Resource name="users" list={UserList} />
  </Admin>
);
