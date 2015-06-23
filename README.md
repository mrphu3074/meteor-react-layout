#`izzilab:react-layout`

## Introduction
- Dynamic subview layout for React.
- Define and manage regions.
- Support and tested on  `meteorhacks:flow-router` , `ion:router`

## Requirements
This package requires the following packages:

- `reactjs:react`
- `raix:eventemitter` to communcate between regions

## Installation
###`meteor add izzilab:react-layout`

## Documentation
There are 2 main parts: 

- `IZReactLayout.Region`: Is react component to define layout region.

 + Example: 
  ```
<IZReactLayout.Region name="content" />
<IZReactLayout.Region name="sidebar" />
    ```


- `IZReactLayout.render(region, componentName, props)`: is helper to render react component to region.

 + Example:
    ```
 IZReactLayout.render("content", 'About',  {name: "from ABOUT"})
    ```


## Usage
```
renderRoot = function() {
    React.render(<App/>, document.body)
}

FlowRouter.triggers.enter([renderRoot]);

FlowRouter.route('/', {
    action: function() {
        IZReactLayout.render("content", 'HomePage')
    }
});
FlowRouter.route('/about', {
    action: function() {
        IZReactLayout.render("content", 'About', {name: "Phu"})
    }
});

App = React.createClass({
    getInitialState: function() {
        return {

        }
    },

    componentDidMount: function() {
        console.log("App mounted");
    },

    render: function() {
        return (
            <div>
                <header>
                    <h1>Header</h1>
                </header>

                <IZReactLayout.Region name="sidebar" />
                <IZReactLayout.Region name="content" />

            </div>
        );
    }
});

HomePage = React.createClass({
    componentDidMount: function() {

    },
    render: function() {
        return (
            <div>
                <h1>Home page</h1>
                <a href="/about">About</a>
            </div>
        );
    }
});

About = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            name: "Peter"
        }
    },
    componentDidMount: function() {
 
    },
    render: function() {
        return (
            <div>
                <h1>This is {this.props.name}</h1>
                <a href="/">Home</a>
            </div>
        );
    }
});
```


## Contributing
Just fork and do it.