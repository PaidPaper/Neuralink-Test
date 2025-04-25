import React, { useState } from 'react'
import ArticleGenerator from './components/ArticleGenerator'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">NeuralInk</h1>
          <ArticleGenerator />
        </div>
      </div>
    </div>
  )
}

export default App 