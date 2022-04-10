package com.pt.javaphone.services;

import java.util.List;
import com.pt.javaphone.models.Device;

import com.pt.javaphone.repositories.DeviceRepository;

import org.springframework.stereotype.Service;

@Service
public class DeviceService 
{
    private final DeviceRepository deviceRepo;

    public DeviceService(DeviceRepository deviceRepo)
	{
		this.deviceRepo = deviceRepo;
	}

    public List<Device> allDevices(){
        return deviceRepo.findAll();
    }

    public Device createDevice(Device device)
	{
		return deviceRepo.save(device);
	}

    public Device oneDevice(Long id)
	{
		return deviceRepo.findById(id).orElse(null);
	}
}
