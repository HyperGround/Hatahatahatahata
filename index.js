const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to V𝕀ꋊΛꌦ#1010
  const date = new Date();
  const options = {
    timeZone: 'Asia/Calcutta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1195468879837810768') // make your bot in discord.com/developers and paste the application ID here
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=7MA7oPf7owo') //Must be a youtube video link 
    .setState('Welcome, my brother!')
    .setName('PP09 & PetyaDecryptor')
    .setDetails(`Click on Watchto watch 22twice - Fly High subtitles!`) //[${formatTime()}] and this for showing time of stream.
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1230213257994702951/1230562104696770704/mega_gif.gif?ex=6633c544&is=66215044&hm=467f03f582502ca1016b29677c0b805090ec51770e19e78fa833d33e31aee88b&') //You can put links in tenor or discord and etc. 
    .setAssetsLargeText('Please anime') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/avatars/1175367719374290954/3d3a83043026c9a4ff1456ed6d3ba3eb.png?size=1024') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('DM me') //Text when you hover the Small image
    .addButton('JOIN SERVER!', 'https://discord.gg/wDRGB6Dh')
    .addButton('SUBSCRIBE US!', 'https://youtube.com/@GeometryDashLivestreaming_/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Join Our Funteristic Community`; //[${newTime}] set this for time 
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);



// put your token in secrets