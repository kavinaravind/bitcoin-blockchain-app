import {Injectable} from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlockChainService {

    totalBitCoins: any[] = [];
    blocksSize: any[] = [];
    estimatedTransactionVolumeUsd: any[] = [];
    estimatedTransactionVolume: any[] = [];
    outputValue: any[] = [];
    nTransactionsExcludingChainsLongerThan100: any[] = [];
    nTransactionsExcludingPopular: any[] = [];
    utxoCount: any[] = [];
    mempoolSize: any[] = [];
    mempoolGrowth: any[] = [];
    mempoolCount: any[] = [];
    transactionsPerSecond: any[] = [];
    nTransactionsTotal: any[] = [];
    nTransactions: any[] = [];
    nUniqueAddresses: any[] = [];
    costPerTransactionPercent: any[] = [];
    transactionFeesUsd: any[] = [];
    transactionFees: any[] = [];
    minersRevenue: any[] = [];
    difficulty: any[] = [];
    hashRate: any[] = [];
    nyaSupport: any[] = [];
    bitcoinUnlimitedShare: any[] = [];
    bip9Segwit: any[] = [];
    medianConfirmationTime: any[] = [];
    nTransactionsPerBlock: any[] = [];
    nOrphanedBlocks: any[] = [];
    averageBlockSize: any[] = [];
    tradeVolume: any[] = [];
    marketCap: any[] = [];
    marketPrice: any[] = [];
    
    constructor(private http: Http) { }

    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    /*
     * Bitcoins in circulation
     * The total number of bitcoins that have already been mined; 
     * in other words, the current supply of bitcoins on the network.
     */
    getTotalBitcoins() {
        //total-bitcoins
        return this.http.get('https://api.blockchain.info/charts/total-bitcoins?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                totalBitCoins => {
                  this.totalBitCoins = totalBitCoins;
                },
                error => console.log(error)
            );
    }

    /*
     * Market Price (USD)
     * Average USD market price across major bitcoin exchanges.
     */
    getMarketPrice() {
        //market-price
        return this.http.get('https://api.blockchain.info/charts/market-price?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                marketPrice => {
                  this.marketPrice = marketPrice;
                },
                error => console.log(error)
            );
    }

    /*
     * Market Capitalization
     * The total USD value of bitcoin supply in circulation, as calculated by the daily 
     * average market price across major exchanges.
     */
    getMarketCap() {
        //market-cap
        return this.http.get('https://api.blockchain.info/charts/market-cap?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                marketCap => {
                  this.marketCap = marketCap;
                },
                error => console.log(error)
            );
    }

    /*
     * USD Exchange Trade Volume
     * The total USD value of trading volume on major bitcoin exchanges.
     */
    getTradeVolume() {
        //trade-volume
        return this.http.get('https://api.blockchain.info/charts/trade-volume?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                tradeVolume => {
                  this.tradeVolume = tradeVolume;
                },
                error => console.log(error)
            );
    }

    /*
     * Blockchain Size
     * The total size of all block headers and transactions. Not including database indexes.
     */
    getBlockSize() {
        //blocks-size
        return this.http.get('https://api.blockchain.info/charts/blocks-size?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                blocksSize => {
                  this.blocksSize = blocksSize;
                },
                error => console.log(error)
            );
    }

    /*
     * Average Block Size
     * The average block size in MB.
     */
    getAvgBlockSize() {
        //avg-block-size
        return this.http.get('https://api.blockchain.info/charts/avg-block-size?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                averageBlockSize => {
                    this.averageBlockSize = averageBlockSize;
                },
                error => console.log(error)
            );
    }

    /*
     * Average Block Size
     * The average block size in MB.
     */
    getNumberOrphanedBlocks() {
        //n-orphaned-blocks
        return this.http.get('https://api.blockchain.info/charts/n-orphaned-blocks?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                nOrphanedBlocks => {
                    this.nOrphanedBlocks = nOrphanedBlocks;
                },
                error => console.log(error)
            );
    }

    /*
     * Average Number Of Transactions Per Block
     * The average number of transactions per block.
     */
    getNumberTransactionsPerBlock() {
        //n-transactions-per-block
        return this.http.get('https://api.blockchain.info/charts/n-transactions-per-block?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                nTransactionsPerBlock => {
                    this.nTransactionsPerBlock = nTransactionsPerBlock;
                },
                error => console.log(error)
            );
    }

    /*
     * Median Confirmation Time
     * The median time for a transaction to be accepted into a mined block and added 
     * to the public ledger (note: only includes transactions with miner fees).
     */
    getMedianConfirmationTime() {
        //median-confirmation-time
        return this.http.get('https://api.blockchain.info/charts/median-confirmation-time?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                medianConfirmationTime => {
                    this.medianConfirmationTime = medianConfirmationTime;
                },
                error => console.log(error)
            );
    }

    /*
     * Percentage of blocks signalling SegWit support
     */
    getBip9Segwit() {
        //bip-9-segwit
        return this.http.get('https://api.blockchain.info/charts/bip-9-segwit?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                bip9Segwit => {
                    this.bip9Segwit = bip9Segwit;
                },
                error => console.log(error)
            );
    }

    /*
     * Percentage of blocks signalling Bitcoin Unlimited support
     */
    getBitcoinUnlimitedShare() {
        //bitcoin-unlimited-share
        return this.http.get('https://api.blockchain.info/charts/bitcoin-unlimited-share?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                bitcoinUnlimitedShare => {
                    this.bitcoinUnlimitedShare = bitcoinUnlimitedShare;
                },
                error => console.log(error)
            );
    }

    /*
     * Percentage of blocks signalling support for the New York agreement
     */
    getNYASupport() {
        //nya-support
        return this.http.get('https://api.blockchain.info/charts/nya-support?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                nyaSupport => {
                    this.nyaSupport = nyaSupport;
                },
                error => console.log(error)
            );        
    }
    
    /*
     * Hash Rate
     * The estimated number of tera hashes per second (trillions of hashes per second) 
     * the Bitcoin network is performing.
     */
    getHashRate() {
        //hash-rate
        return this.http.get('https://api.blockchain.info/charts/hash-rate?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                hashRate => {
                    this.hashRate = hashRate;
                },
                error => console.log(error)
            );
    }

    /*
     * Difficulty
     * A relative measure of how difficult it is to find a new block. The difficulty is adjusted periodically 
     * as a function of how much hashing power has been deployed by the network of miners.
     */
    getDifficulty() {
        //difficulty
        return this.http.get('https://api.blockchain.info/charts/difficulty?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                difficulty => {
                    this.difficulty = difficulty;
                },
                error => console.log(error)
            );
    }

    /*
     * Miners Revenue
     * Total value of coinbase block rewards and transaction fees paid to miners.
     */
    getMinersRevenue() {
        //miners-revenue
        return this.http.get('https://api.blockchain.info/charts/miners-revenue?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                minersRevenue => {
                    this.minersRevenue = minersRevenue;
                },
                error => console.log(error)
            );
    }

    /*
     * Total Transaction Fees
     * The total value of all transaction fees paid to miners (not including the coinbase value of block rewards).
     */
    getTransactionFees() {
        //transaction-fees
        return this.http.get('https://api.blockchain.info/charts/transaction-fees?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                transactionFees => {
                    this.transactionFees = transactionFees;
                },
                error => console.log(error)
            );
    }

    /*
     * Total Transaction Fees in USD
     * The total value of all transaction fees paid to miners (not including the coinbase value of block rewards).
     */
    getTransactionFeesUSD() {
        //transaction-fees-usd
        return this.http.get('https://api.blockchain.info/charts/transaction-fees-usd?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                transactionFeesUsd => {
                    this.transactionFeesUsd = transactionFeesUsd;
                },
                error => console.log(error)
            );
    }

    /*
     * Cost % of Transaction Volume
     * A chart showing miners revenue as percentage of the transaction volume.
     */
    getCostPerTransactionPercent() {
        //cost-per-transaction-percent
        return this.http.get('https://api.blockchain.info/charts/cost-per-transaction-percent?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                costPerTransactionPercent => {
                    this.costPerTransactionPercent = costPerTransactionPercent;
                },
                error => console.log(error)
            );
    }

    /*
     * Number Of Unique Addresses Used
     * The total number of unique addresses used on the Bitcoin blockchain.
     */
    getNumberOfUniqueAddresses() {
        //n-unique-addresses
        return this.http.get('https://api.blockchain.info/charts/n-unique-addresses?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                nUniqueAddresses => {
                    this.nUniqueAddresses = nUniqueAddresses;
                },
                error => console.log(error)
            );
    }

    /*
     * Confirmed Transactions Per Day
     * The number of daily confirmed Bitcoin transactions.
     */
    getNumberOfComfirmedTransactionsPerDay() {
        //n-transactions
        return this.http.get('https://api.blockchain.info/charts/n-transactions?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                nTransactions => {
                    this.nTransactions = nTransactions;
                },
                error => console.log(error)
            );
    }

    /*
     * Total Number of Transactions
     */
    getNumberOfTotalTransactions() {
        //n-transactions-total
        return this.http.get('https://api.blockchain.info/charts/n-transactions-total?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                nTransactionsTotal => {
                    this.nTransactionsTotal = nTransactionsTotal;
                },
                error => console.log(error)
            );
    }

    /*
     * Transaction Rate
     * The number of Bitcoin transactions added to the mempool per second.
     */
    getTransactionsPerSecond() {
        //transactions-per-second
        return this.http.get('https://api.blockchain.info/charts/transactions-per-second?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                transactionsPerSecond => {
                    this.transactionsPerSecond = transactionsPerSecond;
                },
                error => console.log(error)
            );
    }

    /*
     * Mempool Transaction Count
     * The number of transactions waiting to be confirmed.
     */
    getMempoolCount() {
        //mempool-count
        return this.http.get('https://api.blockchain.info/charts/mempool-count?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                mempoolCount => {
                    this.mempoolCount = mempoolCount;
                },
                error => console.log(error)
            );
    }    

    /*
     * Mempool Size Growth
     * The rate at which the mempool is growing per second.
     */
    getMempoolGrowth() {
        //mempool-growth
        return this.http.get('https://api.blockchain.info/charts/mempool-growth?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                mempoolGrowth => {
                    this.mempoolGrowth = mempoolGrowth;
                },
                error => console.log(error)
            );
    }

    /*
     * Mempool Size
     * The aggregate size of transactions waiting to be confirmed.
     */
    getMempoolSize() {
        //mempool-size
        return this.http.get('https://api.blockchain.info/charts/mempool-size?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                mempoolSize => {
                    this.mempoolSize = mempoolSize;
                },
                error => console.log(error)
            );
    }

    /*
     * Number of Unspent Transaction Outputs
     * The number of unspent Bitcoin transactions outputs, also known as the UTXO set size.
     */
    getUTXOCount() {
        //utxo-count
        return this.http.get('https://api.blockchain.info/charts/utxo-count?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                utxoCount => {
                    this.utxoCount = utxoCount;
                },
                error => console.log(error)
            );
    }

    /*
     * Number of Transactions Excluding Popular Addresses
     * The total number of Bitcoin transactions, excluding those involving any of the network's 
     * 100 most popular addresses.
     */
    getNumberOfTransactionsExcludingPopular() {
        //n-transactions-excluding-popular
        return this.http.get('https://api.blockchain.info/charts/n-transactions-excluding-popular?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                nTransactionsExcludingPopular => {
                    this.nTransactionsExcludingPopular = nTransactionsExcludingPopular;
                },
                error => console.log(error)
            );
    }

    /*
     * Number Of Transactions Excluding Chains Longer Than 100
     * The total number of Bitcoin transactions per day excluding those part of long transaction 
     * chains. There are many legitimate reasons to create long transaction chains; however, 
     * they may also be caused by coin mixing or possible attempts to manipulate transaction volume.
     */
    getNumberOfTransactionsExcludingChainsLongerThan100() {
        //n-transactions-excluding-chains-longer-than-100
        return this.http.get('https://api.blockchain.info/charts/n-transactions-excluding-chains-longer-than-100?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                nTransactionsExcludingChainsLongerThan100 => {
                    this.nTransactionsExcludingChainsLongerThan100 = nTransactionsExcludingChainsLongerThan100;
                },
                error => console.log(error)
            );
    }

    /*
     * Output Value
     * The total value of all transaction outputs per day (includes coins returned to the sender as change).
     */
    getOutputVolume() {
        //output-volume
        return this.http.get('https://api.blockchain.info/charts/output-volume?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                outputValue => {
                    this.outputValue = outputValue;
                },
                error => console.log(error)
            );
    }

    /*
     * Estimated Transaction Value
     * The total estimated value of transactions on the Bitcoin blockchain (does not include coins returned to 
     * sender as change).
     */
    getEstimatedTransactionValue() {
        //estimated-transaction-volume
        return this.http.get('https://api.blockchain.info/charts/estimated-transaction-volume?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                estimatedTransactionVolume => {
                    this.estimatedTransactionVolume = estimatedTransactionVolume;
                },
                error => console.log(error)
            );
    }

    /*
     * Estimated USD Transaction Value
     * The Estimated Transaction Value in USD value.
     */
    getEstimatedTransactionVolumeUSD() {
        //estimated-transaction-volume-usd
        return this.http.get('https://api.blockchain.info/charts/estimated-transaction-volume-usd?&format=json')
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
                estimatedTransactionVolumeUsd => {
                    this.estimatedTransactionVolumeUsd = estimatedTransactionVolumeUsd;
                },
                error => console.log(error)
            );
    }
}