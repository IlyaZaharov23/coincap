import bitcoin from "assets/bitcoin.svg";
import bnb from "assets/bnb.svg";
import dogecoin from "assets/doge.svg";
import ethereum from "assets/ethereum.svg";
import lido_staked from "assets/lido_staked_eth.svg";
import solana from "assets/solana.svg";
import tether from "assets/tether.svg";
import tron from "assets/tron.svg";
import usdc from "assets/usdc.svg";
import xrp from "assets/xrp.svg";
import { COIN_EXTENSION } from "shared/constants/coinExtensions";

export class ImagesUtil {
    static getCoinImage(coinSymbol: string) {
        switch (coinSymbol) {
            case COIN_EXTENSION.BITCOIN:
                return bitcoin;
            case COIN_EXTENSION.BNB:
                return bnb;
            case COIN_EXTENSION.DOGECOIN:
                return dogecoin;
            case COIN_EXTENSION.ETHEREUM:
                return ethereum;
            case COIN_EXTENSION.LIDO_STAKED:
                return lido_staked;
            case COIN_EXTENSION.SOLANA:
                return solana;
            case COIN_EXTENSION.TETHER:
                return tether;
            case COIN_EXTENSION.TRON:
                return tron;
            case COIN_EXTENSION.USDC:
                return usdc;
            case COIN_EXTENSION.XRP:
                return xrp;
        }
    }
}
