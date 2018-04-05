package cn.springmvc.service.impl;

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

 

	
}
