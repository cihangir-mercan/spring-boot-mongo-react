package com.cihangirmercan.springbootmongoreact;

import org.bson.types.ObjectId;

public class Todo {

	private ObjectId id;
	private String hexId;
	private String description;
	private String endDate;
	private String isCompleted;

	public Todo() {
		super();
	}

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getIsCompleted() {
		return isCompleted;
	}

	public void setIsCompleted(String isCompleted) {
		this.isCompleted = isCompleted;
	}

	public String getHexId() {
		return hexId;
	}

	public void setHexId(String hexId) {
		this.hexId = hexId;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", hexId=" + hexId + ", description=" + description + ", endDate=" + endDate
				+ ", isCompleted=" + isCompleted + "]";
	}
}