const _0xb7bc5=_0xd786;(function(_0x491690,_0x890ddc){const _0x5d4fbe=_0xd786,_0x219a61=_0x491690();while(!![]){try{const _0x3818c9=-parseInt(_0x5d4fbe(0x19d))/0x1+-parseInt(_0x5d4fbe(0x16c))/0x2+-parseInt(_0x5d4fbe(0x1aa))/0x3+parseInt(_0x5d4fbe(0x1ae))/0x4+parseInt(_0x5d4fbe(0x163))/0x5*(parseInt(_0x5d4fbe(0x15e))/0x6)+parseInt(_0x5d4fbe(0x178))/0x7+parseInt(_0x5d4fbe(0x191))/0x8;if(_0x3818c9===_0x890ddc)break;else _0x219a61['push'](_0x219a61['shift']());}catch(_0xb327a4){_0x219a61['push'](_0x219a61['shift']());}}}(_0x341c,0x8cd78));import{AtType,ElementType,FaceIndex,FaceType,PicType}from'./index';import{promises as _0x3caaa1}from'node:fs';import _0x41629e from'fluent-ffmpeg';import{NTQQFileApi}from'@/core/apis/file';import{calculateFileMD5,isGIF}from'@/common/utils/file';import{logDebug,logError}from'@/common/utils/log';function _0xd786(_0x1d4d23,_0x43d7a0){const _0x341c64=_0x341c();return _0xd786=function(_0xd7862,_0x4d8e79){_0xd7862=_0xd7862-0x15b;let _0x58b872=_0x341c64[_0xd7862];return _0x58b872;},_0xd786(_0x1d4d23,_0x43d7a0);}function _0x341c(){const _0x559fe8=['unlink','width','AniStickerType','rps','YZITP','TEXT','dice','VIDEO','screenshots','7522808hVuOjQ','pic','FILE','jpg','语音转换失败,\x20请检查语音文件是否正常','time','pcAZk','end','PTT','https://tianquan.gtimg.cn/qqAIAgent/item/7/square.png','获取视频封面失败，使用默认封面','获取视频信息失败','150553gEhiXl','markdown','mface','miniapp','文件异常，大小为0','reply','zNjZm','toString','TPDAf','ark','height','dirname','face','3253101LMQJmr','join','https://tianquan.gtimg.cn/shoal/qqAIAgent/3e9d70c9-d98c-45b8-80b4-79d82971b514.png','[包剪锤]','1828756XjSWcR','string','stat','[商城表情]','460626PEVpSn','get','AniStickerPackId','Ori','KCewu','5oUoPWl','PIC','RPS','ARK','catch','oeNxg','MARKDOWN','eoWPr','Ashby','97800MmKrrK','FIDAj','FACE','AniStickerId','AqcZF','WbntR','sep','find','Bot\x20Test','ZbyRa','gif','ptt','2704779sVKEoM','uploadFile','Thumb','nBFcI','copyFile','NqfTm','eCSfH','hUfeC','mp4','QSid','error','REPLY','YPXPo','WjGch','notAt','replace'];_0x341c=function(){return _0x559fe8;};return _0x341c();}import{defaultVideoThumb,getVideoInfo}from'@/common/utils/video';import{encodeSilk}from'@/common/utils/audio';import _0x326594 from'./face_config.json';import*as _0x604e93 from'node:path';import{SignMiniApp}from'../apis';export const mFaceCache=new Map();export class SendMsgElementConstructor{static['text'](_0x459050){const _0x2893bb=_0xd786;return{'elementType':ElementType[_0x2893bb(0x18d)],'elementId':'','textElement':{'content':_0x459050,'atType':AtType[_0x2893bb(0x186)],'atUid':'','atTinyId':'','atNtUid':''}};}static['at'](_0x38825d,_0x15d2e1,_0xc7c1bf,_0x1e6ccb){const _0x47dbec=_0xd786;return{'elementType':ElementType[_0x47dbec(0x18d)],'elementId':'','textElement':{'content':'@'+_0x1e6ccb,'atType':_0xc7c1bf,'atUid':_0x38825d,'atTinyId':'','atNtUid':_0x15d2e1}};}static[_0xb7bc5(0x1a2)](_0x18ffcf,_0x1a348b,_0x5b86b5,_0x25e5aa){const _0x3aef24=_0xb7bc5;return{'elementType':ElementType[_0x3aef24(0x183)],'elementId':'','replyElement':{'replayMsgSeq':_0x18ffcf,'replayMsgId':_0x1a348b,'senderUin':_0x5b86b5,'senderUinStr':_0x25e5aa}};}static async[_0xb7bc5(0x192)](_0x4deacf,_0x3b82f1='',_0x142d51=0x0){const _0x19af9b=_0xb7bc5,_0x33aa2c={'ZanUH':function(_0x2191a6,_0x262662){return _0x2191a6===_0x262662;}},{md5:_0xac8eef,fileName:_0x4ebf97,path:_0x41462d,fileSize:_0x5d3086}=await NTQQFileApi['uploadFile'](_0x4deacf,ElementType[_0x19af9b(0x164)],_0x142d51);if(_0x33aa2c['ZanUH'](_0x5d3086,0x0))throw _0x19af9b(0x1a1);const _0x10aa4d=await NTQQFileApi['getImageSize'](_0x4deacf),_0x32b310={'md5HexStr':_0xac8eef,'fileSize':_0x5d3086['toString'](),'picWidth':_0x10aa4d?.[_0x19af9b(0x189)],'picHeight':_0x10aa4d?.[_0x19af9b(0x1a7)],'fileName':_0x4ebf97,'sourcePath':_0x41462d,'original':!![],'picType':isGIF(_0x4deacf)?PicType[_0x19af9b(0x176)]:PicType[_0x19af9b(0x194)],'picSubType':_0x142d51,'fileUuid':'','fileSubId':'','thumbFileSize':0x0,'summary':_0x3b82f1};return{'elementType':ElementType[_0x19af9b(0x164)],'elementId':'','picElement':_0x32b310};}static async['file'](_0x311db3,_0x21cb57='',_0x4e35c3=''){const _0x2e9912=_0xb7bc5,{md5:_0x510376,fileName:_0x456c16,path:_0x1a3c65,fileSize:_0x178a15}=await NTQQFileApi['uploadFile'](_0x311db3,ElementType[_0x2e9912(0x193)]);if(_0x178a15===0x0)throw _0x2e9912(0x1a1);const _0x3e7913={'elementType':ElementType[_0x2e9912(0x193)],'elementId':'','fileElement':{'fileName':_0x21cb57||_0x456c16,'folderId':_0x4e35c3,'filePath':_0x1a3c65,'fileSize':_0x178a15[_0x2e9912(0x1a4)]()}};return _0x3e7913;}static async['video'](_0x564e67,_0x23f9bf='',_0x2c02ee=''){const _0x359ff7=_0xb7bc5,_0x661aec={'YPXPo':function(_0x1e69c8,_0x19ca29){return _0x1e69c8(_0x19ca29);},'pcAZk':function(_0x4a18ea,_0x389d59,_0x25e015){return _0x4a18ea(_0x389d59,_0x25e015);},'hUfeC':_0x359ff7(0x19b),'ZbyRa':function(_0x46a785,_0x1e1863){return _0x46a785(_0x1e1863);},'KCewu':_0x359ff7(0x198),'ZMQTD':function(_0x56325b,_0x5e5749){return _0x56325b+_0x5e5749;},'YZITP':function(_0x19316c,_0x2ab73b){return _0x19316c===_0x2ab73b;},'DijTe':'文件异常，大小为0','WjGch':_0x359ff7(0x180),'eoWPr':_0x359ff7(0x19c),'zNjZm':function(_0x117da1,_0x58d138){return _0x117da1||_0x58d138;}},{fileName:_0xd72bdd,path:_0x2d4858,fileSize:_0x15f4bd,md5:_0x15ab14}=await NTQQFileApi[_0x359ff7(0x179)](_0x564e67,ElementType[_0x359ff7(0x18f)]);if(_0x661aec[_0x359ff7(0x18c)](_0x15f4bd,0x0))throw _0x661aec['DijTe'];let _0x278f79=_0x2d4858[_0x359ff7(0x187)](_0x604e93[_0x359ff7(0x172)]+_0x359ff7(0x161)+_0x604e93[_0x359ff7(0x172)],_0x604e93[_0x359ff7(0x172)]+_0x359ff7(0x17a)+_0x604e93[_0x359ff7(0x172)]);_0x278f79=_0x604e93[_0x359ff7(0x1a8)](_0x278f79);let _0x52e3cf={'width':0x780,'height':0x438,'time':0xf,'format':_0x661aec[_0x359ff7(0x185)],'size':_0x15f4bd,'filePath':_0x564e67};try{_0x52e3cf=await _0x661aec[_0x359ff7(0x184)](getVideoInfo,_0x2d4858);}catch(_0x2a5737){_0x661aec[_0x359ff7(0x197)](logError,_0x661aec[_0x359ff7(0x16a)],_0x2a5737);}const _0x59615e=new Promise((_0xadd7b2,_0x35d37e)=>{const _0xf87e10=_0x359ff7,_0x375b62={'eCSfH':function(_0x73444d,_0x69f12e){const _0x261511=_0xd786;return _0x661aec[_0x261511(0x184)](_0x73444d,_0x69f12e);},'WbntR':function(_0xb08515,_0x1b296c,_0x33f458){return _0x661aec['pcAZk'](_0xb08515,_0x1b296c,_0x33f458);},'zAyIU':_0x661aec[_0xf87e10(0x17f)]},_0x5963bf=_0x15ab14+'_0.png',_0x3f3bdd=_0x604e93[_0xf87e10(0x1ab)](_0x278f79,_0x5963bf);_0x661aec[_0xf87e10(0x175)](_0x41629e,_0x564e67)['on'](_0x661aec[_0xf87e10(0x162)],()=>{})['on'](_0xf87e10(0x182),_0x27c823=>{const _0x4931d8=_0xf87e10,_0x3e18d9={'oeNxg':function(_0x56f7e4,_0x2f60da){return _0x375b62['eCSfH'](_0x56f7e4,_0x2f60da);}};_0x375b62[_0x4931d8(0x171)](logDebug,_0x375b62['zAyIU'],_0x27c823),_0x2c02ee?_0x3caaa1[_0x4931d8(0x17c)](_0x2c02ee,_0x3f3bdd)['then'](()=>{_0xadd7b2(_0x3f3bdd);})['catch'](_0x35d37e):_0x3caaa1['writeFile'](_0x3f3bdd,defaultVideoThumb)['then'](()=>{const _0x3508e0=_0x4931d8;_0x3e18d9[_0x3508e0(0x168)](_0xadd7b2,_0x3f3bdd);})[_0x4931d8(0x167)](_0x35d37e);})[_0xf87e10(0x190)]({'timestamps':[0x0],'filename':_0x5963bf,'folder':_0x278f79,'size':_0x661aec['ZMQTD'](_0x52e3cf['width'],'x')+_0x52e3cf[_0xf87e10(0x1a7)]})['on'](_0xf87e10(0x198),()=>{const _0x434e79=_0xf87e10;_0x375b62[_0x434e79(0x17e)](_0xadd7b2,_0x3f3bdd);});}),_0x4880e2=new Map(),_0x178ef0=await _0x59615e,_0x69d9b7=(await _0x3caaa1[_0x359ff7(0x15c)](_0x178ef0))['size'];_0x4880e2['set'](0x0,_0x178ef0);const _0x2ef2c4=await calculateFileMD5(_0x178ef0),_0x57c922={'elementType':ElementType[_0x359ff7(0x18f)],'elementId':'','videoElement':{'fileName':_0x661aec[_0x359ff7(0x1a3)](_0x23f9bf,_0xd72bdd),'filePath':_0x2d4858,'videoMd5':_0x15ab14,'thumbMd5':_0x2ef2c4,'fileTime':_0x52e3cf[_0x359ff7(0x196)],'thumbPath':_0x4880e2,'thumbSize':_0x69d9b7,'thumbWidth':_0x52e3cf[_0x359ff7(0x189)],'thumbHeight':_0x52e3cf[_0x359ff7(0x1a7)],'fileSize':''+_0x15f4bd}};return _0x57c922;}static async[_0xb7bc5(0x177)](_0x116933){const _0x463e95=_0xb7bc5,_0xb9b052={'TPDAf':_0x463e95(0x195),'zHNlJ':function(_0x36d245,_0x52bbd1){return _0x36d245===_0x52bbd1;},'FIDAj':_0x463e95(0x1a1)},{converted:_0x326583,path:_0x375af6,duration:_0x2cfaa0}=await encodeSilk(_0x116933);if(!_0x375af6)throw _0xb9b052[_0x463e95(0x1a5)];const {md5:_0x22567a,fileName:_0x78a3dd,path:_0x1514bc,fileSize:_0x36d364}=await NTQQFileApi['uploadFile'](_0x375af6,ElementType[_0x463e95(0x199)]);if(_0xb9b052['zHNlJ'](_0x36d364,0x0))throw _0xb9b052[_0x463e95(0x16d)];return _0x326583&&_0x3caaa1[_0x463e95(0x188)](_0x375af6)['then'](),{'elementType':ElementType[_0x463e95(0x199)],'elementId':'','pttElement':{'fileName':_0x78a3dd,'filePath':_0x1514bc,'md5HexStr':_0x22567a,'fileSize':_0x36d364,'duration':_0x2cfaa0||0x1,'formatType':0x1,'voiceType':0x1,'voiceChangeType':0x0,'canConvert2Text':!![],'waveAmplitudes':[0x0,0x12,0x9,0x17,0x10,0x11,0x10,0xf,0x2c,0x11,0x18,0x14,0xe,0xf,0x11],'fileSubId':'','playState':0x1,'autoConvertText':0x0}};}static[_0xb7bc5(0x1a9)](_0x5a2e6f){const _0x5e1562=_0xb7bc5,_0x138782={'AqcZF':function(_0x12165d,_0x390994){return _0x12165d(_0x390994);}},_0x10c0ab=_0x326594['sysface'],_0x541bb4=_0x326594['emoji'],_0x5899c0=_0x10c0ab[_0x5e1562(0x173)](_0x1a72fd=>_0x1a72fd[_0x5e1562(0x181)]===_0x5a2e6f[_0x5e1562(0x1a4)]());_0x5a2e6f=_0x138782[_0x5e1562(0x170)](parseInt,_0x5a2e6f['toString']());let _0x36200d=0x1;return _0x5a2e6f>=0xde&&(_0x36200d=0x2),_0x5899c0[_0x5e1562(0x18a)]&&(_0x36200d=0x3),{'elementType':ElementType[_0x5e1562(0x16e)],'elementId':'','faceElement':{'faceIndex':_0x5a2e6f,'faceType':_0x36200d,'faceText':_0x5899c0['QDes'],'stickerId':_0x5899c0[_0x5e1562(0x16f)],'stickerType':_0x5899c0[_0x5e1562(0x18a)],'packId':_0x5899c0[_0x5e1562(0x160)],'sourceType':0x1}};}static[_0xb7bc5(0x19f)](_0x29daf0,_0x235f7a,_0x280f88,_0x5e87b3){const _0x3e5168=_0xb7bc5,_0x1b39a7={'NqfTm':_0x3e5168(0x15d)};return{'elementType':ElementType['MFACE'],'marketFaceElement':{'emojiPackageId':_0x29daf0,'emojiId':_0x235f7a,'key':_0x280f88,'faceName':_0x5e87b3||mFaceCache[_0x3e5168(0x15f)](_0x235f7a)||_0x1b39a7[_0x3e5168(0x17d)]}};}static[_0xb7bc5(0x18e)](_0x2fc800){const _0x497770=_0xb7bc5,_0x300c5c={'VFhVb':'[骰子]'};return{'elementType':ElementType[_0x497770(0x16e)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x497770(0x18e)],'faceType':FaceType[_0x497770(0x18e)],'faceText':_0x300c5c['VFhVb'],'packId':'1','stickerId':'33','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0xb7bc5(0x18b)](_0x7c2149){const _0x50caac=_0xb7bc5;return{'elementType':ElementType[_0x50caac(0x16e)],'elementId':'','faceElement':{'faceIndex':FaceIndex[_0x50caac(0x165)],'faceText':_0x50caac(0x1ad),'faceType':0x3,'packId':'1','stickerId':'34','sourceType':0x1,'stickerType':0x2,'surpriseId':''}};}static[_0xb7bc5(0x1a6)](_0x36e277){const _0x31efbc=_0xb7bc5;return typeof _0x36e277!==_0x31efbc(0x15b)&&(_0x36e277=JSON['stringify'](_0x36e277)),{'elementType':ElementType['ARK'],'elementId':'','arkElement':{'bytesData':_0x36e277,'linkInfo':null,'subElementType':null}};}static[_0xb7bc5(0x19e)](_0x2650b9){const _0x556fc1=_0xb7bc5;return{'elementType':ElementType[_0x556fc1(0x169)],'elementId':'','markdownElement':{'content':_0x2650b9}};}static async[_0xb7bc5(0x1a0)](){const _0x313d15=_0xb7bc5,_0x43a7f5={'rwKLo':function(_0x10fad2,_0x4b1552){return _0x10fad2(_0x4b1552);},'nBFcI':_0x313d15(0x174),'Ashby':_0x313d15(0x19a),'eMlTa':'https://www.bilibili.com/','yIxva':_0x313d15(0x1ac)};let _0x297632=await _0x43a7f5['rwKLo'](SignMiniApp,{'prompt':_0x43a7f5['nBFcI'],'title':_0x43a7f5[_0x313d15(0x17b)],'preview':_0x43a7f5[_0x313d15(0x16b)],'jumpUrl':_0x43a7f5['eMlTa'],'tag':_0x43a7f5[_0x313d15(0x17b)],'tagIcon':_0x43a7f5['yIxva'],'source':_0x43a7f5[_0x313d15(0x17b)],'sourcelogo':_0x43a7f5['yIxva']});return{'elementType':ElementType[_0x313d15(0x166)],'elementId':'','arkElement':{'bytesData':_0x297632,'linkInfo':null,'subElementType':null}};}}