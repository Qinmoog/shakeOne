var PAGEVUE = new Vue({
	el:'#wrapper',
	data:{
		lightflag:true,   //显示"猜灯谜"
		questionflag:false,   //显示灯谜内容
		curOption:'',   //提交的灯谜内容
		current_index:null,   //选中的问题索引
		resultflag:false,   //显示猜谜结果
		resulttit:'',
		resultmsg:'',
		resultbtn:'',
		decideflag:false,    //决定用户是返回答题页还是去抽奖
		nochance:0,        //默认可以答题
		dramflag:false,    //显示抽奖结果
		dramClass:'',     //抽奖结果显示的对应背景图(通过绑定不同类名显示)
		dramColor:'',     //抽奖结果显示的“确定按钮”背景颜色
		drammsg:'',        //抽奖结果内容
		lightlist:[
			{
				id:0,
				className:'zhong',
				imgurl:'./img/zhong_icon.png'
			},
			{
				id:1,
				className:'qiu1',
				imgurl:'./img/qiu_icon.png'
			},
			{
				id:2,
				className:'qiu2',
				imgurl:'./img/qiu_icon.png'
			},
			{
				id:3,
				className:'da',
				imgurl:'./img/da_icon.png'
			},
			{
				id:4,
				className:'hui',
				imgurl:'./img/hui_icon.png'
			}
		],
		riddlelist:{
			question:'“举头望明月”下一句为？',
			answers:[
				{
					id:0,
					options:'A',
					title:'低头思故乡'
				},
				{
					id:1,
					options:'B',
					title:'床前明月光'
				},
				{
					id:2,
					options:'C',
					title:'锄禾日当午'
				}
			]
		}
	},
	mounted:function(){
		
	},
	methods:{
		showquestion:function(){
			if( this.nochance == 0 ){  //首次答题
				this.nochance = 1;
				this.lightflag = false;
				this.questionflag = true;
			}else{
				alert('本轮答题已参与，稍后继续！');
				return false;
			}
			
		},
		submitfinal:function(){
			let finalOption = 'B';   //假定当前问题答案为B
			if( this.curOption == '' ){
				alert('请选择答案后再提交！');
			}else{
				this.questionflag = false;
				this.resultflag = true;
				if( this.curOption == finalOption ){
					this.decideflag = true;
					this.resulttit = '答对了！';
					this.resultmsg = '恭喜您，可以参与抽奖哦！';
					this.resultbtn ='去抽奖';
				}else{
					this.decideflag = false;
					this.resulttit = '猜错啦！';
					this.resultmsg = '不要气馁，再接再厉！';
					this.resultbtn = '确定';
				}
			}
		},
		changeindex:function(a,i){
			this.current_index = i;  //获取当前索引
			this.curOption = a.options;
		},
		nextopera:function(){
			if( this.decideflag ){  //去抽奖
				this.resultflag = false;
				this.dramflag = true;
				let dramres = true;   //假定用户中奖
				if( dramres ){
					this.drammsg = '哇！手气好棒呀！恭喜您获得现金红包，稍后请留意微信消息通知领取。';
					this.dramColor = '#c23151';
				}else{
					this.drammsg = '很遗憾，离好运气就差一点点，，别气馁，继续加油哦！';
					this.dramColor = '#273a88';
				}
			}else{   //返回灯谜页面
				this.resultflag = false;
				this.lightflag = true;
				this.current_index = null;
				this.curOption = '';
			}
		},
		backhome:function(){
			this.resultflag = false;
			this.lightflag = true;
			this.current_index = null;
			this.curOption = '';
			this.dramflag = false;
		}
	}
})
