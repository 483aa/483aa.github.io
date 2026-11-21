const TYPE_LABELS = {
  alpha:   "Alpha",
  beta:    "Beta",
  release: "Release",
  other:   "Other",
  error:   "Error",
  test:    "Test",
};

const LOADER_LABELS = {
  jar:      ".JAR",
  bat:      ".BAT",
  exe:      ".EXE",
  multimc:  "MultiMC",
  launcher: "Launcher",
};

const STYLE_LABELS = {
  default:       "Default",
  creepy:        "Creepy",
  chinese:       "Chinese",
  pseudochinese: "Pseudo-Chinese",
};

const versions = [
  { name:"Alpha v1.0.16_02", type:"alpha", loader:"bat", style:"normal", year:2010, zip:"https://www.mediafire.com/file/6hec64fwt468ifw/a1.0.16_02.zip/file"}, // 13.08.2010

  { name:"Alpha v1.1.1", type:"alpha", loader:"bat", style:"normal", year:2010, zip:"https://www.mediafire.com/file/adm8qigfz9ljoxo/a1.1.1.zip/file"}, // 18.09.2010

  { name:"Alpha v1.1.1x", type:"alpha", loader:"launcher", style:"creepy", year:2010, zip:"https://www.mediafire.com/file/ysflz53wsbv5m0u/a1.1.1x.zip/file"}, // 18.09.2010

  { name:"Minecraft 1.1", type:"release", loader:"launcher", style:"normal", year:2012, zip:"downloads/1.1.zip" }, //12.01.2012

  { name:"Minecraft 15w14a", type:"snapshot", loader:"launcher", style:"normal", year:2015, zip:"downloads/15w14a.zip" }, //06.07.2015

  { name:"Alpha v1.2.3_03", type:"alpha", loader:"bat", style:"normal", year:2019, zip:"https://www.mediafire.com/file/hfx0lnpf0f6r6cb/a1.2.3_03.zip/file" }, //08.02.2019

  { name:"Minecraft HEX", type:"release", loader:"exe", style:"creepy", year:2019, zip:"downloads/hex.zip" }, //30.06.2019

  { name:"Beta 1.10", type:"beta", loader:"bat", style:"normal", year:2020, zip:"https://download1584.mediafire.com/cievuzk37vigiAwS-P2bTE9ldruxF7bz4bHYbW8r2PiyDZfWbLMEgLQn-H5GqTWgY8K92tQJsnpAdqHxjWviwUMm8zT2nHruuEU40sSDJP5H_kZX5B58J9i6N073aa9zNQas7ddk4wbxF8v-uaMadIdxOJZ5mqL-JqYqsM0W2Jdxv98/uqxsxyc1v3yite5/b1.10.zip" }, //16.01.2020

  { name:"Minecraft HEX 2", type:"release", loader:"launcher", style:"normal", year:2020, zip:"downloads/hex2.zip" }, //22.01.2020

  { name:"Beta 1.7.1", type:"beta", loader:"bat", style:"normal", year:2020, zip:"https://download1654.mediafire.com/15wq22my42tg-Rg1o1CqU0x4pNC8JY8bjP7SswSLXrfcCaO-epKVtWY5EjcQU1lBV4jkcyZ4Wk7NzPVuhAsWLrQTxUL-YExB2N6ImbXaqyroDUdupklz7LTqHpkm_v-r4PKxZMRwBBzFvsiAWOMKyHjluFEuLQyDKQN1u-yn2nKwu_s/74yvg2jpvgjc9tk/b1.7.1.zip" }, //23.02.2020

  { name:"Alpha v1.2.6_01", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"https://www.mediafire.com/file/2xsjidd039qla9k/a1.2.6_01.zip/file" }, //25.02.2020

   { name:"Minecraft 6.6.6", type:"release", loader:"bat", style:"creepy", year:2020, zip:"downloads/6.6.6.zip" }, //07.03.2020

  { name:"Alpha v0.0.0", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"https://www.mediafire.com/file/8yf23hpd1ret0i4/a0.0.0.zip/file" }, //02.04.2020

  { name:"Alpha v1.2.6_02", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"https://www.mediafire.com/file/zed2gfc695tzobx/a1.2.6_02.zip/file" }, //10.04.2020

  { name:"Beta 1.8.2", type:"beta", loader:"bat", style:"normal", year:2020, zip:"https://download1583.mediafire.com/6oeq760wiuog_2FMsP1h9G39RVCTaTAuBsT2XzFS-NrHbU1Wm62aTpaDi2dvAQwnGiiwha7ieQY0MBQxRvVhwqyKvpcmwRt7IMaO_PDPxdDhbS2kxmd-H8dxjpUkmf_N65xrcsBcMaLBcUm6-yfl25KvtwJp7dOtXL5PFsDK2sVCa3k/ov8aapop3h6ha8q/b1.8.2.zip" }, //29.04.2020

  { name:"Alpha 666.exe", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"https://download1648.mediafire.com/leqzt5cm5h6gvMRJhP-SMuoh2n_QaqI8X2ZoLBPVr2lSfyFRUME0EkWzCGebOI0p5JFxNKmlk77yjY9bbl2YTyHmJOM9V4iwLHb1p73QSO8qeSn2o4Fz4t8vnou6umuq4QHqb-asX-yPlpfZR_GP2Oi39lgUCbwSttNxflRG9xt77eQ/ddknavavj1hcijv/a666.exe.zip" }, //02.05.2020

  { name:"Alpha D3ATH.exe", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"https://download1474.mediafire.com/tni56kiagtgg86brOrLrTR5CvlC62VdyKHsbWUuM4xjWl8nUKxUUGlXrjMZUOIxwYdMu9I5_gqW6UP5AyWBE0K3vVSdzgqHwPzvGThl-bTF-I-zLkDGgWhIO60FkoPP6NgeWl8nxCpa69fTsfvrWDDt3nNpQG0I5PQP_-6dNcYuS674/9c2d3yonpuj1iy8/d3ath.exe.zip" }, //03.05.2020

  { name:"Alpha v1.2.6_03", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"https://www.mediafire.com/file/gnqrtd4ascyayq1/a1.2.6_03.zip/file" }, //11.05.2020

  { name:"Alpha v1.2.3_03 remastered", type:"alpha", loader:"bat", style:"normal", year:2020, zip:"https://www.mediafire.com/file/26f9sboh15w0nhv/a1.2.3_03_remastered.zip/file" }, //22.05.2020

  { name:"Alpha Herobrine Test", type:"alpha", loader:"bat", style:"normal", year:2020, zip:"https://download1072.mediafire.com/luz8gsnx4ucgHk72ykx9ceGR9McigDj5h7LUeKcnr4t0Z5EQrwS_MAOjjY3wqiGhnN2T5TbbIdZ4VIu3W5orpx34Ey3XGFreRmoL5VHh1xyhRNqfc_r_xvdXJEMO4D-9f65LjBnXVd_H5MCGNe6Xkuf8a8cAop8LrYHWXa02uygy3qk/wsia05uqwgm8yp7/aherobrine+test.zip" }, //19.07.2020

  { name:"Minecraft 1.20 Test", type:"release", loader:"exe", style:"normal", year:2020, zip:"downloads/1.20 test.zip" }, //08.08.2020

  { name:"Minecraft.exe13", type:"release", loader:"launcher", style:"creepy", year:2020, zip:"downloads/minecraft.exe13.zip" }, //11.08.2020

  { name:"ERROR422", type:"release", loader:"exe", style:"error", year:2020, zip:"downloads/err422.zip" }, //11.08.2020

  { name:"Minecraft HEX remastered", type:"release", loader:"bat", style:"creepy", year:2020, zip:"downloads/hex remastered.zip" }, //28.08.2020

  { name:"Alpha 1.2.2c", type:"alpha", loader:"launcher", style:"normal", year:2020, zip:"https://www.mediafire.com/file/1rni1fzgsq6txk4/a1.2.2%25D1%2581.zip/file" }, //29.10.2020

  { name:"Beta v1.0.1", type:"beta", loader:"bat", style:"normal", year:2020, zip:"https://download942.mediafire.com/08nldid4bkkgqHeFgGcdk7GymI_mMGVkr8pyAEhwGq3U01ZLuptiatmjAg_QLUJrVfw34DMQ3Yl9qjuVQAYccH6Sw5jOiBNjMXLiMaEH9KpaP5H9SPhCvVpmBwmjIAsi5rVDmO4mf74gybUibTVFtYePspTMbIhnYpDz2hO8K7dcS9E/4yrkaqk7i2ebtqa/b1.0.1.zip" }, //07.11.2020

  { name:"Alpha v1.2.7", type:"alpha", loader:"bat", style:"normal", year:2020, zip:"https://www.mediafire.com/file/68ljzyvc9gwpyke/a1.2.7.zip/file" }, //02.12.2020

  { name:"ChaosCraft Beta", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"downloads/chaoscraftbeta.zip" }, //08.12.2020

  { name:"ChaosCraft v1.0.0", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"downloads/chaoscraft1.0.0.zip" }, //23.12.2020

  { name:"ERROR633", type:"alpha", loader:"bat", style:"error", year:2021, zip:"downloads/err633.zip" }, //29.01.2021

  { name:"Alpha butcher.exe", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"https://download1509.mediafire.com/mq3js6r92qugbT2C_sKz5Pl0CZ2q4C38XB-PD9eWRVW7KVylLjmri76ce_YgqJkC6UNGUfhM1OUXsVqhPamjV0i_mGNGFY7aGoKfJOwi7_gT7ADNjSfVRLAEUsdNoJBQZf-caEhC0DGDcf9sHGrxQyvSFmuGIqHYYvVbacFhC35BfVc/sh9jjohhwrp9r4r/butcher.exe.zip" }, //19.02.2021

  { name:"Alpha vE.R.R.O.R", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"https://download1085.mediafire.com/1ivdmglkzhygjejhZQyLUhl-Q41vkfRSi5ez7glYh3PS0dYAEdLhzlJtV6lLiDjEzahBUdlGUhfGkKO2CMdOUGmdNWt1wy_S7OEH7kTRjRuYS0haoGXowPO4qmVxuo5BPpk5M2o8NFRPzrXmlgq9yiw99ck6zKsETvbJ_7_tZDyu2RI/lfaqycumjnhh2uj/ae.r.r.o.r.zip" }, //25.03.2021

  { name:"Alpha v1.2.4", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"https://www.mediafire.com/file/zfoq71b9yv3olsp/a1.2.4.zip/file" }, //01.04.2021

  { name:"Beta 1.5_02", type:"beta", loader:"bat", style:"normal", year:2021, zip:"https://download1532.mediafire.com/ekv7g72b5thgJ7GVWrxXQqTUL1GvZtkm8MCRWCSenhSzpslOJR5d0FAe3y_aTPMWDacT0fm1C2rzQ-CRYGCXUx43BVLm3zFqQPTrU3LtGkfdrRD1oQ_jEI2obvD3bOg3NCxHC19dQwDw2aTjVeTppwvGSxWlutx7L7eIJJooiGTqwUs/l9szerq4bj8589k/b1.5_02.zip" }, //10.04.2021

  { name:"Alpha v3.0.3", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"https://download1075.mediafire.com/uaii54uze1ng2J2johfxwpD0Z_JOKl8kqeEQ1r_CUuj1TxrPNYUsp_ONK5i5DA_SUv-Sm0VcVcCQVDD8HN3BBmGtKyqVwwSh8-zUoPjTdfVe1no86CsZAWHOM67hQMtDaKUaRJrA0Bpag_cF64jEB4I5QKoCjHVrqaW_-RNJOPo1jWc/yecmbww7ftlh5ri/a3.0.3.zip" }, //24.04.2021

  { name:"Minecraft.Nobody.exe", type:"beta", loader:"bat", style:"creepy", year:2021, zip:"downloads/minecraft.nobody.exe.zip" }, //03.05.2021

  { name:"ChaosCraft v1.1.0", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/chaoscraft1.1.0.zip" }, //23.05.2021

  { name:"Minecraft 1.1 remastered", type:"release", loader:"bat", style:"normal", year:2021, zip:"downloads/1.1 remastered.zip" }, //30.05.2021

  { name:"Alpha v1.2.3_06 (ERROR137)", type:"alpha", loader:"jar", style:"chinese", year:2021, zip:"https://www.mediafire.com/file/7avoqzgp1hz4o8x/a1.2.3_06.zip/file" }, //14.06.2021

  { name:"Alpha v1.2.3_06_1 (ERROR137_01)", type:"alpha", loader:"exe", style:"chinese", year:2021, zip:"https://www.mediafire.com/file/gbtiuwtes1xhl8a/a1.2.3_06_1.zip/file" }, //09.07.2021

  { name:"Minecraft Ghost", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/ghost.zip" }, //15.08.2021

  { name:"Minecraft Ghost (French ver.)", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/ghost french.zip" }, //15.08.2021

  { name:"Delta v0.0.0", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/delta0.0.0.zip" }, //25.08.2021

  { name:"ERROR437_01", type:"release", loader:"jar", style:"chinese", year:2021, zip:"downloads/err437_01.zip" }, //27.08.2021

  { name:"Alpha v1.2.6_04", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"https://www.mediafire.com/file/2a0tag85qhmy1xj/a1.2.6_04.zip/file" }, //06.09.2021

  { name:"ERROR437_02", type:"release", loader:"jar", style:"chinese", year:2021, zip:"downloads/err437_02.zip" }, //23.09.2021

  { name:"Mcaenrfit Btea 1.3_01", type:"beta", loader:"bat", style:"creepy", year:2021, zip:"https://www.mediafire.com/file/b0pm087n0timzi3/mcaenrfit_btea_1.3_01_%2528cursed_b1.3_01%2529.zip/file" }, //26.09.2021

  { name:"Minecraft 1.0.0_01", type:"release", loader:"bat", style:"creepy", year:2021, zip:"downloads/1.0.0_01.zip" }, //30.09.2021

  { name:"ERROR437_03", type:"release", loader:"exe", style:"chinese", year:2021, zip:"downloads/err437_03.zip" }, //17.10.2021

  { name:"ERROR437_04", type:"release", loader:"exe", style:"chinese", year:2021, zip:"downloads/err437_04.zip" }, //20.11.2021
  
  { name:"Alpha v1.2.6_05", type:"alpha", loader:"launcher", style:"creepy", year:2021, zip:"https://www.mediafire.com/file/bl7w6c78zu1x8od/a1.2.6_05.zip/file" }, //26.11.2021

  { name:"ERROR437_05", type:"release", loader:"exe", style:"chinese", year:2021, zip:"downloads/err437_05.zip" }, //08.12.2021

  { name:"Alpha v1.1.2_01", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"https://www.mediafire.com/file/kio873mfloks5wh/a1.1.2_01.zip/file" }, //12.12.2021

  { name:"Alpha D3ATH.exe remastered", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"https://download1586.mediafire.com/6qjn3tawz6bghtWfmUWTpHZtZ1jqlRk6Rg-U2e7aOUoE5tzL2dLTqxh4Mtmucf1_2AyHVhgWRChn1O7CghkPRL3TZLcC7U8UuFF7WllXXPa-mlsWqIjchzUgsrR7ZKJIzH0KpM3EU2gbakIsEhJQXy6hgCvtKHjNVWxSkrJlLNEXHMw/f9q2354ods3pfym/d3ath.exe+remastered.zip" }, //12.12.2021

  { name:"Minecraft Negative", type:"release", loader:"bat", style:"error", year:2021, zip:"downloads/negative.zip" }, //20.12.2021

  { name:"Beta 1.9 Prerelease 7 (ERROR845)", type:"beta", loader:"bat", style:"error", year:2021, zip:"downloads/err845.zip" }, //25.12.2021

  { name:"ERROR437_06", type:"release", loader:"exe", style:"chinese", year:2021, zip:"downloads/err437_06.zip" }, //25.12.2021

  { name:"Beta 1.2_02", type:"beta", loader:"bat", style:"normal", year:2021, zip:"https://download1324.mediafire.com/z7odemp93nbgzO8xHv-wK27qz5WQNRC1zx7wVzczDbP3NPgPk7CZufPoLYB_Zfav0jRhJGfq5OH6WnYG8mOwUpoDKz4edzLc2Kg90s_LtOnX0nY48FMcELbogGWoZv3mY8Hh_cZNRGwUqUZlsMhTYjWY0gCCDtsHB7e_8h56_FpbP2s/aiu6b8v804ji5oa/b1.2_02.zip" }, //27.12.2021

  { name:"Alpha v1.0.3_02", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"https://www.mediafire.com/file/nr011mvro5n64zd/a1.0.3_02.zip/file" }, //29.12.2021

  { name:"Alpha v1.0.3_02 upd-2", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"https://www.mediafire.com/file/so4j1guxhm5roju/a1.0.3_02_upd-2.zip/file" }, //29.12.2021

  { name:"Minecraft Unknown", type:"release", loader:"bat", style:"chinese", year:2021, zip:"downloads/unknown.zip" }, //29.12.2021

  { name:"Beta 1.1_03 (Minecraft Free)", type:"beta", loader:"exe", style:"creepy", year:2022, zip:"https://download1501.mediafire.com/8ugfbdpvk8hgeUp2CcD_gCZDs5uw5YX6CO2bjnYk-K4oDsPcXip_x25rzi3X1y8rmBt5SO-2vv6SvC4kKc0zilnWi6PPnVCtr40i-GWf6IR0g2efpirlKqT_qE_dcA9dMcH1yj3Yvn_TSTtggNHkj18GRYJdf_nB68rZuI8bEsFQu1o/slm5e49s5l2hsts/b1.1_03+%28minecraft+free%29.zip" }, //02.01.2022

  { name:"ERROR437_07", type:"release", loader:"exe", style:"chinese", year:2022, zip:"downloads/err437_07.zip" }, //03.01.2022

  { name:"ERROR437_08", type:"release", loader:"exe", style:"chinese", year:2022, zip:"downloads/err437_08.zip" }, //16.01.2022

  { name:"ERROR437_08_02", type:"release", loader:"exe", style:"chinese", year:2022, zip:"downloads/err437_08_02.zip" }, //16.01.2022

  { name:"Minecraft HEX 3", type:"release", loader:"exe", style:"creepy", year:2022, zip:"downloads/b1.10.zip" }, //29.01.2022

  { name:"Beta 1.7.x", type:"beta", loader:"bat", style:"creepy", year:2022, zip:"https://download946.mediafire.com/m878q43lu8gg1mVAW5Uf38WM3OMvVcbw_kAvuiAkPnIsBU2-VYzrHZT1zSzcmVBQRRLQCqBvv_emtauNrjau4qL6HcAeXbiGRFTCackcAfBRJTJ1PJm2WK9yfsTvlaSrzG3y0Q567wpyyfp-fKBkVHXXfCHEITpza_TSGgwOzmpJXEY/os6d8zzij7d5cwc/b1.7.x.zip" }, //27.02.2022

  { name:"Alpha v1.0.16_02 remastered", type:"alpha", loader:"bat", style:"chinese", year:2022, zip:"https://www.mediafire.com/file/fps1gyf6w6ipef0/a1.0.16_02_remastered.zip/file" }, //02.03.2022

  { name:"Beta 1.5.1", type:"beta", loader:"bat", style:"normal", year:2022, zip:"https://download1648.mediafire.com/9cy9dvlle62g0H4DpbzxGhfX8uBkCy4SoVn-3bhUcBEx4JoqW7uOth_B4UUriy-pfM3PQvliSEFGFUdifVAq85rcxpbp1kshn1Sv7Zg7KwqSLqmn-syg-S-IC0Nxqmzf8dg5kV2KbFiUZ5N04yC_b76TWv5qvXEnCo_ybjJeeTX8qyI/y77cb3lu4sehbuc/b1.5.1.zip" }, //05.03.2022

  { name:"Alpha v1.2.3b", type:"alpha", loader:"bat", style:"normal", year:2022, zip:"https://www.mediafire.com/file/v2bo4wdlfpdg2w2/a1.2.3b.zip/file" }, //06.03.2022

  { name:"Alpha v1.2.6_04 :)", type:"alpha", loader:"bat", style:"creepy", year:2022, zip:"https://www.mediafire.com/file/80phaw2vum25b6q/a1.2.6_04_%253B%2529.zip/file" }, //06.03.2022

  { name:"Minecraft 1.7.3", type:"release", loader:"bat", style:"normal", year:2022, zip:"downloads/1.7.3.zip" }, //11.03.2022

  { name:"Minecraft Unified", type:"release", loader:"bat", style:"creepy", year:2022, zip:"downloads/unified.zip" }, //12.03.2022

  { name:"Minecraft Black Edition", type:"release", loader:"exe", style:"creepy", year:2022, zip:"downloads/black_edition.zip" }, //22.03.2022

  { name:"Beta 1.8.3", type:"beta", loader:"bat", style:"error", year:2022, zip:"https://download1476.mediafire.com/qxf4hk5cymdgBtbvMoXPUacTsI_1GPU4tYzxNrtjfejCoO35kgOfj9ABdzauuCQuQ_-VHhbVTU8rnnSVTcdQkitUsoLyfvio1WeuU671rJ7nGSFxB8MLiXzi3xRtnl000qqkfC_GanOthWPuu42sBc3o0ubQUAmxfE_8V-TjPHqCtEk/5m2zcaxbv2ss5pr/b1.8.3+%28corrupted%29.zip" }, //05.03.2022

  { name:"Mncatapav..ierf lh 126 (Cursed Alpha 1.2.6)", type:"alpha", loader:"bat", style:"creepy", year:2022, zip:"https://download1523.mediafire.com/g14mzihh4bzgZhU4yVzbCwF_dwZxUHNb-XMIz7R8zr1hl8UEhjAPiz7GrKoamNrtoQG0RpLkU0kG-nIgmhGPL4fHWpmB4dcvoCse3ZeTHJNeWMmeimlfkC_FAXn2ErPsV6hCawgmJ7uNkOjexEiABmj9V6QssJ6DzdQWB9OjRHMUuDk/iextqkh3ohvp24j/mncatapav..ierf+lh+126+%28cursed+a1.2.6%29.zip" }, //13.04.2022

  { name:"Beta 1.6.7", type:"beta", loader:"bat", style:"normal", year:2022, zip:"https://download1652.mediafire.com/kgohadpn9z8gkAgiuIV4OXve1zMOmS8a1GOYyqCVifTyx-25I5KYYNfA7Rin--wlh8ZMx1ZcbPdIn2073JFJ7hXx9uX_426HJBlQWjMgSF_LKFGHEuCfvu0gP3UnHhpFqHXrcTyQ66CiyW828IcySnxzptOgq5QNHRSjrTCfv8dmhF4/ynkctvayg0fe8jp/b1.6.7.zip" }, //19.04.2022

  { name:"Beta 1.6.6 Test Build 1", type:"beta", loader:"exe", style:"creepy", year:2022, zip:"https://download1580.mediafire.com/is10jjwx0fqgD-ybxlnLR2WNhPRRKcMEp6XTgwI2N_sOo8kwG3xhoeRFTuI4kSq3cBv997kKMS_rqCRgKOELMkmQX1yFDfmHO04YTPe-LSdH8pEvPiX7X5WWHp9D7GGjTY9iBHWraI-UzuC2bSOF6-5Onj5fu8FSgGVGcmkRxurbov0/m8dfukel7nseryr/b1.6.6-tb1.rar" }, //23.04.2022

  { name:"Beta UNDEFINE", type:"beta", loader:"bat", style:"chinese", year:2022, zip:"https://www.mediafire.com/file/s4mlrropis1l12n/bundefine.zip/file" }, //02.05.2022

  { name:"Alpha v1.2.3_03 reloaded", type:"alpha", loader:"bat", style:"normal", year:2022, zip:"https://www.mediafire.com/file/o9xndcr70ttgf6y/a1.2.3_03_reloaded.zip/file" }, //04.05.2022

  { name:"Minecraft TLORM", type:"alpha", loader:"bat", style:"normal", year:2022, zip:"downloads/tlorm.zip" }, //19.06.2022

  { name:"UNDEFINE upd-1", type:"release", loader:"bat", style:"chinese", year:2022, zip:"downloads/undefine-1.zip" }, //03.07.2022

  { name:"UNDEFINE upd-2", type:"release", loader:"bat", style:"chinese", year:2022, zip:"downloads/undefine-2.zip" }, //05.07.2022

  { name:"UNDEFINE upd-3", type:"release", loader:"bat", style:"chinese", year:2022, zip:"downloads/undefine-3.zip" }, //07.07.2022

  { name:"ERROR422 remastered", type:"release", loader:"exe", style:"error", year:2022, zip:"downloads/err422 remastered.zip" }, //09.07.2022

  { name:"UNDEFINE upd-4", type:"release", loader:"bat", style:"chinese", year:2022, zip:"downloads/undefine-4.zip" }, //26.07.2022

  { name:"ERROR777 (what.rar)", type:"release", loader:"bat", style:"error", year:2022, zip:"downloads/err777.zip" }, //11.07.2022

  { name:"Minecraft 1.1 Patch 1", type:"release", loader:"exe", style:"normal", year:2022, zip:"downloads/1.1-patch-1.zip" }, //11.07.2022

  { name:"ERROR110", type:"alpha", loader:"jar", style:"error", year:2022, zip:"downloads/err110.zip" }, //13.07.2022

  { name:"Beta 1.7.6", type:"beta", loader:"jar", style:"normal", year:2022, zip:"https://download1475.mediafire.com/hdxiodw1ruoggnbgL4Bul67An5ULse0N4TWbqKGNMIZIoG-H0yF_RMjW--WOSSKQkN-BTg38Uub5HRV_VPkfGRPvZ66hXVsw4c4tHzLGwztfnbJdci9iQaiAwUkRzEHtlbBA233IZKRxFF5FuHMb9kRc05-piuF_UroVK7TgGQzyGR0/y39ik252v9g72qw/b1.7.6.rar" }, //18.08.2022

  { name:"Minecraft Unpredicrable", type:"alpha", loader:"bat", style:"creepy", year:2022, zip:"downloads/unpredictable.zip" }, //30.08.2022

  { name:"Minecraft 1.10 Multiplayer Fix", type:"release", loader:"exe", style:"normal", year:2022, zip:"downloads/1.10 multiplayer fix.zip" }, //05.11.2022

  { name:"Alpha v1.3 TESTIFICATE", type:"alpha", loader:"bat", style:"normal", year:2022, zip:"https://www.mediafire.com/file/zv73ffbmxmokmms/a1.3_testificate.zip/file" }, //07.12.2022

  { name:"ERROR391_1", type:"alpha", loader:"bat", style:"error", year:2022, zip:"downloads/err391_1.zip" }, //01.12.2022

  { name:"ERROR391_2", type:"alpha", loader:"bat", style:"error", year:2022, zip:"downloads/err391_2.zip" }, //02.12.2022

  { name:"ERROR391_3", type:"alpha", loader:"bat", style:"error", year:2022, zip:"downloads/err391_3.zip" }, //03.12.2022

  { name:"Beta 1.3b", type:"beta", loader:"launcher", style:"normal", year:2022, zip:"https://download1336.mediafire.com/e49254tu4o3gwZcsJq8LCODxN1SgOCeC9TJbtucjBGJVRT9QGvz-h0YziML_35asKuGuY4AMPYxUEeWyGWOtG8BuSxEops0b9L1mdZWBxaKCHOO0QJwAlOGbcP4H8m0EyzRZe5hQtb_fGEZYFdov7mfJKMRdNU66agprTQwLnOpQAXw/3spivchgqz3te6t/b1.3b.zip" }, //04.12.2022

  { name:"ERROR391_can", type:"beta", loader:"jar", style:"error", year:2022, zip:"downloads/err391_can.zip" }, //05.12.2022

  { name:"Minecraft 404.exe", type:"release", loader:"exe", style:"error", year:2022, zip:"downloads/4.0.4.exe.zip" }, //06.12.2022

  { name:"ERROR391_p1", type:"beta", loader:"jar", style:"pseudochinese", year:2022, zip:"downloads/err391_p1.zip" }, //07.12.2022

  { name:"ERROR391_p2", type:"beta", loader:"jar", style:"pseudochinese", year:2022, zip:"downloads/err391_p2.zip" }, //08.12.2022

  { name:"ERROR391_pre", type:"beta", loader:"jar", style:"pseudochinese", year:2022, zip:"downloads/err391_pre.zip" }, //10.12.2022

  { name:"ERROR391", type:"beta", loader:"jar", style:"pseudochinese", year:2022, zip:"downloads/err391.zip" }, //11.12.2022

  { name:"Minecraft 1.3 testificate goofy ahh edition pre 1", type:"release", loader:"bat", style:"creepy", year:2022, zip:"downloads/1.3tgae_pre-1.zip" }, //16.12.2022

  { name:"ERROR391_01", type:"beta", loader:"jar", style:"error", year:2022, zip:"downloads/err391_01.zip" }, //18.12.2022

  { name:"ERROR391_0_1", type:"beta", loader:"exe", style:"error", year:2022, zip:"downloads/err391_0_1.zip" }, //27.12.2022

  { name:"Alpha v1.2.0_03", type:"alpha", loader:"bat", style:"creepy", year:2023, zip:"https://www.mediafire.com/file/y4jszm9o4k5g7w1/a1.2.0_03.zip/file" }, //03.01.2023

  { name:"Alpha v1.2.8 (ROO)", type:"alpha", loader:"bat", style:"creepy", year:2023, zip:"https://www.mediafire.com/file/r41prm7kq3qkt51/a1.2.8_roo.zip/file" }, //03.01.2023

  { name:"Alpha v1.2.6_05", type:"alpha", loader:"bat", style:"creepy", year:2023, zip:"https://www.mediafire.com/file/70dadsqx1tk0t3u/a1.2.6_05_2.zip/file" }, //03.04.2023

  { name:"Alpha v0.0.1", type:"alpha", loader:"bat", style:"creepy", year:2023, zip:"https://www.mediafire.com/file/zgpaok4kvwht8d3/a0.0.1.zip/file" }, //15.01.2023

  { name:"Alpha v1.0.16_03 (chaos test)", type:"alpha", loader:"bat", style:"creepy", year:2023, zip:"https://www.mediafire.com/file/v2gqpj9qpszbvpk/a1.0.16_03.zip/file" }, //16.01.2023

  { name:"ERROR14827", type:"alpha", loader:"bat", style:"error", year:2023, zip:"downloads/err14827.zip" }, //17.01.2023

  { name:"Minecraft 1.7.20", type:"release", loader:"exe", style:"error", year:2023, zip:"downloads/1.7.20.zip" }, //21.01.2023

  { name:"Alpha v1.0.17_04", type:"release", loader:"bat", style:"normal", year:2023, zip:"https://www.mediafire.com/file/pujq1smx375t502/a1.0.17_04.zip/file" }, //29.01.2023

  { name:"UNDEFINE 2", type:"release", loader:"bat", style:"chinese", year:2023, zip:"downloads/undefine 2.zip" }, //05.02.2023

  { name:"Alpha v1.1.3", type:"alpha", loader:"launcher", style:"normal", year:2023, zip:"https://www.mediafire.com/file/vca3z9agfi1m87z/a1.1.3.zip/file" }, //19.02.2023

  { name:"Delta v0.0.0 v2", type:"alpha", loader:"bat", style:"creepy", year:2023, zip:"downloads/delta0.0.0v2.zip" }, //19.02.2023

  { name:"Beta Night Test Build 1", type:"beta", loader:"bat", style:"creepy", year:2023, zip:"https://download1336.mediafire.com/vlw7q0zdbn7g3qth38Rl7rBXMKIttSnNHMDPC7q52KaSvsF9Ex2IshVWLSh8YxBv127eyb-1V_9ydU3hhHVyh6sIOcdFXfV9_JcOI0Nccuht4rKGcXZHPjM34yDs0czX2upaXcBuL3uOG4FRll7bjCsB2yPzNEaPUu6X8iivhvq2pVk/mkxt97otgxg5yus/bntb1.zip" }, //25.02.2023

  { name:"Beta Night Test Build 2", type:"beta", loader:"bat", style:"error", year:2023, zip:"https://download1591.mediafire.com/rjlpo3idmxpgKCLvrUBd7rvpSvYT1wsLouzkl2XAAdBMZSP9rbCocA8JNIURN52PPRhgsNGRmMHE05G_3mozcoLs8Aney_73QOEHzqreoADCTpj54IyDEbGGRHvjiWuUDJWkbLObib54fhRBZUyAqfirGphm018HmsS52HmfYR8F4WQ/kftwhk344hddxcs/bntb2.zip" }, //25.02.2023

  { name:"Beta Night Test Build 3", type:"beta", loader:"bat", style:"error", year:2023, zip:"https://download1980.mediafire.com/4fda8hut2vqgLuhJpZOHtJd6y8BE5g3Pa4M1X7r_k7o2KUhKbRVmtjxypf4KQ2SNuf2XByCDscLKKp2ZaxPbp32tt637UnqOMcC3qTUwDWmdvKAx5NOIA7E0KHi59jVIZJGS4cL1hBU_mCRwm8UNirsrmtYHRRGvr6_dlwqFLlgTYp8/inz9pr56riiuw5a/bntb3.zip" }, //27.02.2023

  { name:"Tin20me", type:"beta", loader:"exe", style:"pseudochinese", year:2023, zip:"downloads/tin20me.zip" }, //04.03.2023

  { name:"Tin20me_4", type:"beta", loader:"exe", style:"pseudochinese", year:2023, zip:"downloads/tin20me_4.zip" }, //12.03.2023

  { name:"Beta 1.0-bt ", type:"beta", loader:"bat", style:"normal", year:2023, zip:"https://download1478.mediafire.com/xuzgrs38cdkgzTBNnV29o3bIfpGhPnSoqdHMdiRJCqxdqlvUzWK20EEjZFcdMvwjkDBDvPH23kvHyhLL6KIoj_85yhHZrnBGTRYFcjoqH6ps8TthnIZRilrKvB_W7Q2Dz1Z2WClpaGQt0pyywVIfWOpRHVVPCOcNQ_ebdig0TVfpJ-Y/oilw135zewi99fn/b1.0-bt.zip" }, //29.03.2023

  { name:"Alpha v1.0.3_02 remastered", type:"alpha", loader:"bat", style:"normal", year:2023, zip:"https://www.mediafire.com/file/vemlzmueucm4252/a1.0.3_02_remastered.zip/file" }, //01.04.2023

  { name:"True Blue v1.0.0", type:"alpha", loader:"bat", style:"creepy", year:2023, zip:"downloads/tb1.0.0.zip" }, //12.04.2023

  { name:"True Blue v1.1.0", type:"alpha", loader:"bat", style:"creepy", year:2023, zip:"downloads/tb1.1.0.zip" }, //12.04.2023

  { name:"Pre-Classic rd-000000", type:"alpha", loader:"bat", style:"normal", year:2023, zip:"https://download1324.mediafire.com/vly7ofdqgx9gAez2DPqUH6oY_iga-dncD9W5j4rgk08fIMAOJZ1CO-r9WT-GYgqkec3TUX-tqbEQ9TSmddkJQ6y6R6PGlgAK8boOW4NH3wbcJAZJiw1TIqbxpjEdexWTScZoMhi44UVSjDcMJrzghufrQFwYO2gyqHVJFpwjbM9joGY/1ufgq8hqwrhn1qo/rd-000000.zip" }, //18.04.2023

  { name:"Beta 1.3_02", type:"beta", loader:"bat", style:"creepy", year:2023, zip:"https://download1507.mediafire.com/nev2gyrim6lgWlbLDn1KlgFO9RRqGieNHTEV-ch_vr7mTXT1vX0gokbLclD6ckRkcasn6jTJcYCrqsu-7GAzfJ44b2_MZjMxSaTlk4eLy9w0cAZVG8kKbaIDjWjpZ7LtxhT5PxiSvuydXJ-kOxmJmtYB8q2AFGNmMEY58FKXOaRGtpo/6meb337v6vgcpzf/b1.3_02.zip" }, //21.04.2023

  { name:"Beta Night Test Build 4", type:"beta", loader:"bat", style:"creepy", year:2023, zip:"https://download1339.mediafire.com/us1warfxqdugho8uaWPWLSRDkaxUXpERpuX4XBVmVEAtgxn6z50dEoH93CKLyLQXRJpmzATd53EmH2ufXl5dU3KhIoF6uMWc4v9eQsnkrQUm1hh5RqLRAxvfZqMShP59ThGdLvI3jWlu4v4Gvdu1dcrIBs9y1zKb85YR4u_O0-yiBuc/zhhvzx0aftuo9tw/bntb4.zip" }, //11.05.2023

  { name:"ERROR533 (Beta 1.8.4)", type:"beta", loader:"bat", style:"pseudochinese", year:2023, zip:"downloads/err533.zip" }, //13.05.2023

  { name:"ERROR533_01 (Beta 1.8.4)", type:"beta", loader:"bat", style:"pseudochinese", year:2023, zip:"downloads/err533_01.zip" }, //22.05.2023

  { name:"Beta 1.10.2", type:"beta", loader:"bat", style:"normal", year:2023, zip:"https://download948.mediafire.com/8m59h98y6ujg32hRlk9ij3l1jO74udsa8GjoXxgA-gw_ry-aM4_0USRy-ynfXUCr1GCt2KLmt8rz2Nk_04D_JJKWJnj4UcbEiKdZM8dhDb0kTDkATG_E0sg1KcVZ3b0a28lSnQZlxIq6pIH2E8mTuPtdW-0GpzIjbB4wP_3UzDQUUsI/90k45lryymh7ozn/b1.10.2.zip" }, //04.06.2023

  { name:"Beta v1.11", type:"beta", loader:"bat", style:"creepy", year:2023, zip:"https://download1655.mediafire.com/3ladm1329iggZpsAmE_V3As8D5mFAIAVntwoZ-rpp_FuOc5y9gnTWStomMweH4MFDjxyuHZXpSG_ST4rom_WPO0Up-RWwXWqZX_2J4ApR8jloG_JjFQMN2VfpMjq4fV-vl2G4uC8-WF4ZY3kKsR27CZZiPQlykkFkcpLEU9namMUeqE/kiadkc91owjkmky/b1.11.zip" }, //10.06.2023

  { name:"Beta 1.12.2", type:"beta", loader:"bat", style:"normal", year:2023, zip:"https://download1638.mediafire.com/xnewgvxsv4dggDu43PEbJ3zeKdjljGy_cs1iwd_ZTbQO93rHNhePFnv0vbe3o8lPIcCpnR9oYDEUfFUGarrhvowBj43X_KbBpLPfnGBw-cUqNwCLKQmdreDygJnqewnfuabUy2wX8HTBTanbsxVopiyqe8tuesAuDGFqhYaOnJYuKp8/tf8nhrskavcv24d/b1.12.2.zip" }, //10.06.2023

  { name:"Minecraft Unfirmial34", type:"release", loader:"bat", style:"error", year:2023, zip:"downloads/unfirmial34.zip" }, //15.06.2023

  { name:"Minecraft 6.6.6 reloaded", type:"release", loader:"bat", style:"creepy", year:2023, zip:"downloads/6.6.6 reloaded.zip" }, //22.07.2023

  { name:"ERROR533_02 (Beta 1.8.4)", type:"beta", loader:"exe", style:"pseudochinese", year:2023, zip:"downloads/err533_02.zip" }, //02.08.2023

  { name:"Minecraft 1.3 preReIase_3", type:"release", loader:"exe", style:"chinese", year:2023, zip:"downloads/1.3-pre3.zip" }, //11.08.2023

  { name:"Minecraft 1.20_02", type:"release", loader:"bat", style:"creepy", year:2023, zip:"downloads/1.20_02.zip" }, //13.08.2023

  { name:"Minecraft Unconfirmed", type:"beta", loader:"bat", style:"error", year:2023, zip:"downloads/unconfirmed.zip" }, //23.08.2023

  { name:"ERROR533_03 (Beta 1.8.4)", type:"beta", loader:"bat", style:"pseudochinese", year:2023, zip:"downloads/err533_03.zip" }, //24.08.2023

  { name:"Minecraft 1.1.? Test Build ?", type:"release", loader:"launcher", style:"pseudochinese", year:2023, zip:"downloads/1.1.x-tbx.zip" }, //05.10.2023

  { name:"Alpha v1.2.6_06", type:"alpha", loader:"exe", style:"chinese", year:2023, zip:"https://www.mediafire.com/file/sgbpfokmvwz38ye/a1.2.6_06.zip/file" }, //01.11.2023

  { name:"Alpha v1.0.14 Reissue", type:"alpha", loader:"bat", style:"normal", year:2023, zip:"https://www.mediafire.com/file/y9pcslqfbqjhfmy/a1.0.14_reissue.zip/file" }, //05.11.2023

  { name:"Beta 1.8.3 chinese edition", type:"beta", loader:"jar", style:"pseudochinese", year:2023, zip:"https://download938.mediafire.com/0g5k75uxe7wga-xZokTGiTSnUjwOPvr86izpgHObT8PfV8n5xAT0a1vt28dwJk0z4VkKlkLB8nk7fKZNogvCJpak98eMhqyK75iCAC-kVhdVNO_Xb3w6rdnUFy9bJcfpq0QeOzBUmWUJFnAso8w26W4hLxSEl-oEK82M4RijDqS5TUw/3xpfjhz1ojkzx52/b1.8.3+chinese+edition.zip" }, //19.11.2023

  { name:"Minecraft 1.1 Configure", type:"release", loader:"exe", style:"pseudochinese", year:2023, zip:"downloads/1.1 configure.zip" }, //02.12.2023

  { name:"Minecraft 1.1 Configure reupload", type:"release", loader:"bat", style:"pseudochinese", year:2023, zip:"downloads/1.1 configure-1 .zip" }, //02.12.2023

  { name:"Beta 1.7.4 preview", type:"beta", loader:"bat", style:"creepy", year:2024, zip:"https://download1580.mediafire.com/cdagaj66y7mggqFS4Fm332ZqUsSxLHvN7fpJ_J3P18iyAhaP5cQiTnMMPt6_ylYEvjP-BF5x0Ye9h_DawFKiiQ4vVrnetLGGK4AvjwWJ9kRPLEjj37DkhEbzV4Ob10bP2mHcua272kwOunSSwe60ZN7lymFOGLDqAH_2Nl4ykLksNw8/8gf6ino71d2hrr2/b1.7.4-preview.zip" }, //01.01.2024

  { name:"Minecraft UNVERSION", type:"release", loader:"bat", style:"creepy", year:2024, zip:"downloads/unversion.zip" }, //03.01.2024

  { name:"Alpha Pi###", type:"alpha", loader:"launcher", style:"creepy", year:2024, zip:"https://download1325.mediafire.com/7ku8l0brb5ygyEahnZog_nSomua9-KwotHDtbHqnl5nu2ZLDo7HJbySsc_I4J52C7MEZldG-EIUdwKbAG4viDRFy4J20CIE8V26MH9_NfiiuuYVTdKgVp6SEn_HuetcKPuobme5Dr3e2t245Iw9NCxhgFRqPiZiOGn1fbzYuek3OmYE/asr90qsrydld61j/aPI%23%23%23.zip" }, //19.01.2024

  { name:"Alpha v1.2.3_03 chinese (ERROR126)", type:"alpha", loader:"bat", style:"error", year:2024, zip:"https://www.mediafire.com/file/ga2rbjpqomoj7d9/a1.2.3_03_chinese_%2528err126%2529.zip/file" }, //01.02.2024

  { name:"Minecraft 00w00a", type:"snapshot", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/00w00a.zip" }, //02.02.2024

  { name:"Alpha Purple", type:"alpha", loader:"bat", style:"normal", year:2024, zip:"https://download1589.mediafire.com/mct2cpytqdng01O8vDc-iwmTmKl4nXNv8OwilJWtzqegv0oVbLHltj0Aj5upw1W8Fo8Rh37oj22DsnA_htaz3zYnfk2ZX_NHfWPhjdBVonTQwlNZm-zaztwqHOYaBRkbm277RMyGix9aY4303jdXLQjREb0cAGwJoUd4yFxrVnJ9ADQ/klq3v61vz3nw6tr/aPurple.zip" }, //04.02.2024

  { name:"ERROR444", type:"release", loader:"launcher", style:"pseudochinese", year:2024, zip:"downloads/err444.zip" }, //10.02.2024

  { name:"Minecraft 1.2.6 Kardegeta", type:"release", loader:"launcher", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 kardegeta.zip" }, //21.02.2024

  { name:"Delta v0.0.0 v3", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"downloads/delta0.0.0v3.zip" }, //24.02.2024

  { name:"Beta Entity.ERROR", type:"beta", loader:"exe", style:"error", year:2024, zip:"downloads/https://www.mediafire.com/file/ei2awocng9nikz5/entity.error.zip/file" }, //03.03.2024

  { name:"ANYA520_1 (Minecraft.TheEndIsNear)", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/anya520_1.zip" }, //05.03.2024

  { name:"Minecraft 00w00a upd-1", type:"snapshot", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/00w00a-2.zip" }, //10.03.2024

  { name:"Beta 1.3_01 (Minecraft ororaaaй)", type:"beta", loader:"bat", style:"normal", year:2024, zip:"https://download1528.mediafire.com/pzul5g6jspcg6xY9T5ODxguicKTUOHhy15aDtdn5MyPOKPi-0k8jW9bHuFdhnLResBOSjygtOh6NxRyg1PflCiAOwtXJxsfAe7Z7fqjhJuoAHpQkaCxUwPIlNUae1TE6JLDjGOqX1w45quZo0YPqZpFH4FMZv3cAf6iRcF_LahxfhQQ/2e5yj41bg73bfcq/b1.3_01+%28minecraft+ororааай%29.zip" }, //12.03.2024

  { name:"Alpha v1.1.2_02", type:"alpha", loader:"bat", style:"normal", year:2024, zip:"https://www.mediafire.com/file/av37u5oo22i3ffn/a1.1.2_02.zip/file" }, //15.03.2024

  { name:"Minecraft 00w00a upd-2", type:"snapshot", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/00w00a-3.zip" }, //18.03.2024

  { name:"ERROR844", type:"beta", loader:"launcher", style:"pseudochinese", year:2024, zip:"downloads/err844.zip" }, //21.03.2024

  { name:"Minecraft 1.Лi02", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.li02.zip" }, //22.03.2024

  { name:"Beta 1.1 Test Build 1", type:"beta", loader:"bat", style:"normal", year:2024, zip:"https://download1338.mediafire.com/xe2smsn9s9fg7aH1_vzAamP877CbxOjAiLu_MustPw6ye3yRFGQ_aEdSumjldeXG-4rvzSSeJCeHwQwR-qtJjLr-75kY4WavwtwPloiGJYcgpEVvopwkZ8ypji_oPf-eaa-4hZvoKJ5GYCNC3YkV_NcVNwx9KZXLT06dB_Q3FPm4Yn4/f61a1b0x49y196c/b1.1-tb1.zip" }, //23.03.2024

  { name:"Alpha v1.0.9 Free (Mei139)", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"https://www.mediafire.com/file/h0id8wov5rhau3e/a1.0.9_free_%2528mei139%2529.zip/file" }, //25.03.2024

  { name:"ANYA520_3 (Minecraft.TheEndIsNear v3)", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/anya520_3.zip" }, //28.03.2024

  { name:"Beta 1.8.1", type:"beta", loader:"jar", style:"creepy", year:2024, zip:"https://download844.mediafire.com/bgdbb82if9jgca0RDPAfteqCtvHvwrlIW9RZ6wsK-njWibM1jf-GHdp9JLPiQbFCKRYi_Y7BByvjxs9_PkvV4rCk_4sLvJqCBjbaWWxv5OKshX8ztJrGYfAEWGuyQHXpCrjJwz4rf27LQ6VZ51sr6Q6j7wWt8MWHwN1ouQUG7V_soqI/757dhbbmh338vuh/b1.8.1.zip" }, //30.03.2024

  { name:"Beta 1.8.1 upd-1", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"https://download1325.mediafire.com/k7r80ig1plqg9R6T44sfNMZmNJ15Eq7zUwVf8ekdmfH2v6FFa3gQ4nsg6Zil9-M3HuY0YpTE-zyn1EuEFMG5MIOpIEpeakJcqpp6R-Z74jRsz2tFyY1b0mWviQf5UTkXsxNIVKSZCzGeyf83iqqIGRMxyeijJWLUC_XFih_EwYEFTuE/6ygg2df8x3qetqa/b1.8.1+upd-1.zip" }, //30.03.2024

  { name:"Beta 1.8.3-chinese_01", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"https://download1476.mediafire.com/yff8rm3zysagkV1PMS-LkJy6etMgKCN4BBzZgRE3Fg8uT7NXWi2X-HryGLYC8mFBgmqurEBcqKojRD-sZkyydb92mb4pY_G24JYMZcAiY8N7A3MJ753FYU6VO5PMx7S7ORNS_7OBrywWuLOzrERzs8jETw-En1QTqRslU8PqY_CIHQg/91mynenn6azno7q/b1.8.3-chinese_01.zip" }, //30.03.2024

  { name:"Beta 1.8.3-chinese_what", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"https://download943.mediafire.com/5bzqci87t9lg29Q55Yi4kjy3f3eWZzARyjRmRjP78kTyxqFFREVFoqFZCShv_uEFxIluH-9gjjoUcow29GXOcOCXK0wL-gRdpAODVy8I-IztWcvOO0KOxlSbMZoB2tAkzvVxlBXrmrebsdmlCZQr8FAOSGyuQt-F-RZiYxcZCVwwSZE/je59rp9mabszjqn/b1.8.3-chinese_what.zip" }, //30.03.2024

  { name:"Alpha v1.2.3_0X", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"https://www.mediafire.com/file/y0ht1zkls5tkegz/a1.2.3_0x.zip/file" }, //31.03.2024

  { name:"ANYA520_5 (Minecraft.TheEndIsNear v5)", type:"release", loader:"exe", style:"error", year:2024, zip:"downloads/anya520_5.zip" }, //01.04.2024

  { name:"Minecraft 1.2_01", type:"release", loader:"bat", style:"normal", year:2024, zip:"downloads/1.2_01.zip" }, //08.04.2024

  { name:"Minecraft000", type:"alpha", loader:"bat", style:"error", year:2024, zip:"downloads/minecraft000.zip" }, //10.04.2024

  { name:"ChaosCraft v666 build 1008", type:"alpha", loader:"launcher", style:"creepy", year:2024, zip:"downloads/chaoscraft666 build 1008.zip" }, //12.04.2024

  { name:"Minecraft 1.6.5 (cancelled)", type:"release", loader:"exe", style:"normal", year:2024, zip:"downloads/1.6.5 cancelled.zip" }, //13.04.2024

  { name:"Minecraft 1.2.5_01", type:"release", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/1.2.5_01.zip" }, //14.04.2024

  { name:"Beta 1.7_02", type:"beta", loader:"bat", style:"normal", year:2024, zip:"https://download1348.mediafire.com/pjwt8b1zgqyg8h_FPi5XCrlxIOVl0jE4TnMZd_vk0k1Ld7V265MGmvTorn6fIDdF3omIeLIHKpgOt3pDgitdQuJ6X0cyU97vS5JSgbVQ4pLtnPCq_8LO8k5l6V5QHi2J4F3l2Psoh61y8Sxsj9dehlGN1Ov4Rah0HFRubVxMzgEEM3k/39n2jk90bgbbt3i/b1.7_02.rar" }, //22.04.2024

  { name:"Minecraft 1.3.5", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.1.zip" }, //25.04.2024

  { name:"Beta 1.8.3-chinese_02-pre", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"https://download1527.mediafire.com/xbj5wpmqv7bgcvFLbuUXqSMTRqrEEXXmGFpQhXI0xlGhVKxRIlNPw7E5DudZ9NSRYZy8hZkNBRlEqWUN6Oql7ONRqz04N1dR_VVzYGSkhT8k1WV90uNWUyLchUMIgs5QsFy9-JjtHVq84Kgs2CYXzNOZcEKJuy6BmQXHH3lrmS9ikvU/xxr5rri5fc60qqa/b1.8.3-chinese_02-pre.zip" }, //29.04.2024

  { name:"Minecraft 1.2.6 Null", type:"release", loader:"launcher", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null.zip" }, //30.04.2024

  { name:"Minecraft 1.2.6 Null remastered", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered.zip" }, //30.04.2024

  { name:"Beta 1.8.3-chinese_02", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"https://download1326.mediafire.com/sxlwwznbwxmgdryfWOwgitUZ82KjWuYhh6amfZJ5XUx3dHR2OgHZzG4hLLLU4SPlLEpftyB0wxJLUzNyt3tHJ1IcV_KQVIX9Ceom_LZnLVSi0UmQ7h40hJvqfizuQ7PzpYGqYDSfom2Gl-qO2E2MGbhI1lHTUa222F-T0NW3_p1T13Q/e90sbkvedzs7ahw/b1.8.3-chinese_02.zip" }, //01.05.2024

  { name:"Minecraft232", type:"release", loader:"launcher", style:"pseudochinese", year:2024, zip:"downloads/minecraft232.zip" }, //01.05.2024

  { name:"ANYA520_3 (Minecraft.TheEndIsNear v3)", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/anya520_3.zip" }, //02.05.2024

  { name:"Minecraft 1.2.6 Null remastered upd-1", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-2.zip" }, //08.05.2024

  { name:"Minecraft 1.2.6 Null remastered upd-2", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-3.zip" }, //11.05.2024

  { name:"Minecraft Mutilated", type:"alpha", loader:"exe", style:"error", year:2024, zip:"downloads/mutilated.zip" }, //12.05.2024

  { name:"Beta 1.9.0", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"https://download1580.mediafire.com/blzhtdfl6fegligRRXUc3m-wjUEbFj9iN6jJbe7PolJySJPtWEKVd87ZAZp47yFZSUsV9XESnDJ1leC9l1kgGimBVYnQEtX90W0XbiXHXWYMB_GjuK_nqLZxWV4cFsIboaxKDdzQFfQroK6_2pV-lnTmA3Uerz6eNkBXIHE4cxcGjFg/i1rd9sqoq1dqu0l/b1.9.0.zip" }, //15.05.2024

  { name:"Beta 1.8.3-chinese_03-pre", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"https://download844.mediafire.com/qnhqb51n1szgQoWXQUHj-Sp8bawV-IVXA-D1BPy1KF8xIEhrf1tfftOcTA_IK616DcFjwXv65ziJiryVWqPF5HUbOxt2XzigukMJkemPQYi3qfGHi87KPP5UVOce33beOBzm59KbbBUrl2URsavZUolc3T_DnaDmdCoG1et-gAJw4Yo/c93yddf2tdwzy2y/b1.8.3-chinese_03-pre.zip" }, //19.05.2024

  { name:"Minecraft Enigma", type:"beta", loader:"bat", style:"error", year:2024, zip:"downloads/enigma.zip" }, //21.05.2024F

  { name:"Minecraft 0.0.0", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/0.0.0.zip" }, //23.05.2024

  { name:"Beta 1.8.3 remastered", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"https://download1336.mediafire.com/zackbavj6tvgFVGXXZqYqARyA__NmLt8xtN5kyJh38RuLR7Tqf5keAIeFY_Gh5oMOSxgDU6WmsitN9HUQgAyCJUDCnIyC39bwX_vjawj4rtbV_Ur5childwdheRHlW43HPJ7MgKzVGaEstEQZHZ8YuRxNfHPuxWV2ItPejrOQPpPQWI/ayzhrqla9mo9t4l/b1.8.3+remastered.zip" }, //27.05.2024

  { name:"Beta 1.8.3 reload chinese", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"https://download1075.mediafire.com/fhe1hxjb1bhgFtbfrmVYySkYcm_Kq1DAgCey4It24-5biWajkYaRjLVIm-sDLBXMYy5NTrkaPt7g0mK3FUQ2LzvcKJRDR8pBaqNMFd4Dm2iPLA95pl4Vq1PBBgnO5PjTHY9S_FHeU6tGi-CF7QJ_weLiJBW1jtQfHzhVzHrea0mVghc/qq1jndfcym3y8z3/b1.8.3+reload+chinese.zip" }, //29.05.2024

  { name:"ERROR757", type:"alpha", loader:"bat", style:"error", year:2024, zip:"downloads/err757.zip" }, //01.06.2024

  { name:"ERROR422 remastered reload", type:"release", loader:"bat", style:"error", year:2024, zip:"downloads/err422 remastered reload.zip" }, //01.06.2024

  { name:"Minecraft 1.2.6 Null upd-1", type:"release", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null-2.zip" }, //02.06.2024

  { name:"Minecraft 1.2.6 Null remastered upd-3", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-4.zip" }, //03.06.2024

  { name:"Beta 1.8.5", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"https://download1338.mediafire.com/11wrk6bsw7ngk5q-UufCutZhWFiU4b5QRSirxeDhKjQlDLMDCTgTxAtpYnIiqSZwmpsUG2eEnByXJeOm2tWFzWP4dEgTQWFIwX1wG1v3tavlURrDhziL92nb8cWDjlTuJGniZ8lwG2LXS3c7W-p1xxAyRKIty84mKziZNUCH8vysI48/igmt7dewc0pjr4q/b1.8.5.zip" }, //08.06.2024

  { name:"Minecraft 1.2.6 Null remastered upd-4", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-5.zip" }, //08.06.2024

  { name:"Beta 1.8.5 upd-1", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"https://download851.mediafire.com/il3fa6e12rhg90ALyNaADRQ-1HKVrwJMP_rDIFJoH1EE60azZqV2QWzJf4_nTpVqwGraWnN1xkIuXzmX7-oAxo4rwbBdk6LVPl76VXMSdnce2wGkRkFJ0Xb6PW01qoa5C4hvSxto_87y2K3bQeHXNueX0avY-nYqegzcV5ThGT4dhqY/1avm8xf211e9jwh/b1.8.5+upd-1.zip" }, //08.06.2024

  { name:"ERROR147", type:"release", loader:"bat", style:"error", year:2024, zip:"downloads/err147.zip" }, //08.06.2024

  { name:"Beta 1.8.5 upd-2", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"https://download1530.mediafire.com/ruqthy16omggLvm8l0eQK4DfVdAMv1LprDHTOvWEchnVlHK1OnRQUdyDolGLuXIDhrykrPej2B5q4UGLdKsvsArIkmz7D6142TbLIKcDxY_AvHWqTTHthFx8_FL7EjHijD1VZo1dldzVne2cghNQYeV9MxaVINSeWCtHOWTVKg8seo8/osjktj52he2kln9/b1.8.5+upd-2.zip" }, //10.06.2024

  { name:"Minecraft 1.2.6 Null remastered upd-5", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-6.zip" }, //12.06.2024

  { name:"Beta 1.9.0 remastered", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"https://download1077.mediafire.com/wsatqusuz1xgwJwzDz1f44Gsc1P4ywPBMianhdYNieBjyiUUqqQoh4Mj8dmIaqIcgeCM_VvC616Uxe__XQq5Q4MWSLTqHIpT13CCiC6QKOyFbU_iaM81fcrSka62FFPlMPLD5TSguQ50SBKuwabLb9wAAMN4duy8TPKyFgn4eghT1Yo/ouk46yjzykimxq0/b1.9.0+remastered.zip" }, //16.06.2024

  { name:"Alpha Nothcom.mne", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"https://download856.mediafire.com/z36u0s35zsbgU36quQZsRCwyHUJkloEdFj0wwyGV3VxJfj8bizVjxjRrcNNv-2H2fInETREQPr5LhM7_hU5MOwTgS8SBFlUILcFsCqN7-UgvN6aSt4aLjQUVDt3b5dq5Uoi_Has9-NtjMU6nFF-m0q9OAQLPyL-kx3uyTOm8OHQF3Uk/ry7xj2fqawjh7fi/anothcom.mne.zip" }, //17.06.2024

  { name:"Minecraft Unconstructed", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/unconstructed.zip" }, //21.06.2024

  { name:"Minecraft 1.3.5 upd-1", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.3.5-1.zip" }, //21.06.2024

  { name:"Minecraft 1.2.6 Null remastered upd-6", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-7.zip" }, //23.06.2024

  { name:"Minecraft MiTERgNAB (MapIcc.she.is.hurting.you)", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/mitergnab.zip" }, //10.04.2024
  
  { name:"Minecraft 1.2.5_01 remake", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.5_01 remake.zip" }, //11.07.2024

  { name:"Beta 1.8.3_01", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"https://download1335.mediafire.com/qm8j7cxz70rggbf4GC-CBtYTVVLnZUPVKvALsiIxj-x-fGNPyvDt_MDu2lajkdg7G9c3F3CO_KcXVIm0nMJOY6IMhPV__kCxHXxFFsw4jEnC02yClzCkzEYoKxWccp1Z0t3Hz8289q2zQ6a0LnekE7K-Tim_ecHP6rYVjcpqO-9iczg/z3u1lw8g6afdlry/b1.8.3_01.zip" }, //07.08.2024

  { name:"Minecraft 1.2.6.exe", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/1.2.6.exe.zip" }, //10.08.2026

  { name:"Minecraft 1.1.0 Test Build 5", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.1.0-tb-5.zip" }, //16.08.2024

  { name:"Beta 1.1a", type:"beta", loader:"bat", style:"normal", year:2024, zip:"hhttps://download848.mediafire.com/38w5rsvhxcygpMIbO2ZvbBVoFKmP4b_foW8hHtwU-Y0YsOEmS1toTVS5lxWDOUrnjTCPUJ4AY3DDGQaGOcEgkzKpCcne7gbaEO1BAwBFYrsJn52SLxJ2DFG7QmpvoxHYN0hPvf1NK8plo5FqR31XP96Ax94Z59hdcG57qRazG94YWmk/wmwy39eb11sbrn2/b1.1a.zip" }, //27.08.2024

  { name:"Beta 6.6.6", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"https://download1580.mediafire.com/honhmmowjx6gzRSL0G8Qmdiuhfxyo2zFXGVRKBuj0tuYiJ6ljVfn4QcSvV57cXgrGnCRYP9CUr6lUyt3PUolRQonnD97MhAiqwSwHV6PbCDqTHf-FmNBH3AHAT-kXXfNtNrOTB0875XQL6Nc3PGiAs3y6Jz3awvRnw9HucDKZzoGTHM/cf648ixsdngotmp/b6.6.6.zip" }, //27.08.2024

  { name:"Alpha 1.2B", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"https://www.mediafire.com/file/xi6wbn125vvx1gj/a1.2b.zip/file" }, //29.08.2024

  { name:"Minecraft 1.8.8", type:"release", loader:"bat", style:"normal", year:2024, zip:"downloads/1.8.8.zip" }, //04.09.2024

  { name:"Minecraft Free (Stingray)", type:"beta", loader:"bat", style:"creepy", year:2024, zip:"downloads/stingray.zip" }, //20.09.2024

  { name:"Minecraft 1.3.2 Disorderly", type:"release", loader:"launcher", style:"error", year:2024, zip:"downloads/1.3.2 disorderly.zip" }, //30.09.2024

  { name:"Minecraft 1.3.2 multiplayer mode", type:"release", loader:"exe", style:"normal", year:2024, zip:"downloads/1.3.2 mp mode.zip" }, //01.10.2024

  { name:"True Blue v1.2.0", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"downloads/tb1.2.0.zip" }, //20.10.2024

  { name:"Alpha v1.0.6_02", type:"alpha", loader:"bat", style:"normal", year:2025, zip:"https://www.mediafire.com/file/z1eb2j8g81aqhen/a1.0.6_02.zip/file" }, //02.01.2025

  { name:"Beta 1.7.5 (ERROR175)", type:"beta", loader:"bat", style:"creepy", year:2025, zip:"https://download1583.mediafire.com/ccdvhhp7m19gD3zHgNaDnRaP0eMBVrTG6UpnnzhOObP0TIrXLZK4Fr1lY0-_2jWNlrkrlSPIPf48bWbbZT2JXNyltftg8Sj4x8vBN0x2AgCR3RaFIPrbw88sxGCuJp48PqkyRWD7dOLn6pIElcVab0gzLpR_10_Gzi4q_k6VdNonzGM/yuvr5ksnw8ljt7r/b1.7.5+%28err175%29.zip" }, //16.03.2025

  { name:"Beta 1.8_01", type:"beta", loader:"bat", style:"normal", year:2025, zip:"https://download1339.mediafire.com/gjex2uazkifgqxEui1-c_I8clSOLUI11NrMBGXgyFlCtsBC-1o6R1xDrd3ucn_IeUUGvhcYL0x0_Z7KbpPX7YBYPKCyiPt3S_G5gTeusccYvafXofUXX7SEJSaix5AMF-Fe2F7Wf5mXKlfAaX9nMJkDajId_vrMg3pYJdn2H7UuuyAc/765y93uvbdhzgb8/b1.8_01.zip" }, //18.03.2025

  { name:"Alpha v1.1.1_01", type:"alpha", loader:"bat", style:"error", year:2025, zip:"https://www.mediafire.com/file/lzpzs1p0gesbqrj/a1.1.1_01.zip/file" }, //01.04.2025

  { name:"Alpha v1.0.0", type:"alpha", loader:"bat", style:"normal", year:2025, zip:"https://www.mediafire.com/file/hdh46lk01rii3m8/a1.0.0.zip/file" }, //03.04.2025

  { name:"Minecraft Death", type:"release", loader:"bat", style:"pseudochinese", year:2025, zip:"downloads/minecraft death.zip" }, //13.04.2025

  { name:"Minecraft 1.2.3_03 SinglePlayer Fix", type:"release", loader:"bat", style:"pseudochinese", year:2026, zip:"downloads/1.2.3_03 sp fix.zip" }, //18.04.2025

  { name:"ERROR888 (VIRUSES!!!)", type:"release", loader:"multimc", style:"pseudochinese", year:2025, zip:"downloads/err888.zip" }, //14.05.2025

  { name:"ERROR888", type:"release", loader:"multimc", style:"pseudochinese", year:2025, zip:"downloads/err888_safe.zip" }, //14.05.2025

  { name:"Alpha v1.0.7 Developer Test", type:"alpha", loader:"bat", style:"normal", year:2025, zip:"https://www.mediafire.com/file/5y4m1iwhfp2c0lg/a1.0.7-devtest.zip/file" }, //19.05.2025

  { name:"Minecraft 1.11.3", type:"release", loader:"exe", style:"error", year:2025, zip:"downloads/1.11.3.zip" }, //29.05.2025

  { name:"ANYA000 (1.1_000)", type:"release", loader:"bat", style:"error", year:2025, zip:"downloads/anya000.zip" }, //14.05.2025

  { name:"Minecraft Binary", type:"release", loader:"bat", style:"chinese", year:2025, zip:"downloads/binary.zip" }, //03.06.2025

  { name:"Beta 1.8.1_03", type:"beta", loader:"bat", style:"normal", year:2025, zip:"https://download1349.mediafire.com/9cvbjdd2x7sgsrb08SY6YjuuSjcUDl1Azb9n9OzMvbUCbOglgmKv71PuaSEXyu9AmCpARJDWeKdviJ7_tS_kK_WwMPUhUqzz7Wnkx5etqm1TwrON7LemA7rBBQF85uDlSm-210mAE_KtkMo97BjVO5VN9O2R8FUU2MgI9dBloggjKGE/7l1m4ftrxfanyw8/b1.8.1_03.zip" }, //19.10.2025

  { name:"Beta 1.7.3_01", type:"beta", loader:"bat", style:"normal", year:2025, zip:"https://download1527.mediafire.com/07umodpr5aqgDS2lpUkyDIRqH2YT7mhk4raS75KCHGbzaAmt9bWWl8e2ZwQYrVj9zM4KMeaLAp-jrxzqOtqN_lPrY4GOrW2qUxCjZyOLiOqY97hFC7jy7-_8-IMObSpJst6QDIQZVMeQwYelrvW0O9XgjOzpXQhZeT8HSVPRhfSaBv0/nias8jcqdv0tcy4/b1.7.3_01.zip" }, //26.10.2025

  { name:"Alpha v8.8.8", type:"alpha", loader:"exe", style:"error", year:2026, zip:"https://download1334.mediafire.com/74w0gdsdxicgE02HpgkIU5hi2mO1mwLM80Tu60TYOebbb2_WQqoJGCsV1oFHlt2uNPk8nAhTeK-Un4vjgaxElylKMbks-LZA7o-DqzXvSq4eIFZPaCtscdwSY1bciQqum7V50qdD6U253Wll-sDO7t9G9t1ttQM0V1HgsGm4Fx1qnpQ/fa58fo8fjq5d355/a8.8.8.zip" }, //18.01.2026

  { name:"Alpha v1.3.8", type:"alpha", loader:"multimc", style:"creepy", year:2026, zip:"https://www.mediafire.com/file/iu1ct7knmp34ppj/a1.3.8.zip/file" }, //12.02.2026

  { name:"ERROR6812", type:"release", loader:"bat", style:"pseudochinese", year:2026, zip:"downloads/err6812.zip" }, //29.03.2026

  { name:"ERROR112", type:"release", loader:"bat", style:"pseudochinese", year:2026, zip:"downloads/err122.zip" }, //25.05.2026

  { name:"Beta 1.6.8 Test Build 1", type:"beta", loader:"bat", style:"normal", year:2026, zip:"https://download1501.mediafire.com/3tj9bcd271hgZP3wKxebLZTapYIr4PvOC8AuGjScUnC91zhBXqp_giOWM7bpqgKcrlOIWF3peKl3cugs-l7aqbmj8maa-pmOKsIWPMkywySjIMllRDSvGRH4jVw9-ni3O038DjjwNrbUL9YNsnVfPI59_LD5SCFWSCqrnyULjlod_r0/i2grkapgzm6787n/b1.6.8-tb1.zip" }, //01.06.2026

  { name:"Alpha v1.2.3_07 (ERROR126)", type:"alpha", loader:"exe", style:"chinese", year:2026, zip:"https://www.mediafire.com/file/5rld06h3slqii7s/a1.2.3_07.zip/file" }, //26.06.2026

  { name:"Alpha v1.4_05", type:"alpha", loader:"bat", style:"creepy", year:2026, zip:"https://download1338.mediafire.com/kb9nf6ziosxgWr8ZKB1Fc0h608NxgT7u-O_lXcw7nlE2Fb0BU4o2yrFr12EiRGgY-v3vwuP3ekd_phUYTk3JwOi5C8VYJ9cTLi9xFksbbIj7_5DfBlXnp1Ng1C418u_xcnBjHdN-sOoibwrD36jvZDlFk0KbzSTbQUK_2FvN4R67qGg/4m5cpgunk6wzchw/a1.4_05.zip" }, //13.07.2026

  { name:"Alpha v1.2.6_03b (ERROR272)", type:"alpha", loader:"bat", style:"creepy", year:2026, zip:"https://www.mediafire.com/file/3wir3urdppd66pv/a1.2.6_03b_%2528err272%2529.zip/file" }, //14.07.2026

  { name:"Minecraft 1.3.5 upd-2", type:"release", loader:"bat", style:"chinese", year:2026, zip:"downloads/1.3.5-2.zip" }, //09.08.2026

  { name:"ERROR769", type:"release", loader:"bat", style:"pseudochinese", year:2026, zip:"downloads/err769.zip" }, //28.08.2026

  { name:"UNMINECRAFT 1.2.5", type:"release", loader:"bat", style:"pseudochinese", year:2026, zip:"downloads/unminecraft-1.2.6.zip" }, //11.09.2026

  { name:"Minecraft 1.3.7_01", type:"release", loader:"bat", style:"pseudochinese", year:2026, zip:"downloads/1.3.7_01.zip" }, //01.10.2026

  { name:"Minecraft 1.14 but", type:"release", loader:"exe", style:"normal", year:2026, zip:"downloads/1.14 but.zip" }, //08.10.2026

  { name:"Minecraft ERROR HELL", type:"release", loader:"jar", style:"pseudochinese", year:2026, zip:"downloads/error_hell.zip" }, //28.10.2026

];

const uniq = key => [...new Set(versions.map(v => v[key]))];

function buildColumn(containerId, key) {
  const box = document.getElementById(containerId);
  box.innerHTML = uniq(key).map(val =>
    `<button type="button" class="chip" data-key="${key}" data-val="${val}">${val}</button>`
  ).join('');
}
buildColumn('col-type', 'type');
buildColumn('col-loader', 'loader');
buildColumn('col-style', 'style');
buildColumn('col-year', 'year');

const active = { type:new Set(), loader:new Set(), style:new Set(), year:new Set() };

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const { key, val } = chip.dataset;
    if (active[key].has(val)) { active[key].delete(val); chip.classList.remove('on'); }
    else { active[key].add(val); chip.classList.add('on'); }
    render();
  });
});

const list = document.getElementById('version-list');
function render() {
  const q = document.getElementById('search').value.trim().toLowerCase();
  list.innerHTML = versions.filter(v => {
    const byName = !q || v.name.toLowerCase().includes(q);
    const byT = !active.type.size || active.type.has(v.type);
    const byL = !active.loader.size || active.loader.has(v.loader);
    const byS = !active.style.size || active.style.has(v.style);
    const byY = !active.year.size || active.year.has(String(v.year));
    return byName && byT && byL && byS && byY;
  }).map(v => `
    <div class="version-item ${v.style}">
      <h2>${v.name}</h2>
      <p>${v.type} | ${v.loader} | ${v.style} | ${v.year}</p>
      <a href="${v.zip}" download>Download ZIP</a>
    </div>`).join('') || '<p class="empty">No versions found.</p>';
}

document.getElementById('search').addEventListener('input', render);

document.getElementById('reset-btn').addEventListener('click', () => {
  Object.values(active).forEach(s => s.clear());
  document.querySelectorAll('.chip.on').forEach(c => c.classList.remove('on'));
  document.getElementById('search').value = '';
  render();
});

render();
