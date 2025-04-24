const OpenAI = require('openai')
const Anthropic = require('@anthropic-ai/sdk')
const cohere = require('cohere-ai')

const providers = {
  openai: {
    name: 'OpenAI',
    client: new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    }),
    models: ['gpt-3.5-turbo', 'gpt-4'],
    generate: async (client, model, prompt) => {
      const completion = await client.chat.completions.create({
        model,
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that generates short, informative articles."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
      return completion.choices[0].message.content
    }
  },
  anthropic: {
    name: 'Anthropic',
    client: new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    }),
    models: ['claude-2', 'claude-instant-1'],
    generate: async (client, model, prompt) => {
      const completion = await client.messages.create({
        model,
        max_tokens: 500,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
      return completion.content[0].text
    }
  },
  cohere: {
    name: 'Cohere',
    client: cohere,
    models: ['command', 'command-light'],
    generate: async (client, model, prompt) => {
      client.init(process.env.COHERE_API_KEY)
      const response = await client.generate({
        model,
        prompt,
        max_tokens: 500,
        temperature: 0.7
      })
      return response.body.generations[0].text
    }
  }
}

module.exports = providers 
