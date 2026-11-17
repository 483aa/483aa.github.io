// versions.js — фильтры теперь рендерятся как чипы-переключатели
const versions = [
  { name:"Alpha v1.0.16_02", type:"alpha", loader:"bat", style:"normal", year:2010, zip:"downloads/a1.0.16_02.zip"}, // 13.08.2010

  { name:"Alpha v1.1.1x", type:"alpha", loader:"launcher", style:"normal", year:2010, zip:"downloads/a1.1.1x.zip"}, // 18.09.2010

   { name:"Minecraft 15w14a", type:"snapshot", loader:"launcher", style:"normal", year:2015, zip:"downloads/15w14a.zip" }, //06.07.2015

  { name:"Minecraft HEX", type:"release", loader:"exe", style:"creepy", year:2019, zip:"downloads/hex.zip" }, //30.06.2019

  { name:"Beta 1.10", type:"beta", loader:"bat", style:"normal", year:2020, zip:"downloads/b1.10.zip" }, //16.01.2020

  { name:"Minecraft HEX 2", type:"release", loader:"launcher", style:"normal", year:2020, zip:"downloads/hex2.zip" }, //22.01.2020

  { name:"Beta 1.7.1", type:"beta", loader:"bat", style:"normal", year:2020, zip:"downloads/b1.7.1.zip" }, //23.02.2020

  { name:"Alpha v1.2.6_01", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"downloads/a1.2.6_01.zip" }, //25.02.2020

   { name:"Minecraft 6.6.6", type:"release", loader:"bat", style:"creepy", year:2020, zip:"downloads/6.6.6.zip" }, //07.03.2020

  { name:"Alpha v0.0.0", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"downloads/a0.0.0.zip" }, //02.04.2020

  { name:"Alpha v1.2.6_02", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"downloads/a1.2.6_02.zip" }, //10.04.2020

  { name:"Minecraft 1.1", type:"release", loader:"launcher", style:"normal", year:2020, zip:"downloads/1.1.zip" }, //25.04.2020

  { name:"Beta 1.8.2", type:"beta", loader:"bat", style:"normal", year:2020, zip:"downloads/b1.8.2.zip" }, //29.04.2020

  { name:"Alpha 666.exe", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"downloads/a666.exe.zip" }, //02.05.2020

  { name:"Alpha D3ATH.exe", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"downloads/d3ath.exe.zip" }, //03.05.2020

  { name:"Alpha v1.2.6_03", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"downloads/a1.2.6_03.zip" }, //11.05.2020

  { name:"Alpha v1.2.3_03 remastered", type:"alpha", loader:"bat", style:"normal", year:2020, zip:"downloads/a1.2.3_03 remastered.zip" }, //22.05.2020

  { name:"Alpha Herobrine Test", type:"alpha", loader:"bat", style:"normal", year:2020, zip:"downloads/aherobrine_test.zip" }, //19.07.2020

  { name:"Minecraft 1.20 Test", type:"release", loader:"exe", style:"normal", year:2020, zip:"downloads/1.20 test.zip" }, //08.08.2020

  { name:"ERROR422", type:"release", loader:"exe", style:"error", year:2020, zip:"downloads/err422.zip" }, //11.08.2020

  { name:"Minecraft HEX remastered", type:"release", loader:"bat", style:"creepy", year:2020, zip:"downloads/hex remastered.zip" }, //28.08.2020

  { name:"Beta v1.0.1", type:"beta", loader:"bat", style:"normal", year:2020, zip:"downloads/b1.0.1.zip" }, //07.11.2020

  { name:"Alpha v1.2.7", type:"alpha", loader:"bat", style:"normal", year:2020, zip:"downloads/a1.2.7.zip" }, //02.12.2020

  { name:"ChaosCraft v1.0.0", type:"alpha", loader:"bat", style:"creepy", year:2020, zip:"downloads/chaoscraft1.0.0.zip" }, //23.12.2020

  { name:"ERROR633", type:"alpha", loader:"bat", style:"error", year:2021, zip:"downloads/err633.zip" }, //29.01.2021

  { name:"Alpha v1.2.3_03", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"downloads/a1.2.3_03.zip" }, //08.02.2021

  { name:"Alpha vE.R.R.O.R", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"downloads/ae.r.r.o.r.zip" }, //25.03.2021

  { name:"Alpha v1.2.4", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"downloads/a1.2.4.zip" }, //01.04.2021

  { name:"Beta 1.5_02", type:"beta", loader:"bat", style:"normal", year:2021, zip:"downloads/b1.5_02.zip" }, //10.04.2021

  { name:"Alpha v3.0.3", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"downloads/a3.0.3.zip" }, //24.04.2021

  { name:"ChaosCraft v1.1.0", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/chaoscraft1.1.0.zip" }, //23.05.2021

  { name:"Minecraft 1.1 remastered", type:"release", loader:"bat", style:"normal", year:2021, zip:"downloads/1.1 remastered.zip" }, //30.05.2021

  { name:"Alpha v1.2.3_06", type:"alpha", loader:"jar", style:"chinese", year:2021, zip:"downloads/a1.2.3_06.zip" }, //14.06.2021

  { name:"Alpha v1.2.3_06_1", type:"alpha", loader:"exe", style:"chinese", year:2021, zip:"downloads/a1.2.3_06_1.zip" }, //09.07.2021

  { name:"Minecraft Ghost", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/ghost.zip" }, //15.08.2021

  { name:"Minecraft Ghost (French ver.)", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/ghost french.zip" }, //15.08.2021

  { name:"Delta v0.0.0", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/delta0.0.0.zip" }, //25.08.2021

  { name:"ERROR437_01", type:"release", loader:"jar", style:"chinese", year:2021, zip:"downloads/err437_01.zip" }, //27.08.2021

  { name:"Alpha v1.2.6_04", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"downloads/a1.2.6_04.zip" }, //06.09.2021

  { name:"ERROR437_02", type:"release", loader:"jar", style:"chinese", year:2021, zip:"downloads/err437_02.zip" }, //23.09.2021

  { name:"Mcaenrfit Btea 1.3_01", type:"beta", loader:"bat", style:"creepy", year:2021, zip:"downloads/mcaenrfit btea 1.3_01.zip" }, //26.09.2021

  { name:"Minecraft 1.0.0_01", type:"release", loader:"bat", style:"creepy", year:2021, zip:"downloads/1.0.0_01.zip" }, //30.09.2021

  { name:"ERROR437_03", type:"release", loader:"exe", style:"chinese", year:2021, zip:"downloads/err437_03.zip" }, //17.10.2021

  { name:"ERROR437_04", type:"release", loader:"exe", style:"chinese", year:2021, zip:"downloads/err437_04.zip" }, //20.11.2021
  
  { name:"Alpha v1.2.6_05", type:"alpha", loader:"launcher", style:"creepy", year:2021, zip:"downloads/a1.2.6_05.zip" }, //26.11.2021

  { name:"ERROR437_05", type:"release", loader:"exe", style:"chinese", year:2021, zip:"downloads/err437_05.zip" }, //08.12.2021

  { name:"Alpha v1.1.2_01", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/a1.1.2_01.zip" }, //12.12.2021

  { name:"Alpha D3ATH.exe remastered", type:"alpha", loader:"bat", style:"creepy", year:2021, zip:"downloads/d3ath.exe remastered.zip" }, //12.12.2021

  { name:"Minecraft Negative", type:"release", loader:"bat", style:"error", year:2021, zip:"downloads/negative.zip" }, //20.12.2021

  { name:"Beta 1.9 Prerelease 7 (ERROR845)", type:"beta", loader:"bat", style:"error", year:2021, zip:"downloads/err845.zip" }, //25.12.2021

  { name:"ERROR437_06", type:"release", loader:"exe", style:"chinese", year:2021, zip:"downloads/err437_06.zip" }, //25.12.2021

  { name:"Beta 1.2_02", type:"beta", loader:"bat", style:"normal", year:2021, zip:"downloads/b1.2_02.zip" }, //27.12.2021

  { name:"Alpha v1.0.3_02", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"downloads/a1.0.3_02.zip" }, //29.12.2021

  { name:"Alpha v1.0.3_02 upd-2", type:"alpha", loader:"bat", style:"normal", year:2021, zip:"downloads/a1.0.3_02-2.zip" }, //29.12.2021

  { name:"Beta 1.1_03 (Minecraft Free)", type:"beta", loader:"exe", style:"creepy", year:2022, zip:"downloads/b1.1_03.zip" }, //02.01.2022

  { name:"ERROR437_07", type:"release", loader:"exe", style:"chinese", year:2022, zip:"downloads/err437_07.zip" }, //03.01.2022

  { name:"ERROR437_08", type:"release", loader:"exe", style:"chinese", year:2022, zip:"downloads/err437_08.zip" }, //16.01.2022

  { name:"ERROR437_08_02", type:"release", loader:"exe", style:"chinese", year:2022, zip:"downloads/err437_08_02.zip" }, //16.01.2022

  { name:"Minecraft HEX 3", type:"release", loader:"exe", style:"creepy", year:2022, zip:"downloads/b1.10.zip" }, //29.01.2022

  { name:"Beta 1.7.x", type:"beta", loader:"bat", style:"creepy", year:2022, zip:"downloads/b1.7.x.zip" }, //27.02.2022

  { name:"Alpha v1.0.16_02 remastered", type:"alpha", loader:"bat", style:"chinese", year:2022, zip:"downloads/a1.0.16_02 remastered.zip" }, //02.03.2022

  { name:"Beta 1.5.1", type:"beta", loader:"bat", style:"normal", year:2022, zip:"downloads/b1.5.1.zip" }, //05.03.2022

  { name:"Alpha v1.2.3b", type:"alpha", loader:"bat", style:"normal", year:2022, zip:"downloads/a1.2.3b.zip" }, //06.03.2022

  { name:"Alpha v1.2.6_04 :)", type:"alpha", loader:"bat", style:"creepy", year:2022, zip:"downloads/a1.2.6_04-smile.zip" }, //06.03.2022

  { name:"Minecraft 1.7.3", type:"release", loader:"bat", style:"normal", year:2022, zip:"downloads/1.7.3.zip" }, //11.03.2022

  { name:"Minecraft Black Edition", type:"release", loader:"exe", style:"creepy", year:2022, zip:"downloads/black_edition.zip" }, //22.03.2022

  { name:"Mncatapav..ierf lh 126", type:"alpha", loader:"bat", style:"creepy", year:2022, zip:"downloads/mncatapav..ierf lh 126.zip" }, //13.04.2022

  { name:"Beta 1.6.6 Test Build 1", type:"beta", loader:"exe", style:"creepy", year:2022, zip:"downloads/b1.6.6-tb1.zip" }, //23.04.2022

  { name:"Alpha v1.2.3_03 reloaded", type:"alpha", loader:"bat", style:"normal", year:2022, zip:"downloads/a1.2.3_03 reloaded.zip" }, //04.05.2022

  { name:"Minecraft TLORM", type:"alpha", loader:"bat", style:"normal", year:2022, zip:"downloads/tlorm.zip" }, //19.06.2022

  { name:"ERROR422 remastered", type:"release", loader:"exe", style:"error", year:2022, zip:"downloads/err422 remastered.zip" }, //09.07.2022

  { name:"ERROR777 (what.rar)", type:"release", loader:"bat", style:"error", year:2022, zip:"downloads/err777.zip" }, //08.02.2021

  { name:"ERROR110", type:"alpha", loader:"jar", style:"error", year:2022, zip:"downloads/err110.zip" }, //13.07.2022

  { name:"Minecraft 1.1 Patch 1", type:"release", loader:"exe", style:"normal", year:2022, zip:"downloads/1.1-patch-1.zip" }, //26.07.2022

  { name:"Beta 1.7.6", type:"beta", loader:"jar", style:"normal", year:2022, zip:"downloads/b1.7.6.zip" }, //18.08.2022

  { name:"Minecraft 1.10 Multiplayer Fix", type:"release", loader:"exe", style:"normal", year:2022, zip:"downloads/1.10 multiplayer fix.zip" }, //05.11.2022

  { name:"Alpha v1.3 TESTIFICATE", type:"alpha", loader:"bat", style:"normal", year:2022, zip:"downloads/a1.3 testificate.zip" }, //07.12.2022

  { name:"ERROR391_1", type:"alpha", loader:"bat", style:"error", year:2022, zip:"downloads/err391_1.zip" }, //01.12.2022

  { name:"ERROR391_2", type:"alpha", loader:"bat", style:"error", year:2022, zip:"downloads/err391_2.zip" }, //02.12.2022

  { name:"ERROR391_3", type:"alpha", loader:"bat", style:"error", year:2022, zip:"downloads/err391_3.zip" }, //03.12.2022

  { name:"ERROR391_can", type:"beta", loader:"jar", style:"error", year:2022, zip:"downloads/err391_can.zip" }, //05.12.2022

  { name:"Minecraft 4.0.4.exe", type:"release", loader:"exe", style:"error", year:2022, zip:"downloads/4.0.4.exe.zip" }, //06.12.2022

  { name:"ERROR391_p1", type:"beta", loader:"jar", style:"pseudochinese", year:2022, zip:"downloads/err391_p1.zip" }, //07.12.2022

  { name:"ERROR391_p2", type:"beta", loader:"jar", style:"pseudochinese", year:2022, zip:"downloads/err391_p2.zip" }, //08.12.2022

  { name:"ERROR391_pre", type:"beta", loader:"jar", style:"pseudochinese", year:2022, zip:"downloads/err391_pre.zip" }, //10.12.2022

  { name:"ERROR391", type:"beta", loader:"jar", style:"pseudochinese", year:2022, zip:"downloads/err391.zip" }, //11.12.2022

  { name:"ERROR391_01", type:"beta", loader:"jar", style:"error", year:2022, zip:"downloads/err391_01.zip" }, //18.12.2022

  { name:"ERROR391_0_1", type:"beta", loader:"exe", style:"error", year:2022, zip:"downloads/err391_0_1.zip" }, //27.12.2022

  { name:"Alpha v1.0.16_03", type:"alpha", loader:"bat", style:"creepy", year:2023, zip:"downloads/a1.0.16_03.zip" }, //16.01.2023

  { name:"ERROR14827", type:"alpha", loader:"bat", style:"error", year:2023, zip:"downloads/err14827.zip" }, //17.01.2023

  { name:"Minecraft 1.7.20", type:"release", loader:"exe", style:"error", year:2023, zip:"downloads/1.7.20.zip" }, //21.01.2023

  { name:"Alpha v1.1.3", type:"alpha", loader:"launcher", style:"normal", year:2023, zip:"downloads/a1.1.3.zip" }, //19.02.2023

  { name:"Tin20me", type:"beta", loader:"exe", style:"pseudochinese", year:2023, zip:"downloads/tin20me.zip" }, //04.03.2023

  { name:"Tin20me_4", type:"beta", loader:"exe", style:"pseudochinese", year:2023, zip:"downloads/tin20me_4.zip" }, //12.03.2023

  { name:"Beta UNDEFINE", type:"beta", loader:"bat", style:"chinese", year:2023, zip:"downloads/bundefine.zip" }, //25.03.2023

  { name:"Beta 1.0-bt ", type:"beta", loader:"bat", style:"normal", year:2023, zip:"downloads/b1.0-bt.zip" }, //29.03.2023

  { name:"Alpha v1.0.3_02 remastered", type:"alpha", loader:"bat", style:"normal", year:2023, zip:"downloads/a1.0.3_02 remastered.zip" }, //01.04.2023

  { name:"Pre-Classic rd-000000", type:"alpha", loader:"bat", style:"normal", year:2023, zip:"downloads/rd-000000.zip" }, //18.04.2023

  { name:"Beta 1.3_02", type:"beta", loader:"bat", style:"creepy", year:2023, zip:"downloads/b1.3_02.zip" }, //21.04.2023

  { name:"ERROR533 (Beta 1.8.4)", type:"beta", loader:"bat", style:"pseudochinese", year:2023, zip:"downloads/err533.zip" }, //13.05.2023

  { name:"ERROR533_01 (Beta 1.8.4)", type:"beta", loader:"bat", style:"pseudochinese", year:2023, zip:"downloads/err533_01.zip" }, //22.05.2023

  { name:"Beta 1.10.2", type:"beta", loader:"bat", style:"normal", year:2023, zip:"downloads/b1.10.2.zip" }, //04.06.2023

  { name:"Beta v1.11", type:"beta", loader:"bat", style:"creepy", year:2023, zip:"downloads/b1.11.zip" }, //10.06.2023

  { name:"Beta 1.12.2", type:"beta", loader:"bat", style:"normal", year:2023, zip:"downloads/b1.12.2.zip" }, //10.06.2023

  { name:"Minecraft 6.6.6 reloaded", type:"release", loader:"bat", style:"creepy", year:2023, zip:"downloads/6.6.6 reloaded.zip" }, //22.07.2023

  { name:"ERROR533_02 (Beta 1.8.4)", type:"beta", loader:"exe", style:"pseudochinese", year:2023, zip:"downloads/err533_02.zip" }, //02.08.2023

  { name:"Minecraft 1.3 preReIase_3", type:"release", loader:"exe", style:"normal", year:2023, zip:"downloads/1.3-pre3.zip" }, //11.08.2023

  { name:"Minecraft 1.20_02", type:"release", loader:"bat", style:"creepy", year:2023, zip:"downloads/1.20_02.zip" }, //13.08.2023

  { name:"Minecraft Unconfirmed", type:"beta", loader:"bat", style:"error", year:2023, zip:"downloads/unconfirmed.zip" }, //23.08.2023

  { name:"ERROR533_03 (Beta 1.8.4)", type:"beta", loader:"bat", style:"pseudochinese", year:2023, zip:"downloads/err533_03.zip" }, //24.08.2023

  { name:"Minecraft 1.1.? Test Build ?", type:"release", loader:"launcher", style:"pseudochinese", year:2023, zip:"downloads/1.1.x-tbx.zip" }, //05.10.2023

  { name:"Alpha v1.2.6_06", type:"alpha", loader:"exe", style:"chinese", year:2023, zip:"downloads/a1.2.6_06.zip" }, //01.11.2023

  { name:"Beta 1.8.3 chinese edition", type:"beta", loader:"jar", style:"pseudochinese", year:2023, zip:"downloads/b1.8.3 chinese edition.zip" }, //19.11.2023

  { name:"Minecraft 1.1 Configure", type:"release", loader:"exe", style:"pseudochinese", year:2023, zip:"downloads/1.1 configure.zip" }, //02.12.2023

  { name:"Minecraft 1.1 Configure reupload", type:"release", loader:"bat", style:"pseudochinese", year:2023, zip:"downloads/1.1 configure-1 .zip" }, //02.12.2023

  { name:"Beta 1.7.4 preview", type:"beta", loader:"bat", style:"creepy", year:2024, zip:"downloads/b1.7.4-preview.zip" }, //12.03.2024

  { name:"Alpha Pi###", type:"alpha", loader:"launcher", style:"creepy", year:2024, zip:"downloads/api###.zip" }, //19.01.2024

  { name:"Alpha v1.2.3_03 chinese (ERROR126)", type:"alpha", loader:"bat", style:"error", year:2024, zip:"downloads/err126.zip" }, //01.02.2024

  { name:"Minecraft 00w00a", type:"snapshot", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/00w00a.zip" }, //02.02.2024

  { name:"ERROR444", type:"release", loader:"launcher", style:"pseudochinese", year:2024, zip:"downloads/err444.zip" }, //10.02.2024

  { name:"Minecraft 1.2.6 Kardegeta", type:"release", loader:"launcher", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 kardegeta.zip" }, //21.02.2024

  { name:"Delta v0.0.0 v3", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"downloads/delta0.0.0v3.zip" }, //24.02.2024

  { name:"Beta.Entity.ERROR", type:"beta", loader:"exe", style:"error", year:2024, zip:"downloads/bentity.error.zip" }, //03.03.2024

  { name:"ANYA520_1 (Minecraft.TheEndIsNear)", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/anya520_1.zip" }, //05.03.2024

  { name:"Minecraft 00w00a upd-1", type:"snapshot", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/00w00a-2.zip" }, //10.03.2024

  { name:"Beta 1.3_01 (Minecraft ororaaaй)", type:"beta", loader:"bat", style:"normal", year:2024, zip:"downloads/b1.3_01.zip" }, //12.03.2024

  { name:"Alpha v1.1.2_02", type:"alpha", loader:"bat", style:"normal", year:2024, zip:"downloads/a1.1.2_02.zip" }, //15.03.2024

  { name:"Minecraft 00w00a upd-2", type:"snapshot", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/00w00a-3.zip" }, //18.03.2024

  { name:"ERROR844", type:"beta", loader:"launcher", style:"pseudochinese", year:2024, zip:"downloads/err844.zip" }, //21.03.2024

  { name:"Minecraft 1.Лi02", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.li02.zip" }, //22.03.2024

  { name:"Beta 1.1 Test Build 1", type:"beta", loader:"bat", style:"normal", year:2024, zip:"downloads/b1.1-tb1.zip" }, //23.03.2024

  { name:"Alpha v1.0.9 Free (Mei139)", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"downloads/mei139.zip" }, //25.03.2024

  { name:"ANYA520_3 (Minecraft.TheEndIsNear v3)", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/anya520_3.zip" }, //28.03.2024

  { name:"Beta 1.8.1", type:"beta", loader:"jar", style:"creepy", year:2024, zip:"downloads/b1.8.1.zip" }, //30.03.2024

  { name:"Beta 1.8.1 upd-1", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/b1.8.1-2.zip" }, //30.03.2024

  { name:"Beta 1.8.3-chinese_01", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/b1.8.3-chinese_01.zip" }, //30.03.2024

  { name:"Beta 1.8.3-chinese_what", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/b1.8.3-chinese_what.zip" }, //30.03.2024

  { name:"Alpha v1.2.3_0X", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"downloads/a1.2.3_0x.zip" }, //31.03.2024

  { name:"ANYA520_5 (Minecraft.TheEndIsNear v5)", type:"release", loader:"exe", style:"error", year:2024, zip:"downloads/anya520_5.zip" }, //01.04.2024

  { name:"Minecraft 1.2_01", type:"release", loader:"bat", style:"normal", year:2024, zip:"downloads/1.2_01.zip" }, //08.04.2024

  { name:"ChaosCraft v666 build 1008", type:"alpha", loader:"launcher", style:"creepy", year:2024, zip:"downloads/chaoscraft666 build 1008.zip" }, //12.04.2024

  { name:"Minecraft 1.6.5 (cancelled)", type:"release", loader:"exe", style:"normal", year:2024, zip:"downloads/1.6.5 cancelled.zip" }, //13.04.2024

  { name:"Minecraft 1.2.5_01", type:"release", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/1.2.5_01.zip" }, //14.04.2024

  { name:"Beta 1.7_02", type:"beta", loader:"bat", style:"normal", year:2024, zip:"downloads/b1.7_02.zip" }, //22.04.2024

  { name:"Minecraft 1.3.5", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.1.zip" }, //25.04.2024

  { name:"Beta 1.8.3-chinese_02-pre", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/b1.8.3-chinese_02-pre.zip" }, //29.04.2024

  { name:"Minecraft 1.2.6 Null", type:"release", loader:"launcher", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null.zip" }, //30.04.2024

  { name:"Minecraft 1.2.6 Null remastered", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered.zip" }, //30.04.2024

  { name:"Beta 1.8.3-chinese_02", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/b1.8.3-chinese_02.zip" }, //01.05.2024

  { name:"ANYA520_3 (Minecraft.TheEndIsNear v3)", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/anya520_3.zip" }, //02.05.2024

  { name:"Minecraft 1.2.6 Null remastered upd-1", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-2.zip" }, //08.05.2024

  { name:"Minecraft 1.2.6 Null remastered upd-2", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-3.zip" }, //11.05.2024

  { name:"Minecraft Mutilated", type:"alpha", loader:"exe", style:"error", year:2024, zip:"downloads/mutilated.zip" }, //12.05.2024

  
  { name:"Beta 1.9.0", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/b1.9.0.zip" }, //15.05.2024

  { name:"Beta 1.8.3-chinese_03-pre", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/b1.8.3-chinese_03-pre.zip" }, //19.05.2024

  { name:"Minecraft Enigma", type:"beta", loader:"bat", style:"error", year:2024, zip:"downloads/enigma.zip" }, //21.05.2024F

  { name:"Minecraft 0.0.0", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/0.0.0.zip" }, //23.05.2024

  { name:"Beta 1.8.3 remastered", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/b1.8.3 remastered.zip" }, //27.05.2024

  { name:"Beta 1.8.3 reload chinese", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/b1.8.3 reload chinese.zip" }, //29.05.2024

  { name:"ERROR757", type:"alpha", loader:"bat", style:"error", year:2024, zip:"downloads/err757.zip" }, //01.06.2024

  { name:"ERROR422 remastered reload", type:"release", loader:"bat", style:"error", year:2024, zip:"downloads/err422 remastered reload.zip" }, //01.06.2024

  { name:"Minecraft 1.2.6 Null upd-1", type:"release", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null-2.zip" }, //02.06.2024

  { name:"Minecraft 1.2.6 Null remastered upd-3", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-4.zip" }, //03.06.2024

  { name:"Beta 1.8.5", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/b1.8.5.zip" }, //08.06.2024

  { name:"Minecraft 1.2.6 Null remastered upd-4", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-5.zip" }, //08.06.2024

  { name:"Beta 1.8.5 upd-1", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/b1.8.5-1.zip" }, //08.06.2024

  { name:"Beta 1.8.5 upd-2", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/b1.8.5-2.zip" }, //10.06.2024

  { name:"Minecraft 1.2.6 Null remastered upd-5", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-6.zip" }, //12.06.2024

  { name:"Beta 1.9.0 remastered", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/b1.9.0 remastered.zip" }, //16.06.2024

  { name:"Alpha Nothcom.mne", type:"alpha", loader:"bat", style:"creepy", year:2024, zip:"downloads/anothcom.mne.zip" }, //17.06.2024

  { name:"Minecraft Unconstructed", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/unconstructed.zip" }, //21.06.2024

  { name:"Minecraft 1.3.5 upd-1", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.3.5-1.zip" }, //21.06.2024

  { name:"Minecraft 1.2.6 Null remastered upd-6", type:"release", loader:"exe", style:"pseudochinese", year:2024, zip:"downloads/1.2.6 null remastered-7.zip" }, //23.06.2024

  { name:"Minecraft 1.2.5_01 remake", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.2.5_01 remake.zip" }, //11.07.2024

  { name:"Beta 1.8.3_01", type:"beta", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/b1.8.3_01.zip" }, //07.08.2024

  { name:"Minecraft 1.1.0 Test Build 5", type:"release", loader:"bat", style:"pseudochinese", year:2024, zip:"downloads/1.1.0-tb-5.zip" }, //16.08.2024

  { name:"Beta 6.6.6", type:"beta", loader:"jar", style:"pseudochinese", year:2024, zip:"downloads/b6.6.6.zip" }, //27.08.2024

  { name:"Minecraft Free (Stingray)", type:"beta", loader:"bat", style:"creepy", year:2024, zip:"downloads/stingray.zip" }, //20.09.2024

  { name:"Minecraft 1.3.2 Disorderly", type:"release", loader:"launcher", style:"error", year:2024, zip:"downloads/1.3.2 disorderly.zip" }, //30.09.2024

  { name:"Alpha v1.0.6_02", type:"alpha", loader:"bat", style:"normal", year:2025, zip:"downloads/a1.0.6_02.zip" }, //02.01.2025

  { name:"Alpha v1.0.0", type:"alpha", loader:"bat", style:"normal", year:2025, zip:"downloads/a1.0.0.zip" }, //03.04.2025

  { name:"ERROR888 (VIRUSES!!!)", type:"release", loader:"multimc", style:"pseudochinese", year:2025, zip:"downloads/err888.zip" }, //14.05.2025

  { name:"ERROR888", type:"release", loader:"multimc", style:"pseudochinese", year:2025, zip:"downloads/err888_safe.zip" }, //14.05.2025

   { name:"Minecraft 1.11.3", type:"release", loader:"exe", style:"error", year:2025, zip:"downloads/1.11.3.zip" }, //29.05.2025

  { name:"Alpha v1.3.8", type:"alpha", loader:"multimc", style:"creepy", year:2026, zip:"downloads/a1.3.8.zip" }, //12.02.2026

  { name:"Minecraft 1.3.7_01", type:"release", loader:"bat", style:"pseudochinese", year:2026, zip:"downloads/1.3.7_01.zip" }, //01.10.2026

  { name:"Minecraft 1.14 but", type:"release", loader:"exe", style:"normal", year:2026, zip:"downloads/1.14 but.zip" }, //08.10.2026

  { name:"Minecraft ERROR HELL", type:"release", loader:"jar", style:"pseudochinese", year:2026, zip:"downloads/error_hell.zip" }, //28.10.2026

];

const uniq = key => [...new Set(versions.map(v => v[key]))];

// Чип-переключатель вместо чекбокса
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

// Состояние: Set выбранных чипов по каждому ключу
const active = { type:new Set(), loader:new Set(), style:new Set(), year:new Set() };

// Клик по чипу — toggle + визуальная подсветка
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
