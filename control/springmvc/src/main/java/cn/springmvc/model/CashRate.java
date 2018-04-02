package cn.springmvc.model;

public class CashRate {

	private int id;
	private String start_cash;
	private String end_cash;
	private double cashrate;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStart_cash() {
		return start_cash;
	}
	public void setStart_cash(String start_cash) {
		this.start_cash = start_cash;
	}
	public String getEnd_cash() {
		return end_cash;
	}
	public void setEnd_cash(String end_cash) {
		this.end_cash = end_cash;
	}
	public double getCashrate() {
		return cashrate;
	}
	public void setCashrate(double cashrate) {
		this.cashrate = cashrate;
	}
}
