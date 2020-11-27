<%@page import="kr.or.ddit.lprod.vo.LprodVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	// controller에서 저장된 결과를 가져온다.
	List<LprodVO> list = (List<LprodVO>)request.getAttribute("listvalue");
%>

[
<%	
	// for(MemberVO vo : list) 5.0이후버전 근데 실행은 밑에 있는 이전버전께 빠르다.
	for(int i = 0; i<list.size(); i++) {
		
		LprodVO vo =  list.get(i);
		if(i > 0) out.print(",");
%>
		{
			"id" : "<%= vo.getLprod_id() %>",
			"gu" : "<%= vo.getLprod_gu() %>",
			"nm" : "<%= vo.getLprod_nm() %>"
		}
<%		
	}
%>
]    