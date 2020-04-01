/********************************
 * 챗봇 UI 스크립트 *
 * 작성자 : 안효주 *
 ********************************/

$(function(){
	cms.init();
	
	$('html').addClass('chatbot');
});

var mobileDomain = 'http://didb-mdb.dbins.net:8920'; //개발기
//var mobileDomain = 'https://tidb-mdb.dbins.co.kr:8923'; //테스트기
var cms = {
	include:function(){
		var $elements = $.find('*[data-cms-include]');
		if($elements.length){
			$('head').append('<link rel="stylesheet" href="'+mobileDomain+'/webponent-press/css/theme/idb_inp.css">');
			$('head').append('<link rel="stylesheet" href="'+mobileDomain+'/webponent-press/press2.0/webponent.press.css">');
			$.each($elements, function(e){
				var $this =  $(this),
					$src = $this.data('cms-include');
				
				$.each($elements, function(){
					var $this =  $(this),
						$src = $this.data('cms-include');
					
					$this.load($src,function(res,sta,xhr){
						if(sta == "success"){
							$this.children().unwrap();
						}else{
							console.error('CMS 경로오류!')
						}
					});
				});
			});
		}
	},
	init:function(){
		cms.include();
	}
}