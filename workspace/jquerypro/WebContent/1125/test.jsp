<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

	
	<%
		
		// 클라이언트 쪽에서 요청(전송)시 데이터를 받아서 처리(crud)한다.
		String userName = request.getParameter("name"); 
		String userId = request.getParameter("id"); 
		String userTel = request.getParameter("tel"); 
		
		// 처리결과를 이용해서 응답데이터를 생성한다.
		
		// 응답데이터의 형식은 json이다.
	
	
	%>
	
	{ 
		"name" : "<%= userName %>",
		"id" : "<%= userId %>",
		"tel" : "<%= userTel %>" 
	 }