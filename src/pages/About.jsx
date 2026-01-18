import React from 'react'

function About() {
  
    return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden border border-slate-200">
        
      
        <div className="bg-black p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">About This Calculator</h1>
          <p className="text-orange-500 font-medium">Built with React Context API & Tailwind CSS</p>
        </div>

     
        <div className="p-8 space-y-8">
          
       
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center">
              <span className="bg-orange-500 w-2 h-8 rounded-full mr-3"></span>
              State Management: Context API
            </h2>
            <p className="text-slate-600 leading-relaxed">
              This application uses the <span className="font-mono bg-slate-100 px-1 rounded text-orange-600">Context API</span> to handle "Global State." 
              Instead of passing data manually through every component, we use a <span className="font-semibold">ValueProvider</span> to wrap the entire app. 
              This allows any page (like Home or About) to see the current total immediately.
            </p>
          </section>

         
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-3 flex items-center">
              <span className="bg-zinc-800 w-2 h-8 rounded-full mr-3"></span>
              The "Brain": useReducer
            </h2>
            <p className="text-slate-600 leading-relaxed">
              For complex math logic like <span className="italic">Add, Subtract, Multiply, and Divide</span>, we use the <span className="font-mono bg-slate-100 px-1 rounded text-blue-600">useReducer</span> hook. 
              It acts as a central control center that processes different "actions" (like clicking + or -) and calculates the new total predictably.
            </p>
          </section>

     
          <section className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-300">
            <h3 className="font-bold text-slate-700 mb-2 underline decoration-orange-500 decoration-2">Memory: LocalStorage</h3>
            <p className="text-sm text-slate-500 italic">
              "Never lose your data." We integrated <span className="font-semibold">LocalStorage</span> inside a <span className="font-mono text-xs">useEffect</span> hook. 
              If you refresh your browser or close the tab, the calculator remembers your last total.
            </p>
          </section>

    
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Styling</td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-mono text-blue-500">Tailwind CSS</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Global State</td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-mono text-blue-500">React Context</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Complex Logic</td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-mono text-blue-500">useReducer</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Persistence</td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-mono text-blue-500">LocalStorage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      
        <div className="bg-slate-50 p-6 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-xs">Designed with ❤️ for React Learners</p>
        </div>
      </div>
    </div>
  );
};

export default About
