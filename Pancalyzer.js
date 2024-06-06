const { ChatGPT } = require('chatgpt');

class Pancalyzer {
    constructor() {
        this.chatGPT = new ChatGPT();
    }

    async analyzeText(text) {
        try {
            const chatGPTResponse = await this.chatGPT.sendMessage(text);
            const analysis = this.analyzeComment(chatGPTResponse);
            analysis.suggestions = await this.generateSuggestions(text);
            analysis.emojiAnalysis = this.analyzeEmojis(text);
            analysis.characterAnalysis = this.analyzeCharacters(text);
            return analysis;
        } catch (error) {
            console.error("Terjadi kesalahan saat menganalisis teks:", error.message || error);
            return null;
        }
    }

    analyzeComment(comment) {
        const analysis = {
            ketuhanan: this.checkKeyword(comment, [
                'kasar', 'merendahkan', 'agama', 'tuhan', 'iman', 'taqwa', 
                'doa', 'ibadah', 'spiritual', 'religius', 'keyakinan', 
                'ketuhanan', 'syukur', 'pengampunan', 'berkat', 'hidayah', 
                'berdoa', 'beribadah', 'puasa', 'zakat', 'amal', 
                'sedekah', 'kitab suci', 'nabi', 'rasul', 'suci'
            ]),
            kemanusiaan: this.checkKeyword(comment, [
                'hak asasi manusia', 'martabat', 'adil', 'kemakmuran', 
                'keadilan', 'kemanusiaan', 'toleransi', 'solidaritas', 
                'empati', 'kasih sayang', 'kebebasan', 'kemanusiaan', 
                'kesederhanaan', 'peduli', 'perdamaian', 'anti diskriminasi', 
                'anti kekerasan', 'perlindungan', 'penghormatan', 'persamaan', 
                'pengakuan', 'keadilan sosial', 'hak sipil', 'hak politik', 
                'hak ekonomi', 'hak budaya'
            ]),
            persatuan: this.checkKeyword(comment, [
                'persatuan', 'bhineka', 'toleransi', 'kerukunan', 'kesatuan', 
                'keutuhan', 'nasionalisme', 'patriotisme', 'kesetiakawanan', 
                'gotong royong', 'semangat kebangsaan', 'integrasi', 
                'kebhinekaan', 'multikultural', 'pluralisme', 'persaudaraan', 
                'kesatuan bangsa', 'cinta tanah air', 'kesetiaan', 
                'persahabatan', 'kebersamaan', 'kolaborasi', 'koeksistensi', 
                'harmoni'
            ]),
            kerakyatan: this.checkKeyword(comment, [
                'demokrasi', 'musyawarah', 'perwakilan', 'rakyat', 
                'suara rakyat', 'kedaulatan', 'partisipasi', 'kebebasan berpendapat', 
                'transparansi', 'keterbukaan', 'akuntabilitas', 'hak suara', 
                'konsensus', 'delegasi', 'inklusif', 'responsif', 
                'legitimasi', 'kebijakan publik', 'advokasi', 'pelayanan publik', 
                'pemerintahan', 'kesetaraan hak', 'check and balance', 
                'keadilan demokrasi', 'kebebasan memilih', 'peran serta'
            ]),
            keadilan: this.checkKeyword(comment, [
                'keadilan sosial', 'pemerataan', 'kesejahteraan', 'keadilan', 
                'kesetaraan', 'kejujuran', 'anti-korupsi', 'keberpihakan', 
                'penegakan hukum', 'hak dan kewajiban', 'keadilan ekonomi', 
                'keadilan hukum', 'keadilan pendidikan', 'keadilan gender', 
                'pemerataan pendapatan', 'pemerataan kesempatan', 
                'keadilan lingkungan', 'keberlanjutan', 'solidaritas sosial', 
                'tanggung jawab sosial', 'anti diskriminasi', 'anti eksploitasi', 
                'perlindungan sosial', 'jaminan sosial', 'redistribusi'
            ])
        };

        analysis.pancasilaScore = this.calculatePancasilaScore(analysis);

        return analysis;
    }

    checkKeyword(comment, keywords) {
        const lowercaseComment = comment.toLowerCase();
        const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'i');
        return keywordRegex.test(lowercaseComment);
    }

    calculatePancasilaScore(analysis) {
        const totalValues = Object.keys(analysis).length - 1; // Subtract 1 for pancasilaScore itself
        const fulfilledValues = Object.values(analysis).slice(0, -1).filter(value => value).length;
        return (fulfilledValues / totalValues) * 100;
    }

    async generateSuggestions(text) {
        try {
            const suggestionPrompt = `Berikan saran perbaikan untuk teks berikut: "${text}"`;
            const response = await this.chatGPT.sendMessage(suggestionPrompt);
            return response;
        } catch (error) {
            console.error("Terjadi kesalahan saat menghasilkan saran perbaikan:", error.message || error);
            return null;
        }
    }

    analyzeEmojis(text) {
        const emojiRegex = /[\p{Emoji_Presentation}\p{Emoji}\u200d]+/gu;
        const emojis = text.match(emojiRegex) || [];
        return {
            count: emojis.length,
            emojis: [...new Set(emojis)] // Menghilangkan duplikasi
        };
    }

    analyzeCharacters(text) {
        return {
            length: text.length,
            wordCount: text.split(/\s+/).filter(word => word.length > 0).length,
            uniqueCharacters: [...new Set(text)].length
        };
    }
}

module.exports = Pancalyzer;
