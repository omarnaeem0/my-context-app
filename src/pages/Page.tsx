import * as React from 'react';
import { MyConsumer } from '../context';


export const Page = () => (
  <MyConsumer>
    {(BB: any) => {
      // tslint:disable-next-line
      console.log(BB.Components)
      return(
        <BB.Components.Text>Hello</BB.Components.Text>
      )
    }}
  </MyConsumer>
)