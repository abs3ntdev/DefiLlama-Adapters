const axios = require('axios')

const pools = [
  "CDJDRGUCHANJDXALZVJ5IZVB76HX4MWCON5SHF4DE5HB64CBBR7W2ZCD", // XLM-USDx
  "CD3XW7RGZIQMSVCTLK2NOFAGPTCBKXAVXIXN6QAMEPTJRY45325BZT67", // XLM-EURx
  "CC7CDFY2VGDODJ7WPO3JIK2MXLOAXL4LRQCC43UJDBAIJ4SVFO3HNPOC", // USDC-EURC
  "CATUJXDUO7SSSTAKSUV5YU6RSTB4B5AVIHQDV26QTCXOB46T6SLMWNMY", // XLM-EURC
  "CDGLVQDF2QUD6P4XJXBATP3HT2MSBEV3NH246ZDQPP6JPNPFAYO44P5E", // XLM-GBPx
  "CAM7DY53G63XA4AJRS24Z6VFYAFSSF76C3RZ45BE5YU3FQS5255OOABP", // XLM-USDC
  "CAF65BIHBIHC44QPWIFZRL46BDDH4FN3VSRBB2DZJFPWQRAOSRPKRRQZ", // EURx-USDC
  "CCXOKQBBNRJ7YKY4Y6HTXAU5ZLV7PKENA7ZT74UAAXZ6XUEE22YQGBCS", // EURx-EURC
  "CDLJHWJZS3KZDIFLGEFTXUOULRAZ3Z437JTEZLGHMUZEX4DFBFYWXRFR", // GBPx-USDC
  "CDIXSYDR7S5OLT56JM7G5Y5LHH6NEFINZOE2YG2TJEXHHYWKLV3FDCCU", // USTRY-USDC
  "CAQJUHO6KIBTEDT53DKDPHFMQ32KDWU5MDCAZE2MXT4ECBMTDQQF5FGB", // CETES-USDC
  "CCYPLDHUEYWJEOIZJTXUH56NLIQLKYGR5H2BEFQMBYG5IC3G52QF4WVD", // USDGLO-USDC
  "CCH3CJZWG6UMW522ESP3UHL4DCZLNXZLUHKYG5GCGNG5HXRL4A6O4A23", // XLM-XRF
  "CAHSKDP66SYCGYQZ3NULGZMEUSN5Z67UFBYADJVCNXVKV3E7PKYR5PQ4", // XLM-STK
  "CBVOZM3YLSK3IEKTL3XB3V7CMRU2JNTC3MISPEDMMU4XEUIXDQT6FP6T", // XLM-XTAR
  "CAKST7SVAVUZPYCDJ7QIUFLHHDAZV6HOY74F3PSVN5EKBMAGEZDR5D3I", // XLM-SHX
  "CDLMAKG5TSJA6FGP7LLC2FKJRQW6DQYMEPP6FURFVULDEQMP3PRZ4ISI", // XLM-LIBRE
  "CAI7B3M2EPGDA2GMHCHUD5JS7MEJ7HA7U7GP5L2IOJWWAE7VRTMTJPNX", // XLM-AMM
  "CDJXIUCWP3BWZWNPPL52YRG7FHG6LWAHN5RTYR4FLY7A3PJKSZ7LGCSC", // XLM-GQX
  "CBKG7Y3LSLTSK76LCKM52EQP3I7GMGL2VOR6S46ZEJZW62WFPAKP4NIG", // AQUA-YBX
  "CAX57ZNIZKVBDZ36OFH5IAMBTDDCJ4F54KUKCJRUKG5POIISYWL46P3U", // GQX-AMM
  "CBIQ5MND5I4AXWFSSDPDVN2X3DPR366YMBXUL6TABGUKMKVGOM2IAZJF", // XLM-BLND
  "CCB6AP3L24Q7KW3LTMO6D3KLNV6MAFTK2TDTJ3XP7BRI2OP4O6SWQM53", // USDC-AMM
  "CC2MSLNFYG63SKXLUTOJJOJWBORZ7NKH4IC66MG5SITKSN5MMFYH6FPE", // GQX-USDC
  "CAX7KGAVK4YBJJWLNV22DFEWC53LKQG3TNSUORMYEDGRT57PTW5K7BZ2", // yXLM-AMM
]

const tvl = async (api) => {
  for (const pool of pools) {
    const { data } = await axios.get(`https://api.stellar.expert/explorer/public/contract/${pool}/value`)
    api.addUSDValue(data.total / 1e7)
  }
}

module.exports = {
  stellar: { tvl }
}