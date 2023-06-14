let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let av = `./src/mp3/${pickRandom(["قريش 106"])}.mp3`

m.reply( `بسم الله الرحمن الرحيم
لِإِيلَٰفِ قُرَيۡشٍ (1) إِۦلَٰفِهِمۡ رِحۡلَةَ ٱلشِّتَآءِ وَٱلصَّيۡفِ (2) فَلۡيَعۡبُدُواْ رَبَّ هَٰذَا ٱلۡبَيۡتِ (3) ٱلَّذِيٓ أَطۡعَمَهُم مِّن جُوعٖ وَءَامَنَهُم مِّنۡ خَوۡفِۭ (4)
`)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(سورة قريش|سوره قريش)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
