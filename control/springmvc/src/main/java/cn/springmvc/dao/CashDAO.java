package cn.springmvc.dao;

import org.apache.ibatis.annotations.Param;

public interface CashDAO {

	/*
	 * 查询汇率
	 * */
	public double findCashRate(@Param("startcash")String startcash,@Param("endcash")String endcash);
}
