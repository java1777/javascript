// 1-Misol!
let L = 717;
let La = L / 100;
console.log(parseInt(La));

// 2-Misol!
let M = 5751;
let Ma = M / 1000;
console.log(parseInt(Ma));

// 3-Misol!
let K = 71557;
let Ka = K / 1024;
console.log(parseInt(Ka));

// 4-Misol!
let q = 77;
let w = 7;
let e = q / w;
console.log(parseInt(e));

// 5-Misol!
let r = 757;
let t = 7;
console.log(parseInt(r / t) % 10);

// 6-Misol!
let y = 75;
let u = y % 10;
let i = y / 10;

console.log(parseInt(i), "and",  parseInt(u));

// 7-Misol!
let o = 89;
let p = o / 10;
let s = o % 10;
let d = p + s ;
console.log(parseInt(d));

// 8-Misol!
let f = 64;
let g = f / 10;
let h = f % 10 ;
let j = h * 10 + g;
console.log(parseInt(j));

// 9-Misol!
let k = 457; 
let l = k / 100;
console.log(parseInt(l));

// 10-Misol!
let z = 575;
let x = z % 100 % 10;
let v = z / 10 % 10;
console.log((x));
console.log(parseInt(v));

// 11-Misol!
let n = 147;
let m = n / 100 ;
let qq = n % 100 / 10;
let ww = n % 10;
let ee = m + qq + ww;
console.log(parseInt(m) + parseInt(qq) + (ww));

// 12-Misol!
let rr = 157;
console.log(rr % 10);
console.log(parseInt (rr % 100 / 10));
console.log(parseInt(rr / 100));

// 13-Misol!
let tt = 385;
let yy = tt / 100;
let uu = tt % 100 * 10 + yy;
console.log(parseInt(uu));

// 14-Misol!
let ii = 717;
let oo = ii / 100;
let pp = ii % 100;
let aa = pp * 10 + oo;
console.log(parseInt(aa));

// 15-Misol!
let ss = 123;
let dd = ss / 100 ;
let ff = (ss % 100 / 10) ;
let gg = ss % 10;
console.log(parseInt(ff) * 100 + parseInt(dd) * 10 + (gg));

// 16-Misol!
let hh = 123;
let jj = hh / 100;
let kk = (hh % 100 % 10) * 10;
let ll = hh % 100 / 10
console.log(parseInt(jj) * 100 + (kk) + parseInt(ll));

// 17-Misol!
let a = 1775;
console.log(parseInt(a / 100) % 10);

// 18-Misol!
let zz = 1457;
let xx = zz / 1000;
let cc = zz % 1000;
console.log(parseInt(xx));

// 19-Misol!
let b = 1245;
console.log(parseInt(b / 60));

// 20-Misol!
let vv = 43985;
let bb = vv / 60;
let nn = bb / 60;
console.log(parseInt(nn));

// 21-Misol!
let c = 754;
console.log(parseInt(c / 60) + " daqiqa o'tdi.");
console.log(c % 60 + " soniya o'tdi.");

// 22-Misol!
let MKL = 12345;
let SDS = MKL / 60;
let HMN = SDS / 60
let WWD = (((SDS / 60) * 100) % 100) / 60 ;
console.log(parseInt(HMN));
console.log((WWD));

// 23-Misol!
let ASD = 76541;
const DED = ASD / 60;
const WDW = DED * 100 % 100
const FDF = DED / 60;
console.log("Hour: ", parseInt(FDF), "Minute: ", parseInt(DED), "Second: ", parseInt(WDW))