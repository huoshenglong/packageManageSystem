package cn.springmvc.controller;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.springmvc.service.PackService;
import cn.springmvc.service.SendEmail;
import cn.springmvc.model.Package;

@Controller
@RequestMapping("/")
public class MainController { 
	SendEmail sendEmail=new SendEmail();
	Package pack=new Package();
	
	@Autowired
	public PackService pss;
	
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
	
	@RequestMapping("addpack") 
	@ResponseBody
	public String addPackInfo(HttpServletRequest request){
		String sender_name = request.getParameter("sender_name");//发件人姓名
		String sender_phone = request.getParameter("sender_phone");	//发件人电话
		String sendaddress = request.getParameter("sendaddress");//发件地址
		String receive_name = request.getParameter("receive_name");//收件人姓名
		String receive_phone = request.getParameter("receive_phone");//收件人电话
		String things_weight = request.getParameter("things_weight");//物品重量
		String receiveaddress = request.getParameter("receiveaddress"); //收件地址
		String thingsType = request.getParameter("things");//物品类型
		String describe = request.getParameter("describe");//备注
		Date now = new Date(); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");//可以方便地修改日期格式
		String nowtime = dateFormat.format( now ); //这里将当前的系统时间一同保存，作为寄件时间
		Random  d = new Random();
		String packnumber = "";
		for(int i=0;i<15;i++){//随机生成一个15位的单号
			int num = d.nextInt(10);
			packnumber += num+"";
		}
	    pack.setDescribe(describe);
	    pack.setNowtime(nowtime);
	    pack.setRaddress(receiveaddress);
	    pack.setRname(receive_name);
	    pack.setRphone(receive_phone);
	    pack.setSaddress(sendaddress);	   
	    pack.setSname(sender_name);
	    pack.setSphone(sender_phone);
	    pack.setThingsType(thingsType);
	    pack.setWeight(things_weight);
	    pack.setPacknumber(packnumber);
	    boolean result=pss.addPackInfo(pack);
	    if (result) { 
	    	return packnumber;
		} else {
			return "faile";
		}
	     
	}
	
	
	@RequestMapping("queryAllInfo")
	@ResponseBody
	public Map<String, Object> queryAllPackageInfo(HttpServletRequest request){
		int page=Integer.parseInt(request.getParameter("page"));
		int limit=Integer.parseInt(request.getParameter("limit"));
		int start=(page-1)*limit;
		int end=page*limit;	
		int count=pss.queryPackCount();//将快递的数据总量查询
		System.out.println(page+"**++**"+limit);
		List<Package> list =new ArrayList<Package>();
		list= pss.selectAllPackInfo(start,end);
		Map<String, Object> map=new HashMap<String, Object>();		 
		map.put("data", list);
		map.put("msg", "");
		map.put("count", count);
		map.put("code", "0");
		return map;
	}
	
	@RequestMapping("phoneOrNumber")
	@ResponseBody
	public Map<String, Object> queryPackInfoByPhone(HttpServletRequest request){
		String type=request.getParameter("choseType");
		String value=request.getParameter("typeValue");
		System.out.println(type+"**++**"+value);
		List<Package> list =new ArrayList<Package>();
		Map<String, Object> map=new HashMap<String, Object>();
		list=pss.selectPackByPhoneOrNumber(value, type);
		map.put("data", list);
		map.put("msg", "");
		map.put("count", list.size());
		map.put("code", "0");
		return map;
	}
	
	
	@RequestMapping("packstate")
	@ResponseBody
	public Map<String, Object> query(HttpServletRequest request){
		int page=Integer.parseInt(request.getParameter("page"));
		int limit=Integer.parseInt(request.getParameter("limit"));
		String type=request.getParameter("type");
		System.out.println(type);
		int start=(page-1)*limit;
		int end=page*limit;	
		String strs[]=pss.queryPackInfo().split("\\+");	 
		int waitcount=Integer.parseInt(strs[0]);
		int dispatchcount=Integer.parseInt(strs[1]);
		Date now = new Date(); 
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd"); 
		String nowtime = dateFormat.format( now );  
		List<Package> list =new ArrayList<Package>();
		Map<String, Object> map=new HashMap<String, Object>();
		if (type.equals("wait")) {
			list= pss.selectWaitPackInfo(start, end);
			map.put("count", waitcount);
		}
		if (type.equals("dispatch")) {
			list= pss.selectDispatchPack(start, end);
			map.put("count", dispatchcount);
		}				 
		map.put("data", list);
		map.put("msg", "");		
		map.put("code", "0");		
		return map;
	}
	 
	

}
