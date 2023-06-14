let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let av = `./src/mp3/${pickRandom(["102"])}.mp3`

m.reply( `بسم الله الرحمن الرحيم
أَلۡهَىٰكُمُ ٱلتَّكَاثُرُ (1) حَتَّىٰ زُرۡتُمُ ٱلۡمَقَابِرَ (2) كَلَّا سَوۡفَ تَعۡلَمُونَ (3) ثُمَّ كَلَّا سَوۡفَ تَعۡلَمُونَ (4) كَلَّا لَوۡ تَعۡلَمُونَ عِلۡمَ ٱلۡيَقِينِ (5) لَتَرَوُنَّ ٱلۡجَحِيمَ (6) ثُمَّ لَتَرَوُنَّهَا عَيۡنَ ٱلۡيَقِينِ (7) ثُمَّ لَتُسۡـَٔلُنَّ يَوۡمَئِذٍ عَنِ ٱلنَّعِيمِ (8)`)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(سورة التكاثر|سوره التكاثر)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
