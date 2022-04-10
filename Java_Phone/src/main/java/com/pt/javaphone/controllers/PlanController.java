package com.pt.javaphone.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pt.javaphone.models.Plan;
import com.pt.javaphone.services.PlanService;

@RestController
public class PlanController {
	
	private final PlanService planServ;
	
	public PlanController(PlanService planServ) {
		this.planServ = planServ;
	}
	
	@RequestMapping("/api/allPlans")
	public List<Plan> index() {
		return planServ.allPlans();
	}
	
	@PostMapping("/api/new/plan")
	public Plan create(
			@RequestParam(value="planName") String planName,
			@RequestParam(value="planDetails") String planDetails,
			@RequestParam(value="planPrice") Double planPrice
	) {
		Plan plan = new Plan(planName, planDetails, planPrice);
		return planServ.createPlan(plan);
	}

	@RequestMapping("/api/onePlan/{id}")
	public Plan onePlan(@PathVariable("id") Long id){
		Plan plan = this.planServ.onePlan(id);
		return plan;
	}

}
