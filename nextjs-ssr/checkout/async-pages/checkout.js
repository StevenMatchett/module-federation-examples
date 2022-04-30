import React from 'react';
import Head from 'next/head';
import {useMatchettState} from 'matchett-test-context'
const Checkout = props => {
  const { func } = useMatchettState();
  func();
  return (
  <div>
    <Head>
      <title>checkout</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>checkout page</h1>
      <h3 className="title">This is a federated page owned by localhost:3000</h3>
      <span>
        {' '}
        Data from federated <pre>getInitalProps</pre>
      </span>
      <br />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)};
Checkout.getInitialProps = async () => {
  const swapi = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());
  console.log(swapi);
  console.log('swapi');
  return swapi;
};
export default Checkout;
