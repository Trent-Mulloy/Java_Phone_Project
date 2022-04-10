package com.pt.javaphone.controllers;

import java.util.List;

import com.pt.javaphone.services.DeviceService;
import com.pt.javaphone.models.Device;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeviceController {
    
    private final DeviceService deviceServ;
	
	public DeviceController(DeviceService deviceServ) {
		this.deviceServ = deviceServ;
	}

    @RequestMapping("/api/allDevices")
	public List<Device> index() {
		return deviceServ.allDevices();
	}

    @PostMapping("/api/new/device")
	public Device create(
			@RequestParam(value="deviceName") String deviceName,
			@RequestParam(value="deviceDetails") String deviceDetails,
			@RequestParam(value="devicePrice") Double devicePrice,
            @RequestParam(value="imgLink") String imgLink
	) {
		Device device = new Device(deviceName, deviceDetails, devicePrice, imgLink);
		return deviceServ.createDevice(device);
	}

    @RequestMapping("/api/oneDevice/{id}")
	public Device oneDevice(@PathVariable("id") Long id){
		Device device = this.deviceServ.oneDevice(id);
		return device;
	}
}
