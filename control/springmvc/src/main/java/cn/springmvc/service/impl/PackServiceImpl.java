package cn.springmvc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.springmvc.dao.PackDAO;
import cn.springmvc.model.Package;
import cn.springmvc.service.PackService;

@Service("PackService")
public class PackServiceImpl implements PackService{

	@Autowired
	PackDAO pdo;
	@Override
	public boolean addPackInfo(Package pack) {		
		int result=pdo.addPackInfo(pack);
		if (result>0) { 
			return true;
		} else {
			return false;
		}	 
	}
	@Override
	public String queryPackInfo() {
		String result1="";
		String result2="";
		result1=pdo.findWaitPackageConsignee();
		result2=pdo.findWaitPackageDispatch();
		String result=result1+"+"+result2;
		return result; 
	}
	@Override
	public List<Package> selectAllPackInfo() {
		
		return pdo.findAllPackInfo();
	}
	@Override
	public List<Package> selectWaitPackInfo() {
		 
		return pdo.findWaitPack();
	}
	@Override
	public List<Package> selectDispatchPack() {
		 
		return pdo.findDispatchPack();
	}

 

	
}
