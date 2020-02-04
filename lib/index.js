// Entry point for your plugin
// This should expose your plugin's modules
/* START IMPORTS */
import BlockDetail from './components/BlockDetail';
import { PLUGIN_NAMESPACE, ADD_BLOCK, ADD_BLOCK_TX } from './constants';
import { getBlock, getTX } from './actions'
import reducers from './reducers';
/* END IMPORTS */

/* START EXPORTS */

export const metadata = {
  name: 'bpanel-block-detail',
  author: 'Sky Young <skyoung@mediciland.com>',
  description: '',
  version: require('../package.json').version,
  route: 'block/:hash',
  pathName: 'block',
  displayName: 'Blocks',
  sidebar: false,
  // icon: 'home',
  order: 3
};

// If you're adding a whole new view/Panel
// you'll want this to get props from the state, through
// Panel and to your specific route

// mapComponentDispatch will use react-redux's connect to
// retrieve props from the state, but we need a way
// for the Panel Container to pass it down to the plugin's Route view
// props getters like this are used in the app to pass new props
// added by plugins down to children components (such as your plugin)
// The Route props getter is special since different routes will want diff props
// so we pass the getter as the value of an object prop, w/ the key
// corresponding to the route that needs the props
export const getRouteProps = {
  [metadata.name]: (parentProps, props) =>
    Object.assign(props, {
      match: parentProps.match,
      location: parentProps.location,
      history: parentProps.history,
      getBlock: parentProps.getBlock,
      getTX: parentProps.getTX,
      isLoading: parentProps.isLoading,
      block: parentProps.block,
      transactions: parentProps.transactions,
      error: parentProps.error
    })
};

// This connects your plugin's component to the state's dispatcher
// Make sure to pass in an actual action to the dispatcher
export const mapComponentDispatch = {
  Panel: (dispatch, map) =>
    Object.assign(map, {
      getBlock: (hash, callback) => dispatch(getBlock(hash, callback)),
      getTX: (txid, callback) => dispatch(getTX(txid, callback))
    })
};


// Tells the decorator what our plugin needs from the state
// This is available for container components that use an
// extended version of react-redux's connect to connect
// a container to the state and retrieve props
// make sure to replace the corresponding state mapping
// (e.g. `state.chain.height`) and prop names
export const mapComponentState = {
  Panel: (state, map) =>
    Object.assign(map, {
      isLoading: state.node.loading,
      block: state.plugins[PLUGIN_NAMESPACE].block,
      transactions: state.plugins[PLUGIN_NAMESPACE].transactions || {},
      error: state.plugins[PLUGIN_NAMESPACE].error
    })
};

export const pluginReducers = reducers;

// a decorator for the Panel container component in our app
// here we're extending the Panel's children by adding
// our plugin's component (`MyComponent` below)
// You'll want to make sure to import an actual component
// This is what you need if you're making a new view/route
export const decoratePanel = (Panel, { React, PropTypes }) => {
  return class extends React.PureComponent {
    static displayName() {
      return 'Block Detail';
    }

    static get propTypes() {
      return {
        customChildren: PropTypes.array
      };
    }

    render() {
      const { customChildren = [] } = this.props;
      const routeData = {
        metadata,
        Component: BlockDetail
      };
      return (
        <Panel
          {...this.props}
          customChildren={customChildren.concat(routeData)}
        />
      );
    }
  };
};

/* END EXPORTS */
