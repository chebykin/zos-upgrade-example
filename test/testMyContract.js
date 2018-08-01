const MyContract_v0 = artifacts.require('./MyContract_v0.sol');
const AdminUpgradeabilityProxy = artifacts.require('zos-lib/contracts/upgradeability/AdminUpgradeabilityProxy.sol');

contract('MyContract', () => {
    describe('proxy', () => {
        it('should upgrade successfully', async function () {
            console.log('start');
            const myContract_v0 = await MyContract_v0.new();
            const proxy = await AdminUpgradeabilityProxy.new(myContract_v0.address);
            proxy.upgradeTo(myContract_v0.address);
            let myContract = await MyContract_v0.at(proxy.address);
            const value = 42;
            await myContract.initialize(value);
        });
    });
});