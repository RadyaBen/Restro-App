import { Component } from 'react';
import { connect } from 'react-redux';

import { menuLoaded, menuRequested, menuError, addedToCart } from '../../redux/actions';
import { WithRestoService } from '../hoc';
import { MenuListItem } from '../menu-list-item';
import { Spinner } from '../spinner';
import { Error } from '../error';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const { RestoService } = this.props; // We get this property from the Provider
        RestoService.getMenuItems()
            .then(responce => this.props.menuLoaded(responce))
            .catch(error => this.props.menuError(error));
    }

    render() {
        const { menuItems, loading, error, addedToCart } = this.props;
        if (error) {
            return <Error />;
        }
        if (loading) {
            return <Spinner />;
        }

        const items = menuItems.map(menuItem => {
            return (
                <MenuListItem
                    key={menuItem.id}
                    menuItem={menuItem}
                    onAddToCart={() => addedToCart(menuItem.id)} />
            );
        });

        return (
            <View items={items} />
        );

    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu, // MenuItems has our initialState
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
};

const View = ({ items }) => {

    return (
        <ul className='menu__list'>
            {items}
        </ul>
    );
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));