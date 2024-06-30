import fetch from "node-fetch"
import HttpsProxyAgent from "https-proxy-agent"
import chalk from 'chalk'
import fs from 'fs'
import gradient from 'gradient-string'
import readline from 'readline'

process.stdout.write(
  String.fromCharCode(27) + "]0;" + `TikTok Mass Report Bot | Reports: 10000| Speed: 1/m` + String.fromCharCode(7)
);

console.error = function() {}
process.on('uncaughtException' || "unhandledRejection", function (err) {
  null
});

function ascii() {
  console.clear()
  const ascii = gradient.vice(`
              ▄▄▄▄▄▪  ▄ •▄ ▄▄▄▄▄      ▄ •▄     ▄▄▄▄· ▄• ▄▌▄▄▌  ▄ •▄     ▄▄▄  ▄▄▄ . ▄▄▄·      ▄▄▄  ▄▄▄▄▄
              •██  ██ █▌▄▌▪•██  ▪     █▌▄▌▪    ▐█ ▀█▪█▪██▌██•  █▌▄▌▪    ▀▄ █·▀▄.▀·▐█ ▄█▪     ▀▄ █·•██  
              ▐█.▪▐█·▐▀▀▄· ▐█.▪ ▄█▀▄ ▐▀▀▄·    ▐█▀▀█▄█▌▐█▌██▪  ▐▀▀▄·    ▐▀▀▄ ▐▀▀▪▄ ██▀· ▄█▀▄ ▐▀▀▄  ▐█.▪
              ▐█▌·▐█▌▐█.█▌ ▐█▌·▐█▌.▐▌▐█.█▌    ██▄▪▐█▐█▄█▌▐█▌▐▌▐█.█▌    ▐█•█▌▐█▄▄▌▐█▪·•▐█▌.▐▌▐█•█▌ ▐█▌·
              ▀▀▀ ▀▀▀·▀  ▀ ▀▀▀  ▀█▄▀▪·▀  ▀    ·▀▀▀▀  ▀▀▀ .▀▀▀ ·▀  ▀    .▀  ▀ ▀▀▀ .▀    ▀█▄▀▪.▀  ▀ ▀▀▀                                                        
  `)
  console.log(ascii)
  console.log(chalk.grey('----------------------------------------------------------------------------------------------------------------------'))
  console.log(chalk.white('    https://https://www.tiktok.com/@zeini334?is_from_webapp=1&sender_device=pc'),chalk.grey(" | "),chalk.white('https://https://www.tiktok.com/@zeini334?is_from_webapp=1&sender_device=pc'),chalk.grey(" | "),chalk.white('https://https://www.tiktok.com/@zeini334?is_from_webapp=1&sender_device=pc'),)
  console.log(chalk.grey('----------------------------------------------------------------------------------------------------------------------\n'))
}

ascii()

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`${chalk.gray(`${new Date().toLocaleTimeString()} `) + chalk.grey(`[`) + chalk.cyan.bold(`?`) + chalk.grey(`]`)} Enter the request URL from Inspect Element: `, async function (answer) {

  ascii()

  var reportCount = 1000, reportsPerSecond = 10
  var text = fs.readFileSync('proxies.txt','utf8')
  var proxies = text.split(/\r?\n/)


setInterval(() => {
  
  proxies.forEach(async proxy => {
    const proxyAgent = new HttpsProxyAgent(`http://${proxy}`);

    const url = await fetch(answer, { agent: proxyAgent});
    const json = await url.json();
    
    console.log(chalk.gray(`           ${new Date().toLocaleTimeString()}  `) + gradient.vice(` Send report with ID: ${json.extra.logid} | Report count: ${reportCount}`))
    reportCount++,reportsPerSecond++
})

}, 300);

  setInterval(() => {
    process.stdout.write(
      String.fromCharCode(27) + "]0;" + `TikTok Mass Report Bot | Reports: ${reportCount} | Speed: ${reportsPerSecond*6}/m` + String.fromCharCode(7)
    );
    reportsPerSecond = 1000
  }, 10000);


})
