package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.BoardDao;
import com.example.demo.vo.BoardVo;

@Controller
public class BoardController {

	private Logger logger = LoggerFactory.getLogger(BoardController.class);
	
	@Autowired
	private BoardDao boardDao;
	
	@RequestMapping("/list")
	@ResponseBody
	public Map<String, Object> list() throws Exception{
		return this.list_();
	}
	
	@RequestMapping("/list/*")
	@ResponseBody
	public Map<String, Object> list_() throws Exception{
		
		Map<String, Object> robj = new HashMap<>();
		List<BoardVo> list = boardDao.listBbs();
		robj.put("board_list", list);
		
		return robj;
	}
	
	@RequestMapping(path = "/regist")
	public String regist(HttpServletRequest request, Model model) throws Exception{
		
		return "regist";
	}
	
	@RequestMapping(path = "/insert")
	public String insert(HttpServletRequest request, Model model) throws Exception{
		BoardVo boardvo = new BoardVo();
		String content = request.getParameter("content");
		boardvo.setContent(content);
		boardDao.insertBbs(boardvo);
		
		return "regist";
	}
}