package com.pt.javaphone.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.pt.javaphone.models.Plan;

public interface PlanRepository extends CrudRepository<Plan, Long> {
	
	List<Plan> findAll();
}
