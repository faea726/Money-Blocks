 Money's Description Report

 Files Description Table


|  File Name  |  SHA-1 Hash  |
|-------------|--------------|
| Money-Blocks/contracts/MoneyBlocks.sol | 1b580b7850ee9992dab3b66fffc32090100775a9 |


 Contracts Description Table


|  Contract  |         Type        |       Bases      |                  |                 |
|:----------:|:-------------------:|:----------------:|:----------------:|:---------------:|
|     └      |  **Function Name**  |  **Visibility**  |  **Mutability**  |  **Modifiers**  |
||||||
| **MoneyBlocks** | Implementation |  |||
| └ | <Constructor> | Public ❗️ | 🛑  |NO❗️ |
| └ | endBlockOf | Public ❗️ |   |NO❗️ |
| └ | isExpired | Public ❗️ |   |NO❗️ |
| └ | isAuthorized | Public ❗️ |   |NO❗️ |
| └ | authorize | External ❗️ | 🛑  | authorized |
| └ | unAuthorize | External ❗️ | 🛑  | authorized |
| └ | setTokenChargeFee | External ❗️ | 🛑  | authorized |
| └ | setBlockPrice | External ❗️ | 🛑  | authorized |
| └ | withdrawETH | External ❗️ | 🛑  | authorized |
| └ | withdrawToken | External ❗️ | 🛑  | authorized |
| └ | deposit | External ❗️ | 🛑  |NO❗️ |
| └ | _addBlock | Internal 🔒 | 🛑  | |
| └ | addblock | External ❗️ | 🛑  | authorized |


 Legend

|  Symbol  |  Meaning  |
|:--------:|-----------|
|    🛑    | Function can modify state |
|    💵    | Function is payable |
