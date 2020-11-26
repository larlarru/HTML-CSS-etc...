<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	//클라이언트 요청시 전송되는 데이터를 받는다.
	//crud처리 한다.
	//처리 결과를 이용해서 출력 모양을 만든다.
%>

<table border="1">
	<%
		for(int i = 0; i < 5; i++) {
	%>
			<tr><td>이름</td><td>홍길동</td></tr>  
			<tr><td>주소</td><td>대전</td></tr>  
			<tr><td>전화번호</td><td>010-1234-5678</td></tr>  
			<tr><td>이름</td><td>홍길동</td></tr>  
			<tr><td>이름</td><td>홍길동</td></tr>
	<%  
		}
	%>
</table>
