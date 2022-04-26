// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MoneyBlocks {
    using SafeMath for uint256;

    mapping(address => bool) private _isAuthorized;
    mapping(address => uint256) private _endBlock;
    uint256 private _blockPrice;
    address public tokenChargeFee;
    IERC20 private _tokenFee;

    constructor(address TOKEN_CHARGE_FEE, uint256 PRICE_) {
        tokenChargeFee = TOKEN_CHARGE_FEE;
        _tokenFee = IERC20(tokenChargeFee);
        _blockPrice = PRICE_;
        _isAuthorized[msg.sender] = true;
    }

    modifier authorized() {
        require(_isAuthorized[msg.sender]);
        _;
    }

    function endBlockOf(address adr) public view returns (uint256) {
        return _endBlock[adr];
    }

    function authorize(address adr) external authorized {
        require(!_isAuthorized[adr], "Error: already authorized!");
        _isAuthorized[adr] = true;
    }

    function unAuthorize(address adr) external authorized {
        require(_isAuthorized[adr], "Error: not authorized!");
        _isAuthorized[adr] = false;
    }

    function isAuthorized(address adr) public view returns (bool) {
        return _isAuthorized[adr];
    }

    function setTokenChargeFee(address tokenAddress_) external authorized {
        tokenChargeFee = tokenAddress_;
        _tokenFee = IERC20(tokenChargeFee);
    }

    function setBlockPrice(uint256 price_) external authorized {
        _blockPrice = price_;
    }

    function withdrawETH(address to) external authorized {
        uint256 contractETHBalance = address(this).balance;
        payable(to).transfer(contractETHBalance);
    }

    function withdrawToken(address tokenAddress, address to)
        external
        authorized
    {
        IERC20 tokenContract = IERC20(tokenAddress);
        tokenContract.transfer(to, tokenContract.balanceOf(address(this)));
    }

    function deposit(uint256 amount) external {
        require(amount >= _blockPrice, "Error: insufficient balance!");

        _tokenFee.approve(address(this), amount);
        address buyer = msg.sender;
        bool success = _tokenFee.transferFrom(buyer, address(this), amount);

        require(success, "Error: deposit failed!");
        _addBlock(buyer, amount);
    }

    function _addBlock(address buyer, uint256 amount) internal {
        if (_endBlock[buyer] == 0) {
            _endBlock[buyer] = block.number;
        }
        uint256 extraBlocks = amount.div(_blockPrice);
        _endBlock[buyer] = _endBlock[buyer].add(extraBlocks);
    }
}
