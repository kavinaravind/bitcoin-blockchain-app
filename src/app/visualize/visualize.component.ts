import { Component, OnInit, AfterViewInit } from '@angular/core';

import { BlockChainService } from "../services/blockchain.service";

import 'select2';
import $ from 'jquery'; // You need to import jquery before materialize-css if you want to use javascript 


@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {
  
  options:Object;
  chart:any;

  chartTypes: string[] = [
        'total-bitcoins',
        'market-price',
        'market-cap',
        'trade-volume',
        'blocks-size',
        'avg-block-size',
        'n-orphaned-blocks',
        'n-transactions-per-block',
        'median-confirmation-time',
        'bip-9-segwit',
        'bitcoin-unlimited-share',
        'nya-support',
        'hash-rate',
        'difficulty',
        'miners-revenue',
        'transaction-fees',
        'transaction-fees-usd',
        'cost-per-transaction-percent',
        'n-unique-addresses',
        'n-transactions',
        'n-transactions-total',
        'transactions-per-second',
        'mempool-count',
        'mempool-growth',
        'mempool-size',
        'utxo-count',
        'n-transactions-excluding-popular',
        'n-transactions-excluding-chains-longer-than-100',
        'output-volume',
        'estimated-transaction-volume',
        'estimated-transaction-volume-usd',
        'my-wallet-n-users'
    ];

  constructor(private blockChainService: BlockChainService) {
      this.options = {
          global: {
              useUTC: true
          },
          subtitle: { text: ''},
          title : { text : '' },
          series: [{ data: [] }],
          yAxis: {
            title: {
                text: ''
            }
          },
          xAxis: {
              startOnTick: true,
              type: 'datetime',
              dateTimeLabelFormats: {
                  // month: '%b %e, %Y'
              }
          }
      };
  }

  ngOnInit() {

    $(document).ready(function() {
        ($(".js-example-basic-single") as any).select2({
            theme: "bootstrap",
            sorter: function(data) {
                return data.sort(function (a, b) {
                    if (a.text > b.text) {
                        return 1;
                    }
                    if (a.text < b.text) {
                        return -1;
                    }
                    return 0;
                });
            }
        });
    });

    this.blockChainService.getAvgBlockSize();
    this.blockChainService.getBip9Segwit();
    this.blockChainService.getBitcoinUnlimitedShare();
    this.blockChainService.getBlockSize();
    this.blockChainService.getCostPerTransactionPercent();
    this.blockChainService.getDifficulty();
    this.blockChainService.getEstimatedTransactionValue();
    this.blockChainService.getEstimatedTransactionVolumeUSD();
    this.blockChainService.getHashRate();
    this.blockChainService.getMarketCap();
    this.blockChainService.getMarketPrice();
    this.blockChainService.getMedianConfirmationTime();
    this.blockChainService.getMempoolCount();
    this.blockChainService.getMempoolGrowth();
    this.blockChainService.getMempoolSize();
    this.blockChainService.getMinersRevenue();
    this.blockChainService.getNumberOfComfirmedTransactionsPerDay();
    this.blockChainService.getNumberOfTotalTransactions();
    this.blockChainService.getNumberOfTransactionsExcludingChainsLongerThan100();
    this.blockChainService.getNumberOfTransactionsExcludingPopular();
    this.blockChainService.getNumberOfUniqueAddresses();
    this.blockChainService.getNumberOrphanedBlocks();
    this.blockChainService.getNumberTransactionsPerBlock();
    this.blockChainService.getNYASupport();
    this.blockChainService.getOutputVolume();
    this.blockChainService.getTotalBitcoins();
    this.blockChainService.getTradeVolume();
    this.blockChainService.getTransactionFees();
    this.blockChainService.getTransactionFeesUSD();
    this.blockChainService.getTransactionsPerSecond();
    this.blockChainService.getUTXOCount();
    
  }

  saveInstance(chartInstance) {
      this.chart = chartInstance;
  }
        
  createGraph(chartType: string) {
    chartType = $(".js-example-basic-single").find(":selected").text();
    let specifiedChart: any[]

    if (chartType === 'total-bitcoins') {
        specifiedChart = this.blockChainService.totalBitCoins;
    } else if (chartType === 'market-price') {
        specifiedChart = this.blockChainService.marketPrice;
    } else if (chartType === 'market-cap') {
        specifiedChart = this.blockChainService.marketCap;
    } else if (chartType === 'trade-volume') {
        specifiedChart = this.blockChainService.tradeVolume;
    } else if (chartType === 'blocks-size') {
        specifiedChart = this.blockChainService.blocksSize;
    } else if (chartType === 'avg-block-size') {
        specifiedChart = this.blockChainService.averageBlockSize;
    } else if (chartType === 'n-orphaned-blocks') {
        specifiedChart = this.blockChainService.nOrphanedBlocks;
    } else if (chartType === 'n-transactions-per-block') {
        specifiedChart = this.blockChainService.nTransactionsPerBlock;
    } else if (chartType === 'median-confirmation-time') {
        specifiedChart = this.blockChainService.medianConfirmationTime;
    } else if (chartType === 'bip-9-segwit') {
        specifiedChart = this.blockChainService.bip9Segwit;
    } else if (chartType === 'bitcoin-unlimited-share') {
        specifiedChart = this.blockChainService.bitcoinUnlimitedShare;
    } else if (chartType === 'nya-support') {
        specifiedChart = this.blockChainService.nyaSupport;
    } else if (chartType === 'hash-rate') {
        specifiedChart = this.blockChainService.hashRate;
    } else if (chartType === 'difficulty') {
        specifiedChart = this.blockChainService.difficulty;
    } else if (chartType === 'miners-revenue') {
        specifiedChart = this.blockChainService.minersRevenue;
    } else if (chartType === 'transaction-fees') {
        specifiedChart = this.blockChainService.transactionFees;
    } else if (chartType === 'transaction-fees-usd') {
        specifiedChart = this.blockChainService.transactionFeesUsd;
    } else if (chartType === 'cost-per-transaction-percent') {
        specifiedChart = this.blockChainService.costPerTransactionPercent;
    } else if (chartType === 'n-unique-addresses') {
        specifiedChart = this.blockChainService.nUniqueAddresses;
    } else if (chartType === 'n-transactions') {
        specifiedChart = this.blockChainService.nTransactions;
    } else if (chartType === 'n-transactions-total') {
        specifiedChart = this.blockChainService.nTransactionsTotal;
    } else if (chartType === 'transactions-per-second') {
        specifiedChart = this.blockChainService.transactionsPerSecond;
    } else if (chartType === 'mempool-count') {
        specifiedChart = this.blockChainService.mempoolCount;
    } else if (chartType === 'mempool-growth') {
        specifiedChart = this.blockChainService.mempoolGrowth;
    } else if (chartType === 'mempool-size') {
        specifiedChart = this.blockChainService.mempoolSize;
    } else if (chartType === 'utxo-count') {
        specifiedChart = this.blockChainService.utxoCount;
    } else if (chartType === 'n-transactions-excluding-popular') {
        specifiedChart = this.blockChainService.nTransactionsExcludingPopular;
    } else if (chartType === 'n-transactions-excluding-chains-longer-than-100') {
        specifiedChart = this.blockChainService.nTransactionsExcludingChainsLongerThan100;
    } else if (chartType === 'output-volume') {
        specifiedChart = this.blockChainService.outputValue;
    } else if (chartType === 'estimated-transaction-volume') {
        specifiedChart = this.blockChainService.estimatedTransactionVolume;
    } else if (chartType === 'estimated-transaction-volume-usd') {
        specifiedChart = this.blockChainService.estimatedTransactionVolumeUsd;
    }

    this.chart.series[0].setData(specifiedChart.values);

    this.chart.setTitle({ text: specifiedChart['name'] });
    this.chart.subtitle.update({ text: specifiedChart['description'] })
    this.chart.yAxis[0].setTitle({
        text: specifiedChart['unit']
    });



  }
}