import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

class SimpleMainComponent extends React.Component<RouteComponentProps<any>> {
  render() {
    let name = this.getName();

    return <div>name is: {name}</div>;
  }

  getName(): string {
    let search = this.getUrlParams();
    return search.get("name") || "";
  }

  getUrlParams(): URLSearchParams {
    if (!this.props.location.search) return new URLSearchParams();
    return new URLSearchParams(this.props.location.search);
  }
}

export default withRouter(SimpleMainComponent);
