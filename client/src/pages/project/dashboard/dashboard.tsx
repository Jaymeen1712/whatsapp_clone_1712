import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

import Sidebar from "./components/sidebar";
import Message from "./components/message";
import NewChatSidebar from "./components/new-chat-sidebar";
import { useAppStore } from "../../../store";
import EmptyMessage from "./components/empty-message";

const Dashboard = () => {
  const { newChatSidebar, emptyMessageContainer } = useAppStore();
  return (
    <Layout className="dashboard-layer">
      <Sider
        width={450}
        style={{
          backgroundColor: "#111B21",
        }}
        className="sider"
      >
        {newChatSidebar ? <NewChatSidebar /> : <Sidebar />}
      </Sider>
      <Content className="content-container">
        {emptyMessageContainer ? <EmptyMessage /> : <Message />}
      </Content>
    </Layout>
  );
};

export default Dashboard;
