package com.pt.javaphone.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pt.javaphone.models.Plan;
import com.pt.javaphone.repositories.PlanRepository;

@Service
public class PlanService
{
	private final PlanRepository planRepo;

	public PlanService(PlanRepository planRepo)
	{
		this.planRepo = planRepo;
	}
	
	public List<Plan> allPlans()
	{
		return planRepo.findAll();
	}
	
	public Plan createPlan(Plan plan)
	{
		return planRepo.save(plan);
	}

	public Plan onePlan(Long id)
	{
		return planRepo.findById(id).orElse(null);
	}
}
