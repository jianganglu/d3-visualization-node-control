(function () {
	var d = document,
	w = window,
	p = parseInt,
	dd = d.documentElement,
	db = d.body,
	dc = d.compatMode == 'CSS1Compat',
	dx = dc ? dd: db,
	ec = encodeURIComponent;
	
	
	w.CONTROL = {
		username:null,
		userid:null,
		socket:null,
		genUid:function(){
			return new Date().getTime()+""+Math.floor(Math.random()*899+100);
		},
		//第一个界面用户提交用户名
		usernameSubmit:function(){
			this.init('Jiangang Lu');
			return false;
		},
		init:function(username){
			/*
			客户端根据时间和随机数生成uid,这样使得聊天室用户名称可以重复。
			实际项目中，如果是需要用户登录，那么直接采用用户的uid来做标识就可以
			*/
			this.userid = this.genUid();
			this.username = username;
			
			//连接websocket后端服务器
			this.socket = io.connect('ws://172.16.17.37:3000');
			
			//告诉服务器端有用户登录
			this.socket.emit('login', {userid:this.userid, username:this.username});
			
			//监听消息发送
			this.socket.on('message', function(obj){

				console.log('obj', obj);
				db.style.backgroundColor = 'red';

			});

		}
	};

	CONTROL.usernameSubmit();
})();