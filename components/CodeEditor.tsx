
import React, { useState, useEffect, useRef } from 'react';

interface CodeEditorProps {
  initialCode?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode = "print('Hello, Python World!')" }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const pyodideRef = useRef<any>(null);

  useEffect(() => {
    const initPyodide = async () => {
      try {
        // @ts-ignore
        const pyodide = await window.loadPyodide();
        pyodideRef.current = pyodide;
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to load Pyodide:", err);
        setOutput("Error: Python engine failed to load. Please refresh.");
      }
    };
    initPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodideRef.current) return;
    setIsRunning(true);
    setOutput("Running...");
    
    try {
      // Redirect python stdout to a string
      pyodideRef.current.runPython(`
import sys
import io
sys.stdout = io.StringIO()
      `);
      
      await pyodideRef.current.runPythonAsync(code);
      
      const stdout = pyodideRef.current.runPython("sys.stdout.getvalue()");
      setOutput(stdout || "(No output)");
    } catch (err: any) {
      setOutput(`Error: ${err.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700">
      <div className="bg-slate-700 px-4 py-2 flex justify-between items-center">
        <span className="text-slate-300 text-xs font-mono uppercase tracking-widest">Python 3.x Editor</span>
        <button
          onClick={runCode}
          disabled={isLoading || isRunning}
          className={`px-4 py-1 rounded text-sm font-semibold transition-all ${
            isLoading || isRunning
              ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-400 text-white'
          }`}
        >
          {isLoading ? 'Loading...' : isRunning ? 'Running...' : 'Run Code ▶'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 h-96">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="w-full h-full bg-slate-900 text-green-400 p-4 font-mono text-sm resize-none outline-none focus:ring-1 focus:ring-blue-500 border-r border-slate-700"
          placeholder="# Type your Python code here..."
        />
        <div className="w-full h-full bg-slate-950 p-4 font-mono text-sm overflow-auto text-slate-300">
          <div className="text-slate-500 mb-2 border-b border-slate-800 pb-1">Output:</div>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
