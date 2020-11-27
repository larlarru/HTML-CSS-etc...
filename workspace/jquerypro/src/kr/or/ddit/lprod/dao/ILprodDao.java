package kr.or.ddit.lprod.dao;

import java.sql.SQLException;
import java.util.List;

import kr.or.ddit.lprod.vo.LprodVO;


public interface ILprodDao {

	// 전체 이름과 id를 가져오기
	public List<LprodVO> getLprod(LprodVO lprodVo) throws SQLException;
	
	public List<LprodVO> getAllLprod() throws SQLException;
	
}
