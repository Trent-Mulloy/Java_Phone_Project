package com.pt.javaphone.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Device{
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	@NotNull
    @Size(min = 5, max = 200)
    private String deviceName;
	@NotNull
    @Size(min = 5, max = 800)
    private String deviceDetails;
	@NotNull
    @Min((long) 5.00)
	@Max((long) 2000.00)
    private Double devicePrice;
    @NotNull
    private String imgLink;

    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;

    public Device(){}

    public Device(String deviceName, String deviceDetails, Double devicePrice, String imgLink) {
        this.deviceName = deviceName;
        this.deviceDetails = deviceDetails;
        this.devicePrice = devicePrice;
        this.imgLink = imgLink;
    }

    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
    

    /**
     * @return Long return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return String return the deviceName
     */
    public String getDeviceName() {
        return deviceName;
    }

    /**
     * @param deviceName the deviceName to set
     */
    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }

    /**
     * @return String return the deviceDetails
     */
    public String getDeviceDetails() {
        return deviceDetails;
    }

    /**
     * @param deviceDetails the deviceDetails to set
     */
    public void setDeviceDetails(String deviceDetails) {
        this.deviceDetails = deviceDetails;
    }

    /**
     * @return Double return the devicePrice
     */
    public Double getDevicePrice() {
        return devicePrice;
    }

    /**
     * @param devicePrice the devicePrice to set
     */
    public void setDevicePrice(Double devicePrice) {
        this.devicePrice = devicePrice;
    }

    /**
     * @return String return the imgLink
     */
    public String getImgLink() {
        return imgLink;
    }

    /**
     * @param imgLink the imgLink to set
     */
    public void setImgLink(String imgLink) {
        this.imgLink = imgLink;
    }

    /**
     * @return Date return the createdAt
     */
    public Date getCreatedAt() {
        return createdAt;
    }

    /**
     * @param createdAt the createdAt to set
     */
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    /**
     * @return Date return the updatedAt
     */
    public Date getUpdatedAt() {
        return updatedAt;
    }

    /**
     * @param updatedAt the updatedAt to set
     */
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

}
