const { ChatGPT } = require('chatgpt');

class Pancalyzer {
    constructor() {
        this.chatGPT = new ChatGPT();
    }

    async analyzeText(text) {
        try {
            const chatGPTResponse = await this.chatGPT.sendMessage(text);
            const analysis = this.analyzeComment(chatGPTResponse);
            return analysis;
        } catch (error) {
            console.error("Terjadi kesalahan saat menganalisis teks:", error);
            return null;
        }
    }

    analyzeComment(comment) {
        const analysis = {
            ketuhanan: this.checkKeyword(comment, ['kasar', 'merendahkan', 'agama']),
            kemanusiaan: this.checkKeyword(comment, ['hak asasi manusia', 'martabat']),
            persatuan: this.checkKeyword(comment, ['persatuan', 'bhineka', 'toleransi']),
            kerakyatan: this.checkKeyword(comment, ['demokrasi', 'musyawarah', 'perwakilan']),
            keadilan: this.checkKeyword(comment, ['keadilan sosial', 'pemerataan', 'kesejahteraan'])
        };

        analysis.pancasilaScore = this.calculatePancasilaScore(analysis);

        return analysis;
    }

    checkKeyword(comment, keywords) {
        const lowercaseComment = comment.toLowerCase();
        return keywords.some(word => lowercaseComment.includes(word));
    }

    calculatePancasilaScore(analysis) {
        const totalValues = Object.keys(analysis).length;
        const fulfilledValues = Object.values(analysis).filter(value => value).length;
        return (fulfilledValues / totalValues) * 100;
    }
}

module.exports = Pancalyzer;
