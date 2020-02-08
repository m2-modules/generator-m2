console.log('Start bootstrapping')

console.log('Bootstrapping is done.')

import('./<%= mainComponent %>').then(() => {
  console.log(`<%= appName %> is launched! (Powered by M2FW)`)
})
