import React from 'react';
import styled from 'styled-components';
import { theme } from 'colors';
import { NavTabs, NavTab, NavTabsContent, NavTabContent } from 'components/ui';

import { RoomManageGeneral } from './general';
import { RoomChatManager } from './chat';
import { RoomBansContainer } from 'containers/room/manage/bans';

const Box = styled.div`
	
`;

const Nav = styled.div`
  
`;

const Content = styled.div`
  padding: 20px 0;
`;

const Tabs = styled(NavTabs)`
  display: flex;
`;

const Tab = styled(NavTab)`
  padding: 0 14px;
  height: 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  border-radius: 4px;
  border-left: 2px solid transparent;
  background: ${({ isActive }) => isActive ? theme.accent1 : theme.dark2};
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: 'general'
    };
  }

  setActiveTab(tabName) {
    this.setState({ tabActive: tabName });
  }

  render() {
    const { tabActive } = this.state;

  	return (
  		<Box>
        <Nav>
          <Tabs
            active={tabActive}
            onSelect={tabName => this.setActiveTab(tabName)}>
            <Tab
              name="general"
              title="General"
              isActive={this.state.tabActive == "general"}/>
            <Tab
              name="chat"
              title="Chat"
              isActive={this.state.tabActive == "chat"}/>
            <Tab
              name="bans"
              title="Bans"
              isActive={this.state.tabActive == "bans"}/>
          </Tabs>
        </Nav>
        <Content>
          <NavTabsContent active={tabActive}>
            <NavTabContent name="general">
              <RoomManageGeneral />
            </NavTabContent>
            <NavTabContent name="chat">
              <RoomChatManager />
            </NavTabContent>
            <NavTabContent name="bans">
              <RoomBansContainer />
            </NavTabContent>
          </NavTabsContent>
        </Content>
  		</Box>
  	);
  }
}