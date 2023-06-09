import Head from 'next/head';
import { useMachine } from '@xstate/react';
import { counterMachine } from '../utils/counterMachine';

export default function Home() {
  const [state, send] = useMachine(counterMachine);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{state.context.count}</h1>
        <button onClick={() => send('INCREMENT')}>increment</button>
        <button onClick={() => send('DECREMENT')}>decrement</button>
      </main>
    </>
  );
}
