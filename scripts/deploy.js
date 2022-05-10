async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Contract = await ethers.getContractFactory("MoneyBlocks");
    const contract = await Contract.deploy("0xCF1AeCc287027f797b99650B1E020fFa0fb0e248", 100);

    console.log("Deployd contract address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
