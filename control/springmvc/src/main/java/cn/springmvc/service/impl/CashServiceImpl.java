package cn.springmvc.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.springmvc.dao.CashDAO;
import cn.springmvc.service.CashService;

@Service("CashService")
public class CashServiceImpl implements CashService{

	@Autowired
	private CashDAO cdo;
	@Override
	public double selectRate(String start, String endcash) {
		// TODO Auto-generated method stub
		return cdo.findCashRate(start, endcash);
		 
	}

}
