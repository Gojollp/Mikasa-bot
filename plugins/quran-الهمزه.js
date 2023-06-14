let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let av = `./src/mp3/${pickRandom(["الهمزة 104"])}.mp3`

m.reply( `بسم الله الرحمن الرحيم
وَيۡلٞ لِّكُلِّ هُمَزَةٖ لُّمَزَةٍ (1) ٱلَّذِي جَمَعَ مَالٗا وَعَدَّدَهُۥ (2) يَحۡسَبُ أَنَّ مَالَهُۥٓ أَخۡلَدَهُۥ (3) كَلَّاۖ لَيُنۢبَذَنَّ فِي ٱلۡحُطَمَةِ (4) وَمَآ أَدۡرَىٰكَ مَا ٱلۡحُطَمَةُ (5) نَارُ ٱللَّهِ ٱلۡمُوقَدَةُ (6) ٱلَّتِي تَطَّلِعُ عَلَى ٱلۡأَفۡـِٔدَةِ (7) إِنَّهَا عَلَيۡهِم مُّؤۡصَدَةٞ (8) فِي عَمَدٖ مُّمَدَّدَةِۭ (9)
`)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(سورة الهمزة|سوره الهمزه)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
