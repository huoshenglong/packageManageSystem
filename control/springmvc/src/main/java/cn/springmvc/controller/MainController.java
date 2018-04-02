package cn.springmvc.controller;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.springmvc.service.CashService;
import cn.springmvc.service.UserService;

@Controller
@RequestMapping("/")
public class MainController {

	HttpServletRequest request = null;
	Date date = new Date();
	@Autowired
	public UserService uss;
	
	@Autowired
	public CashService css;
	
	@RequestMapping("index")
	public String index() {
		System.out.println(date.getTime() + "访问主页");
		return "index";
	}

	@RequestMapping("login")
	@ResponseBody//将success转换成json传到前台
	public String login(HttpServletRequest request) {
	
		String username = request.getParameter("username");
		String password = request.getParameter("password");
//		System.out.println(username+"*********"+password);
		boolean result=uss.loginByName(username, password);
		if (result) {
			System.out.println("success");
			return "success";
		}else{
			//request.setAttribute("message","用户名密码错误");
			System.out.println("faile");
			return "faile";
		}	 
	}

	@RequestMapping("cash")
	@ResponseBody//将success转换成json传到前台
	public Double cashSelect(HttpServletRequest request){
		String start = request.getParameter("startcash");
		String endcash = request.getParameter("endcash");
		double value=css.selectRate(start, endcash);		 
		return value;
	}
}
