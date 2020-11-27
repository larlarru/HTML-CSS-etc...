<%@page import="kr.or.ddit.buyer.vo.BuyerVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	List<BuyerVO> list = (List<BuyerVO>) request.getAttribute("listvalue");
%>

[
<%	
	// for(BuyerVO vo : list) 5.0이후버전 근데 실행은 밑에 있는 이전버전께 빠르다.
	for(int i = 0; i<list.size(); i++) {
		
		BuyerVO vo =  list.get(i);
		if(i > 0) out.print(",");
%>
		{
			"id" : "<%= vo.getBuyer_id() %>",
			"name" : "<%= vo.getBuyer_name() %>"
		}
<%		
	}
%>
]















