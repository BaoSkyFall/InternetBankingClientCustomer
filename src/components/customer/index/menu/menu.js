import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

import { MENUITEM } from '../../../../configs/client';
import './styles.css';

class MenuLeft extends React.Component {
    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.props.updateCollapse(!this.state.collapsed);
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                className='menu-style'
            >
                <Button type="primary" onClick={this.toggleCollapsed} className='button-collapse'>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu.Item key="1">
                    <Link to={MENUITEM.PAYMENT_ACCOUNTS} >
                        <Icon type="dashboard" />
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={MENUITEM.INTERNAL_TRANSFER} >
                        <Icon type="pay-circle" />
                        <span>Internal Tranfer</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to={MENUITEM.SETUP_RECIPIENT} >
                        <Icon type="inbox" />
                        <span>Setup Recipient</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to={MENUITEM.TRANSACTION_HISTORY} >
                        <Icon type="table" />
                        <span>Transaction History</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to={MENUITEM.CLOSE_WALLET} >
                        <Icon type="close-square" />
                        <span>Close Wallet</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default MenuLeft;