const EM = new EventEmitter();
const REGION_PREFIX = 'iz-react-layout-region-';

IZReactLayout = {
    /**
     * Method to render content to region defined
     * @param  {string} region
     * @param  {string} type - React component name as string
     * @param  {object} props
     * @return {void}
     */
    render: function(region, type, props) {
        if( !region || !type ) return;
        if(!props ) props = {};
        EM.emit( REGION_PREFIX + region, type, props );
    },

    /**
     * Layout region component
     */
    Region: React.createClass({
	    propsTypes: {
	        name: React.PropTypes.string
	    },
	    getInitialState: function() {
	        return {
	            type: null,
	            props: null,
	        }
	    },
	    componentDidMount: function() {
	        var self = this;
	        EM.on('iz-react-layout-region-' + this.props.name, function(type, props) {
	            self.setState({type: type, props: props});
	        });
	    },
	    render: function() {
	    	if( this.state.type === null )
	    		return null;
	    	else
	        	return React.createElement(eval(this.state.type), this.state.props);
	    }
	})
};