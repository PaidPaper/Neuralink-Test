import React, { useState } from 'react'
import axios from 'axios'

const ArticleGenerator = () => {
  const [topic, setTopic] = useState('')
  const [article, setArticle] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generateArticle = async (e) => {
    e.preventDefault()
    if (!topic.trim()) {
      setError('Please enter a topic')
      return
    }

    setLoading(true)
    setError('')
    setArticle('')

    try {
      const response = await axios.post('http://localhost:3000/api/generate-article', { topic })
      setArticle(response.data.article)
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to generate article')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <form onSubmit={generateArticle}>
          <div className="mb-4">
            <label htmlFor="topic" className="block text-gray-700 text-sm font-bold mb-2">
              Enter a topic:
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Artificial Intelligence, Climate Change, etc."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Article'}
          </button>
        </form>
      </div>

      {loading && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="ml-2 text-gray-600">Generating article...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {article && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Generated Article</h2>
          <div className="prose max-w-none text-gray-700 whitespace-pre-line">
            {article}
          </div>
        </div>
      )}
    </div>
  )
}

export default ArticleGenerator 