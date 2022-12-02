package com.example.demo.model;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.BoardVo;

@Repository
@Mapper
public interface BoardDao {
	public List<BoardVo> listBbs();
	public void insertBbs(BoardVo boardvo);
}