import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center tracking-tight">
        V.I.B.E. — Vectorized Intuition-Based Engineering
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl text-center text-gray-300">
        A new paradigm for building with vibes, not requirements. Ship joyfully, 
        prototype with purpose, and let the syntax emerge from the feeling.
      </p>
      <a 
        href="https://github.com/M0nkeyFl0wer/vibe-site" 
        className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        target="_blank" 
        rel="noopener noreferrer"
      >
        View the Manifesto
      </a>
      <p className="mt-12 text-sm text-gray-500">Now accepting pull requests... intuitively.</p>
    </div>
  )
}

export default Appimport { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white p-8 flex flex-col items-center justify-center space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">V.I.B.E.</h1>
        <p className="text-xl max-w-xl mx-auto">
          Vectorized Intuition-Based Engineering. The next evolution in software development.
          Not driven by logic. Driven by feel.
        </p>
        <Button className="text-lg px-6 py-3">Start Vibing</Button>
      </section>

      <section className="max-w-4xl space-y-12">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">What is V.I.B.E.?</h2>
            <p>
              V.I.B.E. is a decentralized, intuition-aligned development paradigm engineered for
              flow-state amplification in unstable runtime conditions. It transcends logic-bound
              methodologies through cognitive stream processing, ambient alignment, and
              quantum-agnostic deployment.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Flow over flowcharts</li>
              <li>Gut-feel deployments</li>
              <li>Debugging via ambient awareness</li>
              <li>Documentation optional, vibes essential</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm opacity-60 mt-16">
        Powered by chaos. Stabilized by feel.
      </footer>
    </main>
  );
}

export default App;import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
