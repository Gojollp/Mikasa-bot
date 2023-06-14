let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let av = `./src/mp3/${pickRandom(["الفيل 105"])}.mp3`

m.reply( `بسم الله الرحمن الرحيم
أَلَمۡ تَرَ كَيۡفَ فَعَلَ رَبُّكَ بِأَصۡحَٰبِ ٱلۡفِيلِ (1) أَلَمۡ يَجۡعَلۡ كَيۡدَهُمۡ فِي تَضۡلِيلٖ (2) وَأَرۡسَلَ عَلَيۡهِمۡ طَيۡرًا أَبَابِيلَ (3) تَرۡمِيهِم بِحِجَارَةٖ مِّن سِجِّيلٖ (4) فَجَعَلَهُمۡ كَعَصۡفٖ مَّأۡكُولِۭ (5)`)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(سورة الفيل|سوره الفيل)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
