const Ganache = require('ganache-core');

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    },
    test: {
      provider: Ganache.provider({
        unlocked_accounts: [0, 1, 2, 3, 4, 5]
      }),
      network_id: '*'
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
