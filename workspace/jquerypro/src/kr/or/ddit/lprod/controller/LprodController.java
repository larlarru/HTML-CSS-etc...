package kr.or.ddit.lprod.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.ddit.lprod.service.ILprodService;
import kr.or.ddit.lprod.service.LprodServiceImpl;
import kr.or.ddit.lprod.vo.LprodVO;

@WebServlet("/lprod.do")
public class LprodController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public LprodController() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		ILprodService service = LprodServiceImpl.getService();
		
		List<LprodVO> list = service.getAllLprod();
		
		request.setAttribute("listvalue", list);
		
		request.getRequestDispatcher("1127/lprodList2.jsp").forward(request, response);
		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		LprodVO vo = new LprodVO();
		
		String lprod_nm = request.getParameter("value1"); 
		String prod_name = request.getParameter("value2");
		
		vo.setLprod_nm(lprod_nm);
		vo.setProd_name(prod_name);
		
		ILprodService service = LprodServiceImpl.getService();
		
		List<LprodVO> list = service.getLprod(vo);
		request.setAttribute("listvalue", list);
		
		request.getRequestDispatcher("1127/lprodList.jsp").forward(request, response);
		
		
		
	}

}
