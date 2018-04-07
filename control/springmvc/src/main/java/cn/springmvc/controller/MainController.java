package cn.springmvc.controller;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.springmvc.service.PackService;
import cn.springmvc.service.SendEmail;
import cn.springmvc.service.UserService;
import cn.springmvc.model.Package;

@Controller
@RequestMapping("/")
public class MainController { 
	SendEmail sendEmail=new SendEmail();
	@Autowired
	public UserService uss;
	
	@Autowired
	public PackService pss;
 
	@RequestMapping("login")
	@ResponseBody
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
	
	
	@RequestMapping("packState")
	@ResponseBody
	public String queryPackState(){
		String result="";
		result=pss.queryPackInfo();	
		if (result!="") {
			return result;
		}
		return "nowait";
	}
	
	@RequestMapping("queryAllInfo")
	@ResponseBody
	public Map<String, Object> queryAllPackageInfo(){
		List<Package> list =new ArrayList<Package>();
		list= pss.selectAllPackInfo();
		Map<String, Object> map=new HashMap<String, Object>();		
		int size=list.size();	 
		map.put("data", list);
		map.put("msg", "");
		map.put("count", size);
		map.put("code", "0");
		return map;
	}
	
	@RequestMapping("queryWaitInfo")
	@ResponseBody
	public Map<String, Object> queryWaitPackageInfo(){
		List<Package> list =new ArrayList<Package>();
		list= pss.selectAllPackInfo();
		Map<String, Object> map=new HashMap<String, Object>();		
		int size=list.size();	 
		map.put("data", list);
		map.put("msg", "");
		map.put("count", size);
		map.put("code", "0");
		return map;
	}
	
	@RequestMapping("queryDispatchInfo")
	@ResponseBody
	public Map<String, Object> queryDispatchPackageInfo(){
		List<Package> list =new ArrayList<Package>();
		list= pss.selectAllPackInfo();
		Map<String, Object> map=new HashMap<String, Object>();		
		int size=list.size();	 
		map.put("data", list);
		map.put("msg", "");
		map.put("count", size);
		map.put("code", "0");
		return map;
	}
	
	
 
}
