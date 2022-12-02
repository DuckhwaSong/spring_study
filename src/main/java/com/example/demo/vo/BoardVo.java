package com.example.demo.vo;
import lombok.Data;

@Data
//@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class BoardVo {
	private int seq;
	private String content;
	private String reg_date;
}