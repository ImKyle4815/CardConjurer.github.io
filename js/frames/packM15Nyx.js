//Create objects for common properties across available frames
var masks = [{src:'/img/frames/m15/regular/m15MaskPinline.png', name:'Pinline'}, {src:'/img/frames/m15/regular/m15MaskTitle.png', name:'Title'}, {src:'/img/frames/m15/regular/m15MaskType.png', name:'Type'}, {src:'/img/frames/m15/regular/m15MaskRules.png', name:'Rules'}, {src:'/img/frames/m15/regular/m15MaskFrame.png', name:'Frame'}, {src:'/img/frames/m15/regular/m15MaskBorder.png', name:'Border'}];
//defines available frames
availableFrames = [
	{name:'White Frame', src:'/img/frames/m15/nyx/m15FrameWNyx.png', masks:masks},
	{name:'Blue Frame', src:'/img/frames/m15/nyx/m15FrameUNyx.png', masks:masks},
	{name:'Black Frame', src:'/img/frames/m15/nyx/m15FrameBNyx.png', masks:masks},
	{name:'Red Frame', src:'/img/frames/m15/nyx/m15FrameRNyx.png', masks:masks},
	{name:'Green Frame', src:'/img/frames/m15/nyx/m15FrameGNyx.png', masks:masks},
	{name:'Multicolored Frame', src:'/img/frames/m15/nyx/m15FrameMNyx.png', masks:masks},
	{name:'Artifact Frame', src:'/img/frames/m15/nyx/m15FrameANyx.png', masks:masks}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = true;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = null;
//loads available frames
loadFramePack();