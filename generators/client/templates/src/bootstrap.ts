console.log('Start bootstrapping')

console.log('Bootstrapping is done.')

import('./<%= uccMainComponent %>').then(() => {
  console.log(`<%= appName %> is launched! (Powered by M2FW)`)
})
