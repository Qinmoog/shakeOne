$(function() {
		
    var snowflakeURl = [
		'img/leaf.png'
    ]  //js设置数组存储6张花瓣的图片
		    
    var snowWidth = [9,11,16];
　　
    var container = $("#snowflake");
       	visualWidth = container.width();
       	visualHeight = container.height();
　　//获取content的宽高
		
		　　
	function snowflake() {
        // 雪花容器
        var $flakeContainer = $('#snowflake');
		　　　　　　
        // 随机六张图
        function getImagesName() {
            return snowflakeURl[[Math.floor(Math.random() * 6)]];
        }
        function getImgWidth(){
        	return snowWidth[[Math.floor(Math.random() * 4)]];
        }
		// 创建一个雪花元素
        function createSnowBox() {
            var url = getImagesName(),
            	size = getImgWidth();
            return $('<div class="snowbox" />').css({
                'width': size,
                'height': size,
                'position': 'absolute',
                'backgroundSize': 'cover',
                'zIndex': 100000,
                'top': '-41px',
//              'backgroundImage': 'url(' + url + ')'
				'backgroundImage': 'url(img/leaf.png)'
            }).addClass('snowRoll');
        }
        
        // 开始飘花
        setInterval(function() {
            // 运动的轨迹
            var startPositionLeft = Math.random() * visualWidth - 100,
                startOpacity    = 1,
                endPositionTop  = visualHeight - 40,
                endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
                duration        = visualHeight * 10 + Math.random() * 5000;
		
            // 随机透明度，不小于0.5
            var randomStart = Math.random();
            randomStart = randomStart < 0.5 ? startOpacity : randomStart;
		
            // 创建一个雪花
            var $flake = createSnowBox();
		
            // 设计起点位置
            $flake.css({
                left: startPositionLeft,
                opacity : randomStart
            });
		
            // 加入到容器
            $flakeContainer.append($flake);

            // 开始执行动画
            $flake.transition({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.7
            }, duration, 'ease-out', function() {
                $(this).remove() //结束后删除
            });
		            
        }, 200);
    }
		
		   　　
    snowflake();
　　//执行函数

})