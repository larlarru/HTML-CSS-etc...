package kr.or.ddit.member.service;

import java.util.List;

import kr.or.ddit.member.vo.MemberVO;
import kr.or.ddit.member.vo.ZipVO;

public interface IMemberService {
	
	public List<MemberVO> getAllMember();
	
	//아이디 중복검사 
	public String selectById(String id);
		
	//우편번호검색 
	public List<ZipVO> selectByDong(String dong);
	
	// 전송
	public String insertMember(MemberVO vo);
	
}
