import * as React from 'react';
import { MyContext } from '../context';
import { MySecondConsumer } from '../second-context';


export class Page extends React.PureComponent<any, any> {
  public static contextType = MyContext;
  public render() {
    const BB = (this as any).context;
    return (
      <MySecondConsumer>
        {
          (data: any) => <BB.Components.Text>{data.name}</BB.Components.Text>
        }
      </MySecondConsumer>
    )
  }
}