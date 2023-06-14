let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let av = `./src/mp3/${pickRandom(["101 القارعة"])}.mp3`

m.reply( `بسم الله الرحمن الرحيم
ٱلۡقَارِعَةُ (1) مَا ٱلۡقَارِعَةُ (2) وَمَآ أَدۡرَىٰكَ مَا ٱلۡقَارِعَةُ (3) يَوۡمَ يَكُونُ ٱلنَّاسُ كَٱلۡفَرَاشِ ٱلۡمَبۡثُوثِ (4) وَتَكُونُ ٱلۡجِبَالُ كَٱلۡعِهۡنِ ٱلۡمَنفُوشِ (5) فَأَمَّا مَن ثَقُلَتۡ مَوَٰزِينُهُۥ (6) فَهُوَ فِي عِيشَةٖ رَّاضِيَةٖ (7) وَأَمَّا مَنۡ خَفَّتۡ مَوَٰزِينُهُۥ (8) فَأُمُّهُۥ هَاوِيَةٞ (9) وَمَآ أَدۡرَىٰكَ مَا هِيَهۡ (10) نَارٌ حَامِيَةُۢ (11)`)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(سورة القارعه|سوره القارعه)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
