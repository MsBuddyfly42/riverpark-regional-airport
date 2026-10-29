const assert=require('node:assert/strict'),P=require('../passenger-core.js');
assert(P.allowed('2026-12-20'));assert(!P.allowed('2026-12-30'));assert(!P.allowed('2026-02-30'));assert(!P.allowed('2027-01-01'));assert(P.allowed('2026-12-28'));assert(!P.allowed('2026-10-29'));
for(const weather of ['clear','rain','storm','snow']){
let s=P.fresh();const go=(k,v)=>{const r=P.act(s,k,v);assert(r.ok,r.message);assert(P.valid(s),'valid saved state at '+k);};
assert(!P.act(s,'boarding',{}).ok);go('plan',{name:'Nell',departure:'2026-12-20',weather});go('ticket',{flight:'RP214',fare:'standard',confirm:true});
for(let leg=0;leg<2;leg++){
go('transport',{mode:'shuttle'});assert(!P.act(s,'checkin',{name:'Wrong',reference:'RPK421',id:true}).ok);go('checkin',{name:'Nell',reference:'RPK421',id:true});assert(!P.act(s,'bags',{destination:leg?'RPA':'HBC'}).ok);go('bags',{repack:true});go('bags',{destination:leg?'RPA':'HBC'});assert(!P.act(s,'security',{}).ok);go('security',{empty:true,tray:true,id:true,collect:true});assert(!P.act(s,'lounge',{action:'leave'}).ok);go('lounge',{action:'board'});go('lounge',{action:'wait'});go('lounge',{action:'leave'});assert(!P.act(s,'gate',{gate:'A4'}).ok);go('gate',{gate:'B2'});go('boarding',{flight:leg?'RP215':'RP214',group:'2'});assert(!P.act(s,'seat',{seat:'5B',stow:true,belt:true}).ok);go('seat',{seat:'4A',stow:true,belt:true});go('flight',{phase:0,safety:true});go('flight',{phase:1,belt:true});go('flight',{phase:2});go('arrival',{route:'claim'});assert(!P.act(s,'claim',{tag:'wrong'}).ok);go('claim',{tag:s.bagTag});go('ground',{mode:'shuttle',destination:leg?'Home':'Lantern Hotel'});
if(!leg){assert(P.handoff(s).ready);go('stay',{confirm:true});assert.equal(s.day,'2027-01-02');go('checkout',{pack:true,room:true,bill:true,key:true});assert.equal(s.stage,2);}
}
assert.equal(s.stage,16);assert.equal(s.money,1180);assert(s.journal.some(x=>x.includes('Hotel checkout')));
}
console.log('PASS: complete outbound/return journey in four weather scenarios, date boundaries, stage locks, mistakes, save validation and handoff');
