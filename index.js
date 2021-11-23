const request = require('request');
const express = require('express');

const app = express();


let yt_data;

const getResponseAPI = (route,v_id,http_ua) => {
	
	//video_id: RdDywL877Kg
	//channel_id: UC87Bv0QGU-T_fzuYujU1sRg
	
	const getURL = (route,r_id) => {
		
const youtube_api = `https:\/\/m.youtube.com/watch?v=${r_id}&pbj=1`;
const youtube_channel_api = `https:\/\/m.youtube.com/channel/${r_id}?pbj=1`;
const youtube_channel_video_api = `https:\/\/m.youtube.com/channel/UCfnWPFW8_71kjlJXbXAVBTA/videos?pbj=1`;

const endpoints = {
	CHANNEL: youtube_channel_api,
	VIDEO: youtube_api
	}
	
	//console.log(endpoints[route]);
	
	return endpoints[route];
	
}	


const g_thumb = 'https:\/\/i.ytimg.com/vi_webp/bj4ul946k2o/hqdefault.webp';


console.log(v_id);

console.log(getURL(route,v_id));


const options = {
	url: getURL(route,v_id),
	headers: {
'User-Agent': http_ua,
'x-youtube-sts': '18932',
'x-spf-referer': 'https:\/\/m.youtube.com/results?sp=mAEA&search_query=nightcore+switching+vocals',
'X-YouTube-Client-Name':	'2',
'X-YouTube-Client-Version': '2.20211102.01.00',
'X-YouTube-Device':	'cbr=Chrome+Mobile+Webview&cbrand=samsung&cbrver=88.0.4324.152&ceng=WebKit&cengver=537.36&cmodel=sm-g530h&cos=Android&cosver=7.1.2&cplatform=MOBILE&cyear=2011',
/* 'X-YouTube-Page-CL	': '407019935', */
'X-YouTube-Page-Label':	'youtube.mobile.web.client_20211102_01_RC00',
'X-YouTube-Utc-Offset':	'-180',
'X-YouTube-Time-Zone':	'America/Recife',
'X-YouTube-Ad-Signals':	'dt=1635937360976&flash=0&frm&u_tz=-180&u_his=4&u_h=712&u_w=400&u_ah=712&u_aw=400&u_cd=24&bc=31&bih=616&biw=400&brdim=0%2C0%2C0%2C0%2C400%2C0%2C400%2C615%2C400%2C615&vis=1&wgl=true&ca_type=image&bid=ANyPxKqnf2Uf2EcA-vyGq_eYuFfJZt3IBX6HmIXaM2giMnQMv8epu7N7-am0I82xaW-VMiAxWlqmSgvNNKT6G62NLnQvhpXkxQ',
		}
	}
	
	request.get(options,(err,req,res) => {
		yt_data = res
	if (req.statusCode === 200 || req.statusCode === 400) {
		
console.log(req.request.req._headers);
//console.log(res);

//yt_data = res

	}
		});

}


app.get('/youtube/video',(req,res) => {
	const {videoId} = req.query;
	const browser_user_agent = req.headers['user-agent'];
		
		//console.log(videoId);
		
		console.log(browser_user_agent);
		
		getResponseAPI('VIDEO',videoId,browser_user_agent);
	
	//res.end(yt_data);
	
	 setTimeout(() => {
		res.end(yt_data);
		},3000); 
	
	});
	
	app.get('/youtube/channel',(req,res) => {
		const {channelId} = req.query;
		const browser_user_agent = req.headers['user-agent'];
		
		console.log(browser_user_agent);
		
		//res.end('YouTube API - Auth Bypass');
		
			getResponseAPI('CHANNEL',channelId,browser_user_agent);
	
	//res.end(yt_data);
	
	 setTimeout(() => {
		res.end(yt_data);
		},3000); 
		
		});

	app.get('/youtube/channel/:channelIdX',(req,res) => {
		const {chanellIdX} = req.params
		const {channelId} = req.query;
		const browser_user_agent = req.headers['user-agent'];
		
		console.log(browser_user_agent);
		console.log(channelIdX);
		
		//res.end('YouTube API - Auth Bypass');
		
			getResponseAPI('CHANNEL',channelId,browser_user_agent);
	
	//res.end(yt_data);
	
	 setTimeout(() => {
		res.end(yt_data);
		},3000); 
		
		});
		
app.listen(3333);
