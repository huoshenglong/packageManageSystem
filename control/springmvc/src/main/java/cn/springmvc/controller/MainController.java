package cn.springmvc.controller;

import javax.servlet.http.HttpServletRequest;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
 
import cn.springmvc.service.CashService;
import cn.springmvc.service.CityService;
import cn.springmvc.service.SendEmail;
import cn.springmvc.service.UserService;

@Controller
@RequestMapping("/")
public class MainController { 
	SendEmail sendEmail=new SendEmail();
	@Autowired
	public UserService uss;
	
	@Autowired
	public CashService css;
	
	@Autowired
	public CityService city;
 
	@RequestMapping("login")
	@ResponseBody//将success转换成json传到前台
	public String login(HttpServletRequest request) {
	
		String username = request.getParameter("username");
		String password = request.getParameter("password");
//		System.out.println(username+"*********"+password);
		boolean result=uss.loginByName(username, password);
		if (result) {
			System.out.println("login success");
			return "success";
		}else{
			System.out.println("login faile");
			return "faile";
		}	 
	}
 
}
