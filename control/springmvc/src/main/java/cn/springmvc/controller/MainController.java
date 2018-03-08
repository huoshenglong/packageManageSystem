package cn.springmvc.controller;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.springmvc.service.UserService;

@Controller
@RequestMapping("/")
public class MainController {

	HttpServletRequest request = null;
	Date date = new Date();
	@Autowired
	public UserService uss;
	@RequestMapping("index")
	public String index() {
		System.out.println(date.getTime() + "访问主页");
		return "index";
	}

	@RequestMapping("login")
	public String login(HttpServletRequest request) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		System.out.println(username+"*********"+password);
		boolean result=uss.loginByName(username, password);
		if (result) {
			return "success";
		}else{
			request.setAttribute("message","用户名密码错误");
			return "faile";
		}	 
	}

}
