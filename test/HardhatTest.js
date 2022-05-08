const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Contract Tests', () => {
    let owner, acc1, acc2, acc3, acc4; // List acc for testing
    beforeEach(async () => {
        ctr_ = await ethers.getContractFactory('MoneyBlocks');
        ctr = await ctr_.deploy('0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 1000); // BUSD, 1000 wei
        [owner, acc1, acc2, acc3, acc4] = await ethers.getSigners();
    });

    describe('Queries', () => {
        it('Authorization', async () => {
            expect(await ctr.isAuthorized(owner.address)).to.equal(true);
            expect(await ctr.isAuthorized(acc1.address)).to.equal(false);
        });

        it('Is expired', async () => {
            expect(await ctr.isExpired(acc1.address)).to.equal(true);
        });
    });

    describe('Functions', () => {
        it('Add block', async () => {
            await ctr.addblock(acc1.address, 200);
            expect(await ctr.isExpired(acc1.address)).to.equal(false);
            console.log("       End Block:", (await ctr.endBlockOf(acc1.address)).toString());

            await expect(
                ctr.connect(acc1).addblock(acc2.address, 200)
            ).to.be.revertedWith('');
        });
    });
});