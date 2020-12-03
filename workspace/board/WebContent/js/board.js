/**
 * 
 */

currentPage = 1;

// 페이지별 리스트 - html에서 listPageServer(1) 호출
// cpage 변수는 페이지번호이고 controller로 전송한다.
var listPageServer = function(cpage) {
	
	$.ajax({
		
		url : '/board/List.do',
		type : 'post',
		data : {"page" : cpage},
		dataType : 'json',
		success : function(res) {
			
			
			code = '<div class="panel-group" id="accordion">';
			$.each(res.datas, function(i, v) {

														
				code += '<div class="panel panel-default">';
				code += '<div class="panel-heading">';
				code += '<h4 class="panel-title">';
				code += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ v.seq +'">'+ v.title +'</a>';
				code += '</h4>';
				code += '</div>';
				code += '<div id="collapse'+ v.seq +'" class="panel-collapse collapse">';
				code += '<div class="panel-body">';
				code += '<p class="p1">';
				code += '작성자 : '+ v.name +' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '이메일 : '+ v.mail +' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '조회수 : '+ v.hit +' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '작성날짜 : '+ v.wdate +'';
				code += '</p>';

				code += '<p class="p2">';
				code += '<button type="button" idx="'+ v.seq +'" name="modify" class="action">수정</button>';
				code += '<button type="button" idx="'+ v.seq +'" name="delete" class="action">삭제</button>';
				code += '</p>';

				code += '<hr>';
				code += '<p>';
				code += v.cont;
				code += '	</p>';
				code += '<p>';
				code += '	<textarea class="area" cols="60"></textarea>';
				code += '	<button type="button" idx="'+ v.seq +'" class="action repb" name="reply">댓글등록</button>';
				code += '	</p>';

				code += '  </div>';
				code += '</div>';
				code += '    </div>';
			})
			
			code += '</div>';
			
			$('.box').html(code);
			
			// pagelist에 append를 이용해서 출력
			// empty안해주면 똑같은 내용이 계속 붙는다.
			$('#pagelist').empty();
			
			// 이전 버튼			
			if(res.sp > 1) {
			
				pager = '<ul class="pager">';
				pager += '<li><a class="prev" a href="#">Previous</a></li>';
				pager += '</ul>';
				$('#pagelist').append(pager);
			}
			
			
			// 페이지번호 출력
			pager = '<ul class="pagination pager">';
			for(i=res.sp; i<=res.ep; i++) {
				
				if(currentPage == i) {
					
					pager += '<li class="active"><a class="paging" href="#">'+ i +'</a></li>';
				} else {
					
					pager += '<li><a class="paging" href="#">'+ i +'</a></li>';
				}
			}
			pager += '</ul>';
			$('#pagelist').append(pager);
			
			// 다음 버튼 출력
			if(res.ep < res.tp) {
				
				pager = '<ul class="pager">';
				pager += '<li><a class="next" a href="#">next</a></li>';
				pager += '</ul>';
				$('#pagelist').append(pager);
			}
			
			
			
		},
		error : function(xhr) {
			
			alert("상태 : " + xhr.status);
		}
		
	})
	
	
	
	
	
	
}

var listAll = function() {
	
	// 게시글 가져오기
	$.ajax({
		
		url : '/board/List.do',
		type : 'get',
		dataType : 'json',
		success : function(res) {
			
			code = '<div class="panel-group" id="accordion">';
			$.each(res, function(i, v) {

														
				code += '<div class="panel panel-default">';
				code += '<div class="panel-heading">';
				code += '<h4 class="panel-title">';
				code += '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+ v.seq +'">'+ v.title +'</a>';
				code += '</h4>';
				code += '</div>';
				code += '<div id="collapse'+ v.seq +'" class="panel-collapse collapse">';
				code += '<div class="panel-body">';
				code += '<p class="p1">';
				code += '작성자 : '+ v.name +' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '이메일 : '+ v.mail +' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '조회수 : '+ v.hit +' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '작성날짜 : '+ v.wdate +'';
				code += '</p>';

				code += '<p class="p2">';
				code += '<button type="button" idx="'+ v.seq +'" name="modify" class="action">수정</button>';
				code += '<button type="button" idx="'+ v.seq +'" name="delete" class="action">삭제</button>';
				code += '</p>';

				code += '<hr>';
				code += '<p>';
				code += v.cont;
				code += '	</p>';
				code += '<p>';
				code += '	<textarea class="area" cols="60"></textarea>';
				code += '	<button type="button" idx="'+ v.seq +'" class="action repb" name="reply">댓글등록</button>';
				code += '	</p>';

				code += '  </div>';
				code += '</div>';
				code += '    </div>';
			})
			
			code += '</div>';
			
			$('.box').html(code);
			
		},
		error : function(xhr) {
			
			alert("상태 : " + xhr.stauts)
		}
		
	})
	
}




