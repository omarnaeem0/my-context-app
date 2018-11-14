import * as React from 'react';
import { MyContext } from '../context';


export class Page extends React.PureComponent<any, any> {
  public static contextType = MyContext;
  public render() {
    const BB = (this as any).context;
    return (
      <BB.Components.Text>Hello</BB.Components.Text>
    )
  }
}