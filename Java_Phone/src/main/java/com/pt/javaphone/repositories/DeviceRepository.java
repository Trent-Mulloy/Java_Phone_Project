package com.pt.javaphone.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.pt.javaphone.models.Device;

public interface DeviceRepository extends CrudRepository<Device, Long> {
    List<Device> findAll();
}
