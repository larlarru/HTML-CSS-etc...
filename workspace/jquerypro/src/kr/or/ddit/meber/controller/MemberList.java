package kr.or.ddit.meber.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.member.vo.MemberVO;
import kr.or.ddit.service.IMemberService;
import kr.or.ddit.service.MemberServiceImpl;

/**
 * Servlet implementation class MemberList
 */
@WebServlet("/List.do") //ajax에서 이걸로 호출한다. 클래스명이 아니라
public class MemberList extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberList() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, 
						HttpServletResponse response) 
						throws ServletException, IOException {
		
		// 0. 클라이언트 요청(전송)시 전송되는 데이터를 받는다.
		
		// 1. service 객체 얻어오기
		IMemberService service = MemberServiceImpl.getService();
		
		// 2. service 메소드 호출 - 결과를 받는다.
		List<MemberVO> list = service.getAllMember();
		
		// 3. request객체에 결과를 저장한다. 
		request.setAttribute("listvalue", list);	// ()안에 있는건 이름, value다.
		
		// 4. 결과로 출력하거나 json데이터 생성 - jsp 응답페이지
		// jsp페이지로 forward 시킨다.
		// getRequestDispatcher("")저 가로안에 jsp페이지를 써주면 된다.
		request.getRequestDispatcher("1127/memberList.jsp").forward(request, response);
		
		
		
	}

}


















