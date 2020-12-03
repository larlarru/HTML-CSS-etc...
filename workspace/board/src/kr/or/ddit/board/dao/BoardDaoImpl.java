package kr.or.ddit.board.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.ibatis.sqlmap.client.SqlMapClient;

import kr.or.ddit.board.vo.BoardVO;
import kr.or.ddit.board.vo.ReplyVO;
import kr.or.ddit.ibatis.config.SqlMapClientFactory;

/*
 * SqlMapClient객체 얻어오기
 * 자신의 객체를 생성해서 리턴하기
 */

public class BoardDaoImpl implements IBoardDao{
	
	private SqlMapClient client;
	
	private static IBoardDao dao;
	
	private BoardDaoImpl() {
		
		client = SqlMapClientFactory.getSqlMapClient();
	}
	
	public static IBoardDao getDao() {
		
		if(dao==null) dao = new BoardDaoImpl();
		return dao;
	}
	
	
	
	

	@Override
	public List<BoardVO> listAll() throws SQLException {
		
		return  client.queryForList("board.listAll");
	}

	@Override
	public List<BoardVO> listPage(Map<String, Object> map) throws SQLException {
		
		return client.queryForList("board.listPage", map);
	}

	@Override
	public int getTotalCount() throws SQLException {
		return (Integer) client.queryForObject("board.getTotalCount");
	}

	@Override
	public int insertReply(ReplyVO vo) throws SQLException {
		
		return client.q
	}
	
	

}
