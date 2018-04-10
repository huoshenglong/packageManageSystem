package cn.springmvc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.springmvc.dao.PointDAO;
import cn.springmvc.model.Point;
import cn.springmvc.service.PointService;

@Service("PointService")
public class PointServiceImpl implements PointService {

	@Autowired
	private PointDAO pdo;
	
	@Override
	public List<Point> selectPoint() {		 
		return pdo.findAllPoint();
	}

}
