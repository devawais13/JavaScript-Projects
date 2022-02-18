// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world

$w.onReady(function () {
  // Write your JavaScript here
  // To select an element by ID use: $w('#elementID')
  // Click 'Preview' to run your code
});
//three steps of code
//1st section: declaration
//2nd section: logictistaction
//3rd section result assignation

export function button1_click(event) {
  //1st section: declaration

  let cpp,
    ft = 0,
    pt = 0,
    tt = 0,
    ati = 0,
    atr = 0,
    mtr = 0,
    fcount = 0,
    pcount = 0,
    tempccp = 0,
    state_brackets_sum = 0,
    federal_bracket_sum = 0,
    income_tax_paid = 0,
    estimate_tax = 0;

  var totalABTaxes;
  var totalBCTaxes;
  var totalMBTaxes;
  var totalNBTaxes;
  var totalNLTaxes;
  var totalNTTaxes;
  var totalNSTaxes;
  var totalNUTaxes;
  var totalONTaxes;
  var totalPETaxes;
  var totalQCTaxes;
  var totalSKTaxes;
  var totalYTTaxes;

  var ABTax = 0;
  var BCTax = 0;
  var MBTax = 0;
  var NBTax = 0;
  var NLTax = 0;
  var NTTax = 0;
  var NSTax = 0;
  var NUTax = 0;
  var ONTax = 0;
  var PETax = 0;
  var QCTax = 0;
  var SKTax = 0;
  var YTTax = 0;

var EITaxROC = 0;
var EITaxQC = 0;
var QPIPTax = 0;

var EIROCRate = 0.0158;
var EIROCMax = 856.36;

var EIQCRate = 0.0120;
var EIQCMax = 650.40;
  //variables
  //EI Rest of Canada
EITaxROC = Math.max(Math.min(employmentIncome * EIROCRate, EIROCMax),0);
//EI (Quebec)
EITaxQC = Math.max(Math.min(employmentIncome * EIQCRate, EIQCMax),0);  
//for alberta state
  let a1 = (10 / 100) * 131220;
  let a2 = (12 / 100) * 157464;
  let a3 = (13 / 100) * 209952;
  let a4 = (14 / 100) * 314928;
  //for British Columbia state
  let bc1 = (5.06 / 100) * 42184;
  let bc2 = (7.7 / 100) * 84369;
  let bc3 = (10.5 / 100) * 96866;
  let bc4 = (12.29 / 100) * 117623;
  let bc5 = (14.7 / 100) * 159483;
  let bc6 = (16.8 / 100) * 222420;
  //for Manitoba state
  let m1 = (10.8 / 100) * 33723;
  let m2 = (12.75 / 100) * 72885;
  //for New Brunswickstate
  let nb1 = (9.68 / 100) * 43835;
  let nb2 = (14.82 / 100) * 87671;
  let nb3 = (16.52 / 100) * 142534;
  let nb4 = (17.84 / 100) * 162383;
  //for Newfoundland and Labrador tax bracket
  //the code is in the logic section
  //no ned of duplication
  //for Northwest Territories state
  let nt1 = (5.9 / 100) * 44396;
  let nt2 = (8.6 / 100) * 88796;
  let nt3 = (12.2 / 100) * 144362;
  //for Nova Scotia  state
  let ns1 = (8.79 / 100) * 29590;
  let ns2 = (14.95 / 100) * 59180;
  let ns3 = (16.67 / 100) * 93000;
  let ns4 = (17.5 / 100) * 150000;
  //for Nunavut state
  let nu1 = (4.0 / 100) * 46740;
  let nu2 = (7.0 / 100) * 93480;
  let nu3 = (9.0 / 100) * 151978;
  //for Ontario state
  let on1 = (5.05 / 100) * 45142;
  let on2 = (9.15 / 100) * 90287;
  let on3 = (11.16 / 100) * 150000;
  let on4 = (12.16 / 100) * 220000;
  //for Prince Edward Island  state
  let pe1 = (9.8 / 100) * 31984;
  let pe2 = (13.8 / 100) * 63969;
  //for Quebec state
  let q1 = (15.0 / 100) * 44545;
  let q2 = (20.0 / 100) * 89080;
  let q3 = (24.0 / 100) * 108390;
  //for Saskatchewan state
  let sa1 = (10.5 / 100) * 45677;
  let sa2 = (12.5 / 100) * 130506;
  //for Yukon state
  let y1 = (6.4 / 100) * 49020;
  let y2 = (9.0 / 100) * 98040;
  let y3 = (10.9 / 100) * 151978;
  let y4 = (12.8 / 100) * 500000;
  //2nd section: logictistaction
  let pro = $w("#dropdown2").value.toString();
  income_tax_paid = Number($w("#input7").value);
  //totalincomecode
  let ei = Number($w("#input1").value);
  let se = Number($w("#input3").value);
  let oi = Number($w("#input2").value);
  let result = ei + se + oi;
  //calculate federal tax
  if (result >= 13229 && result <= 49020) {
    console.log("i'm in the first 15% federal bracket");
    let tempft = (15 / 100) * result; //tax bracket one 15%
    ft = tempft;
    console.log("ft", ft);
    fcount = 1;
    federal_bracket_sum = 15;
  } else if (result >= 49021 && result <= 98040) {
    console.log("i'm in the second federal bracket");
    let dft = result - 49020; // divide 2 brackets
    let fft = 7353; // first bracket 15% of 40,020 dollar
    let sft = (20.5 / 100) * dft; //second bracket calculation
    ft = fft + sft; //federal tax in total
    fcount = 2;
    federal_bracket_sum = 15 + 20.5;
  } else if (result >= 98041 && result <= 151978) {
    console.log("i'm in the third federal bracket");
    let dft = result - 98040; // divide 3 brackets
    let fft = 7353; // first bracket 15% of 40,020 dollar
    let ssft = 20098.2; // second bracket 20%
    let tft = (26 / 100) * dft; //third bracket calculation 26%
    ft = fft + ssft + tft; // federal tax in total
    fcount = 3;
    federal_bracket_sum = 15 + 20.5 + 26;
  } else if (result >= 151979 && result <= 216511) {
    console.log("i'm in the fourth federal bracket");
    let dft = result - 151978; // divide 4 brackets
    let fft = 7353; // first bracket 15% of 40,020 dollar
    let ssft = 20098.2; // second bracket 20%
    let tft = 39514.28; //third bracket calculation 26%
    let frft = (29 / 100) * dft; //four bracket calulation 29%
    ft = fft + ssft + tft + frft; // federal tax in total
    fcount = 4;
    federal_bracket_sum = 15 + 20.5 + 26 + 29;
  } else if (result > 216511) {
    console.log("i'm in the fifth federal bracket");
    let dft = result - 216511; // divide 4 brackets
    let fft = 7353; // first bracket 15% of 40,020 dollar
    let ssft = 20098.2; // second bracket 20%
    let tft = 39514.28; //third bracket calculation 26%
    let frft = 62788.19; //four bracket calulation 29%
    let fvft = (33 / 100) * dft; //fifth bracket calculation 33%
    ft = fft + ssft + tft + frft + fvft; // federal tax in total
    fcount = 5;
    federal_bracket_sum = 15 + 20.5 + 26 + 29 + 33;
  } else {
    return ft;
  }

  //prvincial tax
  //alberta state
  if (pro == "Alberta") {
    console.log("", pro);
    if (result >= 13229 && result <= 131220) {
      console.log("i'm in the first Alberta bracket");
      let temppt = (10.0 / 100) * result; //tax bracket one 10.00%
      pt = temppt;
      console.log("ft", ft);
      pcount = 1;
      state_brackets_sum = 10.0;
    } else if (result >= 13221 && result <= 157464) {
      console.log("i'm in the second Alberta bracket");
      let dpt = result - 131220; // divide 2 brackets
      let fpt = a1; // first bracket 10%
      let spt = (12.0 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 10.0 + 12.0;
    } else if (result >= 157465 && result <= 209952) {
      console.log("i'm in the third Albertal bracket");
      let dpt = result - 76161; // divide 3 brackets
      let fpt = a1; // first bracket
      let sspt = a2; // second bracket
      let tpt = (13.0 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 10.0 + 12.0 + 13.0;
    } else if (result >= 209953 && result <= 314928) {
      console.log("i'm in the fourth Alberta bracket");
      let dpt = result - 314928; // divide 4 brackets
      let fpt = a1; // first bracket
      let sspt = a2; // second bracket
      let tpt = a3; //third bracket
      let frpt = (14.0 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 4;
      state_brackets_sum = 10.0 + 12.0 + 13.0 + 14.0;
    } else if (result > 314928) {
      console.log("i'm in the fifth provincial bracket");
      let dpt = result - 190363; // divide 5 brackets
      let fpt = a1; // first bracket
      let sspt = a2; // second bracket
      let tpt = a3; //third bracket c
      let frpt = a4; //four bracket
      let fvpt = (15.0 / 100) * dpt; //fifth bracket calculation 33%
      pt = fpt + sspt + tpt + frpt + fvpt; // federal tax in total
      pcount = 5;
      state_brackets_sum = 10.0 + 12.0 + 13.0 + 14.0 + 15.0;
    } else {
      return pt;
    }
  } else if (pro == "British Columbia") {
    if (result >= 13229 && result <= 42184) {
      console.log("i'm in the first bristish columbia bracket");
      let temppt = (5.06 / 100) * result; //tax bracket
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 5.06;
    } else if (result >= 42185 && result <= 84369) {
      console.log("i'm in the second bristish columbia bracket");
      let dpt = result - 42184; // divide 2 brackets
      let fpt = bc1; // first bracket
      let spt = (7.7 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 5.06 + 7.7;
    } else if (result >= 84370 && result <= 96866) {
      console.log("i'm in the third bc bracket");
      let dpt = result - 84369; // divide 3 brackets
      let fpt = bc2; // first bracket
      let sspt = bc3; // second bracket
      let tpt = (10.5 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 5.06 + 7.7 + 10.5;
    } else if (result >= 96867 && result <= 117623) {
      console.log("i'm in the fourth bc bracket");
      let dpt = result - 96866; // divide 4 brackets
      let fpt = bc1; // first bracket
      let sspt = bc2; // second bracket
      let tpt = bc3; //third bracket
      let frpt = (12.29 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 4;
      state_brackets_sum = 5.06 + 7.7 + 10.5 + 12.29;
    } else if (result >= 117624 && result <= 159483) {
      console.log("i'm in the fourth bc bracket");
      let dpt = result - 117623; // divide 4 brackets
      let fpt = bc1; // first bracket
      let sspt = bc2; // second bracket
      let tpt = bc3; //third bracket
      let frpt = (14.7 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 5;
      state_brackets_sum = 5.06 + 7.7 + 10.5 + 12.29 + 14.7;
    } else if (result >= 159484 && result <= 222420) {
      console.log("i'm in the fourth Alberta bracket");
      let dpt = result - 159483; // divide 4 brackets
      let fpt = bc1; // first bracket
      let sspt = bc2; // second bracket
      let tpt = bc3; //third bracket
      let frpt = bc4; //four bracket
      let fvpt = bc5; //fifth bracket
      let sipt = (16.8 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt + fvpt + sipt; // falberta tax in total
      pcount = 6;
      state_brackets_sum = 5.06 + 7.7 + 10.5 + 12.29 + 14.7 + 16.8;
    } else if (result > 222420) {
      console.log("i'm in the seventh provincial bracket");
      let dpt = result - 222420; // divide 5 brackets
      let fpt = bc1; // first bracket
      let sspt = bc2; // second bracket
      let tpt = bc3; //third bracket
      let frpt = bc4; //four bracket
      let fvpt = bc5; //fifth bracket
      let sipt = bc6; // sixth bracket
      let sept = (20.5 / 100) * dpt; //fifth bracket calculation 33%
      pt = fpt + sspt + tpt + frpt + fvpt + sipt + sept; // federal tax in total
      pcount = 7;
      state_brackets_sum = 5.06 + 7.7 + 10.5 + 12.29 + 14.7 + 16.8 + 20.5;
    } else {
      return pt;
    }
  } else if (pro == "Manitoba") {
    if (result >= 13229 && result <= 33723) {
      let temppt = (10.8 / 100) * result; //tax bracket
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 10.8;
    } else if (result >= 33724 && result <= 72885) {
      console.log("i'm in the monitba 2nd bracket");
      let dpt = result - 33723; // divide 4 brackets
      let fpt = m1; // first bracket
      let sspt = (12.75 / 100) * dpt; //2nd bracket
      pt = fpt + sspt; // falberta tax in total
      pcount = 2;
      state_brackets_sum = 10.8 + 12.75;
    } else if (result > 72885) {
      console.log("i'm in the monitba 3rd bracket");
      let dpt = result - 33724; // divide 5 brackets
      let fpt = m1; // first bracket
      let sspt = m2; // second bracket
      let tpt = (20.5 / 100) * dpt; //fifth bracket calculation 33%
      pt = fpt + sspt + tpt; // federal tax in total
      pcount = 3;
      state_brackets_sum = 10.8 + 12.75 + 20.5;
    } else {
      return pt;
    }
  } else if (pro == "New Brunswick") {
    if (result >= 13229 && result <= 43835) {
      console.log("i'm in the first Alberta bracket");
      let tempft = (9.68 / 100) * result; //tax bracket one 10.00%
      ft = tempft;
      console.log("ft", ft);
      pcount = 1;
      state_brackets_sum = 9.68;
    } else if (result >= 43836 && result <= 87671) {
      console.log("i'm in the second Brunswick bracket");
      let dpt = result - 43835; // divide 2 brackets
      let fpt = nb1; // first bracket 10%
      let spt = (14.82 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 9.68 + 14.82;
    } else if (result >= 87672 && result <= 142534) {
      console.log("i'm in the third Brunswick bracket");
      let dpt = result - 87671; // divide 3 brackets
      let fpt = nb1; // first bracket
      let sspt = nb2; // second bracket
      let tpt = (16.52 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 9.68 + 14.82 + 16.52;
    } else if (result >= 142535 && result <= 162383) {
      console.log("i'm in the fourth Brunswick bracket");
      let dpt = result - 142534; // divide 4 brackets
      let fpt = nb1; // first bracket
      let sspt = nb2; // second bracket
      let tpt = nb3; //third bracket
      let frpt = (17.84 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 4;
      state_brackets_sum = 9.68 + 14.82 + 16.52 + 17.84;
    } else if (result > 162383) {
      console.log("i'm in the fifth Brunswick bracket");
      let dpt = result - 162383; // divide 5 brackets
      let fpt = nb1; // first bracket
      let sspt = nb2; // second bracket
      let tpt = nb3; //third bracket c
      let frpt = nb4; //four bracket
      let fvpt = (20.3 / 100) * dpt; //fifth bracket calculation 33%
      pt = fpt + sspt + tpt + frpt + fvpt; // federal tax in total
      pcount = 5;
      state_brackets_sum = 9.68 + 14.82 + 16.52 + 17.84 + 20.3;
    } else {
      return pt;
    }
  } else if (result >= 13229 && pro == "Newfoundland/Labrador") {
    if (result <= 38081) {
      console.log("i'm in the first 8.7% prvincial bracket");
      let temppt = (8.7 / 100) * result; //tax bracket one 8.7%
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 8.7;
    } else if (result >= 38082 && result <= 76161) {
      console.log("i'm in the second prvincial bracket");
      let dpt = result - 38081; // divide 2 brackets
      let fpt = 3313.047; // first bracket 8.7% of 38,081 dollar
      let spt = (14.5 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 8.7 + 14.5;
    } else if (result >= 76162 && result <= 135973) {
      console.log("i'm in the third provincial bracket");
      let dpt = result - 76161; // divide 3 brackets
      let fpt = 3313.047; // first bracket 8.7% of 38,081 dollar
      let sspt = 11043.345; // second bracket 14.5%
      let tpt = (15.8 / 100) * dpt; //third bracket calculation 15.8%
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 8.7 + 14.5 + 15.8;
    } else if (result >= 135974 && result <= 190363) {
      console.log("i'm in the fourth provinical bracket");
      let dpt = result - 135973; // divide 4 brackets
      let fpt = 3313.047; // first bracket 8.7% of 38,081 dollar
      let sspt = 11043.345; // second bracket 14.5%
      let tpt = 21483.734; //third bracket calculation 15.8%
      let frpt = (17.3 / 100) * dpt; //four bracket calulation 29%
      pt = fpt + sspt + tpt + frpt; // federal tax in total
      pcount = 4;
      state_brackets_sum = 8.7 + 14.5 + 15.8 + 17.3;
    } else if (result > 190363) {
      console.log("i'm in the fifth provincial bracket");
      let dpt = result - 190363; // divide 5 brackets
      let fpt = 3313.047; // first bracket 8.7% of 38,081 dollar
      let sspt = 11043.345; // second bracket 14.5%
      let tpt = 21483.734; //third bracket calculation 15.8%
      let frpt = 32932.799; //four bracket calulation 29%
      let fvpt = (18.3 / 100) * dpt; //fifth bracket calculation 33%
      pt = fpt + sspt + tpt + frpt + fvpt; // federal tax in total
      pcount = 5;
      state_brackets_sum = 8.7 + 14.5 + 15.8 + 17.3 + 18.3;
    } else {
      return pt;
    }
  } else if (pro == "Northwest Territories") {
    if (result >= 13229 && result <= 44396) {
      console.log("i'm in the first Northwest Territories bracket");
      let temppt = (5.9 / 100) * result; //tax bracket one 10.00%
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 5.9;
    } else if (result >= 44397 && result <= 88796) {
      console.log("i'm in the second Northwest Territories bracket");
      let dpt = result - 44396; // divide 2 brackets
      let fpt = nt1; // first bracket 10%
      let spt = (8.6 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 5.9 + 8.6;
    } else if (result >= 88797 && result <= 144362) {
      console.log("i'm in the third Northwest Territories bracket");
      let dpt = result - 88796; // divide 3 brackets
      let fpt = nt1; // first bracket
      let sspt = nt2; // second bracket
      let tpt = (12.2 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 5.9 + 8.6 + 12.2;
    } else if (result > 144362) {
      console.log("i'm in the fourth Northwest Territories bracket");
      let dpt = result - 144362; // divide 4 brackets
      let fpt = nt1; // first bracket
      let sspt = nt2; // second bracket
      let tpt = nt3; //third bracket
      let frpt = (14.05 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 4;
      state_brackets_sum = 5.9 + 8.6 + 12.2 + 14.05;
    } else {
      return pt;
    }
  } else if (pro == "Nova Scotia") {
    if (result >= 13229 && result <= 29590) {
      console.log("i'm in the first Nova Scotia bracket");
      let temppt = (8.79 / 100) * result; //tax bracket one 10.00%
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 8.79;
    } else if (result >= 29591 && result <= 59180) {
      console.log("i'm in the second Nova Scotia bracket");
      let dpt = result - 29590; // divide 2 brackets
      let fpt = ns1; // first bracket 10%
      let spt = (14.95 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 8.79 + 14.95;
    } else if (result >= 59181 && result <= 93000) {
      console.log("i'm in the third Nova Scotia bracket");
      let dpt = result - 59180; // divide 3 brackets
      let fpt = ns1; // first bracket
      let sspt = ns2; // second bracket
      let tpt = (16.67 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 8.79 + 14.95 + 16.67;
    } else if (result >= 93001 && result <= 150000) {
      console.log("i'm in the fourth Nova Scotia bracket");
      let dpt = result - 93000; // divide 4 brackets
      let fpt = ns1; // first bracket
      let sspt = ns2; // second bracket
      let tpt = ns3; //third bracket
      let frpt = (17.5 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 4;
      state_brackets_sum = 8.79 + 14.95 + 16.67 + 17.5;
    } else if (result > 150000) {
      console.log("i'm in the fourth Nova Scotia bracket");
      let dpt = result - 150000; // divide 4 brackets
      let fpt = ns1; // first bracket
      let sspt = ns2; // second bracket
      let tpt = ns3; //third bracket
      let frpt = ns3; //third bracket
      let fvpt = (21.0 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt + fvpt; // falberta tax in total
      pcount = 5;
      state_brackets_sum = 8.79 + 14.95 + 16.67 + 17.5 + 21.0;
    } else {
      return pt;
    }
  } else if (pro == "Nunavut") {
    if (result >= 13229 && result <= 46740) {
      console.log("i'm in the first Nunavut bracket");
      let temppt = (4.0 / 100) * result; //tax bracket one 10.00%
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 4.0;
    } else if (result >= 46741 && result <= 93480) {
      console.log("i'm in the second Nunavut bracket");
      let dpt = result - 46740; // divide 2 brackets
      let fpt = nu1; // first bracket 10%
      let spt = (7.0 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 4.0 + 7.0;
    } else if (result >= 93481 && result <= 151978) {
      console.log("i'm in the third Nunavut bracket");
      let dpt = result - 93480; // divide 3 brackets
      let fpt = nu1; // first bracket
      let sspt = nu2; // second bracket
      let tpt = (9.0 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 4.0 + 7.0 + 9.0;
    } else if (result > 151978) {
      console.log("i'm in the fourth Nunavut bracket");
      let dpt = result - 151978; // divide 4 brackets
      let fpt = nu1; // first bracket
      let sspt = nu2; // second bracket
      let tpt = nu3; //third bracket
      let frpt = (11.5 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 4;
      state_brackets_sum = 4.0 + 7.0 + 9.0 + 11.5;
    } else {
      return pt;
    }
  } else if (result >= 13229 && pro == "Ontario") {
    if (result <= 45142) {
      console.log("i'm in the first Ontario bracket");
      let temppt = (5.05 / 100) * result; //tax bracket one 10.00%
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 5.05;
    } else if (result >= 45143 && result <= 90287) {
      console.log("i'm in the second Ontario bracket");
      let dpt = result - 45142; // divide 2 brackets
      let fpt = on1; // first bracket 10%
      let spt = (9.15 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 5.05 + 9.15;
    } else if (result >= 90288 && result <= 150000) {
      console.log("i'm in the third Ontario bracket");
      let dpt = result - 90287; // divide 3 brackets
      let fpt = on1; // first bracket
      let sspt = on2; // second bracket
      let tpt = (11.16 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 5.05 + 9.15 + 11.16;
    } else if (result >= 150001 && result <= 220000) {
      console.log("i'm in the fourth Ontario bracket");
      let dpt = result - 150000; // divide 4 brackets
      let fpt = on1; // first bracket
      let sspt = on2; // second bracket
      let tpt = on3; //third bracket
      let frpt = (12.16 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 4;
      state_brackets_sum = 5.05 + 9.15 + 11.16 + 12.16;
    } else if (result > 220000) {
      console.log("i'm in the fourth Ontario bracket");
      let dpt = result - 220000; // divide 4 brackets
      let fpt = on1; // first bracket
      let sspt = on2; // second bracket
      let tpt = on3; //third bracket
      let frpt = on3; //third bracket
      let fvpt = (13.16 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt + fvpt; // falberta tax in total
      pcount = 5;
      state_brackets_sum = 5.05 + 9.15 + 11.16 + 12.16 + 13.16;
    } else {
      return pt;
    }
  } else if (pro == "Prince Edward Island") {
    if (result >= 13229 && result <= 31984) {
      console.log("i'm in the Prince Edward Island bracket");
      let temppt = (9.8 / 100) * result; //tax bracket one 10.00%
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 9.8;
    } else if (result >= 31985 && result <= 63969) {
      console.log("i'm in the Prince Edward Island bracket");
      let dpt = result - 31984; // divide 2 brackets
      let fpt = pe1; // first bracket 10%
      let spt = (13.8 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 9.8 + 13.8;
    } else if (result >= 63969) {
      console.log("i'm in the Prince Edward Island bracket");
      let dpt = result - 63969; // divide 3 brackets
      let fpt = pe1; // first bracket
      let sspt = pe2; // second bracket
      let tpt = (16.7 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 9.8 + 13.8 + 16.7;
    } else {
      return pt;
    }
  } else if (pro == "Quebec") {
    if (result >= 13229 && result <= 44545) {
      console.log("i'm in the first Quebec bracket");
      let temppt = (15.0 / 100) * result; //tax bracket one 10.00%
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 15.0;
    } else if (result >= 44546 && result <= 89080) {
      console.log("i'm in the second Quebec bracket");
      let dpt = result - 44545; // divide 2 brackets
      let fpt = on1; // first bracket 10%
      let spt = (20 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 15.0 + 20.0;
    } else if (result >= 89081 && result <= 108390) {
      console.log("i'm in the third Quebec bracket");
      let dpt = result - 89080; // divide 3 brackets
      let fpt = q1; // first bracket
      let sspt = q2; // second bracket
      let tpt = (24.0 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 15.0 + 20.0 + 24.0;
    } else if (result >= 108390) {
      console.log("i'm in the fourth Quebec  bracket");
      let dpt = result - 108390; // divide 4 brackets
      let fpt = q1; // first bracket
      let sspt = q2; // second bracket
      let tpt = q3; //third bracket
      let frpt = (25.75 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 4;
      state_brackets_sum = 15.0 + 20.0 + 24.0 + 25.75;
    } else {
      return pt;
    }
  } else if (pro == "Saskatchewan") {
    if (result >= 13229 && result <= 45677) {
      console.log("i'm in the first Saskatchewan bracket");
      let temppt = (10.5 / 100) * result; //tax bracket one 10.00%
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 10.5;
    } else if (result >= 45678 && result <= 130506) {
      console.log("i'm in the second Saskatchewan bracket");
      let dpt = result - 45677; // divide 2 brackets
      let fpt = sa1; // first bracket 10%
      let spt = (12.5 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 10.5 + 12.5;
    } else if (result >= 130506) {
      console.log("i'm in the third Saskatchewan bracket");
      let dpt = result - 130506; // divide 3 brackets
      let fpt = sa1; // first bracket
      let sspt = sa2; // second bracket
      let tpt = (14.5 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 10.5 + 12.5 + 14.5;
    } else {
      return pt;
    }
  } else if (pro == "Yukon") {
    if (result >= 13229 && result <= 49020) {
      console.log("i'm in the first Yukon bracket");
      let temppt = (6.4 / 100) * result; //tax bracket one 10.00%
      pt = temppt;
      console.log("ft", pt);
      pcount = 1;
      state_brackets_sum = 6.4;
    } else if (result >= 49021 && result <= 98040) {
      console.log("i'm in the second Yukon bracket");
      let dpt = result - 49020; // divide 2 brackets
      let fpt = y1; // first bracket
      let spt = (9.0 / 100) * dpt; //second bracket calculation
      pt = fpt + spt; //provinical tax in total
      pcount = 2;
      state_brackets_sum = 6.4 + 9.0;
    } else if (result >= 98041 && result <= 151978) {
      console.log("i'm in the third Yukon bracket");
      let dpt = result - 98040; // divide 3 brackets
      let fpt = y1; // first bracket
      let sspt = y2; // second bracket
      let tpt = (10.9 / 100) * dpt; //third bracket calculation
      pt = fpt + sspt + tpt; // provinical tax in total
      pcount = 3;
      state_brackets_sum = 6.4 + 9.0 + 10.9;
    } else if (result >= 151979 && result <= 500000) {
      console.log("i'm in the fourth Yukon bracket");
      let dpt = result - 151978; // divide 4 brackets
      let fpt = y1; // first bracket
      let sspt = y2; // second bracket
      let tpt = y3; //third bracket
      let frpt = (12.8 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt; // falberta tax in total
      pcount = 4;
      state_brackets_sum = 6.4 + 9.0 + 10.9 + 12.8;
    } else if (result > 500000) {
      console.log("i'm in the fifth Yukon bracket");
      let dpt = result - 500000; // divide 4 brackets
      let fpt = y1; // first bracket
      let sspt = y2; // second bracket
      let tpt = y3; //third bracket
      let frpt = y4; //third bracket
      let fvpt = (15.0 / 100) * dpt; //four bracket
      pt = fpt + sspt + tpt + frpt + fvpt; // falberta tax in total
      pcount = 5;
      state_brackets_sum = 6.4 + 9.0 + 10.9 + 12.8 + 15.0;
    }
  } else {
    return pt;
  }

  // cpp/el premiums
  cpp = (5.4 / 100) * result; //cpp/el premiums formula
  console.log(formatNumber(cpp));
  // calculate cpp/el premiums logic
  if (cpp < 1) {
    tempccp = 0;
  } else {
    tempccp = cpp;
  }
  //calculate totaltaxcode
  console.log(ft, "for total");

  tt = tempccp + ft + pt;
  console.log(formatNumber(tt));

  ati = result - tt;
  let tocount = pcount + fcount;
  atr = state_brackets_sum + federal_bracket_sum / tocount;
  console.log("after tax rate", atr);
  mtr = (tt / result) * 100;

  //3rd section result assignation
  $w("#text14").text = pro; //states
  console.log("after states", pro);
  $w("#text62").text = formatNumber(result); //total income
  console.log("after total income", result);
  $w("#text74").text = formatNumber(tempccp); //cpp/pi premiums
  console.log("after cpp/pi", tempccp);
  $w("#text70").text = formatNumber(ft); //federal tax
  console.log("after federal tax", ft);
  $w("#text72").text = formatNumber(pt); // provinical tax
  console.log("after provinical tax", pt);
  $w("#text76").text = formatNumber(tt); // total tax
  console.log("after total tax", tt);
  $w("#text78").text = formatNumber(ati); // after-tax income
  console.log("after after-tax-income", ati);
  $w("#text79").text = formatper(atr); // after-tax income
  console.log("after tax rate", atr);
  $w("#text81").text = formatper(mtr); // marginal-tax income
  console.log("after marginal tax rate", mtr);
  if (income_tax_paid > tt) {
    estimate_tax = income_tax_paid - tt;
    $w("#text56").text = " Estimated tax refund";
    $w("#text57").text = formatNumber(estimate_tax);
  } else if (income_tax_paid < tt) {
    estimate_tax = tt - income_tax_paid;
    $w("#text56").text = " Estimated tax owed";

    $w("#text57").text = formatNumber(estimate_tax);
  } else {
    $w("#text56").text = "equally paid and owed nothing";
  }
}
function formatNumber(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function formatper(numm) {
  return numm.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "1%,") + "%";
}

function clear() {
  $w("#input1").value = null; //total income
  $w("#input2").value = null; //total income

  $w("#input3").value = null; //total income
  $w("#input4").value = null; //total income

  $w("#input5").value = null; //total income
  $w("#input6").value = null; //total income

  $w("#input7").value = null; //total income
}
export function dropdown2_change(event) {
  let pro = $w("#dropdown2").value.toString();
  $w("#text14").text = pro;
  clear();
}

/**
      *	Adds an event handler that runs when an input element's value
       is changed.
          [Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
      *	 @param {Event} event
      */
// export function input1_change(event) {
// 	let ei = Number($w('#input1').value);
// 	let v1 = Number($w('#text62').text);
// let total = ei + v1;
// 	$w('#text62').text = total.toString()

//             //   $w('#text30').text = $w('#text30').value + parseInt();;

// }
