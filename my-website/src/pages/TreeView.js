import React from "react";
import { Treebeard } from "react-treebeard";
import decorators from "react-treebeard/lib/components/decorators";
import defaultTheme from "react-treebeard/lib/themes/default";

const CustomHeader = ({ node, style, prefix }) => (
  <div style={style.base}>
    <div style={{ ...style.title, display: "flex" }}>
      {`<3 ${node.name.toUpperCase()}`}
    </div>
  </div>
);

class CutomContainer extends decorators.Container {
  render() {
    const { style, decorators, terminal, onClick, node } = this.props;
    return (
      <div
        onClick={onClick}
        ref={ref => (this.clickableRef = ref)}
        style={style.container[0]}
      >
        <decorators.Header node={node} style={style.header} />
        <span style={{ float: "right" }}>
          {!terminal ? this.renderToggle() : null}
        </span>
      </div>
    );
  }
}

class TreeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled) {
    if (this.state.cursor) {
      this.state.cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    this.setState({ cursor: node });
  }

  render() {
    decorators.Header = CustomHeader;
    decorators.Container = CutomContainer;

    defaultTheme.tree.base = {
      ...defaultTheme.tree.base,
      color: "white",
      backgroundColor: "#1D1D1D"
    };

    return (
      <Treebeard
        style={defaultTheme}
        data={data}
        decorators={decorators}
        onToggle={(node, toggled) => {
          if (this.state.cursor) {
            this.state.cursor.active = false;
          }
          node.active = true;
          if (node.children) {
            node.toggled = toggled;
          }
          this.setState({ cursor: node });
        }}
      />
    );
  }
}

const data = {
  name: "root",
  toggled: true,
  children: [
    {
      name: "parent",
      children: [{ name: "child1" }, { name: "child2" }]
    },
    {
      name: "loading parent",
      loading: true,
      children: []
    },
    {
      name: "parent",
      children: [
        {
          name: "nested parent",
          children: [{ name: "nested child 1" }, { name: "nested child 2" }]
        }
      ]
    }
  ]
};

export default TreeView;
