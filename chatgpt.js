
    const {Configuration , OpenAIApi} = require('openai')

const config = new Configuration({
    apiKey : "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"
})
const openai = new OpenAIApi(config)

const runPromt = async (promptMessage) => {
    const prompt = promptMessage
    const response = await openai.createCompletion({
        model : "text-davinci-003",
        prompt : prompt,
        max_tokens : 2048,
        temperature : 1
    })

    const answer = response.data.choices[0].text
    return answer
}

module.exports = runPromt
