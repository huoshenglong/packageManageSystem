package cn.springmvc.service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.springmvc.dao.CityDAO;
import cn.springmvc.model.City;
import cn.springmvc.model.Province;
import cn.springmvc.service.CityService;

@Service("CityService")
public class CityServiceImpl implements CityService{
	

	@Autowired
	private CityDAO cdo;
 
	@Override
	public List<Province> queryProvinces() {
		 
			return cdo.findProvince();
		 
	}

	@Override
	public List<City> queryCity(String provinceId) {
		 
		return cdo.findCityByProvinceId(provinceId);
	}

}
