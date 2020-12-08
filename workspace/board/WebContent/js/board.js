/**
 * 
 */

currentPage = 1;

var boardUpdateServer = function() { 
	
	$.ajax({
		
		url : '/board/BoardUpdate.do',
		type : 'post',
		data : board,	// seq, writer, subject, content, password, mail
		success : function(res) {
			alert(res.sw);
			
			// 화면 수정
			//$(this).parents('.panel').remove();
			listPageServer(1);
		},
		error : function(xhr) {
			alert("상태 : " + xhr.status);
		},
		dataType : 'json'
	})
	
}

var boardDeleteServer = function(but) {	// but 삭제버튼
	
	$.get(
			'/board/BoardDelete.do',
			{"seq" : vidx},
			function(res) {
				//alert(res.sw);
				
				// 화면에서 지우기
				$(but).parents('.panel').remove();
				
			},
			'json'
		)
}

var boardSaverServer = function() {
	
	$.ajax({
		
		url : '/board/BoardSave.do',
		data : $('#wform').serializeJSON(),
		type : 'post',
		dataType : 'json',
		success : function(res) {
			//alert(res.sw);
			listPageServer(1);
		},
		error : function(xhr) {
			alert("오류 : " + xhr.status);
		}
		
	})
}

var replyDeleteServer = function(but) {	// but : 댓글 삭제 버튼
	/*
	$.getJSON(
			'/board/ReplyDelete.do',
			{"renum" : vidx},
			function(res) {
				
			}
	)
	*/
/*	$.get(
			'/board/ReplyDelete.do',
			{"renum" : vidx},
			function(res) {
				
			},
			'json'
	)
*/	
	$.ajax({
		
		url : '/board/ReplyDelete.do',
		type : 'get',
		data : {"renum" : vidx}, 
		success : function(res) {
			// 성공 - 화면에서 삭제
			//alert(res.sw);
			$(but).parents('.rep').remove();
			
		},
		error : function(xhr) {
			alert("오류 : " + xhr.status);
		},
		dataType : 'json'
		
	})
	
}

var replyModifyServer = function() {
	/*
	$.ajax({
		
		url : '/board/ReplyModify.do',
		type : 'post',
		data : {"renum" : vidx, "cont" : modicont},
		success : function(res) {
			alert(res.sw);
		},
		error : function(xhr) {
			alert("오류 : " + xhr.status);
		},
		dataType : 'json'
		
	})
	*/
	$.post(
			'/board/ReplyModify.do',
			{"renum" : vidx, "cont" : modicont},
			function(res) {
				alert(res.sw);
			},
			'json'
		)
	
}

var replyListServer = function(but) {	// but : 댓글등록버튼, 제목을 클릭 - a 태그
	
	$.ajax({
		
		url : '/board/ReplyList.do',
		type : 'post',
		data : { "bonum" : vidx },
		success : function(res) {
			
			$(but).parents('.panel').find('.pbody').find('.rep').remove();
			
			code="";
			$.each(res, function(i, v) {
				
				
				code += '<div class="panel-body rep">';
				code += '<p class="p1">';
				code += v.name +' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += v.redate +' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '<br><br><span class="cont">' + v.cont +'</span>';
				code += '</p>';
				code += '<p class="p2">';
				code += '<button type="button" idx="'+ v.renum +'" name="r_modify" class="action">댓글수정</button>';
				code += '<button type="button" idx="'+ v.renum +'" name="r_delete" class="action">댓글삭제</button>';
				code += '</p>';
				code += '</div>';
				
			});
			$(but).parents('.panel').find('.pbody').append(code);
			
			
		},
		error : function(xhr) {
			alert("에러 상태 : " + xhr.status)
		},
		dataType : 'json'
	});
	
	
	
}

var replySaveServer = function(but) {

	$.ajax({
		
		url : '/board/ReplySave.do',
		type : 'post',
		data : reply,
		success : function(res) {
			replyListServer(but, vidx);
		},
		error : function(xhr) {
			alert("에러 상태 : " + xhr.status)
		},
		dataType : 'json'
		
	})
	
	
	
}

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
				code += '<a name="list" class="action" idx="'+ v.seq +'" data-toggle="collapse" data-parent="#accordion" href="#collapse'+ v.seq +'">'+ v.title +'</a>';
				code += '</h4>';
				code += '</div>';
				code += '<div id="collapse'+ v.seq +'" class="panel-collapse collapse">';
				code += '<div class="panel-body pbody">';
				code += '<p class="p1">';
				code += '작성자 : <span class="nspan">'+ v.name +'</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '이메일 : <span class="mspan">'+ v.mail +'</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '조회수 : <span class="hspan">'+ v.hit +'</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
				code += '작성날짜 : <span class="wspan">'+ v.wdate +'</span>';
				code += '</p>';

				code += '<p class="p2">';
				code += '<button type="button" idx="'+ v.seq +'" name="modify" class="action">수정</button>';
				code += '<button type="button" idx="'+ v.seq +'" name="delete" class="action">삭제</button>';
				code += '</p>';

				code += '<hr>';
				code += '<p><span class="cspan">';
				code += v.cont;
				code += '</span>	</p>';
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





